import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Typography from '../Typography/Typography';
import './MoreCaseStudies.css';

const ALL_CASE_STUDIES = [
  {
    id: 'insurance',
    title: 'Rethinking the website of a $1 billion-bound insurance company.',
    description: "The navigation wasn't broken; it had never considered one of its two audiences.",
    image: '/v2/images/projects/insurance-company-website-design/Insurance - thumbnail.png',
    link: '/insurance-company-website-redesign',
    imageContainerClass: '',
    imageClass: '',
    alt: 'Insurance company website redesign mockup'
  },
  {
    id: 'exposure',
    title: 'Aligning system architecture with user mental models in a high-density financial tool.',
    description: 'Disjointed pages treated identical datasets as separate workflows.',
    image: '/v2/images/projects/exposure-tool/exposure-thumbnail.png',
    link: '/exposure-tool',
    imageContainerClass: 'exposure-image-container',
    imageClass: 'exposure-image',
    alt: 'Financial tool system architecture table mockup'
  },
  {
    id: 'ramen',
    title: 'Solving the Demand Paradox for Ramen Nagi.',
    description: 'A grueling 2-hour wait experience was actively dismantling the product value.',
    image: '/v2/images/projects/ramen-nagi/ramen-nagi-thumbnail.png',
    link: '/ramen-nagi',
    imageContainerClass: '',
    imageClass: 'ramen-nagi-image',
    alt: 'Solving the Demand Paradox for Ramen Nagi mockup'
  },
  {
    id: 'loan',
    title: "Fixing a loan application that didn't trust its customers.",
    description: "The loan application form wasn't the problem. What it was asking for was.",
    image: '/v2/images/projects/loan-app-experience-optimization/panel-3-loan-application.png',
    link: '/loan-app-experience-optimization',
    imageContainerClass: '',
    imageClass: '',
    alt: 'Fixing a loan application mockup'
  }
];

const RECOMMENDATIONS = {
  insurance: ['exposure', 'ramen'],
  exposure: ['insurance', 'ramen'],
  ramen: ['insurance', 'loan'],
  loan: ['insurance', 'exposure']
};

export default function MoreCaseStudies({ currentId }) {
  const recommendedIds = RECOMMENDATIONS[currentId] || [];
  const recommendedStudies = recommendedIds
    .map(id => ALL_CASE_STUDIES.find(cs => cs.id === id))
    .filter(Boolean);

  return (
    <div className="more-case-studies">
      <div className="more-case-studies-divider" />
      <div className="more-case-studies-title">
        <Typography variant="h5Regular">More case studies</Typography>
      </div>
      <div className="more-case-studies-grid">
        {recommendedStudies.map((cs) => (
          <Link key={cs.id} to={cs.link} className="grid-card-link">
            <div className="grid-project-card">
              <div className={`grid-card-image-container ${cs.imageContainerClass}`}>
                <img 
                  src={cs.image} 
                  alt={cs.alt} 
                  className={`grid-card-image ${cs.imageClass}`}
                />
              </div>
              <div className="grid-card-content">
                <Typography as="h3" variant="bodySemibold" className="grid-card-title">
                  {cs.title}
                </Typography>
                <Typography as="p" variant="bodyRegular" className="grid-card-description">
                  {cs.description}
                </Typography>
                <div className="card-arrow-btn light-theme">
                  <span className="cta-text">View case study</span>
                  <Icon icon="material-symbols:arrow-forward" className="arrow-icon" width="24" height="24" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
