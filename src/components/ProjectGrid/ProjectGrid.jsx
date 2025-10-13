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
        <div className='grid grid-cols-2 gap-0'>
          {projects.map(
            ({ description, image, link, title, isMobile }, index) => {
              // Mobile project has horizontal layout

              return (
                <a
                  key={index}
                  href={link}
                  className={`bg-neutral-100 px-[20px] hover:bg-amber-50 gap-[40px] overflow-hidden h-[500px] pt-[50px] no-underline flex ${
                    isMobile
                      ? 'flex-row '
                      : 'flex-col justify-between'
                  }`}
                >
                  {/* Text Content */}
                  <div
                    className={`flex flex-col gap-[20px] z-10 ${
                      isMobile ? 'max-w-[400px]' : 'max-w-[400px]'
                    }`}
                  >
                    <h3 className='font-playfair font-semibold text-[32px] text-black leading-normal m-0'>
                      {title}
                    </h3>
                    <p className='font-mulish font-light text-[20px] text-black leading-[1.5] m-0'>
                      {description}
                    </p>
                  </div>

                  {/* Project Image */}

                  <img
                    alt={title}
                    className={`${isMobile ? 'w-[60%] h-auto object-contain object-bottom flex-self-end' : 'w-full'}`}
                    src={image}
                    loading='lazy'
                  />
                </a>
              );
            }
          )}
        </div>
      </ContentContainer>
    </section>
  );
}

export default ProjectGrid;
