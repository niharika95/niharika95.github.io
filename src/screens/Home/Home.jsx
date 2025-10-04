/* eslint-disable max-len */

import { Gutter, ProjectTitle } from '../../common';

import { Icon } from '@iconify/react';
import React from 'react';
import { easeOutExpo } from '../../utils/animations';
import femhealthImg from '../../assets/images/femhealth.png';
import { motion } from 'framer-motion';
import niharikaProfileImg from '../../assets/images/niharikaProfileImg.png';
import quotesSymbol from '../../assets/images/quotes.png';
import svaasthyaImg from '../../assets/images/svaasthya.png';
import swiftbikesImg from '../../assets/images/swiftbikes.png';

function Home() {
  return (
    <Gutter className="pt-[100px]">
      {/* Hero Section */}
      <div className="mt-[160px] md:mt-[240px] mb-[96px] md:mb-[160px]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="text-[56px] md:text-[72px] lg:text-[88px] font-light m-0 leading-[1.1] tracking-tight"
        >
          Hi, I'm Niharika
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
          className="text-[20px] md:text-[24px] lg:text-[28px] font-normal mt-[24px] mb-0 leading-[1.5] text-gray-600 max-w-[800px]"
        >
          a UX designer with a zeal for designing intuitive user interfaces
        </motion.h2>
      </div>

      {/* Projects Section */}
      <div id="projects" className="mt-[96px]">
        {/* Project 1: FemHealth */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="mt-[128px] md:mt-[192px] flex gap-[64px] md:gap-[96px] lg:gap-[128px] justify-center items-center flex-row max-[600px]:flex-col"
        >
          <div className="relative">
            <img
              src={femhealthImg}
              alt="FemHealth"
              className="max-w-[600px] max-[600px]:w-full"
              loading="lazy"
            />
          </div>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
            className="flex flex-col gap-[24px] text-left items-start bg-white p-[32px] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <ProjectTitle color="#3E122D">FemHealth</ProjectTitle>
            <p className="text-[18px] md:text-[20px] font-normal leading-[1.7] text-gray-700 max-w-[480px]">
              A platform for Women to get access to Health Resources
            </p>
            <motion.a
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              onClick={() => window.scrollTo({ top: 0 })}
              href="#/project/femhealth"
              style={{ color: '#3E122D' }}
              className="group flex items-center gap-[8px] no-underline text-[18px] font-semibold relative"
            >
              Case study
              <motion.div className="transition-transform duration-300 group-hover:translate-x-1">
                <Icon color="#3E122D" icon="ep:right" />
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[calc(100%-28px)]" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Project 2: Swift Bikes */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="mt-[128px] md:mt-[192px] flex gap-[64px] md:gap-[96px] lg:gap-[128px] justify-center items-center flex-row-reverse max-[600px]:flex-col"
        >
          <div className="relative">
            <img
              src={swiftbikesImg}
              alt="Swift Bikes"
              className="max-w-[600px] max-[600px]:w-full"
              loading="lazy"
            />
          </div>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
            className="flex flex-col gap-[24px] text-right items-end bg-white p-[32px] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 max-[600px]:text-left max-[600px]:items-start min-w-[400px] max-[600px]:min-w-0"
          >
            <ProjectTitle color="#FF980A">Swift Bikes</ProjectTitle>
            <p className="text-[18px] md:text-[20px] font-normal leading-[1.7] text-gray-700 max-w-[520px]">
              An online solution to buying Custom Bikes
            </p>
            <motion.a
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              onClick={() => window.scrollTo({ top: 0 })}
              href="#/project/swiftbikes"
              style={{ color: '#FF980A' }}
              className="group flex items-center gap-[8px] no-underline text-[18px] font-semibold relative"
            >
              Case study
              <motion.div className="transition-transform duration-300 group-hover:translate-x-1">
                <Icon color="#FF980A" icon="ep:right" />
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[calc(100%-28px)]" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Project 3: Svaasthya */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="mt-[128px] md:mt-[192px] flex gap-[64px] md:gap-[96px] lg:gap-[128px] justify-center items-center flex-row max-[600px]:flex-col"
        >
          <div className="relative">
            <img
              src={svaasthyaImg}
              alt="Svaasthya"
              className="max-w-[600px] max-[600px]:w-full"
              loading="lazy"
            />
          </div>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
            className="flex flex-col gap-[24px] text-left items-start bg-white p-[32px] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <ProjectTitle color="#1D5D82">Svaasthya</ProjectTitle>
            <p className="text-[18px] md:text-[20px] font-normal leading-[1.7] text-gray-700 max-w-[480px]">
              A Support Chatbot for a Hospital in India
            </p>
            <motion.a
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              onClick={() => window.scrollTo({ top: 0 })}
              href="#/project/svaasthya"
              style={{ color: '#1D5D82' }}
              className="group flex items-center gap-[8px] no-underline text-[18px] font-semibold relative"
            >
              Case study
              <motion.div className="transition-transform duration-300 group-hover:translate-x-1">
                <Icon color="#1D5D82" icon="ep:right" />
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[calc(100%-28px)]" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="my-[96px] md:my-[128px]">
        <div className="relative h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-[800px] mx-auto" />
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="about"
        className="flex justify-center gap-[96px] py-[128px] md:py-[192px] max-[600px]:flex-col-reverse"
      >
        <div className="max-w-[640px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[24px] md:text-[28px] font-medium leading-[1.6] text-[var(--color-brand-primary)] mb-[48px]"
          >
            I believe that an intuitive, organized and detail-attentive design is what gives the user a seamless experience.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[18px] font-normal leading-[1.8] text-gray-700"
          >
            I'm passionate about creating minimal yet intuitive designs for diverse digital interfaces.
            <br /><br />
            I started off as a Front-end Developer and my interest in implementing user interfaces came from designing simple and intuitive ones. With a Master's degree in Software Engineering, I have experience developing digital interfaces and have also learned a lot about UX design through professional and personal projects and the Google UX Design certification.
            <br /><br />
            When I'm not coding or designing, I like to sit with a thriller novel or with some paints and a canvas!
          </motion.p>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="flex flex-col gap-[12px] mt-[60px] bg-white p-[32px] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Email */}
            <motion.a
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              target="_blank"
              href="mailto:niharika13dalal@gmail.com"
              className="group font-light text-[20px] no-underline text-black flex gap-[12px] items-center"
              rel="noreferrer"
            >
              <Icon color="#106066" icon="clarity:email-solid" className="transition-transform duration-200 group-hover:scale-110" />
              niharika13dalal@gmail.com
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              target="_blank"
              href="https://www.linkedin.com/in/niharikadalal/"
              className="group font-light text-[20px] no-underline text-black flex gap-[12px] items-center"
              rel="noreferrer"
            >
              <Icon color="#106066" icon="akar-icons:linkedin-fill" className="transition-transform duration-200 group-hover:scale-110" />
              /niharikadalal
            </motion.a>

            {/* Resume */}
            <motion.a
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              href="#/resume"
              className="group font-light text-[20px] no-underline text-black flex gap-[12px] items-center"
            >
              <Icon color="#106066" icon="ant-design:file-text-filled" className="transition-transform duration-200 group-hover:scale-110" />
              Resume (pdf)
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <img
            src={niharikaProfileImg}
            alt="profile"
            className="w-[480px] max-[600px]:w-full rounded-2xl"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      {/* Recommendations Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-[96px] md:py-[160px]"
      >
        <h3 className="text-[32px] md:text-[40px] font-semibold mb-[64px] md:mb-[96px] text-center tracking-tight">
          Recommendations
        </h3>
        
        <div id="recommendations" className="grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[64px] max-w-[1200px] mx-auto">
          {/* Recommendation 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-[32px] md:p-[40px] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <div className="flex text-left flex-grow">
              <img src={quotesSymbol} alt="quote" className="h-[28px] mr-[12px] flex-shrink-0" />
              <div className="flex flex-col flex-grow">
                <p className="text-[16px] italic font-light mt-0 leading-[1.7] flex-grow">
                  Niharika interned for us at Alstom Signaling during the winter of 2018, and she was by far one of our best! I was so impressed with how quickly she learned! The tasks she was given were quite complex, but she completed all of them with such efficiency. She was always motivated, had a strong desire to contribute, and never hesitated to ask questions to better learn her responsibilities. In fact, I struggled to keep her busy! I'm very grateful for her time with us. I would be very happy to have her back one day.
                </p>
              </div>
            </div>
            <div className="flex mt-[24px] min-h-[72px]">
              <div className="w-[4px] bg-[var(--color-brand-primary)] opacity-20 h-auto mr-[12px] rounded-full" />
              <div className="flex flex-col justify-end">
                <p className="text-[18px] font-semibold m-0">Chris Brucker</p>
                <p className="text-[16px] font-light m-0 text-gray-600">Application Engineer | Alstom</p>
              </div>
            </div>
          </motion.div>

          {/* Recommendation 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-[32px] md:p-[40px] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <div className="flex text-left flex-grow">
              <img src={quotesSymbol} alt="quote" className="h-[28px] mr-[12px] flex-shrink-0" />
              <div className="flex flex-col flex-grow">
                <p className="text-[16px] italic font-light mt-0 leading-[1.7] flex-grow">
                  Niharika joined Alstom as coop for RIT for a full quarter and she worked for the Automation and Simulators department. Fast learner, not afraid to take on new challenges, proactive with good initiative and easy to work with!
                </p>
              </div>
            </div>
            <div className="flex mt-[24px] min-h-[72px]">
              <div className="w-[4px] bg-[var(--color-brand-primary)] opacity-20 h-auto mr-[12px] rounded-full" />
              <div className="flex flex-col justify-end">
                <p className="text-[18px] font-semibold m-0">Ralph Ades</p>
                <p className="text-[16px] font-light m-0 text-gray-600">Director of Automation Tools & Simulators (Retired) | Alstom</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Gutter>
  );
}

export default Home;
