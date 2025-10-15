import { DecorativeDots, StrokeAnimation } from '../../common';

import { Icon } from '@iconify/react';
import React from 'react';
import svaasthyaHifiWireframesMobile from '../../assets/images/svaasthyaHifiWireframesMobile.png';
import svaasthyaImg from '../../assets/images/svaasthya.png';
import svaasthyaLofiWireframesMobile from '../../assets/images/svaasthyaLofiWireframesMobile.png';
import svaasthyaPaperWireframes from '../../assets/images/svaasthyaPaperWireframes.png';
import svaasthyaPersona1Priya from '../../assets/images/svaasthyaPersona1Priya.png';
import svaasthyaPersona2Rakesh from '../../assets/images/svaasthyaPersona2Rakesh.png';
import svaasthyaStyleGuide from '../../assets/images/svaasthyaStyleGuide.png';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';

// Import images







// Reusable components for this case study's theme
const Tag = ({ children }) => (
  <span className='bg-[#d1e7f0] text-black rounded-full px-4 py-1 text-sm font-medium'>
    {children}
  </span>
);

const ContentContainer = ({ children, className }) => (
  <div className={`max-w-[1440px] mx-auto px-5 lg:px-[100px] ${className || ''}`}>
    {children}
  </div>
);

const Svaasthya = () => {
  // Track page view, scroll depth, and time on page
  useAnalytics('project_detail', {
    projectName: 'svaasthya',
    projectType: 'personal'
  });
  useScrollTracking();
  useTimeTracking();

  const tags = [
    'Figma',
    'Paper Wireframing',
    'UX Research',
    'UX Design',
    'Interaction Design',
    'Visual Design',
    'Chatbot Design',
  ];

  const painPoints = [
    'Getting hospital admin information or cost estimations for services is tedious',
    'Payments cannot be done online',
    'Long wait on phones and long lines at the hospital',
    'Unnecessary formalities at hospitals',
  ];

  return (
    <div className='relative bg-white text-gray-900 font-sans'>
      {/* Hero: Teal background */}
      <header className='w-full bg-[#1D5D82]'>
        <ContentContainer className='relative flex flex-col md:flex-row'>
          <div className='text-white max-w-2xl py-5 md:py-[50px] lg:py-[100px]'>
            <h1 className='font-playfair text-4xl md:text-5xl font-extrabold leading-tight tracking-tight'>
              Svaasthya
            </h1>
            <p className='font-mulish text-lg md:text-xl mt-4 opacity-95'>
              A chatbot application for a hospital in India <StrokeAnimation strokeColor="10B981">streamlining patient services</StrokeAnimation> through appointment booking and online payments.
            </p>
            <div className='flex flex-wrap gap-2 mt-6'>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <img
            src={svaasthyaImg}
            alt='Svaasthya Hero'
            className='w-full max-w-[400px] self-end h-auto object-contain max-h-[500px]'
          />
          <DecorativeDots color="1D5D82" position="top-left" />
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
                Figma, Paper (wireframing)
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
            <hr className='border-[#d1e7f0] mb-12' />
          </ContentContainer>
        </div>

        {/* Context & Goal */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="1D5D82" position="top-right" />
            <div className='flex flex-col gap-12'>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>Context</h2>
                <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
                  Svaasthya is a support chatbot application for a hospital in India. Hospitals in India often have long wait times on the phones or even long lines at the hospital itself which makes it difficult and tedious for individuals to get help with their questions or services they need.
                </p>
              </div>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>Goal</h2>
                <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
                  The goal of this product is to design an application that will help individuals in India carry out tasks such as booking appointments or getting hospital related information quickly and conveniently.
                </p>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Pain Points: full-width teal band */}
        <section className='w-full bg-[#1D5D82] text-white py-5 md:py-[50px] lg:py-[100px]'>
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

        {/* User Personas */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="1D5D82" position="top-right" />
            <div className='flex flex-col gap-12'>
              <div>
                <h2 className='font-playfair text-3xl font-bold mb-4'>Target Audience</h2>
                <p className='font-mulish text-lg leading-relaxed max-w-[800px]'>
                  People in India who want to get information about the hospital, have queries or questions, or need to book appointments.
                </p>
              </div>
              <div>
                <h3 className='font-playfair text-2xl font-bold mb-6'>User Personas</h3>
                <div className='flex flex-col md:flex-row gap-4'>
                  <img src={svaasthyaPersona1Priya} alt='Persona 1 - Priya' className='w-full md:w-1/2 h-auto' />
                  <img src={svaasthyaPersona2Rakesh} alt='Persona 2 - Rakesh' className='w-full md:w-1/2 h-auto' />
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
              Starting with paper wireframes to quickly explore different conversation flows and interface layouts for the chatbot experience.
            </p>
            <img src={svaasthyaPaperWireframes} alt='Paper Wireframes' className='w-full h-auto mb-12' />
            
            <h3 className='font-playfair text-2xl font-bold mb-6'>Digital Wireframes</h3>
            <p className='font-mulish text-lg leading-relaxed mb-8 max-w-[800px]'>
              Translating the paper sketches into digital wireframes helped refine the chatbot interaction patterns and user flow.
            </p>
            <img src={svaasthyaLofiWireframesMobile} alt='Digital Wireframes' className='w-full h-auto' />
          </ContentContainer>
        </section>

        {/* Hi-Fi Wireframes */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="1D5D82" position="top-right" />
            <h2 className='font-playfair text-3xl font-bold mb-4'>Hi-Fi Wireframes</h2>
            <p className='font-mulish text-lg leading-relaxed mb-8 max-w-[800px]'>
              The high-fidelity wireframes bring the chatbot to life with a clean, medical-appropriate color scheme and intuitive conversation interface.
            </p>
            <img src={svaasthyaHifiWireframesMobile} alt='Hi-Fi Mobile Screens' className='w-full h-auto' />
          </ContentContainer>
        </section>

        {/* Style Guide */}
        <section className='w-full bg-[#f5f5f5] py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer>
            <h2 className='font-playfair text-3xl font-bold mb-4'>Style Guide</h2>
            <p className='font-mulish text-lg leading-relaxed mb-8 max-w-[800px]'>
              A comprehensive style guide was created to ensure consistency across all screens and interactions, establishing a trustworthy and professional healthcare brand identity.
            </p>
            <img src={svaasthyaStyleGuide} alt='Style Guide' className='w-full h-auto' />
          </ContentContainer>
        </section>

        {/* Prototype */}
        <section className='py-5 md:py-[50px] lg:py-[100px]'>
          <ContentContainer className='relative overflow-hidden'>
            <DecorativeDots color="1D5D82" position="top-right" />
            <h2 className='font-playfair text-3xl font-bold mb-4'>Prototype</h2>
            <p className='font-mulish text-lg leading-relaxed mb-8 max-w-[800px]'>
              Explore the interactive prototype to experience the complete chatbot conversation flow and appointment booking process.
            </p>
            <iframe
              title="Svaasthya prototype"
              width="100%"
              height="1080"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FpP5zBlO0iivjZQnRnpfhXA%2FSvaasthya---Support-Chatbot-for-a-Hospital-in-India---Wireframes%3Fpage-id%3D133%253A593%26node-id%3D223%253A4546%26viewport%3D241%252C48%252C0.13%26scaling%3Dscale-down%26starting-point-node-id%3D161%253A676%26show-proto-sidebar%3D1"
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
              This project helped me understand and explore the entire process of user experience. My most significant takeaway is to always remember who you are building the app for and how can your designs best help them to achieve what they want to achieve.
            </p>
          </ContentContainer>
        </section>
      </main>
    </div>
  );
};

export default Svaasthya;