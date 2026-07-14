import React from 'react';
import SelectedWorksLayout from './SelectedWorksLayout';
import Typography from '../../components/Typography';

const dataExtractionData = [
  {
    title: 'Intelligent Document Extraction & Verification',
    description: 'Designed to automate document processing workflows, this interactive document viewer enables users to cross-reference digitized textual information against original unstructured assets and modify parsed fields directly.',
    images: [
      '/v2/images/home/selected-works/selected-works-data-extraction/Intelligent Document Extraction & Verification - 1.png',
      '/v2/images/home/selected-works/selected-works-data-extraction/Intelligent Document Extraction & Verification - 2.png'
    ]
  },
  {
    title: 'Automated Check Extraction & Fraud Analysis Platform',
    description: 'This interface handles check extraction workflows by pulling data from scanned check images and comparing them against verification scores for criteria like signature validity and handwriting alterations to help risk teams evaluate check integrity.',
    images: [
      '/v2/images/home/selected-works/selected-works-data-extraction/Automated Check Extraction & Fraud Analysis Platform.png'
    ]
  },
  {
    title: 'Multi-Page Document Data Extraction Portal',
    description: 'This interface handles data extraction from unstructured multi-page documents, utilizing a split-screen layout that allows users to review categorized data fields directly alongside the original file while displaying confidence scores for each extracted item.',
    images: [
      '/v2/images/home/selected-works/selected-works-data-extraction/Multi-Page Document Data Extraction Portal.png'
    ]
  }
];

export default function SelectedWorksDataExtraction() {
  return (
    <SelectedWorksLayout>
      <div className="selected-works-dashboards">
        <Typography as="h2" variant="h4Medium" className="category-title">
          Data Extraction
        </Typography>

        <div className="selected-works-list">
          {dataExtractionData.map((item, index) => (
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
