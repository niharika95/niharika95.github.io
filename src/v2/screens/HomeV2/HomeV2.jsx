import React from 'react';
import { Link } from 'react-router-dom';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import Typography from '../../components/Typography';
import { Icon } from '@iconify/react';
import './HomeV2.css';

export default function HomeV2() {
  return (
    <div className="home-v2">
      <HeaderV2 />

      <main className="home-v2-container">
        {/* Intro Section - Max Width 720px */}
        <section className="intro-section">
          <Typography as="h1" variant="h4Regular" className="intro-headline">
            <span className="font-medium">From software engineer to product designer:</span>
            <br />
            <span className="font-light">a deliberate shift that shapes how I build systems.</span>
          </Typography>

          <div className="notebook-list">
            <div className="notebook-item">
              <div className="notebook-icon-wrapper">
                <Icon icon="material-symbols:done-all-rounded" className="notebook-check-icon" />
              </div>
              <div className="notebook-text">
                <strong>I design systems before fixing screens.</strong> The same way my calendar and to-do lists are built so nothing slips through.
              </div>
            </div>
            
            <div className="notebook-item">
              <div className="notebook-icon-wrapper">
                <Icon icon="material-symbols:done-all-rounded" className="notebook-check-icon" />
              </div>
              <div className="notebook-text">
                <strong>I trust consistency over intensity.</strong> A daily suryanamaskar & 1-min plank. Not to impress, but to never break the chain.
              </div>
            </div>
          </div>

          <Typography as="div" variant="smallRegular" className="case-studies-label text-gray-600">Case studies</Typography>
        </section>

        {/* Case Studies Section - Max Width 1040px */}
        <section className="case-studies-section">
          {/* Main Case Study (Insurance Redesign) */}
          <Link to="/insurance-company-website-redesign" className="main-card-link">
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
            {/* Card 1: Exposure Tool */}
            <Link to="/exposure-tool" className="grid-card-link">
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

            {/* Card 2: Ramen Nagi */}
            <Link to="/ramen-nagi" className="grid-card-link">
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

            {/* Card 3: Loan App */}
            <Link to="/loan-app-experience-optimization" className="grid-card-link">
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
      </main>
    </div>
  );
}
