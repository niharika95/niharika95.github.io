import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Typography from '../../../components/Typography';
import './CaseStudies.css';

const SMALL_CASE_STUDIES = [
  {
    to: '/exposure-tool',
    title: 'Aligning system architecture with user mental models in a high-density financial tool.',
    description: 'Disjointed pages treated identical datasets as separate workflows.',
    image: '/v2/images/projects/exposure-tool/exposure-thumbnail.png',
    imageAlt: 'Financial tool system architecture table mockup',
    imageClassName: 'case-study-card__image--exposure'
  },
  {
    to: '/ramen-nagi',
    title: 'Solving the Demand Paradox for Ramen Nagi.',
    description: 'A grueling 2-hour wait experience was actively dismantling the product value.',
    image: '/v2/images/projects/ramen-nagi/ramen-nagi-thumbnail.png',
    imageAlt: 'Ramen Nagi digital waitlist concept shown on a phone',
    imageClassName: 'case-study-card__image--ramen'
  },
  {
    to: '/loan-app-experience-optimization',
    title: "Fixing a loan application that didn't trust its customers.",
    description: "The loan application form wasn't the problem. What it was asking for was.",
    image: '/v2/images/projects/loan-app-experience-optimization/panel-3-loan-application.png',
    imageAlt: 'Mobile loan application experience mockup',
    imageClassName: ''
  }
];

function SectionScribble() {
  return (
    <svg className="case-studies-heading__scribble" viewBox="0 0 132 12" aria-hidden="true">
      <path d="M2 7 C31 10 76 5 130 8" />
      <path d="M5 10 C44 8 88 11 126 8" />
    </svg>
  );
}

function ArrowAction({ theme = 'light' }) {
  return (
    <span className={`case-study-card__action case-study-card__action--${theme}`} aria-hidden="true">
      <span className="case-study-card__action-label">View case study</span>
      <Icon icon="material-symbols:arrow-forward" className="case-study-card__action-icon" width="24" height="24" />
    </span>
  );
}

export default function CaseStudies({ isVisible, skipAnimation = false }) {
  if (!isVisible) return null;

  return (
    <section
      className={`case-studies-redesign ${skipAnimation ? 'case-studies-redesign--static' : ''}`}
      aria-labelledby="case-studies-title"
    >
      <h2 id="case-studies-title" className="case-studies-heading">
        Case studies
        <SectionScribble />
      </h2>

      <Link to="/insurance-company-website-redesign" className="featured-case-study case-study-entrance case-study-entrance--1">
        <div className="featured-case-study__image-wrap">
          <img
            src="/v2/images/projects/insurance-company-website-design/Insurance - thumbnail.png"
            alt="Insurance company website redesign mockup"
            className="featured-case-study__image"
          />
        </div>

        <div className="featured-case-study__content">
          <div>
            <Typography as="h3" variant="h5Regular" className="featured-case-study__title">
              Rethinking the website of a $1 billion-bound insurance company.
            </Typography>
            <Typography as="p" variant="bodyRegular" className="featured-case-study__description">
              The navigation wasn't broken; it had never considered one of its two audiences.
            </Typography>
            <Typography as="p" variant="extraSmallRegular" className="featured-case-study__tags">
              Information architecture <span aria-hidden="true">&bull;</span> Design systems <span aria-hidden="true">&bull;</span> Content strategy
            </Typography>
          </div>
          <ArrowAction theme="dark" />
        </div>
      </Link>

      <div className="case-studies-grid">
        {SMALL_CASE_STUDIES.map((project, index) => (
          <Link
            to={project.to}
            className={`case-study-card case-study-entrance case-study-entrance--${index + 2}`}
            key={project.to}
          >
            <div className="case-study-card__image-wrap">
              <img
                src={project.image}
                alt={project.imageAlt}
                className={`case-study-card__image ${project.imageClassName}`}
              />
            </div>
            <div className="case-study-card__content">
              <Typography as="h3" variant="bodySemibold" className="case-study-card__title">
                {project.title}
              </Typography>
              <Typography as="p" variant="bodyRegular" className="case-study-card__description">
                {project.description}
              </Typography>
              <ArrowAction />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
