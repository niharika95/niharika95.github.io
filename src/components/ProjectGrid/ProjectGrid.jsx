import { ContentContainer } from '../../common';
import React from 'react';

const projects = [
  {
    title: 'Insurance Company Website Redesign',
    description:
      'Drove a 44% SEO boost and 37% performance increase with a 0→1 redesign built for growth.',
    image: '/home-v2/insurance-website.png',
    link: '#/insurance-company-website-redesign',
  },
  {
    title: 'Loan App Experience Optimization',
    description:
      'Slashing projected loan application time by 40% by redesigning for trust and efficiency.',
    image: '/home-v2/loan-app.png',
    link: '#/loan-app-experience-optimization',
    isMobile: true,
  },
  {
    title: 'Admissions Process Acceleration',
    description:
      'How user-centric design unlocked a 60% productivity gain and empowered counselors to focus on high-value decisions.',
    image: '/home-v2/admissions-process.png',
    link: '#/admissions-process-acceleration',
  },
  {
    title: 'Intelligent Campaign Builder Overhaul',
    description:
      'Empowering Marketers with a Data-Driven, Intuitive Lead Generation Engine.',
    image: '/home-v2/campaign-builder.png',
    link: '#/intelligent-campaign-builder',
  },
];

function ProjectGrid() {
  return (
    <section className='' id='projects'>
      <ContentContainer>
        <div className='grid grid-cols-2 gap-0 max-lg:grid-cols-1'>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className='bg-neutral-100 flex flex-col gap-[10px] h-[500px] overflow-hidden px-[100px] py-[60px] relative no-underline hover:bg-neutral-200 transition-colors max-lg:px-[60px] max-md:px-[40px] max-md:h-[400px]'
            >
              <div className='flex flex-col gap-[20px] z-10 max-w-[400px]'>
                <h3 className='font-playfair font-semibold text-[32px] text-black leading-normal m-0 max-md:text-[28px]'>
                  {project.title}
                </h3>
                <p className='font-mulish font-light text-[20px] text-black leading-[1.5] m-0 max-md:text-[18px]'>
                  {project.description}
                </p>
              </div>

              {/* Project Image */}
              <div
                className={`absolute ${
                  project.isMobile
                    ? 'h-[615px] left-[calc(50%+150.5px)] -translate-x-1/2 rounded-[36px] top-[134px] w-[275px] max-lg:left-1/2 max-lg:top-[200px]'
                    : 'h-[480px] left-1/2 top-[266px] -translate-x-1/2 w-[520px] max-lg:w-[400px] max-lg:h-[380px] max-md:w-[300px] max-md:h-[280px]'
                }`}
              >
                <img
                  alt={project.title}
                  className={`absolute inset-0 max-w-none object-cover size-full grayscale contrast-125 ${
                    project.isMobile ? 'rounded-[36px]' : ''
                  }`}
                  src={project.image}
                  loading='lazy'
                />
                {project.isMobile && (
                  <div className='absolute border-4 border-black border-solid inset-[-4px] rounded-[40px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' />
                )}
              </div>
            </a>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}

export default ProjectGrid;