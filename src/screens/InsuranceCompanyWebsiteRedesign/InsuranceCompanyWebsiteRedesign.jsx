import React, { useEffect, useState } from 'react';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';
import { Link } from 'react-router-dom';
import { Workflow, Frown, ArrowDown, Terminal } from 'lucide-react';

const TOC = [
  { id: 'intro', label: 'Intro' },
  { id: 'problems', label: 'Problems' },
  { id: 'diagnosis', label: 'Diagnosis & discovery' },
  { id: 'audience', label: 'Understanding the audience' },
  { id: 'foundation', label: 'Rebuilding the foundation' },
  { id: 'crafting', label: 'Crafting the experience' },
  { id: 'pivot', label: 'The Stakeholder Pivot' },
  { id: 'impact', label: 'The Impact' },
  { id: 'learnings', label: 'Challenges & Learnings' },
];

const InsuranceCompanyWebsiteRedesign = () => {
  useAnalytics('project_detail', {
    projectName: 'insurance-company-website-redesign',
    projectType: 'professional'
  });
  useScrollTracking();
  useTimeTracking();

  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = TOC.map(item => document.getElementById(item.id));
      let currentActiveId = 'intro';
      for (const el of sectionElements) {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            currentActiveId = el.id;
          }
        }
      }
      setActiveSection(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white text-[#1A1A1A] min-h-screen" style={{ fontFamily: "'IBM Plex Sans', -apple-system, sans-serif" }}>
      <HeaderV2 />

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 flex pt-10 pb-32">
        {/* Left Sidebar TOC */}
        <aside className="hidden lg:block w-[180px] flex-shrink-0 sticky top-[130px] self-start max-h-[calc(100vh-140px)] overflow-y-auto">
          <nav className="flex flex-col gap-[40px] text-[14px] leading-[1.5] font-light">
            <Link to="/v2" className="text-[#A0A0A0] nav-item-shimmer transition-colors">Home</Link>
            <div className="flex flex-col gap-[12px]">
              {TOC.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`transition-colors ${activeSection === item.id ? 'text-[#000]' : 'text-[#A0A0A0] nav-item-shimmer'
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-full max-w-[720px] mx-auto lg:ml-20 xl:ml-32">

          <section id="intro" className="mb-[60px]">
            <h1 className="text-[40px] md:text-[40px] leading-[1.5] font-light mb-[60px] text-[#1A1A1A]">
              Redesign that reduced heuristic issues and improved overall site performance by 37%.
            </h1>

            <div className="flex flex-col mb-[60px] text-[18px] text-[#808080]" style={{ lineHeight: '36px' }}>
              <div className="flex gap-4">
                <span className="w-[50px] flex-shrink-0 font-light">Role</span>
                <span className="font-light">UX/UI Designer, 10 months</span>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:items-start">
                <span className="w-[50px] flex-shrink-0 font-light">Team</span>
                <span className="max-w-[500px] font-light">Product Manager, Product Owner, 2 UX/UI Designers, Content Writer, Webflow Developer, Drupal Developer</span>
              </div>
            </div>

            <div className="bg-[#F2F2F2] rounded-[20px] p-8 md:p-14 mb-[60px] flex items-center justify-center shadow-sm">
              <img
                src="/images/projects/insurance-company-website-design/Insurance-hero-image.png"
                alt="Insurance Hero"
                className="w-full h-auto drop-shadow-2xl rounded-md"
              />
            </div>

            <p className="text-[18px] md:text-[18px] text-[#1A1A1A] w-full lg:w-8/12" style={{ lineHeight: '36px' }}>
              A mid-sized, third-fastest-growing U.S. home insurer on a path to $1B revenue needed a full marketing website overhaul. Their existing site was visually outdated, hard to use, and failing to convert. I joined as one of two UX/UI designers and led the redesign end-to-end.
            </p>
          </section>

          <section id="problems" className="mb-[60px]">
            <h2 className="text-[18px] text-[#A0A0A0] font-light mb-8">Modernizing the brand meant solving for the deep-seated technical and visual debt that held the site back.</h2>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <Workflow className="text-[#D43A4B] flex-shrink-0" size={28} strokeWidth={1.5} />
                <span className="text-[20px] font-light text-[#1A1A1A]">Outdated & Inconsistent Design</span>
              </div>
              <div className="flex items-center gap-6">
                <Frown className="text-[#D43A4B] flex-shrink-0" size={28} strokeWidth={1.5} />
                <span className="text-[20px] font-light text-[#1A1A1A]">Poor Usability (text-heavy, poor mobile)</span>
              </div>
              <div className="flex items-center gap-6">
                <ArrowDown className="text-[#D43A4B] flex-shrink-0" size={28} strokeWidth={1.5} />
                <span className="text-[20px] font-light text-[#1A1A1A]">Low Conversion & SEO Performance</span>
              </div>
              <div className="flex items-center gap-6">
                <Terminal className="text-[#D43A4B] flex-shrink-0" size={28} strokeWidth={1.5} />
                <span className="text-[20px] font-light text-[#1A1A1A]">Technical Debt (WordPress not scalable)</span>
              </div>
            </div>
          </section>

          <section id="diagnosis" className="min-h-[50vh] mb-20 pt-10">
            <h2 className="font-playfair text-3xl font-bold mb-4">Diagnosis & discovery</h2>
            <p className="text-[#888]">Content pending...</p>
          </section>

          <section id="audience" className="min-h-[50vh] mb-20 pt-10">
            <h2 className="font-playfair text-3xl font-bold mb-4">Understanding the audience</h2>
            <p className="text-[#888]">Content pending...</p>
          </section>

          <section id="foundation" className="min-h-[50vh] mb-20 pt-10">
            <h2 className="font-playfair text-3xl font-bold mb-4">Rebuilding the foundation</h2>
            <p className="text-[#888]">Content pending...</p>
          </section>

          <section id="crafting" className="min-h-[50vh] mb-20 pt-10">
            <h2 className="font-playfair text-3xl font-bold mb-4">Crafting the experience</h2>
            <p className="text-[#888]">Content pending...</p>
          </section>

          <section id="pivot" className="min-h-[50vh] mb-20 pt-10">
            <h2 className="font-playfair text-3xl font-bold mb-4">The Stakeholder Pivot</h2>
            <p className="text-[#888]">Content pending...</p>
          </section>

          <section id="impact" className="min-h-[50vh] mb-20 pt-10">
            <h2 className="font-playfair text-3xl font-bold mb-4">The Impact</h2>
            <p className="text-[#888]">Content pending...</p>
          </section>

          <section id="learnings" className="min-h-[50vh] mb-20 pt-10">
            <h2 className="font-playfair text-3xl font-bold mb-4">Challenges & Learnings</h2>
            <p className="text-[#888]">Content pending...</p>
          </section>

        </main>
      </div>
    </div>
  );
};

export default InsuranceCompanyWebsiteRedesign;