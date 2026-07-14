import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import Typography from '../../components/Typography';
import { Icon } from '@iconify/react';
import './HomeV2.css';

const bulletData = [
  {
    strong: "I design systems before fixing screens.",
    normal: " The same way my calendar and to-do lists are built so nothing slips through."
  },
  {
    strong: "I trust consistency over intensity.",
    normal: " A daily suryanamaskar & 1-min plank. Not to impress, but to never break the chain."
  }
];

export default function HomeV2() {
  const [typingStep, setTypingStep] = useState(0); // 0: wait, 1: type item 1, 2: type item 2, 3: done
  const [charIndex1, setCharIndex1] = useState(0);
  const [charIndex2, setCharIndex2] = useState(0);
  const [showCaseStudies, setShowCaseStudies] = useState(false);

  const fullLen1 = bulletData[0].strong.length + bulletData[0].normal.length;
  const fullLen2 = bulletData[1].strong.length + bulletData[1].normal.length;

  // Safety fallback: guarantee case studies appear after 4.5 seconds under all conditions
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setShowCaseStudies(true);
      setTypingStep(3);
      setCharIndex1(fullLen1);
      setCharIndex2(fullLen2);
    }, 4500);

    return () => clearTimeout(fallbackTimer);
  }, [fullLen1, fullLen2]);

  useEffect(() => {
    // Start typing item 1 strictly after hero statement above it completes appearing (~1100ms)
    const startTimer = setTimeout(() => {
      setTypingStep(1);
    }, 1100);

    return () => clearTimeout(startTimer);
  }, []);

  const getFullText = (bullet) => bullet.strong + bullet.normal;

  useEffect(() => {
    if (typingStep === 1) {
      if (charIndex1 < fullLen1) {
        const fullStr = getFullText(bulletData[0]);
        const currentChar = fullStr[charIndex1];
        // Fast typing cadence (2 chars per step, 6ms delay)
        const delay = (currentChar === '.' || currentChar === '!') ? 30 : 6;

        const timeout = setTimeout(() => {
          setCharIndex1(prev => Math.min(prev + 2, fullLen1));
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        const pauseTimeout = setTimeout(() => {
          setTypingStep(2);
        }, 60);
        return () => clearTimeout(pauseTimeout);
      }
    }
  }, [typingStep, charIndex1, fullLen1]);

  useEffect(() => {
    if (typingStep === 2) {
      if (charIndex2 < fullLen2) {
        const fullStr = getFullText(bulletData[1]);
        const currentChar = fullStr[charIndex2];
        const delay = (currentChar === '.' || currentChar === '!') ? 30 : 6;

        const timeout = setTimeout(() => {
          setCharIndex2(prev => Math.min(prev + 2, fullLen2));
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        setTypingStep(3);
        setShowCaseStudies(true);
      }
    }
  }, [typingStep, charIndex2, fullLen2]);

  const renderItemText = (bullet, charIndex, isTyping) => {
    const strongLen = bullet.strong.length;
    const strongPart = bullet.strong.slice(0, Math.min(charIndex, strongLen));
    const normalPart = charIndex > strongLen ? bullet.normal.slice(0, charIndex - strongLen) : '';

    return (
      <>
        <strong>{strongPart}</strong>
        {normalPart}
        {isTyping && <span className="typing-cursor">|</span>}
      </>
    );
  };

  return (
    <div className="home-v2">
      <HeaderV2 isInitialLoad={true} />

      <main className="home-v2-container">
        {/* Intro Section - Max Width 720px */}
        <section className="intro-section">
          <Typography as="h1" variant="h4Regular" className="intro-headline anim-hero-statement">
            <span className="font-medium">From software engineer to product designer:</span>
            <br />
            <span className="font-light">a deliberate shift that shapes how I build systems.</span>
          </Typography>

          <div className="notebook-list">
            <div className={`notebook-item ${typingStep >= 1 ? 'notebook-item-visible' : 'notebook-item-hidden'}`}>
              <div className="notebook-icon-wrapper">
                <Icon icon="material-symbols:done-all-rounded" className="notebook-check-icon" />
              </div>
              <div className="notebook-text">
                {renderItemText(bulletData[0], charIndex1, typingStep === 1)}
              </div>
            </div>
            
            <div className={`notebook-item ${typingStep >= 2 ? 'notebook-item-visible' : 'notebook-item-hidden'}`}>
              <div className="notebook-icon-wrapper">
                <Icon icon="material-symbols:done-all-rounded" className="notebook-check-icon" />
              </div>
              <div className="notebook-text">
                {renderItemText(bulletData[1], charIndex2, typingStep === 2)}
              </div>
            </div>
          </div>

          <Typography 
            as="div" 
            variant="smallRegular" 
            className={`case-studies-label text-gray-600 ${showCaseStudies ? 'case-studies-label-entrance' : 'case-studies-label-hidden'}`}
          >
            Case studies
          </Typography>
        </section>

        {/* Case Studies Section - Max Width 1040px */}
        <section className="case-studies-section">
          {/* Main Case Study (Insurance Redesign) - Card 1 */}
          <Link to="/insurance-company-website-redesign" className={`main-card-link ${showCaseStudies ? 'card-entrance-1' : 'card-hidden'}`}>
            <div className="main-project-card">
              <div className="main-card-image-container">
                <img 
                  src="/v2/images/projects/insurance-company-website-design/Insurance - thumbnail.png" 
                  alt="Insurance company website redesign mockup" 
                  className="main-card-image"
                />
              </div>
              <div className="main-card-content">
                <div className="main-card-text-wrapper">
                  <Typography as="h2" variant="h5Regular" className="main-card-title">
                    Rethinking the website of a $1 billion-bound insurance company.
                  </Typography>
                  <Typography as="p" variant="bodyRegular" className="main-card-description text-gray-300">
                    The navigation wasn't broken; it had never considered one of its two audiences.
                  </Typography>
                  <Typography variant="extraSmallRegular" className="main-card-tags text-gray-400">
                    Information architecture &bull; Design systems &bull; Content strategy
                  </Typography>
                </div>
                <div className="card-arrow-btn dark-theme">
                  <span className="cta-text">View case study</span>
                  <Icon icon="material-symbols:arrow-forward" className="arrow-icon" width="24" height="24" />
                </div>
              </div>
            </div>
          </Link>

          {/* Grid of 3 Case Studies */}
          <div className="projects-grid">
            {/* Card 2: Exposure Tool */}
            <Link to="/exposure-tool" className={`grid-card-link ${showCaseStudies ? 'card-entrance-2' : 'card-hidden'}`}>
              <div className="grid-project-card">
                <div className="grid-card-image-container exposure-image-container">
                  <img 
                    src="/v2/images/projects/exposure-tool/exposure-thumbnail.png" 
                    alt="Financial tool system architecture table mockup" 
                    className="grid-card-image exposure-image"
                  />
                </div>
                <div className="grid-card-content">
                  <Typography as="h3" variant="bodySemibold" className="grid-card-title">
                    Aligning system architecture with user mental models in a high-density financial tool.
                  </Typography>
                  <Typography as="p" variant="bodyRegular" className="grid-card-description">
                    Disjointed pages treated identical datasets as separate workflows.
                  </Typography>
                  <div className="card-arrow-btn light-theme">
                    <span className="cta-text">View case study</span>
                    <Icon icon="material-symbols:arrow-forward" className="arrow-icon" width="24" height="24" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 3: Ramen Nagi */}
            <Link to="/ramen-nagi" className={`grid-card-link ${showCaseStudies ? 'card-entrance-3' : 'card-hidden'}`}>
              <div className="grid-project-card">
                <div className="grid-card-image-container">
                  <img 
                    src="/v2/images/projects/ramen-nagi/ramen-nagi-thumbnail.png" 
                    alt="Solving the Demand Paradox for Ramen Nagi mockup" 
                    className="grid-card-image ramen-nagi-image"
                  />
                </div>
                <div className="grid-card-content">
                  <Typography as="h3" variant="bodySemibold" className="grid-card-title">
                    Solving the Demand Paradox for Ramen Nagi.
                  </Typography>
                  <Typography as="p" variant="bodyRegular" className="grid-card-description">
                    A grueling 2-hour wait experience was actively dismantling the product value.
                  </Typography>
                  <div className="card-arrow-btn light-theme">
                    <span className="cta-text">View case study</span>
                    <Icon icon="material-symbols:arrow-forward" className="arrow-icon" width="24" height="24" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 4: Loan App */}
            <Link to="/loan-app-experience-optimization" className={`grid-card-link ${showCaseStudies ? 'card-entrance-4' : 'card-hidden'}`}>
              <div className="grid-project-card">
                <div className="grid-card-image-container">
                  <img 
                    src="/v2/images/projects/loan-app-experience-optimization/panel-3-loan-application.png" 
                    alt="Fixing a loan application mockup" 
                    className="grid-card-image"
                  />
                </div>
                <div className="grid-card-content">
                  <Typography as="h3" variant="bodySemibold" className="grid-card-title">
                    Fixing a loan application that didn't trust its customers.
                  </Typography>
                  <Typography as="p" variant="bodyRegular" className="grid-card-description">
                    The loan application form wasn't the problem. What it was asking for was.
                  </Typography>
                  <div className="card-arrow-btn light-theme">
                    <span className="cta-text">View case study</span>
                    <Icon icon="material-symbols:arrow-forward" className="arrow-icon" width="24" height="24" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Selected Works Section - Max Width 720px */}
        <section className={`selected-works-section ${showCaseStudies ? 'selected-works-entrance' : 'selected-works-hidden'}`}>
          <Typography 
            as="div" 
            variant="smallRegular" 
            className="selected-works-label text-gray-600"
          >
            Selected works
          </Typography>


          <div className="selected-works-grid">
            {/* Card 1: Dashboards */}
            <Link to="/selected-works/dashboards" className="selected-works-card">
              <div className="selected-works-thumbnail">
                <img 
                  src="/v2/images/home/selected-works/selected-works-dashboards/New Business Submission Case Management - dark.png" 
                  alt="Dashboards preview" 
                  className="selected-works-thumb-img" 
                />
              </div>
              <div className="selected-works-card-content">
                <Typography as="span" variant="bodySemibold" className="selected-works-title">
                  Dashboards
                </Typography>
              </div>
              <div className="selected-works-btn">
                <span className="selected-works-cta-text">View</span>
                <Icon icon="material-symbols:arrow-forward" className="selected-works-arrow" width="24" height="24" />
              </div>
            </Link>

            {/* Card 2: Data Tables */}
            <Link to="/selected-works/data-tables" className="selected-works-card">
              <div className="selected-works-thumbnail">
                <img 
                  src="/v2/images/home/selected-works/selected-works-data-tables/Omnichannel Campaign Execution & Analytics Platform - 1.png" 
                  alt="Data Tables preview" 
                  className="selected-works-thumb-img" 
                />
              </div>
              <div className="selected-works-card-content">
                <Typography as="span" variant="bodySemibold" className="selected-works-title">
                  Data Tables
                </Typography>
              </div>
              <div className="selected-works-btn">
                <span className="selected-works-cta-text">View</span>
                <Icon icon="material-symbols:arrow-forward" className="selected-works-arrow" width="24" height="24" />
              </div>
            </Link>

            {/* Card 3: Data Extraction */}
            <Link to="/selected-works/data-extraction" className="selected-works-card">
              <div className="selected-works-thumbnail">
                <img 
                  src="/v2/images/home/selected-works/selected-works-data-extraction/Intelligent Document Extraction & Verification - 1.png" 
                  alt="Data Extraction preview" 
                  className="selected-works-thumb-img" 
                />
              </div>
              <div className="selected-works-card-content">
                <Typography as="span" variant="bodySemibold" className="selected-works-title">
                  Data Extraction
                </Typography>
              </div>
              <div className="selected-works-btn">
                <span className="selected-works-cta-text">View</span>
                <Icon icon="material-symbols:arrow-forward" className="selected-works-arrow" width="24" height="24" />
              </div>
            </Link>

            {/* Card 4: View all */}
            <Link to="/selected-works/dashboards" className="selected-works-card view-all-card">
              <div className="view-all-btn">
                <span className="view-all-text">View all</span>
                <div className="view-all-arrow-wrapper">
                  <Icon icon="material-symbols:arrow-forward" className="view-all-arrow" width="24" height="24" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
