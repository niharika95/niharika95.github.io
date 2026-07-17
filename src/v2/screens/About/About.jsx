import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import Typography from '../../components/Typography/Typography';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';

function About() {
  // Track page view, scroll depth, and time on page
  useAnalytics('about');
  useScrollTracking();
  useTimeTracking();

  return (
    <div className="bg-gradient-to-br from-white to-[#EBEBEB] text-[#1A1A1A] min-h-screen">
      <HeaderV2 style={{ background: 'rgba(250, 250, 250, 0.85)' }} />

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 flex pt-6 pb-20 lg:pt-10 lg:pb-32">
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-[180px] flex-shrink-0 sticky top-[130px] self-start max-h-[calc(100vh-140px)] overflow-y-auto">
          <nav className="flex flex-col gap-[40px]">
            <Link to="/" className="back-link-group inline-flex items-center text-gray-500 transition-colors duration-200 gap-1 font-ibm-plex text-base font-medium -ml-1 no-underline hover:text-gray-900">
              <ChevronLeft size={20} className="icon-solid-hover transition-colors duration-200" />
              <Typography as="span" variant="smallLight" className="shimmer-text">Home</Typography>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-full max-w-[800px] mx-auto lg:ml-[60px] xl:ml-[100px] flex flex-col md:flex-row gap-8 md:gap-[70px] items-center">
          
          {/* Left: Image */}
          <div className="relative w-full max-w-[320px] flex-shrink-0">
            <div className="absolute inset-0 bg-[#E0E0E0] rounded-[24px] transform -rotate-[5deg] scale-[1.03] origin-center -z-10 transition-transform duration-500 hover:-rotate-2"></div>
            <img
              src="/v2/images/home/niharika.png"
              alt="Niharika Dalal"
              className="w-full h-auto rounded-[24px] object-cover relative z-10"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full flex-1">
            <Typography as="p" variant="bodyRegular" className="text-gray-900 leading-[2] text-left m-0">
              I started my career in front-end development, but a curiosity about the person on the other side of the screen led me to UX. The Google UX Design course was my 'aha' moment, teaching me that my true passion wasn't just for building things right, but for building the right things. As a UX Designer, I'm now driven by the reward of making a positive impact and knowing my work can make someone's life a little easier.
              <br/><br/>
              Outside of design, I love to unwind with a thriller novel or get creative with paints and crafts.
            </Typography>
          </div>

        </main>
      </div>
    </div>
  );
}

export default About;
