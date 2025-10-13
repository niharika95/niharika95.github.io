import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import { ContentContainer } from '../../common';

const projects = [
  {
    title: 'Insurance Company Website Redesign',
    image: '/home-v2/insurance-website.png',
    link: '#/insurance-company-website-redesign',
    color: 'A10026',
    strokeColor: '000000',
  },
  {
    title: 'Loan App Experience Optimization',
    image: '/home-v2/loan-app.png',
    link: '#/loan-app-experience-optimization',
    isMobile: true,
    color: '1C4882',
    strokeColor: 'D97706',
  },
  {
    title: 'Admissions Process Acceleration',
    image: '/home-v2/admissions-process.png',
    link: '#/admissions-process-acceleration',
    color: '522398',
    strokeColor: 'FB4E0B',
  },
  {
    title: 'Intelligent Campaign Builder Overhaul',
    image: '/home-v2/campaign-builder.png',
    link: '#/intelligent-campaign-builder',
    color: 'FB4E0B',
    strokeColor: '48A3FF',
  },
];

function ProjectGrid() {
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

  const getDescription = (index, strokeColor, isHovered) => {
    const strongStyle = {
      position: 'relative',
      display: 'inline-block',
      padding: '0 2px',
    };
    
    const underlineStyle = {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: '12px',
      background: `#${strokeColor}`,
      zIndex: -1,
    };

    const StrongWithUnderline = ({ children }) => (
      <strong style={strongStyle}>
        {children}
        {isHovered && (
          <motion.span
            style={underlineStyle}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        )}
      </strong>
    );

    switch (index) {
      case 0:
        return (
          <>
            Drove a <StrongWithUnderline>44% SEO boost</StrongWithUnderline> and <StrongWithUnderline>37% performance increase</StrongWithUnderline> with a 0→1 redesign built for growth.
          </>
        );
      case 1:
        return (
          <>
            Slashing projected <StrongWithUnderline>loan application time by 40%</StrongWithUnderline> by redesigning for trust and efficiency.
          </>
        );
      case 2:
        return (
          <>
            How user-centric design unlocked a <StrongWithUnderline>60% productivity gain</StrongWithUnderline> and empowered counselors to focus on high-value decisions.
          </>
        );
      case 3:
        return (
          <>
            <StrongWithUnderline>Empowering Marketers</StrongWithUnderline> with a Data-Driven, Intuitive Lead Generation Engine.
          </>
        );
      default:
        return '';
    }
  };

  return (
    <section className='' id='projects'>
      <ContentContainer>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
          {projects.map(
            ({ image, link, title, isMobile, color, strokeColor }, index) => {
              const ProjectCard = () => {
                const ref = useRef(null);
                const isInView = useInView(ref, {
                  once: false,
                  amount: 0.3,
                  margin: "0px"
                });
                
                const isHovered = hoveredIndex === index;
                const shouldAnimate = isMobileView ? isInView : isHovered;
                const displayImage = shouldAnimate ? image.replace('.png', '-color.png') : image;

                return (
                  <a
                    ref={ref}
                    href={link}
                    onMouseEnter={() => !isMobileView && setHoveredIndex(index)}
                    onMouseLeave={() => !isMobileView && setHoveredIndex(null)}
                    className={`px-[12px] sm:px-[20px] gap-[20px] sm:gap-[40px] overflow-hidden min-h-[400px] sm:h-[500px] pt-[30px] sm:pt-[50px] pb-[30px] sm:pb-0 no-underline flex transition-colors duration-300 ${
                      isMobile
                        ? 'flex-col sm:flex-row justify-between sm:justify-start'
                        : 'flex-col justify-between'
                    }`}
                    style={{
                      backgroundColor: shouldAnimate ? `#${color}` : '#f5f5f5',
                    }}
                  >
                    {/* Text Content */}
                    <div
                      className={`flex flex-col gap-[12px] sm:gap-[20px] z-10 ${
                        isMobile ? 'max-w-full sm:max-w-[250px]' : 'max-w-full sm:max-w-[400px]'
                      }`}
                    >
                      <h3
                        className='font-playfair font-semibold text-[24px] sm:text-[32px] leading-normal m-0 transition-colors duration-300'
                        style={{
                          color: shouldAnimate ? '#ffffff' : '#000000',
                        }}
                      >
                        {title}
                      </h3>
                      <p
                        className='font-mulish font-light text-[16px] sm:text-[20px] leading-[1.5] m-0 transition-colors duration-300'
                        style={{
                          color: shouldAnimate ? '#ffffff' : '#000000',
                        }}
                      >
                        {getDescription(index, strokeColor, shouldAnimate)}
                      </p>
                    </div>

                    {/* Project Image */}
                    <div className={`relative ${isMobile ? 'w-full sm:w-[60%] self-end' : 'w-full'}`}>
                      {/* B&W Image (base layer) */}
                      <img
                        alt={title}
                        className={`${isMobile ? 'w-full h-auto object-contain object-bottom' : 'w-full'}`}
                        src={image}
                        loading='lazy'
                      />
                      
                      {/* Color Image (animated overlay) */}
                      {shouldAnimate && (
                        <motion.div
                          className="absolute inset-0"
                          initial={{ clipPath: 'inset(100% 0 0 0)' }}
                          animate={{ clipPath: 'inset(0% 0 0 0)' }}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                          style={{
                            filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))',
                          }}
                        >
                          <motion.img
                            alt={title}
                            className={`${isMobile ? 'w-full h-auto object-contain object-bottom' : 'w-full'}`}
                            src={displayImage}
                            loading='lazy'
                            initial={{ filter: 'brightness(1.2) saturate(1.3)' }}
                            animate={{ filter: 'brightness(1) saturate(1)' }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          />
                        </motion.div>
                      )}
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

export default ProjectGrid;
