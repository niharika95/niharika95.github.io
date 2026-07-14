import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  selectedWorkGalleryItems,
  selectedWorksCatalog
} from '../../screens/SelectedWorks/selectedWorksCatalog';
import Typography from '../Typography';
import './SelectedWorkShowcase.css';

const WORD_ROW_HEIGHT = 1.35;

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => (
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  ));

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event) => setPrefersReducedMotion(event.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

function useRevealOnView(prefersReducedMotion, skipAnimation) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(prefersReducedMotion || skipAnimation);

  useEffect(() => {
    if (prefersReducedMotion || skipAnimation) {
      setIsVisible(true);
      return undefined;
    }

    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    observer.observe(section);
    return () => observer.disconnect();
  }, [prefersReducedMotion, skipAnimation]);

  return [sectionRef, isVisible];
}

function RotatingCategory({ prefersReducedMotion, onCategoryChange }) {
  const [position, setPosition] = useState(0);
  const [useTransition, setUseTransition] = useState(true);
  const labels = selectedWorksCatalog.map((category) => category.label);
  const extendedLabels = [...labels, labels[0]];
  const activeIndex = position % labels.length;

  useEffect(() => {
    onCategoryChange(activeIndex);
  }, [activeIndex, onCategoryChange]);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const intervalId = window.setInterval(() => {
      setPosition((current) => current + 1);
    }, 1200);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (position !== labels.length) return undefined;

    const timeoutId = window.setTimeout(() => {
      setUseTransition(false);
      setPosition(0);
      window.requestAnimationFrame(() => setUseTransition(true));
    }, 405);

    return () => window.clearTimeout(timeoutId);
  }, [labels.length, position]);

  return (
    <Typography
      as="span"
      variant="h4Medium"
      className="selected-work-showcase__word-window"
      style={{ color: 'var(--selected-work-yellow)', display: 'block', height: '1.35em', overflow: 'hidden', whiteSpace: 'nowrap', fontWeight: 600, '--typography-font-weight': 600 }}
      aria-hidden="true"
    >
      <span
        className={`selected-work-showcase__word-track ${useTransition ? 'is-transitioning' : ''}`}
        style={{ transform: `translate3d(0, -${position * WORD_ROW_HEIGHT}em, 0)` }}
      >
        {extendedLabels.map((label, index) => (
          <span className="selected-work-showcase__word" key={`${label}-${index}`}>
            {label.toLowerCase()}
            <Typography
              as="span"
              variant="h6Medium"
              style={{
                color: '#666666',
                fontWeight: 500,
                '--typography-font-weight': 500,
                marginLeft: '1px'
              }}
            >
              .
            </Typography>
          </span>
        ))}
      </span>
    </Typography>
  );
}

function GalleryGroup({ duplicate = false }) {
  return (
    <div className="selected-work-showcase__gallery-group" aria-hidden={duplicate || undefined}>
      {selectedWorkGalleryItems.map((item) => {
        const hasNoBg = item.imageStyle === 'pbr';
        return (
          <Link
            className={`selected-work-showcase__gallery-card ${item.isMobile ? 'is-mobile' : ''} ${hasNoBg ? 'has-no-bg' : ''}`}
            key={`${duplicate ? 'duplicate' : 'primary'}-${item.id}`}
            to={{ pathname: item.path, hash: `#${item.id}` }}
            aria-label={`View ${item.title} in ${item.categoryLabel}`}
            tabIndex={duplicate ? -1 : undefined}
          >
            <img src={item.src} alt={item.alt} loading="lazy" />
            <span className="selected-work-showcase__gallery-caption">
              {item.categoryLabel}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default function SelectedWorkShowcase({ skipAnimation = false }) {
  const prefersReducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState(0);
  const [sectionRef, isVisible] = useRevealOnView(prefersReducedMotion, skipAnimation);
  const category = selectedWorksCatalog[activeCategory];

  return (
    <section
      ref={sectionRef}
      className={`selected-work-showcase ${isVisible ? 'is-visible' : ''} ${skipAnimation ? 'is-static' : ''}`}
      aria-labelledby="selected-work-showcase-title"
    >
      <div className="selected-work-showcase__content">
        <h2 id="selected-work-showcase-title" className="selected-work-showcase__title">
          Selected work
          <svg
            className="selected-work-showcase__underline"
            viewBox="0 0 190 15"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path pathLength="1" d="M3 8 C38 6, 69 10, 104 7 S158 5, 187 8" />
            <path pathLength="1" d="M5 11 C43 9, 84 12, 121 9 S166 8, 185 10" />
          </svg>
        </h2>

        <div className="selected-work-showcase__statement">
          <Typography as="p" variant="h6Medium" style={{ color: '#666666', margin: 0 }}>
            Shining a light on the smaller details of
          </Typography>
          <RotatingCategory
            prefersReducedMotion={prefersReducedMotion}
            onCategoryChange={setActiveCategory}
          />
          <span className="selected-work-showcase__sr-only">
            {selectedWorksCatalog.map((item) => item.label).join(', ')}
          </span>
          <Link
            className="selected-work-showcase__category-link"
            to="/selected-works/dashboards"
            aria-label="View all selected works"
          >
            <span className="selected-work-showcase__category-link-label">View all</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h13M13 7l5 5-5 5" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="selected-work-showcase__gallery-bleed">
        <div className="selected-work-showcase__gallery" role="group" aria-label="Selected work gallery">
          <div className="selected-work-showcase__gallery-track">
            <GalleryGroup duplicate />
            <GalleryGroup />
          </div>
        </div>
      </div>
    </section>
  );
}
