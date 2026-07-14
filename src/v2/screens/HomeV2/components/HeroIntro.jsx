import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import './HeroIntro.css';

const NOTEBOOK_ITEMS = [
  {
    strong: 'I design systems before fixing screens.',
    normal: ' The same way my calendar and to-do lists are built so nothing slips through.'
  },
  {
    strong: 'I trust consistency over intensity.',
    normal: ' A daily suryanamaskar & 1-min plank. Not to impress, but to never break the chain.'
  }
];

const BUILD_SYSTEMS = 'build systems';
const NOTEBOOK_START_DELAY = 5550;
const CASE_STUDIES_BREATH_DELAY = 700;
const SEQUENCE_SAFETY_DELAY = 9500;
const NOTEBOOK_ITEM_LENGTHS = NOTEBOOK_ITEMS.map(
  (item) => item.strong.length + item.normal.length
);

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener?.('change', updatePreference);
    return () => mediaQuery.removeEventListener?.('change', updatePreference);
  }, []);

  return prefersReducedMotion;
}

function AnimatedBuildSystems() {
  return (
    <span className="build-systems-wave" aria-label={BUILD_SYSTEMS}>
      <span aria-hidden="true">
        {Array.from(BUILD_SYSTEMS).map((character, index) => (
          <span
            className="build-systems-wave__letter"
            style={{ '--letter-index': index }}
            key={`${character}-${index}`}
          >
            {character === ' ' ? '\u00a0' : character}
          </span>
        ))}
      </span>
    </span>
  );
}

function DrawnUnderline() {
  return (
    <svg className="hero-scribble hero-scribble--underline" viewBox="0 0 230 14" aria-hidden="true">
      <path className="hero-scribble__stroke hero-scribble__stroke--underline" d="M3 8 C52 11 126 5 227 8" />
      <path className="hero-scribble__stroke hero-scribble__stroke--underline-echo" d="M8 11 C73 9 150 12 222 9" />
    </svg>
  );
}

function DrawnArrow() {
  return (
    <svg className="hero-scribble hero-scribble--arrow" viewBox="0 0 154 72" aria-hidden="true">
      <path className="hero-scribble__stroke hero-scribble__stroke--arrow" d="M6 64 C 20 42, 54 12, 94 11 C 114 11, 128 20, 137 33" />
      <path className="hero-scribble__stroke hero-scribble__stroke--arrow-echo" d="M9 61 C 28 35, 62 14, 95 14 C 111 14, 123 21, 133 31" />
      <path className="hero-scribble__stroke hero-scribble__stroke--arrow-head" d="M121 28 C 126 31, 132 34, 139 35" />
      <path className="hero-scribble__stroke hero-scribble__stroke--arrow-head-return" d="M139 35 C 137 29, 135 22, 132 15" />
    </svg>
  );
}

function DrawnCircle() {
  return (
    <svg className="hero-scribble hero-scribble--circle" viewBox="0 0 244 66" aria-hidden="true">
      <path
        className="hero-scribble__stroke hero-scribble__stroke--circle"
        d="M225 15 C160 5, 60 5, 20 18 C-5 25, 5 50, 40 56 C90 64, 190 60, 230 42 C250 32, 230 18, 200 12 C180 8, 160 10, 145 15"
      />
      <path
        className="hero-scribble__stroke hero-scribble__stroke--circle-echo"
        d="M228 18 C165 8, 65 7, 23 20 C0 27, 8 47, 43 52 C85 58, 180 54, 218 38 C235 28, 215 15, 185 11 C165 7, 150 9, 138 13"
      />
    </svg>
  );
}

/*
 * TODO: Re-enable the placeholder-card stack when the card content is ready.
 * The spring/deal implementation is intentionally preserved here so it can be
 * restored without rebuilding the choreography.
function PlaceholderStack({ dealtCount }) {
  const dealtCards = [
    { className: 'placeholder-card--north-west', label: 'top left' },
    { className: 'placeholder-card--north-east', label: 'top right' },
    { className: 'placeholder-card--south-west', label: 'bottom left' },
    { className: 'placeholder-card--south-east', label: 'bottom right' }
  ];

  return (
    <div className="placeholder-stack" aria-hidden="true">
      {dealtCards.map((card, index) => (
        <div
          key={card.label}
          className={`placeholder-card ${card.className} ${index < dealtCount ? 'placeholder-card--dealt' : ''}`}
        />
      ))}
      <div className="placeholder-card placeholder-card--center" />
    </div>
  );
}
*/

export default function HeroIntro({ onSequenceComplete, skipAnimation = false }) {
  const prefersReducedMotion = useReducedMotion();
  const [typingStep, setTypingStep] = useState(skipAnimation ? 3 : 0);
  const [characterCounts, setCharacterCounts] = useState(
    skipAnimation ? NOTEBOOK_ITEM_LENGTHS : [0, 0]
  );
  const completionCallback = useRef(onSequenceComplete);
  const hasCompletedSequence = useRef(skipAnimation);

  useEffect(() => {
    completionCallback.current = onSequenceComplete;
  }, [onSequenceComplete]);

  useEffect(() => {
    if (skipAnimation) return undefined;

    const safetyTimer = window.setTimeout(() => {
      setCharacterCounts(NOTEBOOK_ITEM_LENGTHS);
      setTypingStep(3);
      if (!hasCompletedSequence.current) {
        hasCompletedSequence.current = true;
        completionCallback.current?.();
      }
    }, SEQUENCE_SAFETY_DELAY);

    return () => window.clearTimeout(safetyTimer);
  }, [skipAnimation]);

  useEffect(() => {
    if (skipAnimation) return undefined;

    if (prefersReducedMotion) {
      setCharacterCounts(NOTEBOOK_ITEM_LENGTHS);
      setTypingStep(3);
      if (!hasCompletedSequence.current) {
        hasCompletedSequence.current = true;
        completionCallback.current?.();
      }
      return undefined;
    }

    const startTimer = window.setTimeout(() => setTypingStep(1), NOTEBOOK_START_DELAY);
    return () => window.clearTimeout(startTimer);
  }, [prefersReducedMotion, skipAnimation]);

  useEffect(() => {
    if (skipAnimation || prefersReducedMotion || typingStep !== 3 || hasCompletedSequence.current) {
      return undefined;
    }

    const revealTimer = window.setTimeout(() => {
      if (!hasCompletedSequence.current) {
        hasCompletedSequence.current = true;
        completionCallback.current?.();
      }
    }, CASE_STUDIES_BREATH_DELAY);

    return () => window.clearTimeout(revealTimer);
  }, [prefersReducedMotion, skipAnimation, typingStep]);

  useEffect(() => {
    if (skipAnimation || prefersReducedMotion || typingStep < 1 || typingStep > 2) return undefined;

    const itemIndex = typingStep - 1;
    const currentCount = characterCounts[itemIndex];
    const fullText = NOTEBOOK_ITEMS[itemIndex].strong + NOTEBOOK_ITEMS[itemIndex].normal;

    if (currentCount < NOTEBOOK_ITEM_LENGTHS[itemIndex]) {
      const currentCharacter = fullText[currentCount];
      const delay = /[.!?]/.test(currentCharacter) ? 34 : 8;
      const typingTimer = window.setTimeout(() => {
        setCharacterCounts((counts) => {
          const nextCounts = [...counts];
          nextCounts[itemIndex] = Math.min(currentCount + 2, NOTEBOOK_ITEM_LENGTHS[itemIndex]);
          return nextCounts;
        });
      }, delay);

      return () => window.clearTimeout(typingTimer);
    }

    const pauseTimer = window.setTimeout(() => {
      if (typingStep === 1) {
        setTypingStep(2);
      } else {
        setTypingStep(3);
      }
    }, typingStep === 1 ? 240 : 320);

    return () => window.clearTimeout(pauseTimer);
  }, [characterCounts, prefersReducedMotion, skipAnimation, typingStep]);

  const renderNotebookText = (item, characterCount, isTyping) => {
    const strongPart = item.strong.slice(0, Math.min(characterCount, item.strong.length));
    const normalPart = characterCount > item.strong.length
      ? item.normal.slice(0, characterCount - item.strong.length)
      : '';

    return (
      <>
        <strong>{strongPart}</strong>
        {normalPart}
        {isTyping && <span className="notebook-cursor" aria-hidden="true" />}
      </>
    );
  };

  return (
    <section
      className={`portfolio-intro ${skipAnimation ? 'portfolio-intro--static' : ''}`}
      aria-labelledby="portfolio-intro-title"
    >
      <div className="portfolio-intro__copy">
        <h1 id="portfolio-intro-title" className="portfolio-intro__headline">
          <span className="portfolio-intro__primary-line">
            From{' '}
            <span className="role-transition">
              <span className="role-transition__engineer">
                software engineer
                <DrawnUnderline />
              </span>
              <span className="role-transition__to"> to </span>
              <span className="role-transition__designer">
                product designer:
                <DrawnCircle />
              </span>
              <DrawnArrow />
            </span>
          </span>
          <br />
          <span className="portfolio-intro__subline">
            a deliberate shift that shapes how I <AnimatedBuildSystems />.
          </span>
        </h1>

        <div className="notebook-list-redesign" aria-label="How I work">
          {NOTEBOOK_ITEMS.map((item, index) => (
            <div
              className={`notebook-row ${typingStep >= index + 1 ? 'notebook-row--visible' : ''}`}
              key={item.strong}
            >
              <Icon icon="material-symbols:done-all-rounded" className="notebook-row__icon" aria-hidden="true" />
              <p className="notebook-row__text">
                {renderNotebookText(item, characterCounts[index], typingStep === index + 1)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/*
        TODO: Re-add the placeholder-card visual once the card content is ready.
        <div className="portfolio-intro__visual">
          <PlaceholderStack dealtCount={dealtCount} />
        </div>
      */}
    </section>
  );
}
