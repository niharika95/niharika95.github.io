import { DecorativeDots, StrokeAnimation } from '../../common';

import { Icon } from '@iconify/react';
import React from 'react';
import swiftbikesHifiWireframesDesktop from '../../assets/images/swiftbikesHifiWireframesDesktop.png';
import swiftbikesHifiWireframesMobile from '../../assets/images/swiftbikesHifiWireframesMobile.png';
import swiftbikesImg from '../../assets/images/swiftbikes.png';
import swiftbikesLofiWireframesDesktop from '../../assets/images/swiftbikesLofiWireframesDesktop.png';
import swiftbikesLofiWireframesMobile from '../../assets/images/swiftbikesLofiWireframesMobile.png';
import swiftbikesPaperWireframes from '../../assets/images/swiftbikesPaperWireframes.png';
import swiftbikesPersona1Matthew from '../../assets/images/swiftbikesPersona1Matthew.png';
import swiftbikesPersona2Kate from '../../assets/images/swiftbikesPersona2Kate.png';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';

// Import images






// Reusable components for this case study's theme
const Tag = ({ children }) => (
  <span className='bg-[#ffe8cc] text-black rounded-full px-4 py-1 text-sm font-medium'>
    {children}
  </span>
);

const ContentContainer = ({ children, className }) => (
  <div className={`max-w-[1440px] mx-auto px-5 lg:px-[100px] ${className || ''}`}>
    {children}
  </div>
);

const SwiftBikes = () => {
  // Track page view, scroll depth, and time on page
  useAnalytics('project_detail', {
    projectName: 'swiftbikes',
    projectType: 'personal'
  });
  useScrollTracking();
  useTimeTracking();

  const tags = [
    'Adobe XD',
    'Paper Wireframing',
    'UX Research',
    'UX Design',
    'Interaction Design',
    'Visual Design',
    'Responsive Design',
  ];

  const painPoints = [
    'Pre-made bikes often don\'t meet the needs',
    'Difficult to find bikes which have a combination of the specifications one would like to have. Sometimes, specific bike parts need to be changed after buying the bike',
    'Stores do not always have a wide variety and range of bikes to select from',
    'Not enough knowledge about bikes to really know what would be good for them',
  ];

  return (
    <div className='relative bg-white text-gray-900 font-sans'>
      {/* Hero: Orange background */}
      <header className='w-full bg-[#FF980A]'>
        <ContentContainer className='relative flex flex-col md:flex-row'>
          <div className='text-black max-w-2xl py-5 md:py-[50px] lg:py-[100px]'>
            <h1 className='font-playfair text-4xl md:text-5xl font-extrabold leading-tight tracking-tight'>
              Swift Bikes
            </h1>
            <p className='font-mulish text-lg md:text-xl mt-4 opacity-90'>
              An e-commerce platform enabling users to <StrokeAnimation strokeColor="FFFFFF">customize bikes</StrokeAnimation> for work, athletics, or leisure.
            </p>
            <div className='flex flex-wrap gap-2 mt-6'>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <img
            src={swiftbikesImg}
            alt='Swift Bikes Hero'
            className='w-full max-w-[600px] self-end h-auto object-contain max-h-[500px]'
          />
          <DecorativeDots color="FF980A" position="top-left" />
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
                Adobe XD, Paper (wireframing)
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
            <hr className='border-[#ffe8cc] mb-12' />
          </ContentContainer>
        </div>

        {/* Context & Goal */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="FF980A" position="top-right" />
            <div className='flex flex-col gap-12'>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>Context</h2>
                <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
                  Swift is an online platform where people who need or want a bike for work, athletic or leisure purposes can buy pre-made ones or customize their own. Often times after using their bikes, people find certain parts of it uncomfortable or not necessarily useful. This platform offers them a solution to select parts of a bike to build it to their liking.
                </p>
              </div>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>Goal</h2>
                <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
                  The goal of this product is to design a responsive application that will let users customize their bikes as per their own needs on both the desktop and mobile devices.
                </p>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Pain Points: full-width orange band */}
        <section className='w-full bg-[#FF980A] text-black py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <div className='grid md:grid-cols-3 gap-8 items-start'>
              <h2 className='font-playfair text-2xl md:text-3xl font-bold self-center'>
                Pain Points
              </h2>
              <div className='md:col-span-2'>
                <ul className='font-mulish list-disc list-inside text-lg leading-relaxed space-y-3 opacity-80'>
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
            <DecorativeDots color="FF980A" position="top-right" />
            <div className='flex flex-col gap-12'>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>User Research</h2>
                <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
                  People who owned bikes felt that while some parts of the bike seemed comfortable, there were other features that did not necessarily fulfil their needs. The users wanted a bike that looked and felt as if it was made just for them. While some wanted to use it just as a means for a short commute and did not focus much on their bike's features, others who spent more time riding it felt they needed a bike which was more suited to their needs.
                </p>
                <p className='font-mulish text-lg leading-relaxed mt-4 max-w-[800px]'>
                  <span className='font-bold'>Target Audience:</span> Individuals who need a new bike and would like to explore the different ways to customize it based on their needs.
                </p>
              </div>
              <div>
                <h3 className='font-playfair text-2xl font-bold mb-6'>User Personas</h3>
                <div className='flex flex-col md:flex-row gap-4'>
                  <img src={swiftbikesPersona1Matthew} alt='Persona 1 - Matthew' className='w-full md:w-1/2 h-auto' />
                  <img src={swiftbikesPersona2Kate} alt='Persona 2 - Kate' className='w-full md:w-1/2 h-auto' />
                </div>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Lo-Fi Wireframes */}
        <section className='w-full bg-[#f5f5f5] py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>Lo-Fi Wireframes</h2>
            <p className='font-mulish text-lg leading-relaxed mb-8 max-w-[800px]'>
              Starting with paper wireframes allowed for rapid exploration of different layout ideas and user flow concepts.
            </p>
            <img src={swiftbikesPaperWireframes} alt='Paper Wireframes' className='w-full h-auto mb-12' />
            
            <h3 className='font-playfair text-2xl font-bold mb-6'>Digital Wireframes - Mobile</h3>
            <img src={swiftbikesLofiWireframesMobile} alt='Mobile Wireframes' className='w-full h-auto mb-12' />
            
            <h3 className='font-playfair text-2xl font-bold mb-6'>Digital Wireframes - Desktop</h3>
            <img src={swiftbikesLofiWireframesDesktop} alt='Desktop Wireframes' className='w-full h-auto' />
          </ContentContainer>
        </section>

        {/* Hi-Fi Wireframes */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="FF980A" position="top-right" />
            <h2 className='font-playfair text-3xl font-bold mb-4'>Hi-Fi Wireframes</h2>
            <p className='font-mulish text-lg leading-relaxed mb-8 max-w-[800px]'>
              The high-fidelity wireframes bring the design to life with color, typography, and detailed interactions. The vibrant orange color scheme reflects energy and movement, perfect for a bike customization platform.
            </p>
            
            <h3 className='font-playfair text-2xl font-bold mb-6'>Mobile Screens</h3>
            <img src={swiftbikesHifiWireframesMobile} alt='Hi-Fi Mobile Screens' className='w-full h-auto mb-12' />
            
            <h3 className='font-playfair text-2xl font-bold mb-6'>Desktop Screens</h3>
            <img src={swiftbikesHifiWireframesDesktop} alt='Hi-Fi Desktop Screens' className='w-full h-auto' />
          </ContentContainer>
        </section>

        {/* Takeaway: dark band */}
        <section className='bg-[#222222] text-white py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>Key Takeaway</h2>
            <p className='font-mulish text-lg leading-relaxed opacity-95 max-w-[800px]'>
              My primary takeaway from this project was that properly getting to know the target audience and their pain points goes a long way into designing something that will actually help the users - initial interviews to know the correct requirements are a very important part of the UX process.
            </p>
          </ContentContainer>
        </section>
      </main>
    </div>
  );
};

export default SwiftBikes;