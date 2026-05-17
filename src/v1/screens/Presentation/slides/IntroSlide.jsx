import React from 'react';
import { motion } from 'framer-motion';

const IntroSlide = ({ config }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-16 bg-black text-white p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="font-playfair text-[80px] leading-tight mb-8">
          Hello, <span className="text-[#D97706]">{config.companyName || 'Team'}</span>.
        </h1>
        <h2 className="font-mulish text-[40px] font-light text-gray-300 mb-6">
          I'm Niharika Dalal.
        </h2>
        <p className="font-mulish text-[24px] text-gray-400 font-thin leading-relaxed">
          Product Designer with 5+ years of experience designing intuitive digital interfaces. 
          <br />I am excited to show you why I'm a perfect fit for the <strong className="text-white font-normal">{config.targetRole || 'Product Designer'}</strong> role.
        </p>
      </motion.div>
    </div>
  );
};

export default IntroSlide;
