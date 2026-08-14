import React, { useCallback, useEffect, useState } from 'react';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import SelectedWorkShowcase from '../../components/SelectedWorkShowcase';
import CaseStudies from './components/CaseStudies';
import HeroIntro from './components/HeroIntro';
import './HomeV2.css';

let hasCompletedHomeExperience = false;

export default function HomeV2() {
  const [skipAnimations] = useState(() => hasCompletedHomeExperience);
  const [showCaseStudies, setShowCaseStudies] = useState(skipAnimations);
  const handleIntroSequenceComplete = useCallback(() => {
    hasCompletedHomeExperience = true;
    setShowCaseStudies(true);
  }, []);

  useEffect(() => {
    if (showCaseStudies) return undefined;

    const handleScroll = () => {
      if (window.scrollY > 40) {
        hasCompletedHomeExperience = true;
        setShowCaseStudies(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showCaseStudies]);

  const rememberCompletedExperience = useCallback((event) => {
    const target = event.target instanceof Element ? event.target : null;
    const link = target?.closest('a[href]');

    if (!link) return;

    const destination = new URL(link.href, window.location.href);
    if (destination.origin === window.location.origin && destination.hash.startsWith('#/')) {
      hasCompletedHomeExperience = true;
    }
  }, []);

  return (
    <div className="home-v2" onClickCapture={rememberCompletedExperience}>
      <HeaderV2 isInitialLoad={!skipAnimations} />

      <main className="home-v2-container">
        <HeroIntro
          onSequenceComplete={handleIntroSequenceComplete}
          skipAnimation={skipAnimations}
        />
        <CaseStudies isVisible={showCaseStudies} skipAnimation={skipAnimations} />
        {showCaseStudies && <SelectedWorkShowcase skipAnimation={skipAnimations} />}
      </main>
    </div>
  );
}
