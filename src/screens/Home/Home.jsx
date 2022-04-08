/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import femhealthImg from '../../assets/images/femhealth.png';
import swiftbikesImg from '../../assets/images/swiftbikes.png';
import svaasthyaImg from '../../assets/images/svaasthya.png';
import niharikaProfileImg from '../../assets/images/niharikaProfileImg.png';
import { Gutter, ProjectTitle } from '../../common';

const projects = [
  {
    img: femhealthImg,
    title: 'FemHealth',
    description: 'A platform for Women to get access to Health Resources',
    href: '/project/femhealth',
    color: '#3E122D',
  },
  {
    img: swiftbikesImg,
    title: 'Swift Bikes',
    description: 'An online solution to buying Custom Bikes',
    href: '/project/swiftbikes',
    color: '#FF980A',
  },
  {
    img: svaasthyaImg,
    title: 'Svaasthya',
    description: 'A Support Chatbot for a Hospital in India',
    href: '/project/svaasthya',
    color: '#1D5D82',
  },
];

const contactLinks = [
  {
    icon: 'clarity:email-solid',
    label: 'niharika13dalal@gmail.com',
    href: 'mailto:niharika13dalal@gmail.com',
    target: '_blank',
  },
  {
    icon: 'akar-icons:linkedin-fill',
    label: '/niharikadalal',
    href: 'https://www.linkedin.com/in/niharikadalal/',
    target: '_blank',
  },
  {
    icon: 'ant-design:file-text-filled',
    label: 'Resume (pdf)',
    href: '/resume',
  },
];

function Home() {
  return (
    <Gutter>
      {/* <ComingSoonContainer>
        <ComingSoonTitle>Coming soon!</ComingSoonTitle>
        <ComingSoonSubtitle>The mobile version of the portfolio is in progress but is coming soon!</ComingSoonSubtitle>
      </ComingSoonContainer> */}

      <SubHeader>
        <Title>Hi, I&apos;m Niharika</Title>
        <SubTitle>a UX designer with a zeal for designing intuitive user interfaces</SubTitle>
      </SubHeader>
      <Projects id="projects">
        {projects.map((project, i) => (
          <Project>
            <ProjectImage src={project.img} />
            <ProjectDetails iteration={i}>
              <ProjectTitle color={project.color}>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink iteration={i} color={project.color} href={project.href}>
                Case study
                <Icon color={project.color} icon="ep:right" />
              </ProjectLink>
            </ProjectDetails>
          </Project>
        ))}
      </Projects>
      <Line />
      <AboutContainer id="about">
        <Left>
          <Quote>I believe that an intuitive, organized and detail-attentive design is what gives the user a seamless experience.</Quote>
          <P>
            I&apos;m passionate about creating minimal yet intuitive designs for diverse digital interfaces.
            <br />
            <br />
            I started off as a Front-end Developer and my interest in implementing user interfaces came from designing simple and intuitive ones. With a Master&apos;s degree in Software Engineering, I have experience developing digital interfaces and have also learned a lot about UX design through professional and personal projects and the Google UX Design certification.
            <br />
            <br />
            When I&apos;m not coding or designing, I like to sit with a thriller novel or with some paints and a canvas!
          </P>
          <ContactLinks>
            {contactLinks.map((link) => (
              <ContactLink target={link.target} href={link.href}>
                <Icon color="106066" icon={link.icon} />
                {link.label}
              </ContactLink>
            ))}
          </ContactLinks>
        </Left>
        <Right>
          <ProfileImage src={niharikaProfileImg} />
        </Right>
      </AboutContainer>
    </Gutter>
  );
}

// const ComingSoonContainer = styled.div`
//   margin-top: 600px;
//   margin-bottom: 600px;
//   width: 100%;
// `;

// const ComingSoonTitle = styled.h1`
//   font-size: 40px;
//   font-weight: 300;
//   margin: 0px;
// `;

// const ComingSoonSubtitle = styled.h2`
//   font-size: 20px;
//   font-weight: 300;
//   margin: 0px;
// `;

// SubHeader
const SubHeader = styled.div`
  margin-top: 200px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 300;
  margin: 0px;
  line-height: 72px;
`;

const SubTitle = styled.h2`
  font-size: 28px;
  line-height: 34px;
  font-weight: 300;
  margin-top: 12px;
  margin-bottom: 0px;
`;

const Projects = styled.div`
  margin-top: 120px;
`;

const Project = styled.div`
  margin-top: 150px;
  display: flex;
  column-gap: 100px;
  justify-content: center;
  align-items: center;
  :nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const ProjectImage = styled.img`
  max-width: 600px;
`;

const ProjectDetails = styled.div`
  text-align: ${(props) => (props.iteration % 2 === 0 ? 'left' : 'right')};
`;

const ProjectDescription = styled.p`
  font-size: 28px;
  font-weight: 300;
`;

const ProjectLink = styled.a`
  column-gap: 8px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.color};
  font-size: 20px;
  font-weight: 500;
  float: ${(props) => (props.iteration % 2 === 0 ? 'left' : 'right')};
`;

const Line = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 247px;
  margin-right: 247px;
  border-top: 1px solid #D6D6D6;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
`;

const ProfileImage = styled.img`
  width: 600px;
`;

const Quote = styled.p`
  font-style: italic;
  font-size: 28px;
  max-width: 796px;
  color: #106066;
`;

const P = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  max-width: 550px;
`;

const Right = styled.div``;

const Left = styled.div``;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 60px;
`;

const ContactLink = styled.a`
  font-weight: 300;
  font-size: 20px;
  text-decoration: none;
  color: black;
  display: flex;
  column-gap: 12px;
  align-items: center;
  :hover{
    text-decoration: underline;
  }
`;

export default Home;
