import imgImage29 from "./image29.png"
import imgImage30 from "./image30.png";
import imgImage31 from "./image31.png";
import imgImage32 from "./image32.png";

const svgPaths = {
p11dd1a80: "M-1.96701e-06 45C5.90948 45 11.7611 43.8361 17.2208 41.5746C22.6804 39.3131 27.6412 35.9985 31.8198 31.8198C35.9984 27.6412 39.3131 22.6804 41.5746 17.2208C43.836 11.7611 45 5.90949 45 9.5964e-06L0 9.5964e-06L-1.96701e-06 45Z",
p13416900: "M5.66238e-06 45.0004C5.90949 45.0004 11.7611 43.8364 17.2208 41.5749C22.6804 39.3135 27.6412 35.9988 31.8198 31.8202C35.9984 27.6415 39.3131 22.6808 41.5746 17.2211C43.836 11.7615 45 5.90985 45 0.000366211L7.62939e-06 0.000366211L5.66238e-06 45.0004Z",
p2012a640: "M-9.59641e-06 45C5.90947 45 11.7611 43.836 17.2207 41.5746C22.6804 39.3131 27.6412 35.9984 31.8198 31.8198C35.9984 27.6412 39.3131 22.6804 41.5746 17.2208C43.836 11.7611 45 5.90948 45 0L-7.62939e-06 0L-9.59641e-06 45Z",
p204a6cf0: "M-9.59641e-06 45.0004C5.90947 45.0004 11.7611 43.8364 17.2207 41.5749C22.6804 39.3135 27.6412 35.9988 31.8198 31.8202C35.9984 27.6415 39.3131 22.6808 41.5746 17.2211C43.836 11.7615 45 5.90985 45 0.000366211L-7.62939e-06 0.000366211L-9.59641e-06 45.0004Z",
p351d7100: "M15 19.4712L10.5769 15.0481L11.4616 14.1491L14.375 17.0625V6.25H15.625V17.0625L18.5384 14.1491L19.4231 15.0481L15 19.4712ZM8.26937 23.75C7.69396 23.75 7.21354 23.5573 6.82813 23.1719C6.44271 22.7865 6.25 22.306 6.25 21.7306V18.7019H7.5V21.7306C7.5 21.9231 7.5801 22.0995 7.74031 22.2597C7.90052 22.4199 8.07687 22.5 8.26937 22.5H21.7306C21.9231 22.5 22.0995 22.4199 22.2597 22.2597C22.4199 22.0995 22.5 21.9231 22.5 21.7306V18.7019H23.75V21.7306C23.75 22.306 23.5573 22.7865 23.1719 23.1719C22.7865 23.5573 22.306 23.75 21.7306 23.75H8.26937Z",
p3658de00: "M45 45.0012C20.1472 45.0012 -1.0864e-06 24.854 0 0.00118566C37.125 0.00265212 20.1472 8.51005e-06 45 9.59641e-06C69.8528 1.06828e-05 53.25 0.00118798 90 0.00118959C90 24.854 69.8528 45.0012 45 45.0012Z",
p38a39500: "M45.375 45.375L90 0V90H0L45.375 45.375Z",
p3caaa200: "M0.000242174 45C5.90973 45 11.7613 43.8361 17.221 41.5746C22.6806 39.3131 27.6414 35.9985 31.82 31.8198C35.9987 27.6412 39.3134 22.6804 41.5748 17.2208C43.8363 11.7611 45.0002 5.90949 45.0002 9.59641e-06L0.000244141 9.59641e-06L0.000242174 45Z",
p3dabb800: "M-1.96701e-06 45C5.90948 45 11.7611 43.8361 17.2208 41.5746C22.6804 39.3131 27.6412 35.9985 31.8198 31.8198C35.9984 27.6412 39.3131 22.6804 41.5746 17.2208C43.836 11.7611 45 5.90949 45 9.5964e-06L0 9.59641e-06L-1.96701e-06 45Z",
p6152200: "M5.66238e-06 45C5.90949 45 11.7611 43.836 17.2208 41.5746C22.6804 39.3131 27.6412 35.9984 31.8198 31.8198C35.9984 27.6412 39.3131 22.6804 41.5746 17.2208C43.836 11.7611 45 5.90948 45 0L7.62939e-06 0L5.66238e-06 45Z",
}


export default function App() {
  return (
    <div className="bg-white min-h-screen w-full">
      {/* Header */}
      <header className="bg-[#f8f8f8] flex items-center justify-between px-[40px] py-[12px] w-full">
        {/* Left - SVG Logo */}
        <div className="relative size-[90px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
            <g>
              <rect fill="#313C5F" height="90" width="90" />
              <path d={svgPaths.p38a39500} fill="#F7B000" />
            </g>
          </svg>
        </div>
        
        {/* Right - Navigation */}
        <nav className="flex gap-[40px] items-center">
          <a href="#projects" className="font-['Mulish:Regular',_sans-serif] text-[16px] text-black">
            Projects
          </a>
          <a href="#about" className="font-['Mulish:Regular',_sans-serif] text-[16px] text-black">
            About Me
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-between px-[40px] py-[60px] w-full">
        {/* Left - Decorative SVG Pattern */}
        <div className="flex flex-col items-start shrink-0">
          <div className="grid grid-cols-[repeat(5,90px)] grid-rows-[repeat(5,90px)] gap-0">
            {/* Row 1 */}
            <div className="relative">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                <rect fill="#313C5F" height="90" width="90" />
                <path d={svgPaths.p38a39500} fill="#F7B000" />
              </svg>
            </div>
            <div className="bg-[#dcd7e8] h-[90px] w-[135px]" />
            <div className="relative">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                <rect fill="#DCD7E8" height="90" width="90" />
                <path d={svgPaths.p6152200} fill="#E3F3EE" />
              </svg>
            </div>
            <div className="relative rotate-[270deg]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                <rect fill="#313C5F" height="90" width="90" />
                <path d={svgPaths.p3dabb800} fill="#E3F3EE" />
              </svg>
            </div>
            <div className="relative rotate-[180deg] scale-y-[-100%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                <rect fill="#F7B000" height="90" width="90" />
                <path d={svgPaths.p2012a640} fill="#E3F3EE" />
              </svg>
            </div>

            {/* Row 2 */}
            <div className="relative rotate-[270deg]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                <rect fill="#FF4C4C" height="90" width="90" />
                <path d={svgPaths.p38a39500} fill="#F47A2D" />
              </svg>
            </div>
            <div className="bg-[#8fdfc6] h-[90px] w-[135px]" />
            <div className="bg-[#e3f3ee] h-[90px] w-[90px]" />
            <div className="relative rotate-[270deg]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                <rect fill="#F7B000" height="90" width="90" />
                <path d={svgPaths.p3caaa200} fill="#313C5F" />
              </svg>
            </div>
            <div className="relative rotate-[180deg] scale-y-[-100%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                <rect fill="#FF4C4C" height="90" width="90" />
                <path d={svgPaths.p204a6cf0} fill="#F47A2D" />
              </svg>
            </div>

            {/* Row 3 */}
            <div className="bg-[#f7b000] size-[90px]" />
            <div className="bg-[#dcd7e8] h-[90px] w-[135px]" />
            <div className="relative">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                <rect fill="#F47A2D" height="90" width="90" />
                <path d={svgPaths.p13416900} fill="#DCD7E8" />
              </svg>
            </div>
            <div className="relative rotate-[270deg]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                <rect fill="#313C5F" height="90" width="90" />
                <path d={svgPaths.p3658de00} fill="#E3F3EE" />
              </svg>
            </div>
            <div className="bg-[#8fdfc6] size-[90px]" />

            {/* Row 4 */}
            <div className="relative rotate-[180deg] scale-y-[-100%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                <rect fill="#313C5F" height="90" width="90" />
                <path d={svgPaths.p38a39500} fill="#E3F3EE" />
              </svg>
            </div>
            <div className="bg-[#f7b000] h-[90px] w-[135px]" />
            <div className="relative rotate-[270deg]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                <rect fill="#313C5F" height="90" width="90" />
                <path d={svgPaths.p38a39500} fill="#E3F3EE" />
              </svg>
            </div>
            <div className="relative rotate-[270deg]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                <rect fill="#DCD7E8" height="90" width="90" />
                <path d={svgPaths.p3dabb800} fill="#E3F3EE" />
              </svg>
            </div>
            <div className="bg-[#e3f3ee] size-[90px]" />

            {/* Row 5 */}
            <div className="relative rotate-[270deg]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                <rect fill="#313C5F" height="90" width="90" />
                <path d={svgPaths.p3658de00} fill="#E3F3EE" />
              </svg>
            </div>
            <div className="bg-[#ff4c4c] h-[90px] w-[135px]" />
            <div className="relative rotate-[90deg] scale-y-[-100%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                <rect fill="#DCD7E8" height="90" width="90" />
                <path d={svgPaths.p3dabb800} fill="#E3F3EE" />
              </svg>
            </div>
            <div className="relative rotate-[270deg]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                <rect fill="#F7B000" height="90" width="90" />
                <path d={svgPaths.p38a39500} fill="#8FDFC6" />
              </svg>
            </div>
            <div className="relative rotate-[180deg] scale-y-[-100%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                <rect fill="#DCD7E8" height="90" width="90" />
                <path d={svgPaths.p38a39500} fill="#E3F3EE" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right - Hero Content */}
        <div className="flex flex-col gap-[80px] max-w-[600px] px-[80px]">
          {/* Title and Description */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col">
              <h1 className="font-['Playfair_Display:Regular',_sans-serif] text-[60px] text-black tracking-[-2.4px] leading-none">
                Niharika Dalal
              </h1>
              <p className="font-['Playfair_Display:Regular',_sans-serif] text-[60px] text-[#898989] tracking-[-2.4px] leading-none">
                Product Designer
              </p>
            </div>
            <p className="font-['Mulish:Regular',_sans-serif] text-[20px] text-black tracking-[-1px] leading-[1.5]">
              Designing 0-to-1 solutions that drive growth, in collaboration with cross-functional and cross-cultural Agile teams.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-[20px]">
            <div className="flex flex-col gap-[4px] w-[205px]">
              <p className="font-['Mulish:Bold',_sans-serif] text-[40px] text-black leading-[1.5]">4.5+</p>
              <p className="font-['Mulish:Regular',_sans-serif] text-[16px] text-black leading-[1.5]">
                years of expertise designing digital interfaces
              </p>
            </div>
            <div className="flex flex-col gap-[4px] w-[205px]">
              <p className="font-['Mulish:Bold',_sans-serif] text-[40px] text-black leading-[1.5]">17</p>
              <p className="font-['Mulish:Regular',_sans-serif] text-[16px] text-black leading-[1.5]">
                projects shipped (8 large scale + 9 small scale)
              </p>
            </div>
            <div className="flex flex-col gap-[4px] w-[205px]">
              <p className="font-['Mulish:Bold',_sans-serif] text-[40px] text-black leading-[1.5]">13</p>
              <p className="font-['Mulish:Regular',_sans-serif] text-[16px] text-black leading-[1.5]">
                successful partnerships with valued clients
              </p>
            </div>
            <div className="flex flex-col gap-[4px] w-[205px]">
              <p className="font-['Mulish:Bold',_sans-serif] text-[40px] text-black leading-[1.5]">60%</p>
              <p className="font-['Mulish:Regular',_sans-serif] text-[16px] text-black leading-[1.5]">
                boost in university counselors' productivity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-[60px] px-[40px]" id="projects">
        <div className="grid grid-cols-2 gap-0">
          {/* Project 1 - Insurance Company Website Redesign */}
          <div className="bg-neutral-100 flex flex-col gap-[10px] h-[500px] overflow-hidden px-[100px] py-[60px] relative">
            <div className="flex flex-col gap-[20px] z-10">
              <h3 className="font-['Playfair_Display:SemiBold',_sans-serif] text-[32px] text-black leading-normal">
                Insurance Company Website Redesign
              </h3>
              <p className="font-['Mulish:Light',_'Noto_Sans:Light',_sans-serif] text-[20px] text-black leading-[1.5]">
                Drove a 44% SEO boost and 37% performance increase with a 0→1 redesign built for growth.
              </p>
            </div>
            <div className="absolute h-[480px] left-1/2 top-[266px] -translate-x-1/2 w-[520px]">
              <img 
                alt="Insurance website preview" 
                className="absolute inset-0 max-w-none object-cover size-full grayscale contrast-125" 
                src={imgImage31} 
              />
            </div>
          </div>

          {/* Project 2 - Loan App Experience Optimization */}
          <div className="bg-neutral-100 flex flex-col gap-[10px] h-[500px] overflow-hidden px-[100px] py-[60px] relative">
            <div className="flex flex-col gap-[20px] z-10 w-[201px]">
              <h3 className="font-['Playfair_Display:SemiBold',_sans-serif] text-[32px] text-black leading-normal">
                Loan App Experience Optimization
              </h3>
              <p className="font-['Mulish:Light',_sans-serif] text-[20px] text-black leading-[1.5]">
                Slashing projected loan application time by 40% by redesigning for trust and efficiency.
              </p>
            </div>
            <div className="absolute h-[615px] left-[calc(50%+150.5px)] -translate-x-1/2 pointer-events-none rounded-[36px] top-[134px] w-[275px]">
              <img 
                alt="Loan app preview" 
                className="absolute inset-0 max-w-none object-cover rounded-[36px] size-full grayscale contrast-125" 
                src={imgImage30} 
              />
              <div className="absolute border-4 border-black border-solid inset-[-4px] rounded-[40px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
            </div>
          </div>

          {/* Project 3 - Admissions Process Acceleration */}
          <div className="bg-neutral-100 flex flex-col gap-[10px] h-[500px] overflow-hidden px-[100px] py-[60px] relative">
            <div className="flex flex-col gap-[20px] z-10">
              <h3 className="font-['Playfair_Display:SemiBold',_sans-serif] text-[32px] text-black leading-normal">
                Admissions Process Acceleration
              </h3>
              <p className="font-['Mulish:Light',_sans-serif] text-[20px] text-black leading-[1.5]">
                How user-centric design unlocked a 60% productivity gain and empowered counselors to focus on high-value decisions.
              </p>
            </div>
            <div className="absolute h-[633px] left-1/2 top-[250px] -translate-x-1/2 w-[520px]">
              <img 
                alt="Admissions process preview" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full grayscale contrast-125" 
                src={imgImage29} 
              />
            </div>
          </div>

          {/* Project 4 - Intelligent Campaign Builder Overhaul */}
          <div className="bg-neutral-100 flex flex-col gap-[10px] h-[500px] overflow-hidden px-[100px] py-[60px] relative">
            <div className="flex flex-col gap-[20px] z-10">
              <h3 className="font-['Playfair_Display:SemiBold',_sans-serif] text-[32px] text-black leading-normal">
                Intelligent Campaign Builder Overhaul
              </h3>
              <p className="font-['Mulish:Light',_sans-serif] text-[20px] text-black leading-[1.5]">
                Empowering Marketers with a Data-Driven, Intuitive Lead Generation Engine.
              </p>
            </div>
            <div className="absolute h-[370px] left-1/2 top-[266px] -translate-x-1/2 w-[520px]">
              <img 
                alt="Campaign builder preview" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full grayscale contrast-125" 
                src={imgImage32} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Decorative Pattern */}
      <section className="py-[40px] px-[40px] flex justify-center">
        <div className="inline-grid grid-cols-[repeat(16,90px)] grid-rows-1 gap-0">
          <div className="relative">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
              <rect fill="#313C5F" height="90" width="90" />
              <path d={svgPaths.p38a39500} fill="#F7B000" />
            </svg>
          </div>
          <div className="bg-[#dcd7e8] h-[90px] w-[135px]" />
          <div className="relative">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
              <rect fill="#DCD7E8" height="90" width="90" />
              <path d={svgPaths.p6152200} fill="#E3F3EE" />
            </svg>
          </div>
          <div className="relative rotate-[270deg]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
              <rect fill="#313C5F" height="90" width="90" />
              <path d={svgPaths.p3dabb800} fill="#E3F3EE" />
            </svg>
          </div>
          <div className="relative rotate-[180deg] scale-y-[-100%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
              <rect fill="#F7B000" height="90" width="90" />
              <path d={svgPaths.p2012a640} fill="#E3F3EE" />
            </svg>
          </div>
          <div className="bg-[#8fdfc6] h-[90px] w-[135px]" />
          <div className="relative">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
              <rect fill="#FF4C4C" height="90" width="90" />
              <path d={svgPaths.p38a39500} fill="#313C5F" />
            </svg>
          </div>
          <div className="relative rotate-[180deg] scale-y-[-100%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
              <rect fill="#313C5F" height="90" width="90" />
              <path d={svgPaths.p38a39500} fill="#E3F3EE" />
            </svg>
          </div>
          <div className="relative rotate-[270deg]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
              <rect fill="#FF4C4C" height="90" width="90" />
              <path d={svgPaths.p38a39500} fill="#F47A2D" />
            </svg>
          </div>
          <div className="bg-[#f7b000] size-[90px]" />
          <div className="bg-[#e3f3ee] h-[90px] w-[135px]" />
          <div className="relative">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
              <rect fill="#F47A2D" height="90" width="90" />
              <path d={svgPaths.p13416900} fill="#DCD7E8" />
            </svg>
          </div>
          <div className="relative rotate-[180deg] scale-y-[-100%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
              <rect fill="#FF4C4C" height="90" width="90" />
              <path d={svgPaths.p204a6cf0} fill="#F47A2D" />
            </svg>
          </div>
          <div className="relative rotate-[90deg] scale-y-[-100%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
              <rect fill="#FF4C4C" height="90" width="90" />
              <path d={svgPaths.p11dd1a80} fill="#F47A2D" />
            </svg>
          </div>
          <div className="relative rotate-[270deg]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
              <rect fill="#313C5F" height="90" width="90" />
              <path d={svgPaths.p3658de00} fill="#E3F3EE" />
            </svg>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="py-[40px] px-[40px] flex justify-center items-center gap-[20px]">
        <a 
          href="mailto:niharika13dalal@gmail.com" 
          className="font-['Mulish:Light',_sans-serif] text-[20px] text-black underline decoration-solid leading-[1.5]"
        >
          niharika13dalal@gmail.com
        </a>
        <span className="font-['Mulish:Light',_sans-serif] text-[20px] text-[#c8c8c8] leading-[1.5]">|</span>
        <a 
          href="https://linkedin.com/in/niharikadalal" 
          target="_blank"
          rel="noopener noreferrer"
          className="font-['Mulish:Light',_sans-serif] text-[20px] text-black underline decoration-solid leading-[1.5]"
        >
          linkedin.com/in/niharikadalal
        </a>
        <span className="font-['Mulish:Light',_sans-serif] text-[20px] text-[#c8c8c8] leading-[1.5]">|</span>
        <button className="flex gap-[8px] items-center">
          <svg className="size-[30px]" fill="none" viewBox="0 0 30 30">
            <path 
              d={svgPaths.p351d7100} 
              fill="black" 
            />
          </svg>
          <span className="font-['Mulish:Light',_sans-serif] text-[20px] text-black underline decoration-solid leading-[1.5]">
            download my resume
          </span>
        </button>
      </footer>
    </div>
  );
}
