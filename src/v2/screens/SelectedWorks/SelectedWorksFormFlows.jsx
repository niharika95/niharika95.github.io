import React from 'react';
import SelectedWorksLayout from './SelectedWorksLayout';
import Typography from '../../components/Typography';

const formFlowsData = [
  {
    title: 'Multi-Step Insurance Quote & Enrollment Flow',
    description: 'This dynamic multi-step flow guides users through purchasing insurance policies, featuring interactive fields and calculators.',
    images: [
      '/v2/images/home/selected-works/selected-works-form-flows/Multi-Step Insurance Quote & Enrollment Flow.png'
    ]
  },
  {
    title: 'Omnichannel Campaign Creation Flow',
    description: 'This wizard-style interface simplifies complex digital marketing campaign setup by guiding users through parameters, audience targeting, channels, and budget configurations.',
    images: [
      '/v2/images/home/selected-works/selected-works-form-flows/Omnichannel Campaign Creation Flow.png'
    ]
  },
  {
    title: 'Insurance Claim Submission Form',
    description: 'Internal and external portal for filing insurance claims, emphasizing clean form layouts, validation states, and document upload functionality.',
    images: [
      '/v2/images/home/selected-works/selected-works-form-flows/Insurance Claim Submission Form.png'
    ]
  }
];

export default function SelectedWorksFormFlows() {
  return (
    <SelectedWorksLayout>
      <div className="selected-works-dashboards">
        <Typography as="h2" variant="h4Medium" className="category-title">
          Form Flows
        </Typography>

        <div className="selected-works-list">
          {formFlowsData.map((item, index) => (
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
