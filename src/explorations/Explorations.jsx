import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Grid2X2,
  Shuffle,
  X,
  Layers,
  Info,
} from "lucide-react";
import {
  concepts,
  projects,
  referenceLinks,
  EMAIL,
  LINKEDIN,
  PORTRAIT,
} from "./content";
import {
  MotionFrame,
  MotionControls,
  EditorialThread,
  IsometricProduct,
  DesignLoom,
  CuriousCompanion,
  CinemaLens,
  usePaperDrag,
} from "./Motion";
import Botanical from "./Botanical";
import "./fonts.css";
import "./explorations.css";

const Arrow = () => (
  <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
);
const mailto = `mailto:${EMAIL}`;

function Jump({ target = "work", children, className = "" }) {
  return (
    <button
      className={className}
      onClick={() =>
        document.getElementById(target)?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        })
      }
    >
      {children}
    </button>
  );
}

function Header({ monogram = false }) {
  return (
    <header className="fl-header">
      <Link
        to="/"
        className="fl-brand"
        aria-label="Niharika Dalal, original portfolio"
      >
        {monogram ? (
          <span className="fl-monogram">
            nd<span>®</span>
          </span>
        ) : (
          <>
            Niharika Dalal<span className="fl-brand-dot">.</span>
          </>
        )}
      </Link>
      <span className="fl-header-caption">
        Product designer
        <br />
        with an engineering mind
      </span>
      <nav aria-label="Main navigation">
        <Jump>
          Work <span>04</span>
        </Jump>
        <Link to="/about">About</Link>
        <Link to="/resume">
          Résumé <Arrow />
        </Link>
        <a className="fl-contact-link" href={mailto}>
          Let’s talk <Arrow />
        </a>
      </nav>
    </header>
  );
}

function Footer({ line = "Have a good problem in mind?" }) {
  return (
    <footer className="fl-footer" id="contact">
      <span className="fl-eyebrow">
        A conversation is a good place to start.
      </span>
      <a href={mailto} className="fl-footer-title">
        {line}
        <ArrowUpRight aria-hidden="true" />
      </a>
      <div className="fl-footer-bottom">
        <span>Niharika Dalal © {new Date().getFullYear()}</span>
        <span>Thoughtful systems. Everyday ease.</span>
        <div>
          <a href={mailto}>
            Email <Arrow />
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn <Arrow />
          </a>
          <Link to="/resume">
            Résumé <Arrow />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function ProjectImage({ project, className = "", eager = false }) {
  return (
    <img
      className={className}
      src={project.image}
      alt={project.alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

function Editorial() {
  return (
    <div className="fl-page fl-editorial">
      <Header />
      <main tabIndex={-1} id="concept-main">
        <section className="ed-hero">
          <div className="ed-hero-top">
            <span className="fl-eyebrow">
              A portfolio of considered digital experiences
            </span>
            <span className="ed-edition">
              Independent thought.
              <br />
              Human outcomes.
            </span>
          </div>
          <h1>
            A little <em>logic.</em>
            <br />A lot of <em>feeling.</em>
            <span className="ed-asterisk" aria-hidden="true">
              ✳
            </span>
          </h1>
          <div className="ed-hero-bottom">
            <span className="ed-signature">Hello, I’m Niharika.</span>
            <p>
              I bring an engineer’s understanding of systems and a designer’s
              curiosity about people to the things we use every day.
            </p>
            <Jump className="ed-round-link">
              <ArrowDown size={24} />
              <span>Explore my work</span>
            </Jump>
          </div>
          <EditorialThread />
        </section>
        <section className="ed-work fl-section" id="work">
          <div className="fl-section-title">
            <h2>
              Selected work <sup>01—04</sup>
            </h2>
            <span>A few problems worth solving</span>
          </div>
          <div className="ed-grid">
            {[projects[0], projects[2], projects[1], projects[3]].map(
              (p, i) => (
                <Link
                  className={`ed-project ed-project-${i}`}
                  to={p.path}
                  key={p.id}
                >
                  <div className={`ed-project-image ed-image-${p.id}`}>
                    <ProjectImage project={p} eager={i < 2} />
                    <span className="ed-image-label">{p.category}</span>
                    <span className="ed-image-arrow">
                      <Arrow />
                    </span>
                  </div>
                  <div className="ed-project-meta">
                    <span>
                      {p.number} / {p.category}
                    </span>
                    <span>{p.fact}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                </Link>
              ),
            )}
          </div>
        </section>
        <section className="ed-about">
          <div className="ed-about-photo">
            <img src={PORTRAIT} alt="Niharika Dalal" loading="lazy" />
            <span>A person behind the pixels.</span>
          </div>
          <div>
            <span className="fl-eyebrow">A little about me</span>
            <h2>
              I like knowing
              <br />
              <em>why things work.</em>
            </h2>
            <p>
              I started in front-end development. Curiosity about the person on
              the other side of the screen led me to product design. I still
              look for the structure underneath, and the small details that make
              it feel human.
            </p>
            <Link to="/about" className="fl-text-link">
              More of my story <Arrow />
            </Link>
          </div>
        </section>
      </main>
      <Footer line="Let’s make it make sense." />
    </div>
  );
}

function Systems() {
  const [unified, setUnified] = useState(true);
  const [active, setActive] = useState(0);
  const p = projects[active];
  return (
    <div className="fl-page fl-systems">
      <Header monogram />
      <main tabIndex={-1} id="concept-main">
        <section className="sys-hero">
          <div className="sys-intro">
            <span className="fl-eyebrow">
              <i className="fl-status-dot" /> Niharika Dalal / Product designer
            </span>
            <h1>
              Complexity,
              <br />
              <span>considered.</span>
            </h1>
            <p>
              I turn disconnected workflows into products that make sense.
              Engineering taught me to understand the system. Design taught me
              to start with the person.
            </p>
            <Jump className="sys-button">
              Inspect the work <ArrowDown size={18} />
            </Jump>
            <Jump target="design-loom" className="sys-loom-jump">
              Play with a thought <ArrowUpRight size={15} />
            </Jump>
            <div className="sys-skill-line">
              <span>01 / Structure</span>
              <span>02 / Behavior</span>
              <span>03 / Detail</span>
            </div>
          </div>
          <div className="sys-workbench">
            <div className="sys-window-bar">
              <span>
                <i />
                <i />
                <i />
              </span>
              <span>EXPOSURE / WORKFLOW STUDY</span>
              <Layers size={15} />
            </div>
            <div className="sys-workbench-controls">
              <span>Same data. A better model.</span>
              <div role="group" aria-label="Workflow comparison">
                <button
                  aria-pressed={!unified}
                  onClick={() => setUnified(false)}
                >
                  Before
                </button>
                <button aria-pressed={unified} onClick={() => setUnified(true)}>
                  After
                </button>
              </div>
            </div>
            <IsometricProduct unified={unified} />
            <div className="sys-diagram-caption" aria-live="polite">
              <span>FIG. 01</span>
              <p>
                {unified
                  ? "Keep the context. Change the state."
                  : "Same records. Repeated context switching."}
              </p>
              <span>{unified ? "CONNECTED" : "FRAGMENTED"}</span>
            </div>
          </div>
        </section>
        <DesignLoom />
        <section className="sys-work fl-section" id="work">
          <div className="fl-section-title">
            <h2>
              Selected systems<span> & experiences</span>
            </h2>
            <span className="fl-eyebrow">Index / 4 projects</span>
          </div>
          <div className="sys-project-browser">
            <div
              className="sys-index"
              role="group"
              aria-label="Choose a project"
            >
              {projects.map((item, i) => (
                <button
                  key={item.id}
                  aria-pressed={active === i}
                  onClick={() => setActive(i)}
                >
                  <span>{item.number}</span>
                  <div>
                    <h3>{item.short}</h3>
                    <small>{item.category}</small>
                  </div>
                  <ArrowRight size={20} />
                </button>
              ))}
            </div>
            <div className="sys-preview" aria-live="polite" aria-atomic="true">
              <Link to={p.path} key={p.id}>
                <div className={`sys-preview-image sys-image-${p.id}`}>
                  <ProjectImage project={p} eager />
                </div>
                <div className="sys-preview-content">
                  <span className="fl-eyebrow">{p.detail}</span>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <span className="fl-text-link">
                    Open case study <Arrow />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="sys-principles">
          <span className="fl-eyebrow">A way of working</span>
          <h2>
            Look underneath
            <br />
            the interface.
          </h2>
          <div>
            <p>
              <span>01</span>Understand how people think about the work.
            </p>
            <p>
              <span>02</span>Give the information a structure that matches.
            </p>
            <p>
              <span>03</span>Make each interaction earn its place.
            </p>
          </div>
        </section>
      </main>
      <Footer line="What are we solving next?" />
    </div>
  );
}

function Playroom() {
  const paperDrag = usePaperDrag();
  const [shuffled, setShuffled] = useState(false);
  const [filter, setFilter] = useState("All");
  const shown = projects.filter((p) => filter === "All" || p.type === filter);
  return (
    <div className="fl-page fl-playroom">
      <Header />
      <main tabIndex={-1} id="concept-main">
        <section className="play-hero">
          <div className="play-intro">
            <span className="play-hi">
              Hello, I’m Niharika <span aria-hidden="true">✳</span>
            </span>
            <h1>
              Serious work.
              <br />
              <em>Curious mind.</em>
            </h1>
            <p>
              Product designer, former engineer,
              <br />
              and a maker of things that make sense.
            </p>
          </div>
          <div className={`play-wall ${shuffled ? "is-shuffled" : ""}`}>
            <CuriousCompanion />
            <span className="play-pencil-note">Follow a thought ↴</span>
            <Link
              {...paperDrag}
              to={projects[0].path}
              className="play-piece play-piece-data"
            >
              <span className="play-tape" />
              <ProjectImage project={projects[0]} eager />
              <span>Finding order in the complex. ↗</span>
            </Link>
            <Link
              {...paperDrag}
              to={projects[2].path}
              className="play-piece play-piece-ramen"
            >
              <ProjectImage project={projects[2]} eager />
              <span>Less queue. More noodles. ↗</span>
            </Link>
            <Link
              {...paperDrag}
              to="/about"
              className="play-piece play-piece-portrait"
            >
              <img src={PORTRAIT} alt="Niharika Dalal" />
              <span>the human behind the work</span>
            </Link>
            <div className="play-sticky">
              <span>Note to self</span>
              <p>
                Get curious.
                <br />
                Ask why.
                <br />
                Make it simpler.
              </p>
              <span className="play-sticky-star" aria-hidden="true">
                ✳
              </span>
            </div>
            <span className="play-sticker" aria-hidden="true">
              made with
              <br />
              <b>curiosity</b>
            </span>
            <button
              className="play-shuffle"
              onClick={() => setShuffled((s) => !s)}
              aria-pressed={shuffled}
            >
              <Shuffle size={16} /> Rearrange my desk
            </button>
          </div>
          <div className="play-hero-bottom">
            <span>A little structure. A little happy accident.</span>
            <Jump>
              Scroll for the full stories <ArrowDown size={18} />
            </Jump>
          </div>
        </section>
        <section className="play-work fl-section" id="work">
          <div className="fl-section-title">
            <h2>
              The things I’ve
              <br />
              <em>been thinking about.</em>
            </h2>
            <div
              className="play-filters"
              role="group"
              aria-label="Filter projects"
            >
              {["All", "Systems", "Web", "Mobile"].map((f) => (
                <button
                  key={f}
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <p className="fl-sr-only" aria-live="polite">
            {shown.length} projects shown
          </p>
          <div className="play-project-grid">
            {shown.map((p) => (
              <Link
                key={p.id}
                to={p.path}
                className={`play-project play-project-${p.id}`}
              >
                <div>
                  <ProjectImage project={p} />
                  <span className="play-project-tag">{p.type}</span>
                </div>
                <section>
                  <small>
                    {p.number} / {p.category}
                  </small>
                  <h3>
                    {p.name}
                    <Arrow />
                  </h3>
                  <p>{p.description}</p>
                </section>
              </Link>
            ))}
          </div>
        </section>
        <section className="play-note">
          <span aria-hidden="true">✳</span>
          <h2>
            Good design starts
            <br />
            with a good <em>“why?”</em>
          </h2>
          <p>
            That question took me from writing front-end code to designing the
            experience around it. Outside of work, it usually takes me to a new
            craft project.
          </p>
          <Link to="/about" className="fl-text-link">
            Meet the curious mind <Arrow />
          </Link>
        </section>
      </main>
      <Footer line="Let’s put our heads together." />
    </div>
  );
}

function Quiet() {
  return <Botanical />;
}

function Cinema() {
  const order = [projects[2], projects[0], projects[1], projects[3]];
  const [active, setActive] = useState(0);
  const p = order[active];
  const headlines = [
    <>
      Less waiting.
      <br />
      <em>More living.</em>
    </>,
    <>
      Less complexity.
      <br />
      <em>More clarity.</em>
    </>,
    <>
      Two audiences.
      <br />
      <em>One clear home.</em>
    </>,
    <>
      Less friction.
      <br />
      <em>More forward.</em>
    </>,
  ];
  return (
    <div className="fl-page fl-cinema">
      <section className={`cinema-opening cinema-opening-${p.id}`}>
        <div className="cinema-background" key={p.id}>
          <ProjectImage project={p} eager />
        </div>
        <Header />
        <CinemaLens />
        <main tabIndex={-1} id="concept-main">
          <div
            className="cinema-hero-copy"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="fl-eyebrow">Niharika Dalal / Product design</span>
            <h1 key={p.id}>{headlines[active]}</h1>
            <div className="cinema-summary">
              <span>{String(active + 1).padStart(2, "0")} / SELECTED WORK</span>
              <p>{p.description}</p>
              <Link to={p.path} className="cinema-case-link">
                Explore {p.short} <Arrow />
              </Link>
            </div>
          </div>
        </main>
        <div
          className="cinema-selector"
          role="group"
          aria-label="Choose the featured project"
        >
          {order.map((item, i) => (
            <button
              key={item.id}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
            >
              <span>0{i + 1}</span>
              <div>
                {item.short}
                <small>{item.category}</small>
              </div>
              <Arrow />
            </button>
          ))}
        </div>
      </section>
      <section className="cinema-statement">
        <span className="fl-eyebrow">The person behind the work</span>
        <h2>
          An engineering mind.
          <br />
          An eye for the <em>human side.</em>
        </h2>
        <p>
          I’m Niharika. I design products by understanding the systems beneath
          them and the people moving through them.
        </p>
        <Link to="/about" className="fl-text-link">
          A little about me <Arrow />
        </Link>
      </section>
      <section className="cinema-work" id="work">
        <div className="fl-section-title">
          <h2>The work, in focus.</h2>
          <span>Four considered experiences</span>
        </div>
        {order.map((item, i) => (
          <Link
            key={item.id}
            to={item.path}
            className={`cinema-feature cinema-feature-${item.id}`}
          >
            <div className="cinema-feature-top">
              <span>0{i + 1}</span>
              <span>{item.category}</span>
              <span>{item.fact}</span>
            </div>
            <div className="cinema-feature-image">
              <ProjectImage project={item} />
              <span className="cinema-feature-arrow">
                <ArrowUpRight size={40} />
              </span>
            </div>
            <div className="cinema-feature-bottom">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </section>
      <Footer line="Make the next thing matter." />
    </div>
  );
}

function ConceptDock({ concept }) {
  const dialog = useRef(null);
  const idx = concepts.indexOf(concept);
  return (
    <>
      <nav className="fl-dock" aria-label="Homepage concepts">
        <Link
          className="fl-dock-grid"
          to="/explorations"
          aria-label="Compare all five concepts"
        >
          <Grid2X2 size={17} />
        </Link>
        <span className="fl-dock-divider" />
        <span className="fl-dock-current">
          {concept.number}
          <b>{concept.name}</b>
        </span>
        <div className="fl-dock-numbers">
          {concepts.map((c) => (
            <Link
              key={c.id}
              to={`/explorations/${c.id}`}
              aria-label={`Concept ${c.number}: ${c.name}`}
              aria-current={c.id === concept.id ? "page" : undefined}
            >
              {c.number}
            </Link>
          ))}
        </div>
        <MotionControls />
        <button
          className="fl-dock-info"
          aria-label="Design notes"
          onClick={() => dialog.current.showModal()}
        >
          <span>Design notes</span>
          <Info className="fl-notes-icon" size={16} />
        </button>
        <Link
          className="fl-dock-next"
          to={`/explorations/${concepts[(idx + 1) % 5].id}`}
          aria-label="Next concept"
        >
          <ArrowRight size={17} />
        </Link>
      </nav>
      <dialog
        ref={dialog}
        className="fl-notes"
        aria-labelledby="fl-notes-title"
      >
        <form method="dialog">
          <button aria-label="Close design notes">
            <X size={22} />
          </button>
        </form>
        <span className="fl-eyebrow">
          Direction {concept.number} / {concept.mood}
        </span>
        <h2 id="fl-notes-title">{concept.name}</h2>
        <p>{concept.rationale}</p>
        <h3>The interaction</h3>
        <p>{concept.interaction}</p>
        <h3>Reference cues</h3>
        <div className="fl-reference-links">
          {concept.references.map((name) => (
            <a
              href={referenceLinks[name]}
              key={name}
              target="_blank"
              rel="noreferrer"
            >
              {name}
              <Arrow />
            </a>
          ))}
        </div>
        <Link
          to="/explorations"
          onClick={() => dialog.current.close()}
          className="fl-text-link"
        >
          Compare all five directions <Arrow />
        </Link>
      </dialog>
    </>
  );
}

const pages = {
  editorial: Editorial,
  systems: Systems,
  playroom: Playroom,
  quiet: Quiet,
  cinema: Cinema,
};

function Miniature({ id }) {
  return (
    <div className={`fl-mini fl-mini-${id}`} aria-hidden="true">
      {id === "editorial" && (
        <>
          <small>NIHARIKA DALAL / PRODUCT DESIGNER</small>
          <strong>
            A little <i>logic.</i>
            <br />A lot of <i>feeling.</i>
          </strong>
          <span className="mini-star">✳</span>
          <div className="mini-pair">
            <img src={projects[0].image} alt="" />
            <img src={projects[2].image} alt="" />
          </div>
        </>
      )}
      {id === "systems" && (
        <>
          <small>ND® / SYSTEMS STUDIO</small>
          <strong>
            Complexity,
            <br />
            <i>considered.</i>
          </strong>
          <div className="mini-system">
            <span>OVERVIEW</span>
            <span>VALIDATION</span>
            <span>RESOLUTION</span>
          </div>
          <small>ONE CONTINUOUS WORKSPACE →</small>
        </>
      )}
      {id === "playroom" && (
        <>
          <small>HELLO, I’M NIHARIKA</small>
          <strong>
            Serious work.
            <br />
            <i>Curious mind.</i>
          </strong>
          <div className="mini-collage">
            <img src={projects[0].image} alt="" />
            <img src={projects[2].image} alt="" />
            <span>
              Ask why.
              <br />
              Make it simpler.
            </span>
          </div>
        </>
      )}
      {id === "quiet" && (
        <div className="mini-botanical">
          <small>NIHARIKA DALAL / A GROWING PRACTICE</small>
          <strong>
            Rooted in
            <br />
            <i>curiosity.</i>
          </strong>
          <svg viewBox="0 0 120 190">
            <path d="M60 160Q48 95 63 30" />
            <path d="M60 95C12 100 8 54 17 45C50 46 62 72 60 95Z M61 76C102 76 111 40 98 29C71 31 62 49 61 76Z M60 49C37 30 45 9 64 2C80 28 68 40 60 49Z M59 122C87 124 109 103 100 84C74 82 62 104 59 122Z" />
            <path className="mini-pot" d="M38 151H83L75 184H46Z" />
          </svg>
          <span>SCROLL. LET IT GROW. ↓</span>
        </div>
      )}
      {id === "cinema" && (
        <>
          <img src={projects[2].image} alt="" />
          <small>NIHARIKA DALAL / PRODUCT DESIGN</small>
          <strong>
            Less waiting.
            <br />
            <i>More living.</i>
          </strong>
          <span>01 &nbsp; RAMEN NAGI &nbsp; ↗</span>
        </>
      )}
    </div>
  );
}

export function ExplorationIndex() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  useEffect(() => {
    const title = document.title;
    document.title = "Five directions · Niharika Dalal";
    return () => {
      document.title = title;
    };
  }, []);
  return (
    <div className="folio-lab fl-index">
      <header className="fl-index-header">
        <Link to="/">
          Niharika Dalal<span> / Portfolio explorations</span>
        </Link>
        <Link to="/">
          View current portfolio <Arrow />
        </Link>
      </header>
      <main>
        <section className="fl-index-intro">
          <span className="fl-eyebrow">One designer. Five points of view.</span>
          <h1>
            Find your
            <br />
            <em>kind of different.</em>
          </h1>
          <div>
            <p>
              Five distinct homes for your work. Each explores a different
              balance of clarity, character, and interaction, using your real
              projects and your story.
            </p>
            <span>
              Open a direction. Move your cursor.
              <br />
              Replay its entrance with the ↶ control below.
            </span>
          </div>
        </section>
        <div className="fl-concept-grid">
          {concepts.map((c) => (
            <Link
              className="fl-concept-card"
              key={c.id}
              to={`/explorations/${c.id}`}
            >
              <Miniature id={c.id} />
              <div className="fl-concept-card-title">
                <span>{c.number}</span>
                <h2>{c.name}</h2>
                <Arrow />
              </div>
              <span className="fl-concept-mood">{c.mood}</span>
              <p>{c.description}</p>
            </Link>
          ))}
          <section className="fl-recommendation">
            <span className="fl-eyebrow">The designer’s take</span>
            <h2>
              Start with
              <br />
              <em>Form & feeling.</em>
            </h2>
            <p>
              It gives your work a strong identity and makes your story easy to
              grasp. Systems studio is the bolder choice if you want your
              engineering background to lead.
            </p>
            <Link to="/explorations/editorial" className="fl-text-link">
              Explore direction 01 <Arrow />
            </Link>
            <small>
              Every direction is responsive and links to your existing case
              studies.
            </small>
          </section>
        </div>
        <section className="fl-reference-index">
          <span className="fl-eyebrow">
            Reference library / All nine sites studied
          </span>
          <div>
            {Object.entries(referenceLinks).map(([name, url]) => (
              <a href={url} key={name} target="_blank" rel="noreferrer">
                {name}
                <Arrow />
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer className="fl-index-footer">
        <span>Five possibilities. Your work at the center.</span>
        <Link to="/">
          Back to the current portfolio <Arrow />
        </Link>
      </footer>
    </div>
  );
}

export default function Exploration() {
  const { concept: id } = useParams();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);
  const concept = concepts.find((c) => c.id === id);
  useEffect(() => {
    if (!concept) return undefined;
    const title = document.title;
    document.title = `${concept.name} · Niharika Dalal`;
    return () => {
      document.title = title;
    };
  }, [concept]);
  if (!concept) return <Navigate to="/explorations" replace />;
  const Page = pages[id];
  return (
    <MotionFrame id={id} key={id}>
      <a
        href="#concept-main"
        className="fl-skip"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("concept-main")?.focus();
          document.getElementById("concept-main")?.scrollIntoView();
        }}
      >
        Skip to content
      </a>
      <Page />
      <ConceptDock concept={concept} />
    </MotionFrame>
  );
}
