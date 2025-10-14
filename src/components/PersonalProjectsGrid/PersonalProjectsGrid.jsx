import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import { ContentContainer } from '../../common';
import femhealthImg from '../../assets/images/femhealth.png';
import svaasthyaImg from '../../assets/images/svaasthya.png';
import swiftbikesImg from '../../assets/images/swiftbikes.png';

const personalProjects = [
  {
    title: 'FemHealth',
    description:
      'A platform helping women access reliable health information anonymously and find clinics accepting their insurance.',
    image: femhealthImg,
    link: '#/project/femhealth',
    color: '3E122D',
    accentColor: 'D97706',
  },
  {
    title: 'Swift Bikes',
    description:
      'An e-commerce platform enabling users to customize bikes for work, athletics, or leisure.',
    image: swiftbikesImg,
    link: '#/project/swiftbikes',
    color: 'FF980A',
    accentColor: '1E40AF',
  },
  {
    title: 'Svaasthya',
    description:
      'A chatbot application for a hospital in India streamlining patient services through appointment booking and online payments.',
    image: svaasthyaImg,
    link: '#/project/svaasthya',
    color: '1D5D82',
    accentColor: '10B981',
  },
];

function PersonalProjectsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkMobileView();
    window.addEventListener('resize', checkMobileView);

    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  return (
    <section className='bg-[#f5f5f5] pt-[120px] pb-[60px]' id='personal-projects'>
      <ContentContainer className='px-5'>
        <div className='mb-[40px]'>
          <h2 className='font-playfair font-semibold text-[36px] text-black leading-[1.3] m-0 max-md:text-[28px]'>
            Personal Projects
          </h2>
          <p className='font-mulish text-[18px] text-[#666] leading-[1.5] mt-[12px] m-0 max-md:text-[16px]'>
            Exploring UX design through passion projects
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-[24px]'>
          {personalProjects.map(
            (
              { title, description, image, link, color, accentColor },
              index
            ) => {
              const ProjectCard = () => {
                const ref = useRef(null);
                const isInView = useInView(ref, {
                  once: false,
                  amount: 0.3,
                  margin: '0px',
                });

                const isHovered = hoveredIndex === index;
                const shouldAnimate = isMobileView ? isInView : isHovered;

                return (
                  <a
                    ref={ref}
                    href={link}
                    onMouseEnter={() => !isMobileView && setHoveredIndex(index)}
                    onMouseLeave={() => !isMobileView && setHoveredIndex(null)}
                    className='bg-white rounded-[8px] overflow-hidden no-underline flex md:flex-col transition-all duration-300 hover:shadow-lg'
                    style={{
                      border: shouldAnimate
                        ? `2px solid #${color}`
                        : '2px solid #e5e5e5',
                    }}
                  >
                    {/* Image Container */}
                    <div className='relative h-[200px] md:h-[200px] w-[40%] md:w-full flex-shrink-0 overflow-hidden bg-[#f5f5f5]'>
                      <motion.img
                        alt={title}
                        className='w-full h-full object-cover'
                        src={image}
                        loading='lazy'
                        initial={{ scale: 1 }}
                        animate={{ scale: shouldAnimate ? 1.05 : 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      {shouldAnimate && (
                        <motion.div
                          className='absolute inset-0'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.1 }}
                          transition={{ duration: 0.3 }}
                          style={{ backgroundColor: `#${color}` }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className='p-[20px] md:p-[24px] flex flex-col gap-[12px] flex-grow'>
                      <h3
                        className='font-playfair font-semibold text-[24px] text-black leading-[1.3] m-0 transition-colors duration-300'
                        style={{
                          color: shouldAnimate ? `#${color}` : '#000000',
                        }}
                      >
                        {title}
                      </h3>
                      <p className='font-mulish text-[15px] text-[#666] leading-[1.5] m-0'>
                        {description}
                      </p>

                      {/* View Case Study Link */}
                      <div className='mt-auto pt-[12px]'>
                        <span
                          className='font-mulish font-medium text-[14px] inline-flex items-center gap-[6px] transition-colors duration-300'
                          style={{
                            color: shouldAnimate ? `#${color}` : '#666666',
                          }}
                        >
                          View Case Study
                          <motion.svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            initial={{ x: 0 }}
                            animate={{ x: shouldAnimate ? 4 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <path
                              d='M6 3L11 8L6 13'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </motion.svg>
                        </span>
                      </div>
                    </div>
                  </a>
                );
              };

              return <ProjectCard key={index} />;
            }
          )}
        </div>
      </ContentContainer>
    </section>
  );
}

export default PersonalProjectsGrid;
