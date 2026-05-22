import { DecorativeDots, StrokeAnimation } from '../../common';

import { Icon } from '@iconify/react';
import React from 'react';
import femhealthHifiWireframesDesktop1 from '../../assets/images/femhealthHifiWireframesDesktop1.png';
import femhealthHifiWireframesDesktop2 from '../../assets/images/femhealthHifiWireframesDesktop2.png';
import femhealthHifiWireframesDesktop3 from '../../assets/images/femhealthHifiWireframesDesktop3.png';
import femhealthHifiWireframesDesktop4 from '../../assets/images/femhealthHifiWireframesDesktop4.png';
import femhealthHifiWireframesMobile from '../../assets/images/femhealthHifiWireframesMobile.png';
import femhealthHifiWireframesTablet from '../../assets/images/femhealthHifiWireframesTablet.png';
import femhealthImg from '../../assets/images/femhealth.png';
import femhealthLofiWireframesDesktop from '../../assets/images/femhealthLofiWireframesDesktop.png';
import femhealthLofiWireframesMobile from '../../assets/images/femhealthLofiWireframesMobile.png';
import femhealthPaperWireframes from '../../assets/images/femhealthPaperWireframes.png';
import femhealthPersona1Julia from '../../assets/images/femhealthPersona1Julia.png';
import femhealthPersona2Eve from '../../assets/images/femhealthPersona2Eve.png';
import femhealthUserflow from '../../assets/images/femhealthUserflow.png';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';

// Import images







// Reusable components for this case study's theme
const Tag = ({ children }) => (
  <span className='bg-[#f4e4ed] text-black rounded-full px-4 py-1 text-sm font-medium'>
    {children}
  </span>
);

const ContentContainer = ({ children, className }) => (
  <div className={`max-w-[1440px] mx-auto px-5 lg:px-[100px] ${className || ''}`}>
    {children}
  </div>
);

const FemHealth = () => {
  // Track page view, scroll depth, and time on page
  useAnalytics('project_detail', {
    projectName: 'femhealth',
    projectType: 'personal'
  });
  useScrollTracking();
  useTimeTracking();

  const tags = [
    'Figma',
    'Paper Wireframing',
    'Google Jamboard',
    'UX Research',
    'UX Design',
    'Interaction Design',
    'Visual Design',
  ];

  const painPoints = [
    'Consultations are expensive',
    'Many clinics do not accept specific insurance and not sure how to find those clinics which do',
    'It is awkward to talk about female health problems',
    'Looking for answers to health related questions online is not reliable',
  ];

  return (
    <div className='relative bg-white text-gray-900 font-sans'>
      {/* Hero: Purple background */}
      <header className='w-full bg-[#3E122D]'>
        <ContentContainer className='relative flex flex-col md:flex-row'>
          <div className='text-white max-w-2xl py-5 md:py-[50px] lg:py-[100px]'>
            <h1 className='font-playfair text-4xl md:text-5xl font-extrabold leading-tight tracking-tight'>
              FemHealth
            </h1>
            <p className='font-mulish text-lg md:text-xl mt-4 opacity-95'>
              A platform helping women access <StrokeAnimation strokeColor="D97706">reliable health information anonymously</StrokeAnimation> and find clinics accepting their insurance.
            </p>
            <div className='flex flex-wrap gap-2 mt-6'>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <img
            src={femhealthImg}
            alt='FemHealth Hero'
            className='w-full max-w-[600px] self-end h-auto object-contain max-h-[500px]'
          />
          <DecorativeDots color="3E122D" position="top-left" />
        </ContentContainer>
      </header>

      <main className='w-full'>
        {/* Meta row */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <div className='grid grid-cols-[auto,1fr] justify-start gap-x-4 gap-y-4 items-start'>
              {/* Role */}
              <div className='col-start-1 flex items-center whitespace-nowrap'>
                <Icon
                  icon='material-symbols:person-outline'
                  className='text-2xl text-black mr-4'
                />
                <h3 className='font-mulish font-bold text-lg'>Role:</h3>
              </div>
              <p className='font-mulish col-start-2 text-gray-600 text-lg'>
                UX Researcher, UX Designer, Interaction Designer, Visual Designer
              </p>

              {/* Tools */}
              <div className='col-start-1 flex items-center whitespace-nowrap'>
                <Icon
                  icon='material-symbols:build-outline'
                  className='text-2xl text-black mr-4'
                />
                <h3 className='font-mulish font-bold text-lg'>Tools:</h3>
              </div>
              <p className='font-mulish col-start-2 text-gray-600 text-lg'>
                Figma, Paper (wireframing), Google Jamboard
              </p>

              {/* Type */}
              <div className='col-start-1 flex items-center whitespace-nowrap'>
                <Icon
                  icon='mdi:tag-outline'
                  className='text-2xl text-black mr-4'
                />
                <h3 className='font-mulish font-bold text-lg'>Type:</h3>
              </div>
              <p className='font-mulish col-start-2 text-gray-600 text-lg'>Personal Project</p>
            </div>
          </ContentContainer>
        </section>

        <div>
          <ContentContainer>
            <hr className='border-[#f4e4ed] mb-12' />
          </ContentContainer>
        </div>

        {/* Context & Goal */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="3E122D" position="top-right" />
            <div className='flex flex-col gap-12'>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>Context</h2>
                <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
                  It can often be awkward for women to talk about their health problems. Health consultations can be expensive and sometimes it is difficult to find clinics that accept certain insurances. And while looking for answers online can help, it is not always reliable. FemHealth is a platform for women of all ages which provides them with access to information related to their health and answers to health related questions from verified sources.
                </p>
              </div>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>Goal</h2>
                <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
                  The goal of this product is to help women feel comfortable when asking health related questions, provide resources to help them maintain a healthy lifestyle, and locate clinics near their area that accept the medical insurance they have.
                </p>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Pain Points: full-width purple band */}
        <section className='w-full bg-[#3E122D] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <div className='grid md:grid-cols-3 gap-8 items-start'>
              <h2 className='font-playfair text-2xl md:text-3xl font-bold self-center'>
                Pain Points
              </h2>
              <div className='md:col-span-2'>
                <ul className='font-mulish list-disc list-inside text-lg leading-relaxed space-y-3 opacity-90'>
                  {painPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* User Research & Personas */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="3E122D" position="top-right" />
            <div className='flex flex-col gap-12'>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>User Research</h2>
                <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
                  The user research for this project was done by sending out surveys to women between the ages of 20 and 60. The questions in the survey were based around how their experience (if any) had been getting help regarding women's health problems.
                </p>
                <p className='font-mulish text-lg leading-relaxed mt-4 max-w-[800px]'>
                  Women of all ages who have health questions they want answered anonymously or get access to information to lead a healthy lifestyle.
                </p>
              </div>
              <div>
                <h3 className='font-playfair text-2xl font-bold mb-6'>User Personas</h3>
                <div className='flex flex-col md:flex-row gap-4'>
                  <img src={femhealthPersona1Julia} alt='Persona 1 - Julia' className='w-full md:w-1/2 h-auto' />
                  <img src={femhealthPersona2Eve} alt='Persona 2 - Eve' className='w-full md:w-1/2 h-auto' />
                </div>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* User Flow */}
        <section className='w-full bg-[#f5f5f5] py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>User Flow</h2>
            <p className='font-mulish text-lg leading-relaxed mb-8 max-w-[800px]'>
              Designing the user flow helped organize the features and their hierarchy in the app. The high-level details of each screen made it easier to draw a mental picture of the components.
            </p>
            <img src={femhealthUserflow} alt='FemHealth User Flow' className='w-full h-auto' />
          </ContentContainer>
        </section>

        {/* Lo-Fi Wireframes */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="3E122D" position="top-right" />
            <h2 className='font-playfair text-3xl font-bold mb-4'>Lo-Fi Wireframes</h2>
            <p className='font-mulish text-lg leading-relaxed mb-8 max-w-[800px]'>
              Started off with some paper wireframes to create quick drafts of what some of the screens might look like; including different ideas for layouts of elements on the screens.
            </p>
            <img src={femhealthPaperWireframes} alt='Paper Wireframes' className='w-full h-auto mb-12' />
            
            <p className='font-mulish text-lg leading-relaxed mb-8 max-w-[800px]'>
              The next step was to create digital wireframes for all screens. A combination of layouts from the paper wireframes helped with deciding the design for the digital wireframes.
            </p>
            <img src={femhealthLofiWireframesMobile} alt='Mobile Wireframes' className='w-full h-auto mb-8' />
            <img src={femhealthLofiWireframesDesktop} alt='Desktop Wireframes' className='w-full h-auto' />
          </ContentContainer>
        </section>

        {/* Hi-Fi Wireframes */}
        <section className='w-full bg-[#f5f5f5] py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>Hi-Fi Wireframes</h2>
            <p className='font-mulish text-lg leading-relaxed mb-8 max-w-[800px]'>
              Once the wireframes were ready, adding some color and functionality to them was the next step. As an app being designed to make lives of women easier, I also thought that it needed to make women feel strong and provide a positive boost. Using a combination of dark purple and orange would bring out feelings of sophistication and boldness.
            </p>
            <div className='flex flex-col gap-8'>
              <img src={femhealthHifiWireframesDesktop1} alt='Hi-Fi Desktop 1' className='w-full h-auto' />
              <img src={femhealthHifiWireframesDesktop2} alt='Hi-Fi Desktop 2' className='w-full h-auto' />
              <img src={femhealthHifiWireframesDesktop3} alt='Hi-Fi Desktop 3' className='w-full h-auto' />
              <img src={femhealthHifiWireframesDesktop4} alt='Hi-Fi Desktop 4' className='w-full h-auto' />
            </div>
            
            <h3 className='font-playfair text-2xl font-bold mt-12 mb-6'>Mobile and Tablet Screens</h3>
            <div className='flex flex-col md:flex-row gap-8'>
              <img src={femhealthHifiWireframesMobile} alt='Mobile Screens' className='w-full md:w-1/2 h-auto' />
              <img src={femhealthHifiWireframesTablet} alt='Tablet Screens' className='w-full md:w-1/2 h-auto' />
            </div>
          </ContentContainer>
        </section>

        {/* Prototype */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="3E122D" position="top-right" />
            <h2 className='font-playfair text-3xl font-bold mb-4'>Prototype</h2>
            <p className='font-mulish text-lg leading-relaxed mb-8 max-w-[800px]'>
              Explore the interactive prototype to experience the complete user journey.
            </p>
            <iframe
              title="FemHealth prototype"
              width="100%"
              height="1080"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FdJpKC8pF1EXYbl0OpCtgU7%2FFemhealth%3Fnode-id%3D116%253A77%26scaling%3Dmin-zoom%26page-id%3D57%253A12%26starting-point-node-id%3D116%253A77%26show-proto-sidebar%3D1"
              allowFullScreen
              className='border-0'
            />
          </ContentContainer>
        </section>

        {/* Takeaway: dark band */}
        <section className='bg-[#222222] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>Key Takeaway</h2>
            <p className='font-mulish text-lg leading-relaxed opacity-95 max-w-[800px]'>
              My most significant takeaway from this project is to always remember the target audience/users who the app is being designed for and how your designs can best help them achieve what they want to achieve. Really and clearly understanding the users' problems will help to find the best solution.
            </p>
          </ContentContainer>
        </section>
      </main>
    </div>
  );
};

export default FemHealth;