import { ContentContainer, Gutter, ProjectTitle } from '../../common';
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

import { Icon } from '@iconify/react';
import caseStudyData from './caseStudyData';
import { trackProjectView } from '../../utils/analytics';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';

function Project() {
  const { pathname } = useLocation();

  const projectName = pathname.split('/').pop();
  const currentProject = caseStudyData[projectName];
  
  // Determine project type (personal or professional)
  const personalProjects = ['femhealth', 'swiftbikes', 'svaasthya'];
  const projectType = personalProjects.includes(projectName) ? 'personal' : 'professional';

  // Track enhanced page view with project context
  useAnalytics('project_detail', {
    projectName,
    projectType
  });
  
  // Track scroll depth and time on page
  useScrollTracking();
  useTimeTracking();

  // Track project view event
  useEffect(() => {
    if (currentProject) {
      trackProjectView(projectName, {
        ...currentProject,
        project_type: projectType
      });
    }
  }, [projectName, currentProject, projectType]);
  return (
    <ContentContainer className="pt-[100px] mt-[100px]">
      <Gutter>
        <Link
          to="/"
          className="flex items-center text-[28px] text-[var(--color-brand-primary)] no-underline gap-[12px] mb-[100px]"
        >
          <Icon icon="ep:back" />
          Projects
        </Link>

        <div className="mb-[48px]">
          <ProjectTitle color={currentProject.color}>{currentProject.title}</ProjectTitle>
          {/* <P>{currentProject.subtitle}</P> */}
          <p className="font-light text-[20px]">{currentProject.description}</p>
        </div>

        <div className="grid [grid-template-columns:40%_auto_auto] [grid-template-rows:auto] gap-x-[40px] max-[600px]:flex max-[600px]:flex-col">
          {currentProject?.caseStudyInfo?.map((item, idx) => (
            <div key={idx} className="mb-[48px] col-span-full">
              <h2 className="font-medium text-[20px]" style={{ color: currentProject.color }}>
                {item.title}
              </h2>
              {item?.description && <p className="font-light text-[20px]">{item.description}</p>}
              {item?.list && (
                <ul>
                  {item.list.map((listItem, li) => (
                    <li key={li} className="font-light text-[20px]">
                      {listItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Gutter>

      {currentProject.designInfo.map((designitem, di) => (
        <div key={di}>
          <Gutter>
            <h2 className="font-medium text-[20px]" style={{ color: currentProject.color }}>
              {designitem.title}
            </h2>
            <p className="font-light text-[20px]">{designitem.description}</p>
            {designitem?.personas && (
              <div className="flex flex-col gap-[60px] mt-[48px] mb-[48px]">
                {designitem.personas.map((persona, pi) => (
                  <img
                    key={pi}
                    src={persona.img}
                    className={`w-[70%] max-[600px]:w-full ${pi % 2 === 1 ? 'self-end' : ''}`}
                  />
                ))}
              </div>
            )}
            <div className="mb-[48px]">{designitem?.element && designitem.element}</div>
          </Gutter>
          {designitem?.img && (
            <div className="pt-[50px] pb-[50px] pl-[10px] pr-[10px] bg-[#f1f1f1] mb-[48px]">
              <img src={designitem.img} className="w-full bg-[#f1f1f1]" />
            </div>
          )}
        </div>
      ))}
      <div className="w-full h-[150px]" />
    </ContentContainer>
  );
}

export default Project;
