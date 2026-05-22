import React from 'react';
import { motion } from 'framer-motion';

const PitchSlide = ({ config }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-16 bg-black text-white p-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl"
      >
        <h2 className="font-playfair text-[70px] leading-tight mb-10">
          Why I'm the right fit for <br/>
          <span className="text-[#D97706]">{config.companyName || 'your team'}</span>
        </h2>
        
        <div className="grid grid-cols-2 gap-12 text-left mb-16">
          <div className="bg-[#111] p-8 rounded-2xl border border-[#333]">
            <h3 className="font-playfair text-[32px] mb-4 text-white">0 → 1 Expertise</h3>
            <p className="font-mulish text-[20px] text-gray-400 font-light leading-relaxed">
              I thrive in ambiguity and have successfully shipped digital products from scratch, leading the end-to-end design process.
            </p>
          </div>
          <div className="bg-[#111] p-8 rounded-2xl border border-[#333]">
            <h3 className="font-playfair text-[32px] mb-4 text-white">Cross-Functional Leader</h3>
            <p className="font-mulish text-[20px] text-gray-400 font-light leading-relaxed">
              Experienced in collaborating closely with Agile engineering teams, product managers, and stakeholders to deliver high-quality UX.
            </p>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-mulish text-[24px] text-gray-300 font-light"
        >
          Let's build great things together.<br/>
          <span className="font-semibold text-white mt-4 block">niharika13dalal@gmail.com</span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default PitchSlide;
