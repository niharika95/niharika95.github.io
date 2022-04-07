import { Icon } from '@iconify/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Gutter, ProjectTitle } from '../../common';
import caseStudyData from './caseStudyData';

function Project() {
  const { pathname } = useLocation();

  const projectName = pathname.split('/').pop();
  const currentProject = caseStudyData[projectName];
  return (
    <div style={{ marginTop: 150 }}>
      <Gutter>
        <Back to="/">
          <Icon icon="ep:back" />
          Projects
        </Back>

        <ProjectInfo>
          <ProjectTitle color={currentProject.color}>{currentProject.title}</ProjectTitle>
          {/* <P>{currentProject.subtitle}</P> */}
          <P>{currentProject.description}</P>
        </ProjectInfo>

        <CaseStudyContainer>
          {currentProject?.caseStudyInfo?.map((item) => (
            <CaseStudyInfo>
              <CaseStudyHeader color={currentProject.color}>{item.title}</CaseStudyHeader>
              {item?.description && (
              <P>{item.description}</P>
              )}
              {item?.list && (
              <UL>
                {item.list.map((listItem) => (
                  <LI>{listItem}</LI>
                ))}
              </UL>
              )}
            </CaseStudyInfo>
          ))}
        </CaseStudyContainer>
      </Gutter>

      {currentProject.designInfo.map((designitem) => (
        <DesignInfo>
          <Gutter>
            <CaseStudyHeader color={currentProject.color}>{designitem.title}</CaseStudyHeader>
            <P>{designitem.description}</P>
            {designitem?.personas && (
            <PersonaContainer>
              {designitem.personas.map((persona) => (
                <PersonaImage src={persona.img} />
              ))}
            </PersonaContainer>
            )}
            <Element>{designitem?.element && designitem.element}</Element>
          </Gutter>
          {designitem?.img && (
            <ImageContainer>
              <Image src={designitem.img} />
            </ImageContainer>
          )}
        </DesignInfo>
      ))}
      <FooterSpace />
    </div>
  );
}

const Back = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 28px;
  color: #106066;
  text-decoration: none;
  column-gap: 12px;
  margin-bottom: 100px;
`;

const ProjectInfo = styled.div`
  margin-bottom: 48px;
`;

const P = styled.p`
  font-weight: 300;
  font-size: 20px;
`;

const CaseStudyContainer = styled.div`
  display: grid;
  grid-template-areas: 
    "full full full"
    "full2 full2 full2"
  ;
  grid-template-columns: 40% auto auto;
  grid-template-rows: auto;
  column-gap: 40px;
`;

const CaseStudyInfo = styled.div`
  :nth-child(1){
    grid-area: full;
  }
  :nth-child(2){
    grid-area: full2;
  }
  margin-bottom: 48px;
`;

const CaseStudyHeader = styled.h2`
  font-weight: 500;
  font-size: 20px;
  color: ${(props) => props.color}
`;

const UL = styled.ul``;

const LI = styled.li`
  font-weight: 300;
  font-size: 20px;
`;

const DesignInfo = styled.div``;

const ImageContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
  background: #f1f1f1;
`;

const Image = styled.img`
  width: 100%;
  background: #f1f1f1;
`;

const PersonaContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  margin-top: 48px;
  margin-bottom: 48px;
`;
const PersonaImage = styled.img`
  width: 70%;
  :nth-child(even){
    align-self: flex-end;
  }
`;

const Element = styled.div`
  margin-bottom: 48px;
`;

const FooterSpace = styled.div`
  width: 100%;
  height: 150px;
`;

export default Project;
