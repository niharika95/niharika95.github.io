import React, {
  Component,
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Leaf, RotateCcw, Sprout } from "lucide-react";
import { projects, EMAIL, LINKEDIN, PORTRAIT } from "./content";
import { usePortfolioMotion } from "./Motion";
import SunCursor from "./SunCursor";
import "./botanical.css";
import "./botanical-room.css";

const PlantScene = lazy(() => import("./PlantScene"));
const Arrow = () => (
  <ArrowUpRight size={19} strokeWidth={1.4} aria-hidden="true" />
);
const clamp = (x, min = 0, max = 1) => Math.max(min, Math.min(max, x));

class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onError();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

// A small illustrated plant is also the permanent fallback for unavailable WebGL.
function Seedling({ variant = 0, delay = 0, decorative = false }) {
  const leaves = variant === 1 ? 10 : variant === 2 ? 7 : 6;
  return (
    <svg
      viewBox="0 0 130 220"
      className={`garden-sprout garden-sprout-${variant}`}
      style={{ "--delay": delay + "s" }}
      aria-hidden="true"
    >
      <g className="garden-sway">
        <path
          className="garden-stem"
          pathLength="1"
          d={
            variant === 2
              ? "M65 214Q74 159 61 118Q51 70 68 16"
              : "M65 214Q52 144 66 93Q73 58 64 28"
          }
        />
        {Array.from({ length: leaves }, (_, i) => {
          const side = i % 2 ? -1 : 1,
            y = 185 - i * (variant === 1 ? 15 : 25);
          return (
            <g
              key={i}
              transform={`translate(${63 + ((i % 3) - 1) * 3} ${y}) rotate(${side * (variant === 1 ? 68 : 50)})`}
            >
              <g
                className="garden-leaf"
                style={{ "--leaf-delay": `${delay + 0.22 + i * 0.12}s` }}
              >
                <path
                  d={
                    variant === 1
                      ? "M0 0C-19 -24 -11 -45 0 -52C11 -35 19 -13 0 0Z"
                      : "M0 0C-27 -10 -31 -41 0 -56C23 -30 23 -11 0 0Z"
                  }
                />
                <path d="M0 0Q3 -23 0 -47" className="garden-vein" />
              </g>
            </g>
          );
        })}
        {variant === 2 && (
          <g transform="translate(68 20)">
            <g
              className="garden-leaf"
              style={{ "--leaf-delay": `${delay + 1}s` }}
            >
              <circle r="13" className="garden-bud" />
              <circle r="5" className="garden-bud-center" />
            </g>
          </g>
        )}
      </g>
      {!decorative && (
        <ellipse cx="65" cy="213" rx="16" ry="3" className="garden-soil" />
      )}
    </svg>
  );
}

function GardenBed({ name = "the garden", compact = false }) {
  const [seeds, setSeeds] = useState([]);
  const next = useRef(0);
  const { stopped } = usePortfolioMotion();
  const plant = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x =
      e.detail === 0
        ? 18 + ((next.current * 23) % 68)
        : clamp((e.clientX - rect.left) / rect.width, 0.07, 0.93) * 100;
    const seed = {
      id: next.current++,
      x,
      variant: next.current % 3,
      height: 100 + ((next.current * 29) % 75),
    };
    setSeeds((current) => [...current.slice(-8), seed]);
  };
  return (
    <section
      className={`garden-bed ${compact ? "garden-bed-compact" : ""}`}
      data-motion-scene
    >
      <div className="garden-bed-caption">
        <span>
          <Sprout size={15} /> A little room to grow
        </span>
        <span>
          {seeds.length
            ? `${seeds.length} ${seeds.length === 1 ? "seed" : "seeds"} planted`
            : "Leave something green behind."}
        </span>
      </div>
      <button
        className="garden-planting-area"
        onClick={plant}
        aria-label={`Plant a seed in ${name}`}
      >
        <span className="garden-planting-hint">
          <span>+</span>
          {seeds.length
            ? "Plant another, anywhere along here."
            : "Click here to plant something."}
        </span>
        <span className="garden-ground" />
        <span className="garden-existing garden-existing-left">
          <Seedling variant={1} decorative />
        </span>
        <span className="garden-existing garden-existing-right">
          <Seedling variant={0} decorative />
        </span>
        {seeds.map((seed) => (
          <span
            key={seed.id}
            className="garden-seed"
            style={{
              left: seed.x + "%",
              height: seed.height,
              width: seed.height * 0.59,
            }}
            data-still={stopped}
          >
            <Seedling variant={seed.variant} />
          </span>
        ))}
      </button>
      <div className="garden-bed-footer">
        <span>Yours to plant. Just for this visit.</span>
        <button
          onClick={() => setSeeds([])}
          disabled={!seeds.length}
          aria-label={`Clear plants in ${name}`}
        >
          <RotateCcw size={12} /> Start fresh
        </button>
      </div>
      <span className="fl-sr-only" role="status">
        {seeds.length
          ? `${seeds.length} ${seeds.length === 1 ? "plant" : "plants"} in ${name}. Up to nine plants are kept.`
          : ""}
      </span>
    </section>
  );
}

function BotanicalHero() {
  const track = useRef(),
    surface = useRef();
  const growth = useRef(0.08),
    light = useRef(0),
    elapsed = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true),
    [ready, setReady] = useState(false);
  const { stopped, reduced, cycle } = usePortfolioMotion();
  const readyCallback = useCallback((value = true) => setReady(value), []);
  useEffect(() => {
    elapsed.current = 0;
  }, [cycle]);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    observer.observe(surface.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    let raf = 0,
      last = 0;
    const smooth = (value) => {
      const p = clamp(value);
      return p * p * (3 - 2 * p);
    };
    const update = (now) => {
      raf = 0;
      if (stopped) elapsed.current = 3.4;
      else if (visible)
        elapsed.current = Math.min(
          3.4,
          elapsed.current + (last ? Math.min((now - last) / 1000, 0.05) : 0),
        );
      last = now;
      const bounds = track.current.getBoundingClientRect();
      const progress = clamp(
        -bounds.top / Math.max(1, bounds.height - innerHeight),
      );
      light.current = stopped ? 1 : smooth((elapsed.current - 0.1) / 1.15);
      const unfurl = smooth((elapsed.current - 0.35) / 2.15);
      growth.current = stopped
        ? 1
        : clamp(0.08 + unfurl * 0.77 + progress * 0.15);
      surface.current.style.setProperty("--light", light.current.toFixed(4));
      surface.current.style.setProperty("--growth", progress.toFixed(4));
      surface.current.style.setProperty("--unfurl", unfurl.toFixed(4));
      track.current.dataset.growth = growth.current.toFixed(2);
      track.current.dataset.light = light.current.toFixed(2);
      if (!stopped && visible && elapsed.current < 3.4)
        raf = requestAnimationFrame(update);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [stopped, visible, cycle]);
  const move = (e) => {
    if (e.pointerType === "touch" || stopped) return;
    const b = surface.current.getBoundingClientRect();
    pointer.current = {
      x: ((e.clientX - b.left) / b.width - 0.5) * 2,
      y: ((e.clientY - b.top) / b.height - 0.5) * 2,
    };
  };
  return (
    <section
      className="botanical-hero-track"
      ref={track}
      aria-label="A room for curiosity"
    >
      <div
        className="botanical-hero botanical-room"
        ref={surface}
        onPointerMove={move}
        onPointerLeave={() => {
          pointer.current = { x: 0, y: 0 };
        }}
      >
        <div className="botanical-room-architecture" aria-hidden="true">
          <div className="room-back-wall" />
          <div className="room-floor" />
          <div className="room-aperture" />
          <div className="room-daylight" />
          <div className="room-light-shaft" />
          <div className="room-light-pool" />
          <div className="room-window-cast" />
        </div>
        <span className="botanical-room-eyebrow">
          Product designer. Plant person.
        </span>
        <h1 className="botanical-room-heading">
          <span className="botanical-room-word room-rooted">Rooted in</span>
          <em className="botanical-room-word room-curiosity">curiosity.</em>
        </h1>
        <div
          className={`botanical-specimen ${ready ? "is-ready" : ""}`}
          role="img"
          aria-label="A lush plant on a stone plinth in a sunlit room. Daylight pours through a high window as veined leaves grow and unfurl. Move your mouse to shift the light."
        >
          <div className="botanical-plant-fallback">
            <Seedling variant={0} decorative />
            <div />
          </div>
          <div className="botanical-canvas" aria-hidden="true">
            <SceneBoundary onError={() => readyCallback(false)}>
              <Suspense fallback={null}>
                <PlantScene
                  growth={growth}
                  light={light}
                  pointer={pointer}
                  stopped={stopped}
                  visible={visible}
                  onReady={readyCallback}
                />
              </Suspense>
            </SceneBoundary>
          </div>
        </div>
        <div className="botanical-room-vignette" aria-hidden="true" />
        <p className="botanical-room-introduction">
          I’m Niharika. An engineer’s mind.<span>A designer’s curiosity.</span>
        </p>
        <span className="botanical-room-coordinate" aria-hidden="true">
          A living practice / 01
        </span>
        <div className="botanical-scroll-cue">
          <span>Scroll to let it grow.</span>
          <div>
            <i />
          </div>
          <ArrowDown size={16} />
        </div>
        <button
          className="botanical-room-work"
          onClick={() =>
            document
              .getElementById("work")
              ?.scrollIntoView({ behavior: reduced ? "instant" : "smooth" })
          }
        >
          Explore my work <Arrow />
        </button>
        <span className="botanical-room-instruction">
          Move the light. Leave a little bloom.
        </span>
      </div>
    </section>
  );
}

function useBotanicalScroll(ref, stopped) {
  useEffect(() => {
    const root = ref.current;
    const sections = [...root.querySelectorAll("[data-botanical-reveal]")];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 },
    );
    sections.forEach((el) => observer.observe(el));
    let raf = 0;
    const tick = () => {
      root.querySelectorAll(".botanical-project").forEach((el) => {
        const b = el.getBoundingClientRect();
        if (b.top < innerHeight && b.bottom > 0) {
          el.style.setProperty(
            "--chapter",
            stopped
              ? "0"
              : clamp((innerHeight - b.top) / (innerHeight + b.height)).toFixed(
                  4,
                ),
          );
        }
      });
      raf = 0;
    };
    const scroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", scroll, { passive: true });
    scroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scroll);
      cancelAnimationFrame(raf);
    };
  }, [ref, stopped]);
}

export default function Botanical() {
  const root = useRef();
  const { stopped, reduced } = usePortfolioMotion();
  useBotanicalScroll(root, stopped);
  const jump = (id) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reduced ? "instant" : "smooth" });
  return (
    <div className="botanical-page" ref={root}>
      <SunCursor surface={root} />
      <header className="botanical-nav">
        <Link to="/" className="botanical-name">
          Niharika Dalal<span>Product designer</span>
        </Link>
        <nav aria-label="Main navigation">
          <button onClick={() => jump("work")}>
            Work <sup>04</sup>
          </button>
          <button onClick={() => jump("botanical-about")}>About</button>
          <a href={`mailto:${EMAIL}`}>
            Let’s talk <Arrow />
          </a>
        </nav>
        <span className="botanical-nav-flower" aria-hidden="true">
          ✳
        </span>
      </header>
      <main id="concept-main" tabIndex={-1}>
        <BotanicalHero />
        <section className="botanical-about" id="botanical-about">
          <div className="botanical-section-label">
            <span>01 / The person behind the pixels</span>
            <Leaf size={22} strokeWidth={1} />
          </div>
          <div className="botanical-about-grid" data-botanical-reveal>
            <h2>
              First, understand
              <br />
              the roots.
              <br />
              <em>Then, help it grow.</em>
            </h2>
            <div className="botanical-about-story">
              <img src={PORTRAIT} alt="Niharika Dalal" loading="lazy" />
              <p>
                I started in front-end development. The more I built, the more
                curious I became about the people on the other side of the
                screen.
              </p>
              <p>
                Now I design products, untangle complicated workflows, and look
                for the small changes that make someone’s day easier.
              </p>
              <Link to="/about">
                More of my story <Arrow />
              </Link>
            </div>
          </div>
          <GardenBed name="the introduction garden" />
        </section>
        <section className="botanical-work" id="work">
          <div className="botanical-work-heading" data-botanical-reveal>
            <span className="botanical-eyebrow">02 / Selected work</span>
            <h2>
              Care, put
              <br />
              <em>into practice.</em>
            </h2>
            <p>
              Four different problems.
              <br />
              The same attention to the people using them.
            </p>
          </div>
          {projects.map((project, i) => (
            <article
              className={`botanical-project botanical-project-${project.id}`}
              key={project.id}
              data-botanical-reveal
            >
              <div className="botanical-project-heading">
                <span className="botanical-project-number">
                  0{i + 1}
                  <i>/04</i>
                </span>
                <div>
                  <span className="botanical-eyebrow">{project.category}</span>
                  <h3>{project.name}</h3>
                </div>
                <span className="botanical-project-fact">{project.fact}</span>
              </div>
              <Link to={project.path} className="botanical-project-image">
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="botanical-image-link">
                  Explore the case study <Arrow />
                </span>
                <span className="botanical-image-leaf" aria-hidden="true">
                  <Leaf size={58} strokeWidth={0.7} />
                </span>
              </Link>
              <div className="botanical-project-bottom">
                <p>{project.description}</p>
                <span>{project.detail}</span>
                <Link to={project.path}>
                  Read the story <Arrow />
                </Link>
              </div>
              {i === 1 && <GardenBed name="the work garden" compact />}
            </article>
          ))}
        </section>
        <section className="botanical-personal" data-botanical-reveal>
          <span className="botanical-eyebrow">03 / Away from the screen</span>
          <h2>
            Usually tending
            <br />
            to <em>something.</em>
          </h2>
          <p>
            A plant on the windowsill. A new painting.
            <br />A very good book I should have put down an hour ago.
          </p>
          <div className="botanical-personal-leaf" aria-hidden="true">
            <Seedling variant={1} decorative />
          </div>
        </section>
        <footer className="botanical-footer">
          <span className="botanical-eyebrow">Have something in mind?</span>
          <a className="botanical-footer-title" href={`mailto:${EMAIL}`}>
            Let’s grow
            <br />
            <em>a good idea.</em>
            <ArrowUpRight size={65} strokeWidth={1} />
          </a>
          <GardenBed name="the closing garden" />
          <div className="botanical-footer-bottom">
            <span>Niharika Dalal © {new Date().getFullYear()}</span>
            <div>
              <a href={`mailto:${EMAIL}`}>
                Email <Arrow />
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer">
                LinkedIn <Arrow />
              </a>
              <Link to="/resume">
                Résumé <Arrow />
              </Link>
            </div>
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: reduced ? "instant" : "smooth",
                })
              }
            >
              Back to the light ↑
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
