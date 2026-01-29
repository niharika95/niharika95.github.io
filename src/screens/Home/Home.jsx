import AnimatedCounter from '../../components/AnimatedCounter';
import { ContentContainer } from '../../common';
import GeometricPattern from '../../components/GeometricPattern';
import PersonalProjectsGrid from '../../components/PersonalProjectsGrid';
import ProjectGrid from '../../components/ProjectGrid';
import React from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';

const stats = [
  { value: '5+', label: 'years of expertise designing digital interfaces' },
  { value: '17', label: 'projects shipped (8 large scale + 9 small scale)' },
  { value: '13', label: 'successful partnerships with valued clients' },
  { value: '60%', label: "boost in university counselors' productivity" },
];

function Home() {
  // Track page view, scroll depth, and time on page
  useAnalytics('home');
  useScrollTracking();
  useTimeTracking();

  return (
    <div className='bg-white min-h-screen w-full'>
      {/* Hero Section */}
      <ContentContainer>
        <section className='flex w-full max-lg:flex-row max-lg:gap-[40px]'>
          {/* Left - Decorative SVG Pattern (450px on large screens, 90px on small) */}
          <div className='w-[450px] max-w-[450px] max-lg:w-[90px] max-lg:max-w-[90px] h-[850px] flex-shrink-0'>
            <GeometricPattern />
          </div>

          {/* Right - Hero Content (990px on large screens, flex-1 on small) */}
          <div className='flex flex-col gap-[80px] flex-1 max-w-[990px] max-lg:max-w-none px-[80px] py-[60px] justify-center max-md:px-[20px] max-md:py-[40px] max-md:gap-[60px]'>
            {/* Title and Description */}
            <div className='flex flex-col gap-[40px]'>
              <div className='flex flex-col'>
                <h1 className='font-playfair font-normal text-[60px] text-[#000] tracking-[-0.04em] leading-[1.2] m-0 max-md:text-[48px] max-md:leading-[1.2]'>
                  Niharika Dalal
                </h1>
                <h2 className='font-playfair font-normal text-[60px] text-[#898989] tracking-[-0.04em] leading-[1.2] m-0 max-md:text-[48px] max-md:leading-[1.2]'>
                  Product Designer
                </h2>
              </div>
              <p className='font-mulish font-thin text-[20px] text-black tracking-[-0.05em] leading-[1.5] m-0 max-md:text-[18px]'>
                Designing <span className='font-light'>0 → 1</span> solutions that drive growth, in collaboration
                with cross-functional and cross-cultural Agile teams.
              </p>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-2 gap-[20px] max-md:grid-cols-1'>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className='flex flex-col gap-[4px] min-w-[200px] flex-1 max-lg:w-auto max-lg:flex-none'
                >
                  <p className='font-mulish font-bold text-[40px] text-black leading-[1.5] m-0 max-md:text-[36px]'>
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className='font-mulish text-[16px] text-black leading-[24px] m-0 max-md:text-[15px]'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ContentContainer>

      {/* Projects Section */}
      <ProjectGrid />

      {/* Personal Projects Section */}
      <PersonalProjectsGrid />
    </div>
  );
}

export default Home;
