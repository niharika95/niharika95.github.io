import React from 'react';
import { Link } from 'react-router-dom';
import SelectedWorksLayout from './SelectedWorksLayout';
import Typography from '../../components/Typography';

const mobileUIData = [
  {
    title: 'Restaurant Booking & Ordering App',
    description: (
      <>
        A streamlined mobile interface designed to eliminate wait times through virtual queuing, reservations, and pre-ordering. Developed from ideation to high-fidelity design using AI tools like Gemini, Figma AI, and Google Antigravity.{' '}
        <Link to="/ramen-nagi" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
          Read the full case study.
        </Link>
      </>
    ),
    images: [
      '/v2/images/home/selected-works/selected-works-mobile-ui/Ramen Nagi images/landing page.png?v=2',
      '/v2/images/home/selected-works/selected-works-mobile-ui/Ramen Nagi images/menu.png?v=2',
      '/v2/images/home/selected-works/selected-works-mobile-ui/Ramen Nagi images/QR code.png?v=2'
    ]
  },
  {
    title: 'Sports Event & Arena Companion App',
    description: 'A conversational mobile interface designed to elevate the live game day experience. It allows fans to instantly discover upcoming events, seamlessly book tickets, and navigate arena concessions to order food directly to their section.',
    images: [
      '/v2/images/home/selected-works/selected-works-mobile-ui/PBR images/events-transparent.png',
      '/v2/images/home/selected-works/selected-works-mobile-ui/PBR images/food-transparent.png',
      '/v2/images/home/selected-works/selected-works-mobile-ui/PBR images/ticket-transparent.png'
    ]
  },
  {
    title: 'Credit Card Application Flow',
    description: 'A streamlined digital application designed to help users navigate personal and financial disclosures with clarity. It uses a structured progress indicator and clean input layouts to guide applicants smoothly toward final approval and card acceptance.',
    images: [
      '/v2/images/home/selected-works/selected-works-mobile-ui/TD bank images/security.png?v=2',
      '/v2/images/home/selected-works/selected-works-mobile-ui/TD bank images/financial.png?v=2',
      '/v2/images/home/selected-works/selected-works-mobile-ui/TD bank images/approved.png?v=2'
    ]
  },
  {
    title: 'Mobile Lending & Verification Flow',
    description: (
      <>
        An optimized mobile banking experience designed to streamline complex loan selection. The flow reduces operational drop-offs by simplifying term selection with interactive sliders and offering step-wise progress towards final approval.{' '}
        <Link to="/loan-app-experience-optimization" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
          Read the full case study.
        </Link>
      </>
    ),
    images: [
      '/v2/images/home/selected-works/selected-works-mobile-ui/Loan app images/loan details.png?v=2',
      '/v2/images/home/selected-works/selected-works-mobile-ui/Loan app images/bank account details.png?v=2',
      '/v2/images/home/selected-works/selected-works-mobile-ui/Loan app images/approval.png?v=2'
    ]
  }
];

export default function SelectedWorksMobileUI() {
  return (
    <SelectedWorksLayout>
      <div className="selected-works-dashboards">
        <Typography as="h2" variant="h4Medium" className="category-title">
          Mobile UI
        </Typography>

        <div className="selected-works-list">
          {mobileUIData.map((item, index) => (
            <section key={index} className="dashboard-project-item">
              <Typography as="h3" variant="h6Medium" className="project-title">
                {item.title}
              </Typography>
              <Typography as="p" variant="bodyRegular" className="project-description text-gray-900">
                {item.description}
              </Typography>
              <div className="mobile-ui-grid">
                {item.images.map((imgSrc, imgIdx) => (
                  <div 
                    key={imgIdx} 
                    className={`mobile-ui-image-wrapper ${item.title === 'Sports Event & Arena Companion App' ? 'pbr-image-wrapper' : ''}`}
                  >
                    <img 
                      src={imgSrc} 
                      alt={`${item.title} preview ${imgIdx + 1}`} 
                      className="dashboard-preview-img"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </SelectedWorksLayout>
  );
}
