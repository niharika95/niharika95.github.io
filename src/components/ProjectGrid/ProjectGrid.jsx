import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import { ContentContainer } from '../../common';
import { trackProjectCardClick } from '../../utils/analytics';

const projects = [
  {
    title: 'Building Trust in Fintech: A 0→1 Redesign for a $1B Growth Company',
    image: '/home-v2/insurance-website-color.png',
    link: '#/insurance-company-website-redesign',
    color: 'A10026',
    strokeColor: '000000',
  },
  {
    title: 'Loan App Experience Optimization',
    image: '/home-v2/loan-app-color.png',
    link: '#/loan-app-experience-optimization',
    isMobile: true,
    color: '1C4882',
    strokeColor: 'D97706',
  },
  {
    title: 'Admissions Process Acceleration',
    image: '/home-v2/admissions-process-color.png',
    link: '#/admissions-process-acceleration',
    color: '522398',
    strokeColor: 'FB4E0B',
  },
  {
    title: 'Intelligent Campaign Builder Overhaul',
    image: '/home-v2/campaign-builder-color.png',
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
      display: 'inline',
      padding: '0 2px',
      backgroundImage: `linear-gradient(transparent calc(100% - 12px), #${strokeColor} 12px)`,
      backgroundSize: '0% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left bottom',
    };

    const StrongWithUnderline = ({ children }) => (
      <motion.strong
        style={strongStyle}
        initial={{ backgroundSize: '0% 100%' }}
        animate={{ backgroundSize: isHovered ? '100% 100%' : '0% 100%' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {children}
      </motion.strong>
    );

    switch (index) {
      case 0:
        return (
          <>
            Redesign that <StrongWithUnderline>reduced heuristic violations by 90%</StrongWithUnderline> and overall <StrongWithUnderline>site performance by 37%</StrongWithUnderline>, creating a platform built for growth.
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

                const handleClick = () => {
                  const projectName = link.replace('#/', '');
                  trackProjectCardClick(
                    projectName,
                    {
                      title,
                      color,
                      project_type: 'professional',
                      is_mobile_layout: isMobile
                    },
                    'project_grid',
                    index
                  );
                };

                return (
                  <motion.a
                    ref={ref}
                    href={link}
                    onClick={handleClick}
                    onMouseEnter={() => !isMobileView && setHoveredIndex(index)}
                    onMouseLeave={() => !isMobileView && setHoveredIndex(null)}
                    className={`px-[12px] sm:px-[20px] gap-[20px] sm:gap-[40px] overflow-hidden min-h-[400px] sm:h-[500px] pt-[30px] sm:pt-[50px] pb-[30px] sm:pb-0 flex ${
                      isMobile
                        ? 'flex-col sm:flex-row justify-between sm:justify-start'
                        : 'flex-col justify-between'
                    }`}
                    style={{
                      textDecoration: 'none',
                      WebkitTapHighlightColor: 'transparent',
                      cursor: 'pointer',
                    }}
                    initial={{ backgroundColor: '#f5f5f5' }}
                    animate={{
                      backgroundColor: shouldAnimate ? `#${color}` : '#f5f5f5',
                    }}
                    transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    {/* Text Content */}
                    <div
                      className={`flex flex-col gap-[12px] sm:gap-[20px] z-10 ${
                        isMobile ? 'max-w-full sm:max-w-[250px]' : 'max-w-full sm:max-w-[400px]'
                      }`}
                    >
                      <motion.h3
                        className='font-playfair font-semibold text-[24px] sm:text-[32px] leading-normal m-0'
                        animate={{
                          color: shouldAnimate ? '#ffffff' : '#000000',
                        }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        {title}
                      </motion.h3>
                      <motion.p
                        className='font-mulish font-light text-[16px] sm:text-[20px] leading-[1.5] m-0'
                        animate={{
                          color: shouldAnimate ? '#ffffff' : '#000000',
                        }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        {getDescription(index, strokeColor, shouldAnimate)}
                      </motion.p>
                    </div>

                    {/* Project Image */}
                    <div className={`relative ${isMobile ? 'w-full sm:w-[60%] self-end' : 'w-full'}`}>
                      <motion.img
                        alt={title}
                        className={`${isMobile ? 'w-full h-auto object-contain object-bottom' : 'w-full'}`}
                        src={image}
                        loading='lazy'
                        initial={{
                          filter: 'grayscale(100%) brightness(0.9) saturate(0) drop-shadow(0 0 0px rgba(0, 0, 0, 0))',
                          y: 30,
                          scale: 0.95
                        }}
                        animate={{
                          filter: shouldAnimate
                            ? 'grayscale(0%) brightness(1) saturate(1) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4))'
                            : 'grayscale(100%) brightness(0.9) saturate(0) drop-shadow(0 0 0px rgba(0, 0, 0, 0))',
                          y: shouldAnimate ? 0 : 30,
                          scale: shouldAnimate ? 1 : 0.95
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.25, 0.1, 0.25, 1]
                        }}
                      />
                    </div>
                  </motion.a>
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
