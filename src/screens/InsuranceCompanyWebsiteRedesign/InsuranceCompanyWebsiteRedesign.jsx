import React, { useEffect, useState } from 'react';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Icon } from '@iconify/react';

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

const ASSET_PATH = '/images/projects/insurance-company-website-design';

const metrics = [
  { value: '+37%', label: 'Desktop Performance', detail: '(64 -> 88)' },
  { value: '+28%', label: 'Best Practices', detail: '(73 -> 96)' },
  { value: '+13.6%', label: 'Accessibility', detail: '(88 -> 100)' },
  { value: '53 / 56', label: 'Heuristic issues', detail: 'resolved' },
];

const problemAreas = [
  {
    icon: 'material-symbols:percent-rounded',
    label: 'Outdated & Inconsistent Design',
  },
  {
    icon: 'material-symbols:sentiment-dissatisfied-outline-rounded',
    label: 'Poor Usability (text-heavy, poor mobile)',
  },
  {
    icon: 'material-symbols:arrow-downward-rounded',
    label: 'Low Conversion & SEO Performance',
  },
  {
    icon: 'material-symbols:terminal-rounded',
    label: 'Technical Debt (WordPress not scalable)',
  },
];

const auditStats = [
  { value: '56', label: 'Usability issues' },
  { value: '27', label: 'Pages of audit report' },
  { value: '88', label: 'Accessibility score', detail: '(Page found manually)' },
];

const heuristicIssues = [
  { label: 'Aesthetic and minimalist design', value: 30 },
  { label: 'Consistency and standards', value: 13 },
  { label: 'Flexibility and efficiency of use', value: 11 },
  { label: 'User control and freedom', value: 1 },
  { label: 'Recognition rather than recall', value: 1 },
  { label: 'Other heuristics', value: 0 },
];

const Placeholder = ({ children, className = '' }) => (
  <div className={`rounded-[18px] bg-[#F3F3F3] min-h-[320px] flex items-center justify-center text-center text-[14px] text-[#1A1A1A] px-8 ${className}`}>
    {children}
  </div>
);

const ImageFrame = ({ src, alt, className = '', imgClassName = 'w-full h-auto' }) => (
  <div className={`rounded-[18px] bg-[#F3F3F3] overflow-hidden flex items-center justify-center ${className}`}>
    <img src={src} alt={alt} className={imgClassName} />
  </div>
);

const Section = ({ id, title, children, className = '' }) => (
  <section id={id} className={`scroll-mt-28 mb-[92px] ${className}`}>
    {title && <h2 className="text-[28px] leading-[1.25] font-normal tracking-[-0.01em] mb-8 text-[#1A1A1A]">{title}</h2>}
    {children}
  </section>
);

const Subhead = ({ children }) => (
  <h3 className="text-[16px] leading-[1.4] font-semibold text-[#1A1A1A] mb-3">{children}</h3>
);

const Paragraph = ({ children, className = '' }) => (
  <p className={`text-[16px] leading-[32px] text-[#1A1A1A] ${className}`}>{children}</p>
);

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
    <div className="bg-white text-[#1A1A1A] min-h-screen" style={{ fontFamily: "'Mulish', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <HeaderV2 />

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 flex pt-10 pb-32">
        {/* Left Sidebar TOC */}
        <aside className="hidden lg:block w-[180px] flex-shrink-0 sticky top-[130px] self-start max-h-[calc(100vh-140px)] overflow-y-auto">
          <nav className="flex flex-col gap-[40px] text-[14px] leading-[1.5] font-light">
            <Link to="/v2" className="back-link-group inline-flex items-center text-[#999] transition-colors duration-200 gap-1 font-sans text-base font-medium -ml-1">
                <ChevronLeft size={20} className="icon-solid-hover transition-colors duration-200" />
                <span className="shimmer-text">Home</span>
            </Link>
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

          <section id="intro" className="scroll-mt-28 mb-[80px]">
            <h1 className="text-[36px] md:text-[44px] leading-[1.22] font-normal tracking-[-0.02em] mb-[70px] text-[#1A1A1A] max-w-[680px]">
              Redesign that improved site performance by 37% and resolved 53 heuristic issues.
            </h1>

            <div className="flex flex-col mb-[86px] text-[15px] text-[#6F6F6F] gap-4 leading-[28px]">
              <div className="flex gap-4">
                <span className="w-[50px] flex-shrink-0">Role</span>
                <span>UX/UI Designer, 10 months</span>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:items-start">
                <span className="w-[50px] flex-shrink-0">Team</span>
                <span className="max-w-[500px]">Product Manager, Product Owner, 2 UX/UI Designers, Content Writer, Webflow Developer, Drupal Developer</span>
              </div>
            </div>

            <div className="bg-[#F2F2F2] rounded-[18px] p-8 md:p-12 mb-[84px] flex items-center justify-center">
              <img
                src={`${ASSET_PATH}/Insurance-hero-image.png`}
                alt="Insurance Hero"
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-y-8 mb-[92px]">
              <span className="hidden md:block absolute left-1/4 top-1/2 h-[92px] w-px -translate-y-1/2 bg-[#D8D8D8]" />
              <span className="hidden md:block absolute left-1/2 top-1/2 h-[92px] w-px -translate-y-1/2 bg-[#D8D8D8]" />
              <span className="hidden md:block absolute left-3/4 top-1/2 h-[92px] w-px -translate-y-1/2 bg-[#D8D8D8]" />
              {metrics.map((metric) => (
                <div key={metric.label} className="flex justify-center">
                  <div className="w-[130px] text-center">
                    <div className="text-[28px] leading-none font-semibold tracking-[-0.02em] text-[#000] mb-3">{metric.value}</div>
                    <p className="text-[12px] leading-[18px] text-[#1A1A1A]">{metric.label}</p>
                    <p className="text-[12px] leading-[18px] text-[#1A1A1A]">{metric.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Paragraph>
              A mid-sized U.S. home insurer, the third-fastest-growing in the country and on a path from $600M to $1B in revenue, needed a marketing website that matched its ambition.
            </Paragraph>
          </section>

          <section id="problems" className="scroll-mt-28 mb-[84px]">
            <h2 className="text-[24px] leading-[1.35] font-normal mb-8 text-[#1A1A1A]">The gap between ambition and reality</h2>
            <div className="flex flex-col gap-6 mb-[56px]">
              {problemAreas.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-5">
                  <Icon icon={icon} className="text-[#D43A4B] flex-shrink-0 text-[20px]" />
                  <span className="text-[15px] leading-[24px] font-semibold text-[#1A1A1A]">{label}</span>
                </div>
              ))}
            </div>

            <Placeholder className="mb-4">
              Brand audit board export needed: button styles, image styles, card styles, and icon system.
            </Placeholder>

            <Paragraph className="mb-8 text-[13px] leading-[24px]">
              The absence of a unified design system resulted in inconsistent button, card, and icon styles that diluted the brand identity.
            </Paragraph>

            <div className="grid md:grid-cols-2 gap-6 mb-[72px]">
              <div>
                <Placeholder className="min-h-[210px] text-[13px] mb-4">Content audit/state page export needed.</Placeholder>
                <Paragraph className="text-[13px] leading-[24px]">
                  Inconsistent data architecture across state pages created a fragmented and unpredictable user experience.
                </Paragraph>
              </div>
              <div>
                <Placeholder className="min-h-[210px] text-[13px] mb-4">Long text content page export needed.</Placeholder>
                <Paragraph className="text-[13px] leading-[24px]">
                  Jarring background colors and poor contrast ratios created significant eye strain and accessibility barriers.
                </Paragraph>
              </div>
            </div>

            <blockquote className="relative pl-12 mb-[64px]">
              <Icon icon="material-symbols:format-quote-rounded" className="absolute left-0 top-1 text-[30px] text-[#1A1A1A] scale-x-[-1]" />
              <p className="text-[22px] leading-[36px] italic text-[#1A1A1A] mb-5">
                The new site must be visually striking, bold, and impactful, with seamless functionality and exceptional B2B and B2C content. We aim to create an enjoyable experience where customers, independent agents, prospective customers, employees and potential investors can easily find what they need and accomplish their tasks with minimal efforts and few clicks.
              </p>
              <cite className="block text-[14px] not-italic text-[#4F4F4F]">— Client</cite>
            </blockquote>
          </section>

          <Section id="diagnosis" title="What a website audit found">
            <div className="grid sm:grid-cols-3 gap-5 mb-8">
              {auditStats.map((stat) => (
                <div key={stat.label} className="rounded-[16px] bg-[#F3F3F3] p-5 min-h-[116px]">
                  <div className="text-[28px] leading-none font-semibold tracking-[-0.02em] mb-3">{stat.value}</div>
                  <p className="font-['IBM_Plex_Sans'] text-[18px] leading-[36px] font-normal">{stat.label}</p>
                  {stat.detail && <p className="font-['IBM_Plex_Sans'] text-[12px] leading-[18px] font-normal text-[#777]">{stat.detail}</p>}
                </div>
              ))}
            </div>

            <Placeholder className="bg-[#111] text-white min-h-[360px] mb-12">
              Audit report table export needed: User Experience Evaluation Summary.
            </Placeholder>

            <Paragraph className="mb-6">
              The top three heuristic violations pointed to the same root problems: visual inconsistency, clutter, and unnecessary friction.
            </Paragraph>
            <Paragraph className="mb-12">
              The automated accessibility score was 88, but manual screen reader testing uncovered <strong className="font-semibold">broken heading hierarchy, missing alt text, keyboard navigation failures, and color contrast violations.</strong> <a href="#" className="text-[#2F63CF] underline underline-offset-4">View the full UX audit report.</a>
            </Paragraph>

            <div className="rounded-[18px] bg-[#F7F7F7] p-8 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-[16px] font-normal">Heuristic issues</h3>
                <span className="text-[14px]">56 total.</span>
              </div>
              <div className="space-y-6">
                {heuristicIssues.map((issue) => (
                  <div key={issue.label} className="grid grid-cols-[120px,1fr,28px] sm:grid-cols-[180px,1fr,32px] items-center gap-4 sm:gap-5 text-[12px] sm:text-[13px] leading-[18px]">
                    <span>{issue.label}</span>
                    <div className="h-px bg-[#D6D6D6] relative">
                      <span
                        className={`absolute left-0 top-1/2 h-[2px] -translate-y-1/2 ${issue.value ? 'bg-[#E0003D]' : 'bg-[#BDBDBD]'}`}
                        style={{ width: `${Math.max((issue.value / 30) * 100, issue.value ? 8 : 0)}%` }}
                      />
                      {issue.value > 0 && (
                        <span
                          className="absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-[#E0003D]"
                          style={{ left: `calc(${Math.max((issue.value / 30) * 100, 8)}% - 4px)` }}
                        />
                      )}
                    </div>
                    <span className="text-right">{issue.value || '-'}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section id="audience" title="Understanding the Audience">
            <Paragraph className="mb-6">
              The company serves two audiences: <strong className="font-semibold">homeowners</strong> and <strong className="font-semibold">agents</strong>. Research revealed that the affluent and established homeowner persona responded to credibility over price. That profile directly shaped the visual direction.
            </Paragraph>
            <p className="text-[17px] sm:text-[19px] leading-[32px] sm:leading-[34px] font-semibold mb-10">
              35-64 primary age range &nbsp;•&nbsp; 28% earning $150K+ &nbsp;•&nbsp; 54% owning homes valued $300K-$749K &nbsp;•&nbsp; concentrated in states SC, MS, AL
            </p>
            <ImageFrame
              src={`${ASSET_PATH}/persona1.png`}
              alt="Homeowner persona"
              className="p-8"
              imgClassName="w-full h-auto rounded-[10px]"
            />
          </Section>

          <Section id="foundation" title="Rebuilding the Foundation">
            <Subhead>Competitive Analysis</Subhead>
            <Paragraph className="mb-4">
              Analyzing 8 competitors surfaced gaps in the information architecture that were common across the landscape but absent from the client site:
            </Paragraph>
            <ul className="list-disc pl-6 text-[16px] leading-[32px] mb-4">
              <li>a Spanish language toggle</li>
              <li>direct contact number</li>
              <li>sustainability and diversity sections</li>
            </ul>
            <Paragraph className="mb-8">
              Each was recommended and declined for operational and strategic reasons, sharpening our understanding of the company's constraints.
            </Paragraph>
            <Placeholder className="mb-10">
              Competitive analysis export needed.
            </Placeholder>

            <Subhead>Card sorting &amp; Survey</Subhead>
            <Paragraph className="mb-6">
              Card sorting with three participants revealed where the existing IA was intuitive and where it was not. <strong className="font-semibold">Agent content grouped consistently, but Claims, Payments, and Find an Agent produced a different grouping every time.</strong>
            </Paragraph>
            <Placeholder className="mb-8">
              Card sorting and survey export needed.
            </Placeholder>
            <Paragraph className="mb-6">
              Inconclusive data led to a survey of four domain experts. On <strong className="font-semibold">Claims and Payments, multiple experts flagged them as too buried on mobile and recommended surfacing them directly.</strong> That shaped the final navigation.
            </Paragraph>
            <div className="mb-10 flex items-start gap-3">
              <img
                src={`${ASSET_PATH}/microsoft-copilot-logo.svg`}
                alt="Microsoft Copilot"
                className="mt-2 h-auto w-[64px] flex-shrink-0"
              />
              <Paragraph>
                Cross-referencing the existing site structure against insurance industry norms with Microsoft Copilot helped sharpen what content each screen needed to carry.
              </Paragraph>
            </div>

            <Subhead>Information Architecture (direction variants)</Subhead>
            <Paragraph className="mb-8">
              Three structural approaches were explored to handle the dual-audience structure: combined view, split view, and hybrid. The combined view with nav parity was the strongest fit: it served both audiences equally, kept SEO on a single domain, and avoided the maintenance overhead of two separate experiences. <a href="#" className="text-[#2F63CF] underline underline-offset-4">View the full tradeoff analysis.</a>
            </Paragraph>
            <ImageFrame
              src={`${ASSET_PATH}/foundation.png`}
              alt="Information architecture direction variants"
              className="p-10"
              imgClassName="w-full h-auto rounded-[10px]"
            />
          </Section>

          <Section id="crafting" title="Crafting the Experience">
            <Paragraph className="mb-8">
              We developed four distinct stylistic directions to give the client a structured basis for decision-making. Each direction included a guide covering theme, typography, UI elements, and a rationale. The client gravitated toward a hybrid of Friendly and Sleek: enough warmth to feel human, and enough sophistication to reflect their growth.
            </Paragraph>
            <Placeholder className="bg-[#111] text-white min-h-[360px] mb-10">
              Style directions export needed: Friendly &amp; Approachable.
            </Placeholder>

            <div className="grid md:grid-cols-[1fr,1.15fr] gap-9 items-start mb-[84px]">
              <div>
                <img
                  src={`${ASSET_PATH}/ux-pilot-logo.png`}
                  alt="UX Pilot"
                  className="mb-4 h-auto w-[96px]"
                />
                <Paragraph>
                  Catching structural problems before any visual decisions were made was the priority at this stage. Generating and comparing layout configurations rapidly with UX Pilot allowed us to pressure-test the IA decisions we'd finalized while the cost of change was still low.
                </Paragraph>
              </div>
              <Placeholder className="min-h-[260px] text-[13px]">UX Pilot layout export needed.</Placeholder>
            </div>
          </Section>

          <Section id="pivot" title="The Stakeholder Pivot">
            <Paragraph className="mb-8">
              A month of iteration and feedback with the client's marketing team produced a light, airy stylistic direction. However, the CEO and CTO, who had not been present in earlier meetings, rejected it, clarifying that they had envisioned something darker and bolder.
            </Paragraph>
            <Paragraph className="mb-8">
              Quickly reorienting to earlier explorations, we built a new concept grounded in their brief. It aligned with their vision and was approved on the first demo.
            </Paragraph>
            <div className="flex gap-3 mb-8">
              <img
                src={`${ASSET_PATH}/photoshop-40.svg`}
                alt="Adobe Photoshop"
                className="mt-1 size-6 flex-shrink-0"
              />
              <Paragraph>
                Stock photos were sourced and enhanced using Photoshop AI, with elements modified where needed to carry the brand color palette, balancing cohesion with visual variety.
              </Paragraph>
            </div>
            <ImageFrame
              src={`${ASSET_PATH}/hero.png`}
              alt="Approved dark and bold direction"
              className="p-6 bg-[#111]"
              imgClassName="w-full h-auto rounded-[10px]"
            />
          </Section>

          <Section id="impact" title="Tradeoffs & Design Decisions">
            <Subhead>Navigation Parity</Subhead>
            <Paragraph className="mb-8">
              Unifying two navigation bars into one and introducing a customer dropdown to match the existing agent dropdown corrected an implicit hierarchy that had always existed in the structure.
            </Paragraph>
            <Placeholder className="mb-10">[Before/after of navigation - dual bar vs. unified nav with both dropdowns visible]</Placeholder>

            <Subhead>Hero entry point</Subhead>
            <Paragraph className="mb-8">
              Despite competitive analysis pointing to a quote initiation path in the hero, the client prioritized brand narrative over immediate conversion, a reasonable call for a company still establishing market position, and one the hero was designed to serve.
            </Paragraph>
            <Placeholder className="mb-10">[Hero before/after - side by side]</Placeholder>

            <Subhead>Claims form</Subhead>
            <Paragraph className="mb-8">
              The UX audit flagged the claims form's field count as a known friction point. Reducing it was not within scope, so the fields were restructured into grouped categories to reduce cognitive load within the existing constraint.
            </Paragraph>
            <Placeholder className="mb-16">[Claims form - before vs after]</Placeholder>

            <h2 className="text-[28px] leading-[1.25] font-normal tracking-[-0.01em] mb-8 text-[#1A1A1A]">Building for Scale</h2>
            <Paragraph className="mb-8">
              With the company actively expanding coverage and exploring new product lines, the redesign introduced 30+ reusable section components across 40+ screens, with state pages templated from the ground up. Entering a new state or extending the system to a new product no longer requires a design or development decision. The structure absorbs expansion.
            </Paragraph>
            <ImageFrame
              src={`${ASSET_PATH}/impact.png`}
              alt="Reusable components and final screens"
              className="p-6 mb-8"
              imgClassName="w-full h-auto rounded-[10px]"
            />
            <Paragraph>
              Following launch, the redesign received strong reception across the client's leadership and cross-functional teams, including feedback incorporated from multiple internal departments during the design phase.
            </Paragraph>
          </Section>

          <Section id="learnings" title="Challenges & Learnings" className="mb-0">
            <ul className="text-[16px] leading-[32px] text-[#1A1A1A] space-y-2">
              <li>Engage final decision-makers early, not just the marketing team.</li>
              <li>Advocate for brand strategy before a site redesign begins.</li>
              <li>Set clear feedback turnaround expectations upfront; delays cost weeks.</li>
            </ul>
          </Section>

        </main>
      </div>
    </div>
  );
};

export default InsuranceCompanyWebsiteRedesign;
