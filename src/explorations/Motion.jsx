import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { RotateCcw, Pause, Play } from "lucide-react";
import { projects } from "./content";
import "./motion.css";

const MotionContext = createContext(null);
export const usePortfolioMotion = () => useContext(MotionContext);

function Overture({ id, finish }) {
  return (
    <div className={`motion-overture overture-${id}`}>
      <div className="overture-art" aria-hidden="true">
        {id === "editorial" && (
          <>
            <div className="overture-panel" />
            <div className="overture-panel" />
            <div className="overture-editorial-type">
              <span>Form.</span>
              <i>Feeling.</i>
              <small>NIHARIKA DALAL — A DESIGN PRACTICE</small>
            </div>
          </>
        )}
        {id === "systems" && (
          <>
            <div className="overture-grid" />
            <div className="overture-system-type">
              <span>From complexity</span>
              <b>to clarity.</b>
              <small>NIHARIKA DALAL / SYSTEMS STUDIO</small>
            </div>
            <div className="overture-scan" />
          </>
        )}
        {id === "playroom" && (
          <>
            {["A little logic.", "A lot of curiosity.", "Let’s play."].map(
              (text, i) => (
                <div className="overture-strip" key={text}>
                  <span>{text}</span>
                  <small>0{i + 1} / NIHARIKA DALAL</small>
                </div>
              ),
            )}
          </>
        )}
        {id === "quiet" && (
          <>
            <div className="overture-quiet-line" />
            <div className="overture-quiet-type">
              <span>A little care.</span>
              <i>A little growth.</i>
            </div>
            <small className="overture-quiet-caption">
              NIHARIKA DALAL / PRODUCT DESIGNER
            </small>
          </>
        )}
        {id === "cinema" && (
          <>
            <div className="overture-shutter" />
            <div className="overture-shutter" />
            <div className="overture-cinema-type">
              <small>A PORTFOLIO BY NIHARIKA DALAL</small>
              <span>Look closer.</span>
              <b>01 / 04</b>
            </div>
          </>
        )}
      </div>
      <button className="overture-skip" onClick={finish}>
        Skip intro ↗
      </button>
    </div>
  );
}

export function MotionFrame({ id, children }) {
  const root = useRef(null);
  const timeline = useRef(null);
  const [cycle, setCycle] = useState(0);
  const [entered, setEntered] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [away, setAway] = useState(document.hidden);
  const stopped = reduced || paused || away;
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(media.matches);
    const visibility = () => setAway(document.hidden);
    media.addEventListener("change", change);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      media.removeEventListener("change", change);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  const finish = () => {
    timeline.current?.progress(1);
    setEntered(true);
  };
  const replay = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setEntered(false);
    setCycle((n) => n + 1);
  };

  useLayoutEffect(() => {
    if (reduced) {
      setEntered(true);
      return;
    }
    setEntered(false);
    const ctx = gsap.context(() => {
      const t = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => setEntered(true),
      });
      timeline.current = t;
      if (id === "editorial") {
        t.from(
          ".overture-editorial-type > span",
          { yPercent: 120, rotation: 6, duration: 0.9 },
          0,
        )
          .from(
            ".overture-editorial-type > i",
            { yPercent: -140, rotation: -8, duration: 1 },
            0.1,
          )
          .from(
            ".overture-editorial-type small",
            { opacity: 0, y: 12, duration: 0.45 },
            0.55,
          )
          .to(
            ".overture-editorial-type",
            { scale: 0.8, opacity: 0, duration: 0.55 },
            1.1,
          )
          .to(
            ".overture-panel",
            { yPercent: -105, stagger: 0.15, duration: 1.1 },
            1.25,
          )
          .from(
            ".ed-hero h1",
            { y: 100, rotation: -3, opacity: 0, duration: 1.15 },
            1.65,
          )
          .from(
            ".ed-hero-bottom > *",
            { y: 35, opacity: 0, stagger: 0.1, duration: 0.65 },
            2,
          );
      } else if (id === "systems") {
        t.from(
          ".overture-grid",
          { scale: 1.8, opacity: 0, rotation: 12, duration: 1.2 },
          0,
        )
          .from(
            ".overture-system-type > *",
            { y: 35, opacity: 0, stagger: 0.15, duration: 0.7 },
            0.15,
          )
          .fromTo(
            ".overture-scan",
            { top: "0%" },
            { top: "100%", duration: 1.3, ease: "power1.inOut" },
            0.2,
          )
          .to(
            ".overture-system-type",
            { opacity: 0, scale: 0.92, duration: 0.4 },
            1.2,
          )
          .to(
            ".motion-overture",
            { clipPath: "inset(0 0 100% 0)", duration: 0.9 },
            1.4,
          )
          .from(
            ".sys-intro > *",
            { y: 45, opacity: 0, stagger: 0.07, duration: 0.8 },
            1.6,
          )
          .from(
            ".iso-layer",
            {
              z: 400,
              opacity: 0,
              stagger: 0.16,
              duration: 1.25,
              ease: "power3.out",
              clearProps: "transform,opacity",
            },
            1.7,
          );
      } else if (id === "playroom") {
        t.from(
          ".overture-strip span",
          {
            xPercent: (i) => (i % 2 ? -100 : 100),
            rotation: 3,
            stagger: 0.14,
            duration: 1.1,
          },
          0,
        )
          .to(
            ".overture-strip",
            {
              xPercent: (i) => (i % 2 ? 110 : -110),
              stagger: 0.11,
              duration: 1.05,
            },
            1.15,
          )
          .from(
            ".play-intro",
            { scale: 0.85, y: 65, opacity: 0, duration: 0.9 },
            1.7,
          )
          .from(
            ".play-piece, .play-sticky, .play-sticker",
            {
              y: 300,
              rotation: 35,
              scale: 0.3,
              opacity: 0,
              stagger: 0.1,
              duration: 1.3,
              ease: "back.out(1.2)",
              clearProps: "transform,opacity",
            },
            1.65,
          );
      } else if (id === "quiet") {
        t.from(
          ".botanical-room-eyebrow, .botanical-room-introduction",
          { opacity: 0, duration: 1.4 },
          0.3,
        );
      } else {
        t.from(
          ".overture-cinema-type span",
          { scale: 1.4, letterSpacing: ".2em", opacity: 0, duration: 1.1 },
          0,
        )
          .from(
            ".overture-cinema-type small, .overture-cinema-type b",
            { opacity: 0, duration: 0.6 },
            0.4,
          )
          .to(
            ".overture-cinema-type",
            { scale: 3, opacity: 0, duration: 0.75 },
            1,
          )
          .to(
            ".overture-shutter",
            { yPercent: (i) => (i === 0 ? -101 : 101), duration: 1.2 },
            1.15,
          )
          .from(
            ".cinema-background",
            { scale: 1.35, duration: 1.8, ease: "power3.out" },
            1.25,
          )
          .from(
            ".cinema-hero-copy > *",
            { y: 60, opacity: 0, stagger: 0.13, duration: 1 },
            1.65,
          );
      }
      if (id !== "quiet") t.set(".motion-overture", { visibility: "hidden" });
    }, root);
    return () => {
      timeline.current = null;
      ctx.revert();
    };
  }, [id, cycle, reduced]);

  useEffect(() => {
    if (paused) {
      timeline.current?.progress(1);
      setEntered(true);
    }
  }, [paused]);

  useEffect(() => {
    if (away) timeline.current?.pause();
    else timeline.current?.resume();
  }, [away]);

  useEffect(() => {
    const node = root.current;
    if (stopped) {
      for (const name of ["--mx", "--my", "--scroll"])
        node.style.setProperty(name, "0");
      return;
    }
    let raf = 0,
      x = 0,
      y = 0,
      tx = 0,
      ty = 0,
      sx = 0,
      sy = 0,
      targetX = 0,
      targetY = 0,
      currentScroll = window.scrollY;
    const tick = () => {
      x += (tx - x) * 0.085;
      y += (ty - y) * 0.085;
      sx += (targetX - sx) * 0.13;
      sy += (targetY - sy) * 0.13;
      currentScroll += (window.scrollY - currentScroll) * 0.1;
      node.style.setProperty("--mx", x.toFixed(4));
      node.style.setProperty("--my", y.toFixed(4));
      node.style.setProperty("--cursor-x", `${sx}px`);
      node.style.setProperty("--cursor-y", `${sy}px`);
      node.style.setProperty(
        "--scroll",
        Math.min(currentScroll / window.innerHeight, 1.5).toFixed(4),
      );
      const line = node.querySelector(".ed-thread-path");
      if (line)
        line.setAttribute(
          "d",
          `M 0 65 C 260 ${65 + y * 70}, ${640 + x * 160} ${65 - y * 100}, 1200 65`,
        );
      const loom = node.querySelector(".design-loom");
      if (loom)
        loom
          .querySelectorAll("[data-loom]")
          .forEach((path) =>
            path.setAttribute(
              "d",
              loomPath(
                Number(path.dataset.loom),
                x,
                y,
                Number(loom.dataset.tension),
              ),
            ),
          );
      if (
        Math.abs(tx - x) + Math.abs(ty - y) > 0.001 ||
        Math.abs(targetX - sx) + Math.abs(targetY - sy) > 0.1 ||
        Math.abs(window.scrollY - currentScroll) > 0.1
      )
        raf = requestAnimationFrame(tick);
      else raf = 0;
    };
    const wake = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const move = (e) => {
      if (e.pointerType === "touch") return;
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
      targetX = e.clientX;
      targetY = e.clientY;
      node.dataset.pointer = "true";
      wake();
    };
    const leave = () => {
      tx = 0;
      ty = 0;
      node.dataset.pointer = "false";
      wake();
    };
    node.addEventListener("pointermove", move);
    node.addEventListener("pointerleave", leave);
    window.addEventListener("scroll", wake, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      node.removeEventListener("pointermove", move);
      node.removeEventListener("pointerleave", leave);
      window.removeEventListener("scroll", wake);
    };
  }, [stopped]);

  useEffect(() => {
    if (stopped) return;
    const targets = root.current.querySelectorAll(
      ".ed-project, .sys-project-browser, .play-project, .cinema-feature, .ed-about, .cinema-statement",
    );
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    targets.forEach((el) => {
      el.classList.add("motion-reveal");
      observer.observe(el);
    });
    const scenes = root.current.querySelectorAll("[data-motion-scene]");
    const sceneObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          entry.target.dataset.visible = String(entry.isIntersecting);
        }),
      { rootMargin: "100px" },
    );
    scenes.forEach((el) => sceneObserver.observe(el));
    return () => {
      observer.disconnect();
      sceneObserver.disconnect();
      targets.forEach((el) =>
        el.classList.remove("motion-reveal", "motion-visible"),
      );
    };
  }, [stopped, id]);

  return (
    <MotionContext.Provider
      value={{ replay, paused, reduced, setPaused, stopped, cycle }}
    >
      <div
        ref={root}
        className={`folio-lab motion-${id}`}
        data-motion={stopped ? "off" : "on"}
        data-entered={entered ? "true" : "false"}
        onKeyDown={(e) => {
          if (!entered && e.key === "Tab") finish();
        }}
      >
        {children}
        {id !== "quiet" && !reduced && !paused && (
          <Overture key={cycle} id={id} finish={finish} />
        )}
      </div>
    </MotionContext.Provider>
  );
}

export function MotionControls() {
  const { replay, paused, reduced, setPaused } = usePortfolioMotion();
  return (
    <div className="motion-controls">
      <button
        onClick={replay}
        disabled={reduced || paused}
        title={reduced ? "Reduced motion is enabled" : "Replay entrance"}
        aria-label="Replay entrance"
      >
        <RotateCcw size={16} />
        <span>Replay</span>
      </button>
      <button
        onClick={() => setPaused((p) => !p)}
        disabled={reduced}
        aria-label={paused ? "Resume motion" : "Pause motion"}
        aria-pressed={paused || reduced}
      >
        {paused || reduced ? <Play size={15} /> : <Pause size={15} />}
      </button>
    </div>
  );
}

export function EditorialThread() {
  return (
    <div className="ed-living-thread" aria-hidden="true">
      <span>Structure meets instinct.</span>
      <svg viewBox="0 0 1200 130" preserveAspectRatio="none">
        <path className="ed-thread-path" d="M0 65 C260 65 640 65 1200 65" />
      </svg>
      <i>Move a little. Feel the difference.</i>
    </div>
  );
}

export function IsometricProduct({ unified }) {
  return (
    <div
      className={`iso-stage ${unified ? "iso-assembled" : "iso-exploded"}`}
      data-motion-scene
      role="img"
      aria-label={
        unified
          ? "An isometric exposure workspace with connected overview, validation, and resolution layers"
          : "The same workspace separated into three floating interface layers"
      }
    >
      <div className="iso-orbit" />
      <span className="iso-coordinate iso-coordinate-top">INTERFACE / 01</span>
      <div className="iso-camera">
        <div className="iso-board">
          <div className="iso-layer iso-foundation">
            <span>ONE CONTINUOUS WORKSPACE</span>
            <div className="iso-grid" />
          </div>
          <div className="iso-layer iso-screen">
            <div className="iso-screen-bar">
              <i />
              <i />
              <i />
              <span>Exposure management</span>
            </div>
            <img src={projects[0].image} alt="" />
          </div>
          <div className="iso-layer iso-widget iso-widget-one">
            <span>01 / OVERVIEW</span>
            <b>One clear picture.</b>
            <div className="iso-bars">
              {[45, 75, 55, 95, 65, 85, 100].map((h, i) => (
                <i key={i} style={{ "--bar": h + "%", "--i": i }} />
              ))}
            </div>
          </div>
          <div className="iso-layer iso-widget iso-widget-two">
            <span>02 / VALIDATION</span>
            <b>✓ In context</b>
            <div className="iso-lines">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="iso-layer iso-tag">
            <i />
            03 / RESOLVE & CONTINUE ↗
          </div>
        </div>
      </div>
      <span className="iso-coordinate iso-coordinate-bottom">
        MOVE TO ORBIT · TRY BEFORE / AFTER
      </span>
    </div>
  );
}

// An original woven field: the same strands pass from loose paths to a shared grid.
function loomPath(index, x = 0, y = 0, tension = 0.5) {
  const start = 35 + index * 17;
  const end = 88 + index * 10;
  const curl = (index % 2 === 0 ? 1 : -1) * (105 - tension * 65);
  const centerX = 540 + x * 150;
  const centerY = 155 + y * 65;
  return `M -20 ${start} C 170 ${start - curl}, 215 ${centerY + curl * 2}, ${centerX - 100} ${centerY + (index - 7) * 5} S ${centerX + 75} ${centerY - curl * 2}, ${centerX + 150} ${end} C 845 ${end}, 940 ${end}, 1120 ${end}`;
}

export function DesignLoom() {
  const [tension, setTension] = useState(0.5);
  return (
    <section className="loom-section" id="design-loom" data-motion-scene>
      <div className="loom-heading">
        <div>
          <span className="fl-eyebrow">An experiment in making sense</span>
          <h2>
            Different threads.
            <br />
            <em>One considered whole.</em>
          </h2>
        </div>
        <p>
          People. Logic. A hundred little details.
          <br />
          The interesting part is bringing them together.
        </p>
      </div>
      <div className="design-loom" data-tension={tension}>
        <div className="loom-guide loom-guide-left">
          <span>01 / EXPLORE</span>
          <b>Follow the loose ends.</b>
        </div>
        <svg
          className="loom-field"
          viewBox="0 0 1100 320"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="loom-color">
              <stop stopColor="#a7bfb0" />
              <stop offset=".48" stopColor="#b5f5ce" />
              <stop offset="1" stopColor="#ddeda8" />
            </linearGradient>
          </defs>
          <g className="loom-threads">
            {Array.from({ length: 16 }, (_, i) => (
              <g key={i} style={{ "--i": i }}>
                <path
                  data-loom={i}
                  d={loomPath(i, 0, 0, tension)}
                  className="loom-thread"
                />
                <path
                  data-loom={i}
                  d={loomPath(i, 0, 0, tension)}
                  className="loom-signal"
                />
              </g>
            ))}
          </g>
          <g className="loom-terminal">
            {[0, 1, 2, 3].map((i) => (
              <g key={i} transform={`translate(1000 ${103 + i * 40})`}>
                <rect x="-12" y="-15" width="75" height="30" rx="4" />
                <circle cx="0" r="2.5" />
                <path d="M10 -4H45 M10 3H34" />
              </g>
            ))}
          </g>
        </svg>
        <div className="loom-guide loom-guide-right">
          <span>02 / RESOLVE</span>
          <b>Find a common thread.</b>
        </div>
        <span className="loom-pointer-hint">Move through the threads ↗</span>
      </div>
      <div className="loom-bottom">
        <span>A living sketch of how I think.</span>
        <label htmlFor="loom-tension">
          Loose
          <input
            id="loom-tension"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={tension}
            aria-label="Thread tension"
            onChange={(e) => setTension(Number(e.target.value))}
          />
          Ordered
        </label>
      </div>
    </section>
  );
}

export function CuriousCompanion() {
  return (
    <div className="curious-companion" data-motion-scene aria-hidden="true">
      <div className="companion-shadow" />
      <div className="companion-body">
        <i className="companion-eye">
          <b />
        </i>
        <i className="companion-eye">
          <b />
        </i>
        <span className="companion-smile" />
      </div>
      <span className="companion-note">just following my curiosity ↖</span>
    </div>
  );
}

export function CinemaLens() {
  return (
    <>
      <div className="cinema-light" aria-hidden="true" />
      <div className="cinema-viewfinder" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <span>IN FOCUS</span>
      </div>
      <span className="cinema-motion-hint">Move to explore the frame ↗</span>
    </>
  );
}

export function usePaperDrag() {
  const drag = useRef(null);
  const suppress = useRef(false);
  return {
    onPointerDown: (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      drag.current = {
        el: e.currentTarget,
        x: e.clientX,
        y: e.clientY,
        dx: parseFloat(e.currentTarget.style.getPropertyValue("--drag-x")) || 0,
        dy: parseFloat(e.currentTarget.style.getPropertyValue("--drag-y")) || 0,
      };
      suppress.current = false;
    },
    onPointerMove: (e) => {
      const d = drag.current;
      if (!d) return;
      const dx = e.clientX - d.x,
        dy = e.clientY - d.y;
      if (Math.hypot(dx, dy) > 5) {
        suppress.current = true;
        if (!d.el.hasPointerCapture(e.pointerId))
          d.el.setPointerCapture(e.pointerId);
        d.el.dataset.dragging = "true";
        d.el.style.setProperty(
          "--drag-x",
          `${Math.max(-110, Math.min(110, d.dx + dx))}px`,
        );
        d.el.style.setProperty(
          "--drag-y",
          `${Math.max(-75, Math.min(75, d.dy + dy))}px`,
        );
      }
    },
    onPointerUp: (e) => {
      if (drag.current) {
        drag.current.el.dataset.dragging = "false";
        if (e.currentTarget.hasPointerCapture(e.pointerId))
          e.currentTarget.releasePointerCapture(e.pointerId);
      }
      drag.current = null;
    },
    onPointerCancel: () => {
      if (drag.current) drag.current.el.dataset.dragging = "false";
      drag.current = null;
    },
    onClickCapture: (e) => {
      if (suppress.current) {
        e.preventDefault();
        e.stopPropagation();
        suppress.current = false;
      }
    },
    onDragStart: (e) => e.preventDefault(),
  };
}
