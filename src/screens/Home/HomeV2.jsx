import { ContentContainer } from '../../common';
import GeometricPattern from '../../components/GeometricPattern';
import ProjectGrid from '../../components/ProjectGrid';
import React from 'react';

const stats = [
  { value: '4.5+', label: 'years of expertise designing digital interfaces' },
  { value: '17', label: 'projects shipped (8 large scale + 9 small scale)' },
  { value: '13', label: 'successful partnerships with valued clients' },
  { value: '60%', label: "boost in university counselors' productivity" },
];

function HomeV2() {
  return (
    <div className='bg-white min-h-screen w-full'>
      {/* Hero Section */}
      <ContentContainer>
        <section className='flex w-full max-lg:flex-row max-lg:gap-[40px]'>
          {/* Left - Decorative SVG Pattern (450px on large screens, 90px on small) */}
          <div className='w-[450px] max-w-[450px] max-lg:w-[90px] max-lg:max-w-[90px] h-[720px] flex-shrink-0'>
            <GeometricPattern />
          </div>

          {/* Right - Hero Content (990px on large screens, flex-1 on small) */}
          <div className='flex flex-col gap-[80px] flex-1 max-w-[990px] max-lg:max-w-none px-[80px] py-[60px] justify-center max-md:px-[20px] max-md:py-[40px] max-md:gap-[60px]'>
            {/* Title and Description */}
            <div className='flex flex-col gap-[20px]'>
              <div className='flex flex-col'>
                <h1 className='font-playfair font-normal text-[60px] text-[#000] tracking-[-0.04em] leading-[1.5] m-0 max-md:text-[48px] max-md:leading-[1.2]'>
                  Niharika Dalal
                </h1>
                <h2 className='font-playfair font-normal text-[60px] text-[#898989] tracking-[-0.04em] leading-[1.5] m-0 max-md:text-[48px] max-md:leading-[1.2]'>
                  Product Designer
                </h2>
              </div>
              <p className='font-mulish text-[20px] text-black tracking-[-0.05em] leading-[1.5] m-0 max-md:text-[18px]'>
                Designing 0-to-1 solutions that drive growth, in collaboration
                with cross-functional and cross-cultural Agile teams.
              </p>
            </div>

            {/* Stats */}
            <div className='flex flex-wrap gap-[20px] max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-[30px]'>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className='flex flex-col gap-[4px] min-w-[200px] flex-1 max-lg:w-auto max-lg:flex-none'
                >
                  <p className='font-mulish font-bold text-[40px] text-black leading-[1.5] m-0 max-md:text-[36px]'>
                    {stat.value}
                  </p>
                  <p className='font-mulish text-[16px] text-black leading-[1.5] m-0 max-md:text-[15px]'>
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

      {/* Contact Footer */}
      <footer className='py-[40px] px-[40px] flex justify-center items-center gap-[20px] flex-wrap max-md:px-[20px] max-md:gap-[15px]'>
        <a
          href='mailto:niharika13dalal@gmail.com'
          className='font-mulish font-light text-[20px] text-black underline decoration-solid leading-[1.5] hover:text-[#106066] max-md:text-[18px]'
        >
          niharika13dalal@gmail.com
        </a>
        <span className='font-mulish font-light text-[20px] text-[#c8c8c8] leading-[1.5] max-md:hidden'>
          |
        </span>
        <a
          href='https://linkedin.com/in/niharikadalal'
          target='_blank'
          rel='noopener noreferrer'
          className='font-mulish font-light text-[20px] text-black underline decoration-solid leading-[1.5] hover:text-[#106066] max-md:text-[18px]'
        >
          linkedin.com/in/niharikadalal
        </a>
        <span className='font-mulish font-light text-[20px] text-[#c8c8c8] leading-[1.5] max-md:hidden'>
          |
        </span>
        <a
          href='/resume.pdf'
          download
          className='flex gap-[8px] items-center font-mulish font-light text-[20px] text-black underline decoration-solid leading-[1.5] hover:text-[#106066] no-underline max-md:text-[18px]'
        >
          <svg
            className='size-[30px] max-md:size-[24px]'
            fill='none'
            viewBox='0 0 30 30'
          >
            <path
              d='M15 19.4712L10.5769 15.0481L11.4616 14.1491L14.375 17.0625V6.25H15.625V17.0625L18.5384 14.1491L19.4231 15.0481L15 19.4712ZM8.26937 23.75C7.69396 23.75 7.21354 23.5573 6.82813 23.1719C6.44271 22.7865 6.25 22.306 6.25 21.7306V18.7019H7.5V21.7306C7.5 21.9231 7.5801 22.0995 7.74031 22.2597C7.90052 22.4199 8.07687 22.5 8.26937 22.5H21.7306C21.9231 22.5 22.0995 22.4199 22.2597 22.2597C22.4199 22.0995 22.5 21.9231 22.5 21.7306V18.7019H23.75V21.7306C23.75 22.306 23.5573 22.7865 23.1719 23.1719C22.7865 23.5573 22.306 23.75 21.7306 23.75H8.26937Z'
              fill='black'
            />
          </svg>
          <span className='underline'>download my resume</span>
        </a>
      </footer>

      {/* Bottom Decorative Pattern */}
      <section className='h-[90px] flex justify-center w-full'>
        <GeometricPattern />
      </section>
    </div>
  );
}

export default HomeV2;
