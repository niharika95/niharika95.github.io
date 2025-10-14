import GeometricPattern from '../../components/GeometricPattern';

function About() {
  return (
    <div className="bg-white min-h-screen w-full">
      {/* Hero Section with Geometric Pattern Background and Circular Image */}
      <section className="relative w-full h-[400px] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-[90px] top-[150px] left-0 right-0">
          <GeometricPattern />
        </div>
        
        {/* Circular Image Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[280px] h-[280px] rounded-full overflow-hidden border-8 border-white shadow-2xl">
            <img 
              src="/about/niharika.png" 
              alt="Niharika Dalal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-[900px] mx-auto px-[40px] py-[80px] max-md:px-[20px] max-md:py-[60px]">
        <p className="font-mulish text-[20px] text-center text-black leading-[1.8] m-0 max-md:text-[18px]">
          I started my career in front-end development, but a curiosity about the person on the other side of the screen led me to UX. The Google UX Design course was my 'aha' moment, teaching me that my true passion wasn't just for building things right, but for building the right things. As a UX Designer, I'm now driven by the reward of making a positive impact and knowing my work can make someone's life a little easier. Outside of design, I love to unwind with a thriller novel or get creative with paints and crafts.
        </p>
      </section>

      {/* Contact Footer */}
      <footer className="py-[40px] px-[40px] flex justify-center items-center gap-[20px] flex-wrap max-md:px-[20px] max-md:gap-[15px]">
        <a
          href="mailto:niharika13dalal@gmail.com"
          className="font-mulish font-light text-[20px] text-black underline decoration-solid leading-[1.5] hover:text-[#106066] max-md:text-[18px]"
        >
          niharika13dalal@gmail.com
        </a>
        <span className="font-mulish font-light text-[20px] text-[#c8c8c8] leading-[1.5] max-md:hidden">
          |
        </span>
        <a
          href="https://linkedin.com/in/niharikadalal"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mulish font-light text-[20px] text-black underline decoration-solid leading-[1.5] hover:text-[#106066] max-md:text-[18px]"
        >
          linkedin.com/in/niharikadalal
        </a>
        <span className="font-mulish font-light text-[20px] text-[#c8c8c8] leading-[1.5] max-md:hidden">
          |
        </span>
        <a
          href="/resume.pdf"
          download
          className="flex gap-[8px] items-center font-mulish font-light text-[20px] text-black underline decoration-solid leading-[1.5] hover:text-[#106066] no-underline max-md:text-[18px]"
        >
          <svg
            className="size-[30px] max-md:size-[24px]"
            fill="none"
            viewBox="0 0 30 30"
          >
            <path
              d="M15 19.4712L10.5769 15.0481L11.4616 14.1491L14.375 17.0625V6.25H15.625V17.0625L18.5384 14.1491L19.4231 15.0481L15 19.4712ZM8.26937 23.75C7.69396 23.75 7.21354 23.5573 6.82813 23.1719C6.44271 22.7865 6.25 22.306 6.25 21.7306V18.7019H7.5V21.7306C7.5 21.9231 7.5801 22.0995 7.74031 22.2597C7.90052 22.4199 8.07687 22.5 8.26937 22.5H21.7306C21.9231 22.5 22.0995 22.4199 22.2597 22.2597C22.4199 22.0995 22.5 21.9231 22.5 21.7306V18.7019H23.75V21.7306C23.75 22.306 23.5573 22.7865 23.1719 23.1719C22.7865 23.5573 22.306 23.75 21.7306 23.75H8.26937Z"
              fill="black"
            />
          </svg>
          <span className="underline">download my resume</span>
        </a>
      </footer>
    </div>
  );
}

export default About;