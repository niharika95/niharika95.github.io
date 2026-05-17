import GeometricPattern from '../GeometricPattern';
import resumePDF from '../../assets/documents/Dalal, Niharika Resume.pdf';
import React from 'react';

function Footer() {
  return (
    <>
      {/* Contact Footer */}
      <footer className='py-[100px] px-[40px] flex justify-center items-center gap-[20px] flex-wrap max-md:px-[20px] max-md:gap-[15px]'>
        <a
          href='mailto:niharika13dalal@gmail.com'
          className='font-mulish font-light text-[20px] text-black underline decoration-solid leading-[1.5] hover:text-[#106066] max-md:text-[18px]'
        >
          niharika13dalal@gmail.com
        </a>
        <span className='font-mulish font-light text-[20px] text-[#c8c8c8] leading-[1.5] max-md:hidden'>
          |
        </span>
        <a
          href='https://linkedin.com/in/niharikadalal'
          target='_blank'
          rel='noopener noreferrer'
          className='font-mulish font-light text-[20px] text-black underline decoration-solid leading-[1.5] hover:text-[#106066] max-md:text-[18px]'
        >
          linkedin.com/in/niharikadalal
        </a>
        <span className='font-mulish font-light text-[20px] text-[#c8c8c8] leading-[1.5] max-md:hidden'>
          |
        </span>
        <a
          href={resumePDF}
          download
          className='flex gap-[8px] items-center font-mulish font-light text-[20px] text-black underline decoration-solid leading-[1.5] hover:text-[#106066] no-underline max-md:text-[18px]'
        >
          <svg
            className='size-[30px] max-md:size-[24px]'
            fill='none'
            viewBox='0 0 30 30'
          >
            <path
              d='M15 19.4712L10.5769 15.0481L11.4616 14.1491L14.375 17.0625V6.25H15.625V17.0625L18.5384 14.1491L19.4231 15.0481L15 19.4712ZM8.26937 23.75C7.69396 23.75 7.21354 23.5573 6.82813 23.1719C6.44271 22.7865 6.25 22.306 6.25 21.7306V18.7019H7.5V21.7306C7.5 21.9231 7.5801 22.0995 7.74031 22.2597C7.90052 22.4199 8.07687 22.5 8.26937 22.5H21.7306C21.9231 22.5 22.0995 22.4199 22.2597 22.2597C22.4199 22.0995 22.5 21.9231 22.5 21.7306V18.7019H23.75V21.7306C23.75 22.306 23.5573 22.7865 23.1719 23.1719C22.7865 23.5573 22.306 23.75 21.7306 23.75H8.26937Z'
              fill='black'
            />
          </svg>
          <span className='underline'>download my resume</span>
        </a>
      </footer>

      {/* Bottom Decorative Pattern */}
      <section className='h-[90px] flex justify-center w-full'>
        <GeometricPattern />
      </section>
    </>
  );
}

export default Footer;
