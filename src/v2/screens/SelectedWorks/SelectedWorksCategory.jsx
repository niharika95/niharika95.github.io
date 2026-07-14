import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '../../components/Typography';
import SelectedWorksLayout from './SelectedWorksLayout';
import {
  getSelectedWorkCategory,
  getSelectedWorkImageId
} from './selectedWorksCatalog';

export default function SelectedWorksCategory({ categorySlug }) {
  const category = getSelectedWorkCategory(categorySlug);

  if (!category) return null;

  return (
    <SelectedWorksLayout>
      <div className="selected-works-dashboards">
        <Typography as="h2" variant="h4Medium" className="category-title">
          {category.label}
        </Typography>

        <div className={categorySlug === 'dashboards' ? 'dashboards-list' : 'selected-works-list'}>
          {category.items.map((item) => {
            const display = item.display || category.display;

            return (
              <section key={item.slug} className="dashboard-project-item">
                <Typography as="h3" variant="h6Medium" className="project-title">
                  {item.title}
                </Typography>
                <Typography as="p" variant="bodyRegular" className="project-description text-gray-900">
                  {item.description}{' '}
                  {item.caseStudyPath && (
                    <Link
                      to={item.caseStudyPath}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      Read the full case study.
                    </Link>
                  )}
                </Typography>

                <div className={display === 'mobile' ? 'mobile-ui-grid' : 'project-images'}>
                  {item.images.map((src, imageIndex) => {
                    const imageId = getSelectedWorkImageId(category.slug, item.slug, imageIndex);

                    return (
                      <div
                        id={imageId}
                        key={imageId}
                        className={display === 'mobile'
                          ? `mobile-ui-image-wrapper ${item.imageStyle === 'pbr' ? 'pbr-image-wrapper' : ''}`
                          : 'dashboard-image-wrapper'}
                        data-selected-work-image
                        tabIndex="-1"
                      >
                        <img
                          src={src}
                          alt={`${item.title} preview ${imageIndex + 1}`}
                          className="dashboard-preview-img"
                          loading="lazy"
                        />
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </SelectedWorksLayout>
  );
}
