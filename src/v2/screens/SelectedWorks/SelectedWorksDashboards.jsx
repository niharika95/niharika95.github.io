import React from 'react';
import SelectedWorksLayout from './SelectedWorksLayout';
import Typography from '../../components/Typography';

const dashboardsData = [
  {
    title: 'Campaign & Audience Segmentation Platform',
    description: 'Design of a self-serve marketing platform for building target segments and launching campaigns. The tool guides users from cohort creation to multi-channel execution.',
    images: [
      '/v2/images/home/selected-works/selected-works-dashboards/Campaign & Audience Segmentation Platform.png'
    ]
  },
  {
    title: 'Operational Analytics Dashboard',
    description: 'Design of a real-time analytics dashboard that provides operations managers with visibility into system status, queue performance, agent metrics, and customer interaction volumes.',
    images: [
      '/v2/images/home/selected-works/selected-works-dashboards/Operational Analytics Dashboard.png'
    ]
  },
  {
    title: 'New Business Submission Case Management',
    description: 'Internal workflow application for insurance underwriters to manage and evaluate incoming new business submissions. The solution balances high information density with visual hierarchy, offering both light and dark modes to accommodate individual workspaces.',
    images: [
      '/v2/images/home/selected-works/selected-works-dashboards/New Business Submission Case Management - light.png',
      '/v2/images/home/selected-works/selected-works-dashboards/New Business Submission Case Management - dark.png'
    ]
  },
  {
    title: 'Interaction Intent Analytics Dashboard',
    description: 'This dashboard tracks customer intent across interactive voice response (IVR) and digital channels. It surfaces intent distribution, containment rates, and escalation paths to help designers optimize self-service interactions.',
    images: [
      '/v2/images/home/selected-works/selected-works-dashboards/Interaction Intent Analytics Dashboard.png'
    ]
  },
  {
    title: 'Financial Audit & Risk Management Dashboard',
    description: 'This dashboard provides financial auditors with a comprehensive view of audit progress, risk distribution, and compliance violations across business entities. The system aggregates risk exposure metrics to flag high-priority entities.',
    images: [
      '/v2/images/home/selected-works/selected-works-dashboards/Financial Audit & Risk Management Dashboard.png'
    ]
  }
];

export default function SelectedWorksDashboards() {
  return (
    <SelectedWorksLayout>
      <div className="selected-works-dashboards">
        <Typography as="h2" variant="h4Medium" className="category-title">
          Dashboards
        </Typography>

        <div className="dashboards-list">
          {dashboardsData.map((item, index) => (
            <section key={index} className="dashboard-project-item">
              <Typography as="h3" variant="h6Medium" className="project-title">
                {item.title}
              </Typography>
              <Typography as="p" variant="bodyRegular" className="project-description text-gray-900">
                {item.description}
              </Typography>


              <div className="project-images">
                {item.images.map((imgSrc, imgIdx) => (
                  <div key={imgIdx} className="dashboard-image-wrapper">
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
