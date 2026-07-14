import React from 'react';
import SelectedWorksLayout from './SelectedWorksLayout';
import Typography from '../../components/Typography';

const dataTablesData = [
  {
    title: 'Omnichannel Campaign Execution & Analytics Platform',
    description: 'This interface visualizes active campaign analytics alongside structured list views, prioritizing clean typography and robust search filtering to help operations teams monitor performance.',
    images: [
      '/v2/images/home/selected-works/selected-works-data-tables/Omnichannel Campaign Execution & Analytics Platform - 1.png',
      '/v2/images/home/selected-works/selected-works-data-tables/Omnichannel Campaign Execution & Analytics Platform - 2.png'
    ]
  },
  {
    title: 'Job Queue & Process Monitoring Platform',
    description: 'High-density operations dashboard for real-time background job execution tracking. The tabular view surfaces system logs, task durations, queue ordering, and retry triggers.',
    images: [
      '/v2/images/home/selected-works/selected-works-data-tables/Job Queue & Process Monitoring Platform.png'
    ]
  },
  {
    title: 'Enterprise Task Management & Validation Ledger',
    description: 'Audit interface that surfaces pending task items and verification ledger history. The grid layout optimizes row densities and action item wayfinding for rapid review workflows.',
    images: [
      '/v2/images/home/selected-works/selected-works-data-tables/Enterprise Task Management & Validation Ledger.png'
    ]
  },
  {
    title: 'Document Generation & Asset Management Data Table',
    description: 'This document-centric interface manages asset generation states and distribution queues. The table surfaces template versions, document formats, delivery channels, and recipient metrics.',
    images: [
      '/v2/images/home/selected-works/selected-works-data-tables/Document Generation & Asset Management Data Table.png'
    ]
  },
  {
    title: 'Financial Data Extraction',
    description: 'Data auditing portal that showcases tabular summaries alongside extracted line item details, emphasizing precise cell alignments, status badges, and vertical grid structures.',
    images: [
      '/v2/images/home/selected-works/selected-works-data-tables/Financial Data Extraction.png'
    ]
  },
  {
    title: 'User Management & Service Configuration',
    description: 'Settings view that manages system permissions and service allocations. The interface displays active user counts, role mappings, authentication methods, and direct profile controls.',
    images: [
      '/v2/images/home/selected-works/selected-works-data-tables/User Management & Service Configuration.png'
    ]
  }
];

export default function SelectedWorksDataTables() {
  return (
    <SelectedWorksLayout>
      <div className="selected-works-dashboards">
        <Typography as="h2" variant="h4Medium" className="category-title">
          Data Tables
        </Typography>

        <div className="selected-works-list">
          {dataTablesData.map((item, index) => (
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
