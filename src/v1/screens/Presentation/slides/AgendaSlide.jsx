import React from 'react';
import { motion } from 'framer-motion';
import { allProjects } from '../presentationData';

const AgendaSlide = ({ config }) => {
  // Find projects that have at least one selected section
  const selectedProjects = allProjects.filter(p => 
    p.sections.some(s => config.selectedSections.includes(s.id))
  );

  return (
    <div className="flex flex-col justify-center h-full px-24 bg-black text-white pb-12">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="font-playfair text-[60px] mb-16 text-[#D97706]"
      >
        Today's Agenda
      </motion.h2>
      
      <div className="flex flex-col gap-8 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-6"
        >
          <span className="text-4xl text-gray-600 font-playfair">01</span>
          <span className="text-3xl font-mulish font-light">Introduction</span>
        </motion.div>

        {selectedProjects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
            className="flex items-center gap-6"
          >
            <span className="text-4xl text-gray-600 font-playfair">0{index + 2}</span>
            <span className="text-3xl font-mulish font-light">{project.title}</span>
          </motion.div>
        ))}

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * (selectedProjects.length + 2) }}
          className="flex items-center gap-6"
        >
          <span className="text-4xl text-gray-600 font-playfair">0{selectedProjects.length + 2}</span>
          <span className="text-3xl font-mulish font-light">Why I'm a naturally good fit</span>
        </motion.div>
      </div>
    </div>
  );
};

export default AgendaSlide;
