/* eslint-disable max-len */
import { Icon } from '@iconify/react';
import { ProjectTitle } from '../../common';
import React from 'react';
import { easeOutExpo } from '../../utils/animations';
import { motion } from 'framer-motion';

// Tool icon mapping
const toolIcons = {
  'Figma': 'logos:figma',
  'Adobe XD': 'logos:adobe-xd',
  'Paper (wireframing)': 'mdi:pencil-ruler',
  'Google Jamboard': 'logos:google-icon',
};

function ProjectCard({
  image,
  title,
  color,
  description,
  tools,
  caseStudyLink,
  imagePosition = 'left',
}) {
  const isLeft = imagePosition === 'left';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className={`mt-[128px] md:mt-[192px] flex gap-[64px] md:gap-[96px] lg:gap-[128px] justify-center items-start ${
        isLeft ? 'flex-row' : 'flex-row-reverse'
      } max-[600px]:flex-col`}
    >
      {/* Project Image */}
      <div className="relative flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="max-w-[600px] max-[600px]:w-full"
          loading="lazy"
        />
      </div>

      {/* Content Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: easeOutExpo }}
        className={`flex flex-col gap-[24px] ${
          isLeft ? 'text-left items-start' : 'text-right items-end'
        } max-[600px]:text-left max-[600px]:items-start bg-white p-[32px] md:p-[40px] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 min-w-[400px] max-[600px]:min-w-0 max-w-[600px]`}
      >
        {/* Title */}
        <ProjectTitle color={color}>{title}</ProjectTitle>

        {/* Description */}
        <p className="text-[16px] md:text-[18px] font-normal leading-[1.7] text-gray-700 m-0">
          {description}
        </p>

        {/* Tools Section */}
        <div className={`w-full ${!isLeft ? 'max-[600px]:text-left' : ''}`}>
          <div className={`flex flex-wrap items-center gap-[12px] ${!isLeft ? 'justify-end max-[600px]:justify-start' : ''}`}>
            {tools.map((tool, index) => (
              <div key={index} className="flex items-center gap-[6px] text-[14px] md:text-[15px] text-gray-600">
                <Icon
                  icon={toolIcons[tool] || 'carbon:tool-box'}
                  className="text-[18px]"
                />
                <span>{tool}</span>
                {index < tools.length - 1 && <span className="text-gray-400">•</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Link */}
        <motion.a
          whileHover={{ x: isLeft ? 4 : -4 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0 })}
          href={caseStudyLink}
          style={{ color }}
          className="group flex items-center gap-[8px] no-underline text-[18px] font-semibold relative mt-[8px]"
        >
          Case study
          <motion.div className="transition-transform duration-300 group-hover:translate-x-1">
            <Icon color={color} icon="ep:right" />
          </motion.div>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[calc(100%-28px)]" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;