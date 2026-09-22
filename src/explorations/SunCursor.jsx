import React, { useEffect, useRef } from "react";
import { usePortfolioMotion } from "./Motion";

const TAU = Math.PI * 2;
const MAX_MOTES = 64;
const random = (min, max) => min + Math.random() * (max - min);

// Draw once, then reuse these small botanical sprites throughout the trail.
function makeSprite(flower, variant) {
  const sprite = document.createElement("canvas");
  sprite.width = sprite.height = 96;
  const ink = sprite.getContext("2d");
  ink.translate(48, 48);
  if (flower) {
    const colors = ["#e7bb73", "#d99983", "#eee1b3"];
    for (let petal = 0; petal < 6; petal++) {
      ink.save();
      ink.rotate((petal / 6) * TAU);
      const wash = ink.createLinearGradient(0, -34, 0, 0);
      wash.addColorStop(0, colors[variant]);
      wash.addColorStop(1, "#f6e8bc");
      ink.fillStyle = wash;
      ink.beginPath();
      ink.ellipse(0, -18, 11, 19, 0, 0, TAU);
      ink.fill();
      ink.restore();
    }
    ink.fillStyle = "#a9823e";
    ink.beginPath();
    ink.arc(0, 0, 8, 0, TAU);
    ink.fill();
    ink.fillStyle = "#fff0bd";
    for (let dot = 0; dot < 7; dot++) {
      const angle = (dot / 7) * TAU;
      ink.beginPath();
      ink.arc(Math.cos(angle) * 4, Math.sin(angle) * 4, 1.1, 0, TAU);
      ink.fill();
    }
  } else {
    const wash = ink.createLinearGradient(-20, -30, 20, 28);
    wash.addColorStop(0, ["#a6b771", "#8caa80", "#bbba7e"][variant]);
    wash.addColorStop(1, ["#557245", "#47725c", "#788550"][variant]);
    ink.fillStyle = wash;
    ink.beginPath();
    ink.moveTo(0, 34);
    ink.bezierCurveTo(-35, 17, -27, -23, 6, -37);
    ink.bezierCurveTo(31, -16, 32, 18, 0, 34);
    ink.fill();
    ink.strokeStyle = "#e7e9ba";
    ink.lineWidth = 1.3;
    ink.beginPath();
    ink.moveTo(0, 35);
    ink.quadraticCurveTo(-3, 0, 6, -31);
    ink.moveTo(0, 13);
    ink.lineTo(-14, -1);
    ink.moveTo(1, -2);
    ink.lineTo(15, -14);
    ink.stroke();
  }
  return sprite;
}

export default function SunCursor({ surface }) {
  const canvas = useRef(null);
  const { stopped } = usePortfolioMotion();

  useEffect(() => {
    const node = canvas.current;
    const page = surface.current;
    const context = node.getContext("2d");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!context || stopped) return;

    const sprites = [false, true].map((flower) =>
      [0, 1, 2].map((variant) => makeSprite(flower, variant)),
    );
    let motes = [],
      wake = [],
      raf = 0,
      previousTime = 0,
      sequence = 0;
    let width = 0,
      height = 0,
      scroll = window.scrollY,
      emissionDistance = 0;
    let active = false,
      initialized = false,
      interactive = false,
      inRoom = false,
      canScatter = true;
    const target = { x: 0, y: 0 };
    const sun = { x: 0, y: 0 };

    const resize = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      node.width = Math.round(width * ratio);
      node.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      render();
    };

    const scatter = (x, y, dx, dy, burst = false) => {
      const flower = sequence++ % 4 === 2 || burst;
      motes.push({
        x: x + random(-7, 7),
        y: y + scroll + random(-7, 7),
        vx: -dx * 2.5 + random(-14, 14),
        vy: -dy * 1.6 + random(-16, 3),
        angle: random(-Math.PI, Math.PI),
        spin: random(-0.8, 0.8),
        size: flower ? random(20, 28) : random(20, 32),
        life: random(2.1, 3),
        age: 0,
        flower,
        sprite: sprites[flower ? 1 : 0][sequence % 3],
      });
      if (motes.length > MAX_MOTES) motes.shift();
    };

    const render = (time = performance.now()) => {
      const dt = previousTime
        ? Math.min((time - previousTime) / 1000, 0.04)
        : 1 / 60;
      previousTime = time;
      raf = 0;
      const oldX = sun.x,
        oldY = sun.y;
      const follow = 1 - Math.exp(-dt * 17);
      sun.x += (target.x - sun.x) * follow;
      sun.y += (target.y - sun.y) * follow;
      const dx = sun.x - oldX,
        dy = sun.y - oldY;
      const distance = Math.hypot(dx, dy);
      const lag = Math.hypot(target.x - sun.x, target.y - sun.y);

      if (active && distance > 0.5) {
        wake.push({ x: sun.x, y: sun.y + scroll, age: 0 });
        if (wake.length > 28) wake.shift();
        emissionDistance += distance;
        if (canScatter && emissionDistance > 25) {
          scatter(sun.x, sun.y, dx, dy);
          emissionDistance %= 25;
        }
      }

      context.clearRect(0, 0, width, height);
      // A short, fading wash of sunlight connects the blooms to the moving sun.
      wake = wake.filter((point) => (point.age += dt) < 0.38);
      if (wake.length > 1) {
        context.lineCap = "round";
        for (let i = 1; i < wake.length; i++) {
          const point = wake[i],
            before = wake[i - 1];
          context.beginPath();
          context.moveTo(before.x, before.y - scroll);
          context.lineTo(point.x, point.y - scroll);
          context.strokeStyle = `rgba(218,173,77,${(1 - point.age / 0.38) * 0.12})`;
          context.lineWidth = 12 * (1 - point.age / 0.38);
          context.stroke();
        }
      }

      motes = motes.filter((mote) => {
        mote.age += dt;
        if (mote.age > mote.life) return false;
        mote.vx *= Math.exp(-dt * 1.4);
        mote.vy += dt * 12;
        mote.x += (mote.vx + Math.sin(mote.age * 2.2 + mote.angle) * 6) * dt;
        mote.y += mote.vy * dt;
        const bloom = 1 - Math.pow(1 - Math.min(mote.age / 0.4, 1), 3);
        const fade = Math.pow(1 - mote.age / mote.life, 0.7);
        context.save();
        context.translate(mote.x, mote.y - scroll);
        context.rotate(mote.angle + mote.age * mote.spin);
        context.scale(
          bloom * (mote.flower ? 1 : 0.8 + Math.sin(mote.age * 3) * 0.2),
          bloom,
        );
        context.globalAlpha = fade * 0.85;
        context.drawImage(
          mote.sprite,
          -mote.size / 2,
          -mote.size / 2,
          mote.size,
          mote.size,
        );
        context.restore();
        return true;
      });

      if (active) {
        context.save();
        context.translate(sun.x, sun.y);
        const radius = interactive ? 28 : 48;
        const halo = context.createRadialGradient(0, 0, 1, 0, 0, radius);
        halo.addColorStop(0, "rgba(248,216,129,.34)");
        halo.addColorStop(0.35, "rgba(237,193,96,.14)");
        halo.addColorStop(1, "rgba(237,193,96,0)");
        context.fillStyle = halo;
        context.fillRect(-radius, -radius, radius * 2, radius * 2);

        context.rotate(Math.atan2(dy, dx));
        context.scale(
          1 + Math.min(lag / 180, 0.22),
          1 - Math.min(lag / 350, 0.1),
        );
        context.strokeStyle = "rgba(151,112,45,.52)";
        context.lineWidth = 0.8;
        context.beginPath();
        context.arc(0, 0, interactive ? 10 : 13, 0, TAU);
        context.stroke();
        if (!interactive) {
          for (let ray = 0; ray < 8; ray++) {
            const angle = (ray / 8) * TAU;
            context.beginPath();
            context.moveTo(Math.cos(angle) * 17, Math.sin(angle) * 17);
            context.lineTo(Math.cos(angle) * 20, Math.sin(angle) * 20);
            context.stroke();
          }
        }
        const gold = context.createRadialGradient(-2, -2, 0, 0, 0, 7);
        gold.addColorStop(0, "#fff8dc");
        gold.addColorStop(0.5, "#f3cf78");
        gold.addColorStop(1, "#c6943d");
        context.fillStyle = gold;
        context.beginPath();
        context.arc(0, 0, interactive ? 4 : 6, 0, TAU);
        context.fill();
        context.restore();

        // The small point stays exactly under the mouse while the halo catches up.
        context.fillStyle = inRoom ? "#fff0b8" : "#735526";
        context.beginPath();
        context.arc(target.x, target.y, 1.7, 0, TAU);
        context.fill();
      }
      node.dataset.particles = String(motes.length);
      if (motes.length || wake.length || (active && lag > 0.15)) {
        raf = requestAnimationFrame(render);
      } else previousTime = 0;
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };
    const leave = () => {
      active = false;
      initialized = false;
      page.removeAttribute("data-sun-cursor");
      schedule();
    };
    const move = (event) => {
      const element = event.target instanceof Element ? event.target : null;
      const entered = page.closest(".folio-lab")?.dataset.entered === "true";
      if (
        !finePointer.matches ||
        event.pointerType !== "mouse" ||
        !entered ||
        !page.contains(element)
      ) {
        if (active) leave();
        return;
      }
      active = true;
      page.dataset.sunCursor = "active";
      target.x = event.clientX;
      target.y = event.clientY;
      interactive = !!element?.closest("a, button");
      inRoom = !!element?.closest(".botanical-room");
      canScatter =
        !element?.closest(
          "a, h1, h2, h3, p, nav, .garden-bed-caption, .garden-bed-footer, .botanical-footer-bottom",
        ) &&
        (!interactive || !!element?.closest(".garden-planting-area"));
      if (!initialized) {
        sun.x = target.x;
        sun.y = target.y;
        emissionDistance = 0;
        initialized = true;
      }
      schedule();
    };
    const click = (event) => {
      if (
        !active ||
        !canScatter ||
        event.button !== 0 ||
        event.pointerType !== "mouse" ||
        !page.contains(event.target)
      )
        return;
      for (let i = 0; i < 3; i++)
        scatter(
          event.clientX,
          event.clientY,
          random(-4, 4),
          random(-2, 4),
          i === 0,
        );
      schedule();
    };
    const onScroll = () => {
      scroll = window.scrollY;
      wake = [];
      schedule();
    };
    const out = (event) => {
      if (!event.relatedTarget) leave();
    };
    const key = (event) => {
      if (event.key === "Tab" || event.key === "Escape") leave();
    };
    const reset = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      motes = [];
      wake = [];
      active = false;
      initialized = false;
      page.removeAttribute("data-sun-cursor");
      node.dataset.particles = "0";
      context.clearRect(0, 0, width, height);
    };

    resize();
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerout", out);
    window.addEventListener("pointerdown", click, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    window.addEventListener("keydown", key);
    window.addEventListener("blur", leave);
    finePointer.addEventListener("change", reset);
    return () => {
      reset();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerout", out);
      window.removeEventListener("pointerdown", click);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", key);
      window.removeEventListener("blur", leave);
      finePointer.removeEventListener("change", reset);
    };
  }, [surface, stopped]);

  return (
    <canvas ref={canvas} className="botanical-sun-cursor" aria-hidden="true" />
  );
}
