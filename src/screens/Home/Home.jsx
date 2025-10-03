/* eslint-disable max-len */

import { Gutter, ProjectTitle } from '../../common';

import { Icon } from '@iconify/react';
import React from 'react';
import femhealthImg from '../../assets/images/femhealth.png';
import niharikaProfileImg from '../../assets/images/niharikaProfileImg.png';
import quotesSymbol from '../../assets/images/quotes.png';
import svaasthyaImg from '../../assets/images/svaasthya.png';
import swiftbikesImg from '../../assets/images/swiftbikes.png';

const projects = [
  {
    img: femhealthImg,
    title: 'FemHealth',
    description: 'A platform for Women to get access to Health Resources',
    href: '#/project/femhealth',
    color: '#3E122D',
  },
  {
    img: swiftbikesImg,
    title: 'Swift Bikes',
    description: 'An online solution to buying Custom Bikes',
    href: '#/project/swiftbikes',
    color: '#FF980A',
  },
  {
    img: svaasthyaImg,
    title: 'Svaasthya',
    description: 'A Support Chatbot for a Hospital in India',
    href: '#/project/svaasthya',
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
    href: '#/resume',
  },
];

const recommendations = [
  {
    message: 'Niharika interned for us at Alstom Signaling during the winter of 2018, and she was by far one of our best!  I was so impressed with how quickly she learned!  The tasks she was given were quite complex, but she completed all of them with such efficiency. She was always motivated, had a strong desire to contribute, and never hesitated to ask questions to better learn her responsibilities.  In fact, I struggled to keep her busy!  I’m very grateful for her time with us. I would be very happy to have her back one day.',
    name: 'Chris Brucker',
    job: 'Application Engineer | Alstom',
  },
  {
    message: 'Niharika joined Alstom as coop for RIT for a full quarter and she worked for the Automation and Simulators department. Fast learner, not afraid to take on new challenges, proactive with good initiative and easy to work with!',
    name: 'Ralph Ades',
    job: 'Director of Automation Tools & Simulators (Retired) | Alstom',
  },
];

function Home() {
  return (
    <Gutter className="pt-[100px]">
      <div className="mt-[100px]">
        <h1 className="text-[60px] font-light m-0 leading-[72px]">Hi, I'm Niharika</h1>
        <h2 className="text-[28px] leading-[34px] font-light mt-[12px] mb-0">a UX designer with a zeal for designing intuitive user interfaces</h2>
      </div>
      <div id="projects" className="mt-[120px]">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`mt-[150px] flex gap-[100px] justify-center items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} max-[600px]:flex-col`}
          >
            <img src={project.img} alt={project.title} className="max-w-[600px] max-[600px]:w-full" />
            <div className={`flex flex-col gap-[20px] ${i % 2 === 0 ? 'text-left items-start' : 'text-right items-end'}`}>
              <ProjectTitle color={project.color}>{project.title}</ProjectTitle>
              <p className="text-[28px] font-light">{project.description}</p>
              <a
                onClick={() => window.scrollTo({ top: 0 })}
                href={project.href}
                style={{ color: project.color }}
                className="flex items-center gap-[8px] no-underline text-[20px] font-medium"
              >
                Case study
                <Icon color={project.color} icon="ep:right" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[100px] mb-[100px] ml-[247px] mr-[247px] border-t border-[var(--color-border-muted)] max-[600px]:ml-[48px] max-[600px]:mr-[48px]" />
      <div id="about" className="flex justify-center mb-[120px] max-[600px]:flex-col-reverse max-[600px]:mb-[80px]">
        <div>
          <p className="italic text-[28px] max-w-[796px] text-[var(--color-brand-primary)]">
            I believe that an intuitive, organized and detail-attentive design is what gives the user a seamless experience.
          </p>
          <p className="text-[20px] font-light leading-[30px] max-w-[550px]">
            I'm passionate about creating minimal yet intuitive designs for diverse digital interfaces.
            <br />
            <br />
            I started off as a Front-end Developer and my interest in implementing user interfaces came from designing simple and intuitive ones. With a Master's degree in Software Engineering, I have experience developing digital interfaces and have also learned a lot about UX design through professional and personal projects and the Google UX Design certification.
            <br />
            <br />
            When I'm not coding or designing, I like to sit with a thriller novel or with some paints and a canvas!
          </p>
          <div className="flex flex-col gap-[12px] mt-[60px]">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                target={link.target}
                href={link.href}
                className="font-light text-[20px] no-underline text-black flex gap-[12px] items-center hover:underline"
              >
                <Icon color="#106066" icon={link.icon} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <img src={niharikaProfileImg} alt="profile" className="w-[600px] max-[600px]:w-full" />
        </div>
      </div>
      <div className="text-center">
        <p className="text-[28px] mb-[60px] max-[600px]:mb-[40px]">Recommendations</p>
        <div id="recommendations" className="inline-flex mb-[150px] justify-between max-w-[1396px] max-[600px]:block max-[600px]:mb-[100px]">
          {recommendations.map((recommendation, i) => (
            <div key={`${recommendation.name}-${i}`} className="flex w-[45%] text-left max-[600px]:w-full max-[600px]:mb-[80px]">
              <img src={quotesSymbol} alt="quote" className="h-[28px] mr-[12px]" />
              <div>
                <p className="text-[16px] italic font-light mt-0">{recommendation.message}</p>
                <div className="flex">
                  <div className="w-[10px] bg-[var(--color-brand-primary)] opacity-20 h-auto mr-[8px]" />
                  <div>
                    <p className="text-[18px] font-normal m-0">{recommendation.name}</p>
                    <p className="text-[16px] font-light m-0">{recommendation.job}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Gutter>
  );
}

export default Home;
