import GeometricPattern from '../../components/GeometricPattern';
import { HashLink } from 'react-router-hash-link';
import React from 'react';

const projects = [
  {
    title: 'Insurance Company Website Redesign',
    description: 'Drove a 44% SEO boost and 37% performance increase with a 0→1 redesign built for growth.',
    image: '/home-v2/insurance-website.png',
    link: '#/insurance-company-website-redesign'
  },
  {
    title: 'Loan App Experience Optimization',
    description: 'Slashing projected loan application time by 40% by redesigning for trust and efficiency.',
    image: '/home-v2/loan-app.png',
    link: '#/loan-app-experience-optimization',
    isMobile: true
  },
  {
    title: 'Admissions Process Acceleration',
    description: 'How user-centric design unlocked a 60% productivity gain and empowered counselors to focus on high-value decisions.',
    image: '/home-v2/admissions-process.png',
    link: '#/admissions-process-acceleration'
  },
  {
    title: 'Intelligent Campaign Builder Overhaul',
    description: 'Empowering Marketers with a Data-Driven, Intuitive Lead Generation Engine.',
    image: '/home-v2/campaign-builder.png',
    link: '#/intelligent-campaign-builder'
  }
];

const stats = [
  { value: '4.5+', label: 'years of expertise designing digital interfaces' },
  { value: '17', label: 'projects shipped (8 large scale + 9 small scale)' },
  { value: '13', label: 'successful partnerships with valued clients' },
  { value: '60%', label: "boost in university counselors' productivity" }
];

function HomeV2() {
  return (
    <div className="bg-white min-h-screen w-full">
      {/* Hero Section */}
      <section className="flex items-center justify-between px-[40px] py-[60px] w-full max-lg:flex-col max-lg:gap-[60px] max-md:px-[20px] max-md:py-[40px]">
        {/* Left - Decorative SVG Pattern */}
        <div className="flex flex-col items-start shrink-0 max-lg:self-center">
          <GeometricPattern variant="hero" className="max-md:scale-75 max-md:origin-center" />
        </div>

        {/* Right - Hero Content */}
        <div className="flex flex-col gap-[80px] max-w-[600px] px-[80px] max-lg:px-[40px] max-lg:max-w-full max-md:px-[20px] max-md:gap-[60px]">
          {/* Title and Description */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col">
              <h1 className="font-['Playfair_Display',serif] text-[60px] text-black tracking-[-2.4px] leading-none m-0 max-md:text-[48px]">
                Niharika Dalal
              </h1>
              <p className="font-['Playfair_Display',serif] text-[60px] text-[#898989] tracking-[-2.4px] leading-none m-0 max-md:text-[48px]">
                Product Designer
              </p>
            </div>
            <p className="font-['Mulish',sans-serif] text-[20px] text-black tracking-[-1px] leading-[1.5] m-0 max-md:text-[18px]">
              Designing 0-to-1 solutions that drive growth, in collaboration with cross-functional and cross-cultural Agile teams.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-[20px] max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-[30px]">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-[4px] w-[205px] max-lg:w-auto">
                <p className="font-['Mulish',sans-serif] font-bold text-[40px] text-black leading-[1.5] m-0 max-md:text-[36px]">
                  {stat.value}
                </p>
                <p className="font-['Mulish',sans-serif] text-[16px] text-black leading-[1.5] m-0 max-md:text-[15px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-[60px] px-[40px] max-md:px-[20px] max-md:py-[40px]" id="projects">
        <div className="grid grid-cols-2 gap-0 max-lg:grid-cols-1">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="bg-neutral-100 flex flex-col gap-[10px] h-[500px] overflow-hidden px-[100px] py-[60px] relative no-underline hover:bg-neutral-200 transition-colors max-lg:px-[60px] max-md:px-[40px] max-md:h-[400px]"
            >
              <div className="flex flex-col gap-[20px] z-10 max-w-[400px]">
                <h3 className="font-['Playfair_Display',serif] font-semibold text-[32px] text-black leading-normal m-0 max-md:text-[28px]">
                  {project.title}
                </h3>
                <p className="font-['Mulish',sans-serif] font-light text-[20px] text-black leading-[1.5] m-0 max-md:text-[18px]">
                  {project.description}
                </p>
              </div>
              
              {/* Project Image */}
              <div 
                className={`absolute ${
                  project.isMobile 
                    ? 'h-[615px] left-[calc(50%+150.5px)] -translate-x-1/2 rounded-[36px] top-[134px] w-[275px] max-lg:left-1/2 max-lg:top-[200px]' 
                    : 'h-[480px] left-1/2 top-[266px] -translate-x-1/2 w-[520px] max-lg:w-[400px] max-lg:h-[380px] max-md:w-[300px] max-md:h-[280px]'
                }`}
              >
                <img 
                  alt={project.title}
                  className={`absolute inset-0 max-w-none object-cover size-full grayscale contrast-125 ${
                    project.isMobile ? 'rounded-[36px]' : ''
                  }`}
                  src={project.image}
                  loading="lazy"
                />
                {project.isMobile && (
                  <div className="absolute border-4 border-black border-solid inset-[-4px] rounded-[40px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
                )}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Bottom Decorative Pattern */}
      <section className="py-[40px] px-[40px] flex justify-center overflow-x-auto max-md:px-[20px]">
        <GeometricPattern variant="footer" />
      </section>

      {/* Contact Footer */}
      <footer className="py-[40px] px-[40px] flex justify-center items-center gap-[20px] flex-wrap max-md:px-[20px] max-md:gap-[15px]">
        <a 
          href="mailto:niharika13dalal@gmail.com" 
          className="font-['Mulish',sans-serif] font-light text-[20px] text-black underline decoration-solid leading-[1.5] hover:text-[#106066] max-md:text-[18px]"
        >
          niharika13dalal@gmail.com
        </a>
        <span className="font-['Mulish',sans-serif] font-light text-[20px] text-[#c8c8c8] leading-[1.5] max-md:hidden">|</span>
        <a 
          href="https://linkedin.com/in/niharikadalal" 
          target="_blank"
          rel="noopener noreferrer"
          className="font-['Mulish',sans-serif] font-light text-[20px] text-black underline decoration-solid leading-[1.5] hover:text-[#106066] max-md:text-[18px]"
        >
          linkedin.com/in/niharikadalal
        </a>
        <span className="font-['Mulish',sans-serif] font-light text-[20px] text-[#c8c8c8] leading-[1.5] max-md:hidden">|</span>
        <a 
          href="/resume.pdf"
          download
          className="flex gap-[8px] items-center font-['Mulish',sans-serif] font-light text-[20px] text-black underline decoration-solid leading-[1.5] hover:text-[#106066] no-underline max-md:text-[18px]"
        >
          <svg className="size-[30px] max-md:size-[24px]" fill="none" viewBox="0 0 30 30">
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

export default HomeV2;