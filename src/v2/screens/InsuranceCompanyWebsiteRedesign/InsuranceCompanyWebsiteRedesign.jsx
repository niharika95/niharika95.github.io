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
  { id: 'audience', label: 'Audience' },
  { id: 'foundation', label: 'Foundation' },
  { id: 'crafting', label: 'Exploration' },
  { id: 'pivot', label: 'Stakeholder pivot' },
  { id: 'impact', label: 'Building for scale' },
  { id: 'learnings', label: 'Challenges & learnings' },
];

const ASSET_PATH = '/v2/images/projects/insurance-company-website-design';

const images = {
  insuranceHero: 'insurance-hero-placeholder.png',
  brandAuditBoard: 'brand-audit-board.png',
  contentAuditStatePage: 'content-audit-state-page.png',
  longTextContentPage: 'long-text-content-page.png',
  auditReportTable: 'audit-report-table.png',
  homeownerPersona: 'homeowner-persona.png',
  agentPersona: 'agent-persona.png',
  competitiveAnalysis: 'competitive-analysis.png',
  competitiveAnalysisVideo: 'competitve-analysis.mp4',
  cardSortingSurvey: 'card-sorting-survey.png',
  microsoftCopilotLogo: 'microsoft-copilot-logo.svg',
  foundation: 'foundation-placeholder.png',
  informationArchitectureVideo: 'information-architecture.mp4',
  styleDirections: 'style-directions.png',
  styleDirectionsVideo: 'moodboarding.mp4',
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
  { value: '+37%', label: 'Desktop Performance', detail: '(64 → 88)' },
  { value: '+28%', label: 'Best Practices', detail: '(75 → 96)' },
  {
    value: '+13.6%',
    label: 'Accessibility',
    detail: '(88 → 100)',
    icon: 'material-symbols:info-outline',
    tooltip: 'Driven by resolved heading hierarchy, color contrast violations, missing alt text, and target size issues; gaps the automated score had masked.'
  },
  {
    value: '53 / 56',
    label: 'Heuristic issues',
    detail: 'resolved',
    icon: 'material-symbols:info-outline',
    tooltip: 'Of the 3 unresolved issues: two, an AI chat assistant and subdomain unification across quote, agents, and university subdomains, were intentionally descoped for the initial release and documented for a future phase. The third, the claims form field count, was addressed through restructured grouping rather than reduction.'
  },
];

const problemAreas = [
  {
    icon: 'material-symbols:draw-abstract-outline',
    label: 'Outdated & Inconsistent Design',
  },
  {
    icon: 'material-symbols:sentiment-sad-outline',
    label: 'Poor Usability (text-heavy, poor mobile)',
  },
  {
    icon: 'material-symbols:arrow-cool-down',
    label: 'Low Conversion & SEO Performance',
  },
  {
    icon: 'material-symbols:terminal-2',
    label: 'Technical Debt (WordPress not scalable)',
  },
];

const auditStats = [
  { value: '56', label: 'Usability issues' },
  { value: '27', label: 'Pages of audit report' },
  { value: '88', label: 'Accessibility score', detail: 'Gaps found manually' },
];

const heuristicIssues = [
  { label: 'Aesthetic and minimalist design', value: 30 },
  { label: 'Consistency and standards', value: 13 },
  { label: 'Flexibility and efficiency of use', value: 11 },
  { label: 'User control and freedom', value: 1 },
  { label: 'Recognition rather than recall', value: 1 },
  { label: 'Other heuristics', value: 0 },
];

const ImageFrame = ({ src, alt, className = '', imgClassName = 'w-full h-auto', children }) => (
  <div className={`rounded-[20px] bg-[#F3F3F3] overflow-hidden flex items-center justify-center relative ${className}`}>
    {src && <img src={src} alt={alt} className={imgClassName} />}
    {children}
  </div>
);

const Section = ({ id, title, children, className = '' }) => (
  <section id={id} className={`scroll-mt-28 mb-12 md:mb-[92px] ${className}`}>
    {title && (
      <Typography as="h2" variant="h6Medium" className="mb-8 text-[#1A1A1A]">
        {title}
      </Typography>
    )}
    {children}
  </section>
);

const Subhead = ({ children }) => (
  <Typography as="h3" variant="bodySemibold" className="mb-3 text-[#1A1A1A]">
    {children}
  </Typography>
);

const Paragraph = ({ children, className = '' }) => (
  <Typography as="p" variant="bodyRegular" className={`text-[#1A1A1A] ${className}`}>
    {children}
  </Typography>
);

const Caption = ({ children, className = '' }) => (
  <Typography as="p" variant="smallRegular" className={`text-gray-600 ${className}`}>
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
  const [activePersona, setActivePersona] = useState(0);
  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    const handleDocumentClick = () => {
      setActiveTooltip(null);
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

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
    <div className="bg-gradient-to-br from-white to-[#EBEBEB] text-[#1A1A1A] min-h-screen">
      <HeaderV2 />

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 flex pt-10 pb-32">
        {/* Left Sidebar TOC */}
        <aside className="hidden lg:block w-[180px] flex-shrink-0 sticky top-[130px] self-start max-h-[calc(100vh-140px)] overflow-y-auto">
          <nav className="flex flex-col gap-[40px]">
            <Link to="/" className="back-link-group inline-flex items-center text-gray-500 transition-colors duration-200 gap-1 font-ibm-plex text-base font-medium -ml-1">
              <ChevronLeft size={20} className="icon-solid-hover transition-colors duration-200" />
              <Typography as="span" variant="smallLight" className="shimmer-text">Home</Typography>
            </Link>
            <div className="flex flex-col gap-[12px]">
              {TOC.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => scrollToSection(event, item.id)}
                  className={`transition-colors ${activeSection === item.id ? 'text-gray-900' : 'text-gray-500 nav-item-shimmer'}`}
                >
                  <Typography as="span" variant={activeSection === item.id ? 'smallRegular' : 'smallLight'}>{item.label}</Typography>
                </a>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-full max-w-[720px] mx-auto lg:ml-20 xl:ml-32">

          <section id="intro" className="scroll-mt-28 mb-[40px]">
            <Typography as="h1" variant="h2Regular" className="mb-8 md:mb-[70px] text-[#1A1A1A] max-w-[680px]">
              Redesign that improved site performance by 37% and resolved 53 heuristic issues.
            </Typography>

            <div className="flex flex-col mb-10 md:mb-[86px] text-gray-500 gap-1">
              <div className="flex gap-4">
                <Typography as="span" variant="bodyRegular" className="w-[74px] flex-shrink-0">Role</Typography>
                <Typography as="span" variant="bodyRegular">UX/UI Designer, 10 months</Typography>
              </div>
              <div className="flex gap-4 items-start">
                <Typography as="span" variant="bodyRegular" className="w-[74px] flex-shrink-0">Team</Typography>
                <Typography as="span" variant="bodyRegular" className="max-w-[500px]">Product Manager, Product Owner, 2 UX/UI Designers, Content Writer, Webflow Developer, Drupal Developer</Typography>
              </div>
            </div>

            <div className="bg-[#F2F2F2] rounded-[20px] p-8 md:p-12 mb-12 md:mb-[100px] flex items-center justify-center">
              <img
                src={`${ASSET_PATH}/${images.insuranceHero}`}
                alt="Insurance Hero"
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-y-8 mb-12 md:mb-[100px]">
              <span className="hidden md:block absolute left-1/4 top-1/2 h-[92px] w-px -translate-y-1/2 bg-[#D8D8D8]" />
              <span className="hidden md:block absolute left-1/2 top-1/2 h-[92px] w-px -translate-y-1/2 bg-[#D8D8D8]" />
              <span className="hidden md:block absolute left-3/4 top-1/2 h-[92px] w-px -translate-y-1/2 bg-[#D8D8D8]" />
              {/* Mobile/Tablet 2x2 grid dividers */}
              <span className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[85%] w-px bg-[#D8D8D8]" />
              <span className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-px bg-[#D8D8D8]" />
              {metrics.map((metric, index) => {
                const isLeftColumn = index % 2 === 0;
                return (
                  <div key={metric.label} className="flex justify-center">
                    <div className="w-full max-w-[180px] text-center flex flex-col items-center">
                      <Typography as="div" variant="h3Medium" className="text-[#1A1A1A] mb-1">{metric.value}</Typography>
                      <Typography variant="smallRegular" className="text-[#1A1A1A] text-center">{metric.label}</Typography>
                      <div className="flex items-center justify-center gap-1.5 mt-1">
                        <Typography variant="smallRegular" className="text-[#1A1A1A]">{metric.detail}</Typography>
                        {metric.icon && metric.tooltip ? (
                          <div 
                            className="relative flex items-center group cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveTooltip(activeTooltip === metric.label ? null : metric.label);
                            }}
                          >
                            <Icon icon={metric.icon} className="text-[#2F63CF] text-[20px]" style={{ fontWeight: 400 }} />
                            <div className={`absolute bottom-full left-1/2 mb-2 w-[280px] sm:w-[320px] p-4 bg-[#1A1A1A] rounded-[16px] transition-all duration-200 z-50 text-left shadow-xl ${
                              isLeftColumn 
                                ? '-translate-x-[25%] sm:-translate-x-1/2' 
                                : '-translate-x-[75%] sm:-translate-x-1/2'
                            } ${
                              activeTooltip === metric.label 
                                ? 'opacity-100 visible pointer-events-auto' 
                                : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none'
                            }`}>
                              <Typography as="div" variant="extraSmallRegular" className="text-[#F3F3F3]">
                                {metric.tooltip}
                              </Typography>
                              <div className={`absolute top-full -mt-[1px] border-[6px] border-transparent border-t-[#1A1A1A] -translate-x-1/2 ${
                                isLeftColumn 
                                  ? 'left-[25%] sm:left-1/2' 
                                  : 'left-[75%] sm:left-1/2'
                              }`}></div>
                            </div>
                          </div>
                        ) : metric.icon && (
                          <Icon icon={metric.icon} className="text-[#2F63CF] text-[20px]" style={{ fontWeight: 400 }} />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Paragraph>
              A mid-sized U.S. home insurer, the third-fastest-growing in the country and on a path from $600M to $1B in revenue, needed a marketing website that matched its ambition.
            </Paragraph>
          </section>

          <section id="problems" className="scroll-mt-28 mb-12 md:mb-[84px]">
            <Typography as="h2" variant="h6Medium" className="mb-8 text-[#1A1A1A]">The gap between ambition and reality</Typography>
            <div className="flex flex-col gap-5 mb-[56px]">
              {problemAreas.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-5">
                  <Icon icon={icon} className="text-[#D43A4B] flex-shrink-0 text-[32px]" />
                  <Typography as="span" variant="bodySemibold" className="text-[#1A1A1A]">{label}</Typography>
                </div>
              ))}
            </div>

            <ImageFrame
              src={`${ASSET_PATH}/${images.brandAuditBoard}`}
              alt="Brand audit board placeholder"
              className="p-6 mb-2"
              imgClassName="w-full h-auto"
            />

            <Caption className="mb-10 md:mb-[80px]">
              The absence of a unified design system resulted in inconsistent button, card, and icon styles that diluted the brand identity.
            </Caption>

            <div className="grid md:grid-cols-2 gap-6 mb-12 md:mb-[100px]">
              <div>
                <ImageFrame
                  src={`${ASSET_PATH}/${images.contentAuditStatePage}`}
                  alt="Content audit state page placeholder"
                  className="pt-5 px-5 pb-0 mb-2 aspect-[4/3] !items-end"
                  imgClassName="w-full h-auto"
                />
                <Caption>
                  Inconsistent data architecture across state pages created a fragmented and unpredictable user experience.
                </Caption>
              </div>
              <div>
                <ImageFrame
                  src={`${ASSET_PATH}/${images.longTextContentPage}`}
                  alt="Long text content page placeholder"
                  className="pt-5 pl-5 pr-0 pb-0 mb-2 aspect-[4/3] !items-end !justify-end"
                  imgClassName="w-full h-auto"
                />
                <Caption>
                  Jarring background colors and poor contrast ratios created significant eye strain and accessibility barriers.
                </Caption>
              </div>
            </div>

            <blockquote className="relative pl-12 mb-10 md:mb-[64px]">
              <Icon icon="material-symbols:format-quote" className="absolute left-0 top-1 text-[40px] text-[#1A1A1A] scale-x-[-1] scale-y-[-1]" />
              <Typography as="p" variant="h6Regular" className="italic text-[#1A1A1A] mb-5">
                The new site must be visually striking, bold, and impactful, with seamless functionality and exceptional B2B and B2C content. We aim to create an enjoyable experience where customers, independent agents, prospective customers, employees and potential investors can easily find what they need and accomplish their tasks with minimal efforts and few clicks.
              </Typography>
              <Typography as="cite" variant="bodyRegular" className="block not-italic text-gray-500">— Client</Typography>
            </blockquote>
          </section>

          <Section id="diagnosis" title="What the website audit found">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 mb-8">
              {auditStats.map((stat, index) => {
                const isThird = index === 2;
                return (
                  <div 
                    key={stat.label} 
                    className={`rounded-[16px] sm:rounded-[20px] bg-[#F3F3F3] p-4 sm:p-5 min-h-[100px] sm:min-h-[116px] flex flex-col justify-center ${
                      isThird ? 'col-span-2 sm:col-span-1' : 'col-span-1'
                    }`}
                  >
                    <Typography as="div" variant="h3Medium" className="mb-0 text-[#1A1A1A]">{stat.value}</Typography>
                    <Typography variant="bodyRegular" className="text-[#1A1A1A] leading-tight">{stat.label}</Typography>
                    {stat.detail && <Typography variant="extraSmallRegular" className="text-[#777] mt-1 leading-tight">{stat.detail}</Typography>}
                  </div>
                );
              })}
            </div>

            <ImageFrame
              src={`${ASSET_PATH}/${images.auditReportTable}`}
              alt="Audit report table placeholder"
              className="py-6 pr-10 pl-0 mb-12 bg-[#111]"
              imgClassName="w-full h-auto"
            />

            <Paragraph className="mb-6">
              The top three heuristic violations pointed to the same root problems: visual inconsistency, clutter, and unnecessary friction.
            </Paragraph>
            <Paragraph className="mb-12">
              The automated accessibility score was 88, but manual screen reader testing uncovered <strong className="font-semibold">broken heading hierarchy, missing alt text, keyboard navigation failures, and color contrast violations.</strong>
            </Paragraph>

            <div className="rounded-[20px] bg-[#F5F5F5] px-7 py-8 md:px-9 md:py-9">
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
                    <div key={issue.label} className="flex flex-col gap-2 sm:grid sm:grid-cols-[minmax(120px,230px)_1fr_24px] sm:items-center sm:gap-5 md:gap-7">
                      <Typography
                        as="span"
                        variant="smallRegular"
                        className={`${isPrimary ? 'text-[#1A1A1A]' : 'text-gray-600'} w-full`}
                      >
                        {issue.label}
                      </Typography>
                      <div className="flex items-center gap-3 w-full sm:contents">
                        <div className="h-px bg-[#D6D6D6] relative flex-1 sm:h-px sm:bg-[#D6D6D6]">
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
                        <Typography as="span" variant="smallRegular" className={`w-8 text-right flex-shrink-0 ${isPrimary ? 'text-[#1A1A1A]' : 'text-gray-600'}`}>{issue.value || '-'}</Typography>
                      </div>
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
            <Typography variant="h6Medium" className="mb-10 text-[#1A1A1A]">
              35-64 primary age range &nbsp;•&nbsp; 28% earning $150K+ &nbsp;•&nbsp; 54% owning homes valued $300K-$749K &nbsp;•&nbsp; concentrated in states SC, MS, AL
            </Typography>
            <ImageFrame
              className="p-8 mb-2 group"
            >
              <div className="grid w-full items-center">
                <img
                  src={`${ASSET_PATH}/${images.homeownerPersona}`}
                  alt="Homeowner persona"
                  className={`col-start-1 row-start-1 w-full h-auto rounded-[20px] transition-opacity duration-300 ${activePersona === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                />
                <img
                  src={`${ASSET_PATH}/${images.agentPersona}`}
                  alt="Agent persona"
                  className={`col-start-1 row-start-1 w-full h-auto rounded-[20px] transition-opacity duration-300 ${activePersona === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                />
              </div>
              <button
                onClick={() => setActivePersona((prev) => (prev === 0 ? 1 : 0))}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-[#777] hover:text-[#1A1A1A] transition-colors z-20"
                aria-label="Previous image"
              >
                <Icon icon="material-symbols:arrow-back-ios" className="text-[24px]" />
              </button>
              <button
                onClick={() => setActivePersona((prev) => (prev === 0 ? 1 : 0))}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-[#777] hover:text-[#1A1A1A] transition-colors z-20"
                aria-label="Next image"
              >
                <Icon icon="material-symbols:arrow-forward-ios" className="text-[24px]" />
              </button>
            </ImageFrame>
            <Caption>Homeowner and agent personas.</Caption>
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
              className="mb-2"
            >
              <video
                src={`${ASSET_PATH}/${images.competitiveAnalysisVideo}`}
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              />
            </ImageFrame>
            <Caption className="mb-10">Competitive analysis</Caption>

            <Subhead>Card sorting &amp; Survey</Subhead>
            <Paragraph className="mb-6">
              Card sorting with three participants revealed where the existing IA was intuitive and where it was not. <strong className="font-semibold">Agent content grouped consistently, but Claims, Payments, and Find an Agent produced a different grouping every time.</strong>
            </Paragraph>
            <ImageFrame
              src={`${ASSET_PATH}/${images.cardSortingSurvey}`}
              alt="Card sorting and survey placeholder"
              className="p-6 mb-2"
              imgClassName="w-full h-auto"
            />
            <Caption className="mb-8">Card sorting</Caption>
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
              Three structural approaches were explored to handle the dual-audience structure: combined view, split view, and hybrid. The combined view with nav parity was the strongest fit: it served both audiences equally, kept SEO on a single domain, and avoided the maintenance overhead of two separate experiences.
            </Paragraph>
            <ImageFrame
              className="mb-2"
            >
              <video
                src={`${ASSET_PATH}/${images.informationArchitectureVideo}`}
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              />
            </ImageFrame>
            <Caption>Information architecture</Caption>
          </Section>

          <Section id="crafting" title="Crafting the Experience">
            <Paragraph className="mb-8">
              We developed four distinct stylistic directions to give the client a structured basis for decision-making. Each direction included a guide covering theme, typography, UI elements, and a rationale. The client gravitated toward a hybrid of Friendly and Sleek: enough warmth to feel human, and enough sophistication to reflect their growth.
            </Paragraph>
            <ImageFrame
              className="mb-2 bg-[#111]"
            >
              <video
                src={`${ASSET_PATH}/${images.styleDirectionsVideo}`}
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              />
            </ImageFrame>
            <Caption className="mb-10">Exploration moodboard of 4 stylistic directions</Caption>

            <div className="flex flex-col md:flex-row gap-9 items-center mb-12 md:mb-[84px]">
              <div className="w-full md:w-[45%]">
                <img
                  src={`${ASSET_PATH}/${images.uxPilotLogo}`}
                  alt="UX Pilot"
                  className="mb-6 h-auto w-[120px]"
                />
                <Paragraph>
                  Catching structural problems before any visual decisions were made was the priority at this stage. Generating and comparing layout configurations rapidly with UX Pilot allowed us to pressure-test the IA decisions we'd finalized while the cost of change was still low.
                </Paragraph>
              </div>
              <div className="w-full md:w-[55%] flex flex-col">
                <ImageFrame
                  src={`${ASSET_PATH}/${images.uxPilotLayout}`}
                  alt="UX Pilot layout placeholder"
                  className="py-6 pl-6 pr-0 mb-2 !justify-start"
                  imgClassName="w-[150%] max-w-none h-auto rounded-l-[12px] shadow-sm"
                />
                <Caption>Rapid mockups in UX Pilot</Caption>
              </div>
            </div>
          </Section>

          <Section id="pivot" title="The Stakeholder Pivot">
            <Paragraph className="mb-8">
              A month of iteration and feedback with the client's marketing team produced a light, airy stylistic direction. However, the CEO and CTO, who had not been present in earlier meetings, rejected it, envisioning something darker and bolder. Rather than redirecting to the marketing team's earlier guidance, we drew on the broad explorations we'd invested in early in the process, and because that groundwork was already done, we were able to pivot in a direction that aligned more closely with their vision, within a week. The new concept was approved on the first demo.
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
              className="p-6 mb-2 bg-gray-900"
              imgClassName="w-full h-auto"
            />
            <Caption>A selection of final screens across the redesigned site.</Caption>
          </Section>

          {/* 
          <Section id="tradeoffs" title="Tradeoffs & Design Decisions">
            <Subhead>Navigation Parity</Subhead>
            <Paragraph className="mb-8">
              Unifying two navigation bars into one and introducing a customer dropdown to match the existing agent dropdown corrected an implicit hierarchy that had always existed in the structure.
            </Paragraph>
            <ImageFrame
              src={`${ASSET_PATH}/${images.navigationBeforeAfter}`}
              alt="Navigation before and after placeholder"
              className="p-6 mb-10"
              imgClassName="w-full h-auto rounded-[20px]"
            />

            <Subhead>Hero entry point</Subhead>
            <Paragraph className="mb-8">
              Despite competitive analysis pointing to a quote initiation path in the hero, the client prioritized brand narrative over immediate conversion, a reasonable call for a company still establishing market position, and one the hero was designed to serve.
            </Paragraph>
            <ImageFrame
              src={`${ASSET_PATH}/${images.heroBeforeAfter}`}
              alt="Hero before and after placeholder"
              className="p-6 mb-10"
              imgClassName="w-full h-auto rounded-[20px]"
            />

            <Subhead>Claims form</Subhead>
            <Paragraph className="mb-8">
              The UX audit flagged the claims form's field count as a known friction point. Reducing it was not within scope, so the fields were restructured into grouped categories to reduce cognitive load within the existing constraint.
            </Paragraph>
            <ImageFrame
              src={`${ASSET_PATH}/${images.claimsFormBeforeAfter}`}
              alt="Claims form before and after placeholder"
              className="p-6 mb-16"
              imgClassName="w-full h-auto rounded-[20px]"
            />
          </Section>
          */}

          <Section id="impact" title="Building for Scale">
            <Paragraph className="mb-8">
              With the company actively expanding coverage and exploring new product lines, the redesign introduced 30+ reusable section components across 40+ screens, with state pages templated from the ground up. Entering a new state or extending the system to a new product no longer requires a design or development decision. The structure absorbs expansion.
            </Paragraph>
            <ImageFrame
              src={`${ASSET_PATH}/${images.impact}`}
              alt="Reusable components and final screens"
              className="p-6 mb-8"
              imgClassName="w-full h-auto"
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
