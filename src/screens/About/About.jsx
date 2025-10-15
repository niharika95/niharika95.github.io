import GeometricPattern from '../../components/GeometricPattern';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';

function About() {
  // Track page view, scroll depth, and time on page
  useAnalytics('about');
  useScrollTracking();
  useTimeTracking();

  return (
    <div className="bg-white w-full h-[80vh]">
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
    </div>
  );
}

export default About;