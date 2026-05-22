import React from 'react';
import { motion } from 'framer-motion';

const ProjectSlide = ({ project, section }) => {
  const hasImage = !!section.image;

  return (
    <div className="flex h-full w-full bg-[#0a0a0a] text-white">
      {/* Content Area */}
      <div className={`p-20 flex flex-col justify-center ${hasImage ? 'w-5/12' : 'w-full max-w-5xl mx-auto'}`}>
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="font-playfair text-[18px] text-gray-500 uppercase tracking-widest">{project.title}</span>
          <span className="text-gray-600">/</span>
          <span className="font-mulish text-[16px] text-[#D97706] uppercase tracking-wider">{section.sectionTitle}</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`font-playfair leading-[1.2] mb-6 ${hasImage ? 'text-[48px]' : 'text-[64px]'}`}
          style={{ color: `#${project.color}` }}
        >
          {section.sectionTitle === 'Overview' ? project.title : section.sectionTitle}
        </motion.h2>

        <div className="flex flex-col gap-6 mb-8">
          {section.contentParagraphs?.map((para, index) => (
            <motion.p 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              className={`font-mulish font-light text-gray-300 leading-relaxed ${hasImage ? 'text-[22px]' : 'text-[28px]'}`}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Bullets */}
        {section.bullets && (
          <div className="flex flex-col gap-6 mb-8">
            {section.bullets.map((bullet, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                className="flex gap-4 items-start"
              >
                <div 
                  className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                  style={{ backgroundColor: `#${project.color}` }}
                ></div>
                <p className="font-mulish text-[20px] text-gray-400 m-0 leading-normal">{bullet}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Key Metrics Grid */}
        {section.keyMetrics && (
          <div className={`grid mt-4 ${section.keyMetrics.length > 2 ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2'} gap-8`}>
            {section.keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                className="p-6 rounded-xl border border-gray-800 bg-[#141414] shadow-lg"
              >
                <h4 className="font-playfair text-[24px] font-bold mb-3" style={{ color: `#${project.color}` }}>
                  {metric.title}
                </h4>
                <p className="font-mulish text-[18px] text-gray-400 leading-relaxed">
                  {metric.text}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Optional Right side: Image */}
      {hasImage && (
        <div className="w-7/12 bg-[#141414] relative overflow-hidden flex items-center justify-center p-12">
          <motion.img 
            key={section.image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            src={section.image} 
            alt={section.sectionTitle}
            className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectSlide;
