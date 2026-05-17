import React, { useEffect, useState } from 'react';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import Typography from '../../components/Typography';
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

const ASSET_PATH = '/v2/images/projects/insurance-company-website-design';

const images = {
  insuranceHero: 'insurance-hero-placeholder.png',
  brandAuditBoard: 'brand-audit-board.png',
  contentAuditStatePage: 'content-audit-state-page.png',
  longTextContentPage: 'long-text-content-page.png',
  auditReportTable: 'audit-report-table.png',
  homeownerPersona: 'homeowner-persona-placeholder.png',
  competitiveAnalysis: 'competitive-analysis.png',
  cardSortingSurvey: 'card-sorting-survey.png',
  microsoftCopilotLogo: 'microsoft-copilot-logo.svg',
  foundation: 'foundation-placeholder.png',
  styleDirections: 'style-directions.png',
  uxPilotLogo: 'ux-pilot-logo.png',
  uxPilotLayout: 'ux-pilot-layout.png',
  photoshopLogo: 'photoshop-40.svg',
  approvedHero: 'approved-hero-placeholder.png',
  navigationBeforeAfter: 'navigation-before-after.png',
  heroBeforeAfter: 'hero-before-after.png',
  claimsFormBeforeAfter: 'claims-form-before-after.png',
  impact: 'impact-placeholder.png',
};

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

const ImageFrame = ({ src, alt, className = '', imgClassName = 'w-full h-auto' }) => (
  <div className={`rounded-[18px] bg-[#F3F3F3] overflow-hidden flex items-center justify-center ${className}`}>
    <img src={src} alt={alt} className={imgClassName} />
  </div>
);

const Section = ({ id, title, children, className = '' }) => (
  <section id={id} className={`scroll-mt-28 mb-[92px] ${className}`}>
    {title && (
      <Typography as="h2" variant="h5Regular" className="mb-8 text-[#1A1A1A]">
        {title}
      </Typography>
    )}
    {children}
  </section>
);

const Subhead = ({ children }) => (
  <Typography as="h3" variant="smallRegular" className="mb-3 text-[#1A1A1A]" style={{ fontWeight: 600 }}>
    {children}
  </Typography>
);

const Paragraph = ({ children, className = '' }) => (
  <Typography as="p" variant="bodyRegular" className={`text-[#1A1A1A] ${className}`}>
    {children}
  </Typography>
);

const Caption = ({ children, className = '' }) => (
  <Typography as="p" variant="extraSmallRegular" className={`text-[#1A1A1A] ${className}`}>
    {children}
  </Typography>
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
    <div className="bg-white text-[#1A1A1A] min-h-screen">
      <HeaderV2 />

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 flex pt-10 pb-32">
        {/* Left Sidebar TOC */}
        <aside className="hidden lg:block w-[180px] flex-shrink-0 sticky top-[130px] self-start max-h-[calc(100vh-140px)] overflow-y-auto">
          <nav className="flex flex-col gap-[40px]">
            <Link to="/v2" className="back-link-group inline-flex items-center text-[#999] transition-colors duration-200 gap-1 font-sans text-base font-medium -ml-1">
                <ChevronLeft size={20} className="icon-solid-hover transition-colors duration-200" />
                <Typography as="span" variant="smallLight" className="shimmer-text">Home</Typography>
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
                  <Typography as="span" variant="extraSmallRegular">{item.label}</Typography>
                </a>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-full max-w-[720px] mx-auto lg:ml-20 xl:ml-32">

          <section id="intro" className="scroll-mt-28 mb-[80px]">
            <Typography as="h1" variant="h2Regular" className="mb-[70px] text-[#1A1A1A] max-w-[680px]">
              Redesign that improved site performance by 37% and resolved 53 heuristic issues.
            </Typography>

            <div className="flex flex-col mb-[86px] text-[#6F6F6F] gap-4">
              <div className="flex gap-4">
                <Typography as="span" variant="smallRegular" className="w-[50px] flex-shrink-0">Role</Typography>
                <Typography as="span" variant="smallRegular">UX/UI Designer, 10 months</Typography>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:items-start">
                <Typography as="span" variant="smallRegular" className="w-[50px] flex-shrink-0">Team</Typography>
                <Typography as="span" variant="smallRegular" className="max-w-[500px]">Product Manager, Product Owner, 2 UX/UI Designers, Content Writer, Webflow Developer, Drupal Developer</Typography>
              </div>
            </div>

            <div className="bg-[#F2F2F2] rounded-[18px] p-8 md:p-12 mb-[84px] flex items-center justify-center">
              <img
                src={`${ASSET_PATH}/${images.insuranceHero}`}
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
                    <Typography as="div" variant="h5Regular" className="text-[#000] mb-3" style={{ fontWeight: 600, lineHeight: 1 }}>{metric.value}</Typography>
                    <Typography variant="extraSmallRegular" className="text-[#1A1A1A]">{metric.label}</Typography>
                    <Typography variant="extraSmallRegular" className="text-[#1A1A1A]">{metric.detail}</Typography>
                  </div>
                </div>
              ))}
            </div>

            <Paragraph>
              A mid-sized U.S. home insurer, the third-fastest-growing in the country and on a path from $600M to $1B in revenue, needed a marketing website that matched its ambition.
            </Paragraph>
          </section>

          <section id="problems" className="scroll-mt-28 mb-[84px]">
            <Typography as="h2" variant="h6Regular" className="mb-8 text-[#1A1A1A]">The gap between ambition and reality</Typography>
            <div className="flex flex-col gap-6 mb-[56px]">
              {problemAreas.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-5">
                  <Icon icon={icon} className="text-[#D43A4B] flex-shrink-0 text-[20px]" />
                  <Typography as="span" variant="smallRegular" className="text-[#1A1A1A]" style={{ fontWeight: 600 }}>{label}</Typography>
                </div>
              ))}
            </div>

            <ImageFrame
              src={`${ASSET_PATH}/${images.brandAuditBoard}`}
              alt="Brand audit board placeholder"
              className="p-6 mb-4"
              imgClassName="w-full h-auto rounded-[10px]"
            />

            <Caption className="mb-8">
              The absence of a unified design system resulted in inconsistent button, card, and icon styles that diluted the brand identity.
            </Caption>

            <div className="grid md:grid-cols-2 gap-6 mb-[72px]">
              <div>
                <ImageFrame
                  src={`${ASSET_PATH}/${images.contentAuditStatePage}`}
                  alt="Content audit state page placeholder"
                  className="p-5 mb-4"
                  imgClassName="w-full h-auto rounded-[10px]"
                />
                <Caption>
                  Inconsistent data architecture across state pages created a fragmented and unpredictable user experience.
                </Caption>
              </div>
              <div>
                <ImageFrame
                  src={`${ASSET_PATH}/${images.longTextContentPage}`}
                  alt="Long text content page placeholder"
                  className="p-5 mb-4"
                  imgClassName="w-full h-auto rounded-[10px]"
                />
                <Caption>
                  Jarring background colors and poor contrast ratios created significant eye strain and accessibility barriers.
                </Caption>
              </div>
            </div>

            <blockquote className="relative pl-12 mb-[64px]">
              <Icon icon="material-symbols:format-quote-rounded" className="absolute left-0 top-1 text-[30px] text-[#1A1A1A] scale-x-[-1]" />
              <Typography as="p" variant="h6Regular" className="italic text-[#1A1A1A] mb-5" style={{ lineHeight: '36px' }}>
                The new site must be visually striking, bold, and impactful, with seamless functionality and exceptional B2B and B2C content. We aim to create an enjoyable experience where customers, independent agents, prospective customers, employees and potential investors can easily find what they need and accomplish their tasks with minimal efforts and few clicks.
              </Typography>
              <Typography as="cite" variant="extraSmallRegular" className="block not-italic text-[#4F4F4F]">— Client</Typography>
            </blockquote>
          </section>

          <Section id="diagnosis" title="What a website audit found">
            <div className="grid sm:grid-cols-3 gap-5 mb-8">
              {auditStats.map((stat) => (
                <div key={stat.label} className="rounded-[16px] bg-[#F3F3F3] p-5 min-h-[116px]">
                  <Typography as="div" variant="h5Regular" className="mb-3" style={{ fontWeight: 600, lineHeight: 1 }}>{stat.value}</Typography>
                  <Typography variant="bodyRegular" style={{ lineHeight: 2 }}>{stat.label}</Typography>
                  {stat.detail && <Typography variant="extraSmallRegular" className="text-[#777]">{stat.detail}</Typography>}
                </div>
              ))}
            </div>

            <ImageFrame
              src={`${ASSET_PATH}/${images.auditReportTable}`}
              alt="Audit report table placeholder"
              className="p-6 mb-12 bg-[#111]"
              imgClassName="w-full h-auto rounded-[10px]"
            />

            <Paragraph className="mb-6">
              The top three heuristic violations pointed to the same root problems: visual inconsistency, clutter, and unnecessary friction.
            </Paragraph>
            <Paragraph className="mb-12">
              The automated accessibility score was 88, but manual screen reader testing uncovered <strong className="font-semibold">broken heading hierarchy, missing alt text, keyboard navigation failures, and color contrast violations.</strong> <a href="#" className="text-[#2F63CF] underline underline-offset-4">View the full UX audit report.</a>
            </Paragraph>

            <div className="rounded-[18px] bg-[#F5F5F5] px-7 py-8 md:px-9 md:py-9">
              <div className="flex items-center justify-between border-b border-[#DDDDDD] pb-6">
                <Typography as="h3" variant="bodyRegular" className="text-[#1A1A1A]">Heuristic issues</Typography>
                <Typography as="span" variant="bodyRegular" className="text-[#1A1A1A]">56 total</Typography>
              </div>
              <div className="pt-6 space-y-6">
                {heuristicIssues.map((issue) => {
                  const isPrimary = issue.value > 1;
                  const width = issue.value ? `${Math.max((issue.value / 30) * 100, 3)}%` : '0%';
                  const colorClass = isPrimary ? 'bg-[#D6003B]' : 'bg-[#9C9C9C]';

                  return (
                  <div key={issue.label} className="grid grid-cols-[minmax(150px,230px)_1fr_32px] items-center gap-5 md:gap-7">
                    <Typography
                      as="span"
                      variant="smallRegular"
                      className={isPrimary || !issue.value ? 'text-[#1A1A1A]' : 'text-[#777]'}
                      style={{ lineHeight: '20px' }}
                    >
                      {issue.label}
                    </Typography>
                    <div className="h-px bg-[#D6D6D6] relative">
                      {issue.value > 0 && (
                        <>
                          <span
                            className={`absolute left-0 top-1/2 h-[2px] -translate-y-1/2 ${colorClass}`}
                            style={{ width }}
                          />
                          <span
                            className={`absolute top-1/2 size-[8px] -translate-y-1/2 rounded-full ${colorClass}`}
                            style={{ left: `calc(${width} - 4px)` }}
                          />
                        </>
                      )}
                    </div>
                    <Typography as="span" variant="smallRegular" className="text-right text-[#1A1A1A]">{issue.value || '-'}</Typography>
                  </div>
                  );
                })}
              </div>
            </div>
          </Section>

          <Section id="audience" title="Understanding the Audience">
            <Paragraph className="mb-6">
              The company serves two audiences: <strong className="font-semibold">homeowners</strong> and <strong className="font-semibold">agents</strong>. Research revealed that the affluent and established homeowner persona responded to credibility over price. That profile directly shaped the visual direction.
            </Paragraph>
            <Typography variant="bodySemibold" className="mb-10">
              35-64 primary age range &nbsp;•&nbsp; 28% earning $150K+ &nbsp;•&nbsp; 54% owning homes valued $300K-$749K &nbsp;•&nbsp; concentrated in states SC, MS, AL
            </Typography>
            <ImageFrame
              src={`${ASSET_PATH}/${images.homeownerPersona}`}
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
            <ul className="list-disc pl-6 mb-4">
              <Typography as="li" variant="bodyRegular">a Spanish language toggle</Typography>
              <Typography as="li" variant="bodyRegular">direct contact number</Typography>
              <Typography as="li" variant="bodyRegular">sustainability and diversity sections</Typography>
            </ul>
            <Paragraph className="mb-8">
              Each was recommended and declined for operational and strategic reasons, sharpening our understanding of the company's constraints.
            </Paragraph>
            <ImageFrame
              src={`${ASSET_PATH}/${images.competitiveAnalysis}`}
              alt="Competitive analysis placeholder"
              className="p-6 mb-10"
              imgClassName="w-full h-auto rounded-[10px]"
            />

            <Subhead>Card sorting &amp; Survey</Subhead>
            <Paragraph className="mb-6">
              Card sorting with three participants revealed where the existing IA was intuitive and where it was not. <strong className="font-semibold">Agent content grouped consistently, but Claims, Payments, and Find an Agent produced a different grouping every time.</strong>
            </Paragraph>
            <ImageFrame
              src={`${ASSET_PATH}/${images.cardSortingSurvey}`}
              alt="Card sorting and survey placeholder"
              className="p-6 mb-8"
              imgClassName="w-full h-auto rounded-[10px]"
            />
            <Paragraph className="mb-6">
              Inconclusive data led to a survey of four domain experts. On <strong className="font-semibold">Claims and Payments, multiple experts flagged them as too buried on mobile and recommended surfacing them directly.</strong> That shaped the final navigation.
            </Paragraph>
            <div className="mb-10 flex items-start gap-3">
              <img
                src={`${ASSET_PATH}/${images.microsoftCopilotLogo}`}
                alt="Microsoft Copilot"
                className="mt-1 size-6 flex-shrink-0"
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
              src={`${ASSET_PATH}/${images.foundation}`}
              alt="Information architecture direction variants"
              className="p-10"
              imgClassName="w-full h-auto rounded-[10px]"
            />
          </Section>

          <Section id="crafting" title="Crafting the Experience">
            <Paragraph className="mb-8">
              We developed four distinct stylistic directions to give the client a structured basis for decision-making. Each direction included a guide covering theme, typography, UI elements, and a rationale. The client gravitated toward a hybrid of Friendly and Sleek: enough warmth to feel human, and enough sophistication to reflect their growth.
            </Paragraph>
            <ImageFrame
              src={`${ASSET_PATH}/${images.styleDirections}`}
              alt="Style directions placeholder"
              className="p-6 mb-10 bg-[#111]"
              imgClassName="w-full h-auto rounded-[10px]"
            />

            <div className="grid md:grid-cols-[1fr,1.15fr] gap-9 items-start mb-[84px]">
              <div>
                <img
                  src={`${ASSET_PATH}/${images.uxPilotLogo}`}
                  alt="UX Pilot"
                  className="mb-4 h-auto w-[96px]"
                />
                <Paragraph>
                  Catching structural problems before any visual decisions were made was the priority at this stage. Generating and comparing layout configurations rapidly with UX Pilot allowed us to pressure-test the IA decisions we'd finalized while the cost of change was still low.
                </Paragraph>
              </div>
              <ImageFrame
                src={`${ASSET_PATH}/${images.uxPilotLayout}`}
                alt="UX Pilot layout placeholder"
                className="p-5"
                imgClassName="w-full h-auto rounded-[10px]"
              />
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
                src={`${ASSET_PATH}/${images.photoshopLogo}`}
                alt="Adobe Photoshop"
                className="mt-1 size-6 flex-shrink-0"
              />
              <Paragraph>
                Stock photos were sourced and enhanced using Photoshop AI, with elements modified where needed to carry the brand color palette, balancing cohesion with visual variety.
              </Paragraph>
            </div>
            <ImageFrame
              src={`${ASSET_PATH}/${images.approvedHero}`}
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
            <ImageFrame
              src={`${ASSET_PATH}/${images.navigationBeforeAfter}`}
              alt="Navigation before and after placeholder"
              className="p-6 mb-10"
              imgClassName="w-full h-auto rounded-[10px]"
            />

            <Subhead>Hero entry point</Subhead>
            <Paragraph className="mb-8">
              Despite competitive analysis pointing to a quote initiation path in the hero, the client prioritized brand narrative over immediate conversion, a reasonable call for a company still establishing market position, and one the hero was designed to serve.
            </Paragraph>
            <ImageFrame
              src={`${ASSET_PATH}/${images.heroBeforeAfter}`}
              alt="Hero before and after placeholder"
              className="p-6 mb-10"
              imgClassName="w-full h-auto rounded-[10px]"
            />

            <Subhead>Claims form</Subhead>
            <Paragraph className="mb-8">
              The UX audit flagged the claims form's field count as a known friction point. Reducing it was not within scope, so the fields were restructured into grouped categories to reduce cognitive load within the existing constraint.
            </Paragraph>
            <ImageFrame
              src={`${ASSET_PATH}/${images.claimsFormBeforeAfter}`}
              alt="Claims form before and after placeholder"
              className="p-6 mb-16"
              imgClassName="w-full h-auto rounded-[10px]"
            />

            <Typography as="h2" variant="h5Regular" className="mb-8 text-[#1A1A1A]">Building for Scale</Typography>
            <Paragraph className="mb-8">
              With the company actively expanding coverage and exploring new product lines, the redesign introduced 30+ reusable section components across 40+ screens, with state pages templated from the ground up. Entering a new state or extending the system to a new product no longer requires a design or development decision. The structure absorbs expansion.
            </Paragraph>
            <ImageFrame
              src={`${ASSET_PATH}/${images.impact}`}
              alt="Reusable components and final screens"
              className="p-6 mb-8"
              imgClassName="w-full h-auto rounded-[10px]"
            />
            <Paragraph>
              Following launch, the redesign received strong reception across the client's leadership and cross-functional teams, including feedback incorporated from multiple internal departments during the design phase.
            </Paragraph>
          </Section>

          <Section id="learnings" title="Challenges & Learnings" className="mb-0">
            <ul className="text-[#1A1A1A] space-y-2">
              <Typography as="li" variant="bodyRegular">Engage final decision-makers early, not just the marketing team.</Typography>
              <Typography as="li" variant="bodyRegular">Advocate for brand strategy before a site redesign begins.</Typography>
              <Typography as="li" variant="bodyRegular">Set clear feedback turnaround expectations upfront; delays cost weeks.</Typography>
            </ul>
          </Section>

        </main>
      </div>
    </div>
  );
};

export default InsuranceCompanyWebsiteRedesign;
