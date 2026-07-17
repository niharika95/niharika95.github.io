import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import Typography from '../../components/Typography';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';
import { ChevronLeft } from 'lucide-react';
import { Icon } from '@iconify/react';
import MoreCaseStudies from '../../components/MoreCaseStudies/MoreCaseStudies';

const TOC = [
  { id: 'intro', label: 'Intro' },
  { id: 'diagnosis', label: 'Diagnosis' },
  { id: 'foundation', label: 'Foundation' },
  { id: 'crafting', label: 'Exploration' },
  { id: 'pivot', label: 'Stakeholder pivot' },
  { id: 'impact', label: 'Building for scale' },
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
  photoshopLogo: 'photoshop-40.svg',
  earlierExplorations: 'earlier-explorations.png',
  finalScreens: 'final-screens.png',
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
  const [activeSitemap, setActiveSitemap] = useState(0);
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
      // If we reach the bottom of the page, force the last section to be active.
      // We check if the viewport is within 100px of the bottom of the page to handle zoom, dynamic heights, or scaled displays robustly.
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        currentActiveId = TOC[TOC.length - 1].id;
      }
      setActiveSection(currentActiveId);
    };

    handleScroll();
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
            <Link to="/" className="back-link-group inline-flex items-center text-gray-500 transition-colors duration-200 gap-1 font-ibm-plex text-base font-medium -ml-1 no-underline hover:text-gray-900">
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
            <div className="mb-20 overflow-hidden rounded-[20px]">
              <img
                src={`${ASSET_PATH}/${images.insuranceHero}`}
                alt="Insurance Hero"
                className="w-full h-auto"
              />
            </div>

            <Typography as="h1" variant="h2Regular" className="mb-20 text-[#1A1A1A] max-w-[680px]">
              Rethinking the website of a $1 billion-bound insurer.
            </Typography>

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-y-8 mb-[100px]">
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

            <div className="flex flex-col mb-[100px] text-gray-500 gap-1">
              <div className="flex gap-4">
                <Typography as="span" variant="bodyRegular" className="w-[74px] flex-shrink-0">Role</Typography>
                <Typography as="span" variant="bodyRegular">UX/UI Designer, 10 months</Typography>
              </div>
              <div className="flex gap-4 items-start">
                <Typography as="span" variant="bodyRegular" className="w-[74px] flex-shrink-0">Team</Typography>
                <Typography as="span" variant="bodyRegular" className="max-w-[500px]">Product Manager, Product Owner, 2 UX/UI Designers, Content Writer, Webflow Developer, Drupal Developer</Typography>
              </div>
            </div>

            <div id="diagnosis" className="scroll-mt-28 mb-2 overflow-hidden rounded-[20px]">
              <img
                src={`${ASSET_PATH}/existing-website-hero.png`}
                alt="Landing page of the existing website"
                className="w-full h-auto"
              />
            </div>
            <Caption className="mb-[100px]">Landing page of the existing website.</Caption>

            <blockquote className="relative pl-12 mb-[100px]">
              <Icon 
                icon="material-symbols:format-quote-rounded" 
                className="absolute left-0 top-1 text-[30px] text-[#1A1A1A] scale-x-[-1]" 
              />
              <Typography 
                as="p" 
                variant="h6Regular" 
                className="italic text-[#1A1A1A] mb-4" 
                style={{ lineHeight: '36px' }}
              >
                The new website must be visually striking, bold, and impactful, with seamless functionality and exceptional B2B and B2C content.
              </Typography>
              <Typography 
                as="cite" 
                variant="extraSmallRegular" 
                className="block not-italic text-gray-500"
              >
                — VP of Marketing, client company
              </Typography>
            </blockquote>

            <Paragraph className="mb-[100px]">
              A high-level look at the site before I started had already flagged inconsistency and visual fragmentation. A heuristic audit made that precise: two designers, one week, a 27-page report surfacing 56 usability issues. The top issues clustered around the absence of a unified design system that resulted in inconsistent design elements,  and inconsistent information architecture across pages. The client had framed it as a refresh, but the audit showed it was structural. That shared, documented diagnosis became the foundation for every decision that followed.
            </Paragraph>

          </section>

          <Section id="diagnosis-audit" title="">

            <ImageFrame
              src={`${ASSET_PATH}/${images.auditReportTable}`}
              alt="Audit report table placeholder"
              className="py-6 pr-10 pl-0 mb-2 bg-[#111]"
              imgClassName="w-full h-auto"
            />
            <Caption className="mb-10 md:mb-[80px]">
              A summary of the 27-page report surfacing 56 usability issues.
            </Caption>
          </Section>

          <Section id="foundation" title="">
            <Typography as="h2" variant="h3Regular" className="mb-10 text-[#1A1A1A]">
              The audit showed it wasn't a refresh
            </Typography>

            <Paragraph className="mb-10">
              A demographic report of the client's customer base showed that homeowners were heavily concentrated in high-income segments, with household incomes above $150K and home values above $500K. For this audience, price wasn't the primary motivator: trust was. Agents were an equally important audience, as a major chunk of revenue came through this channel. The original site had two navigation bars: neither surfaced a customer-facing path, while agents had a dedicated dropdown. For a company serving both audiences equally, that asymmetry wasn't intentional, but it was structural.
            </Paragraph>
            <Paragraph className="mb-10">
              To understand how users actually grouped the content, I ran a card sort with three designers outside the project, chosen specifically because they had no prior knowledge of the site. Most content categorized cleanly: Products, States Served, FAQs grouped consistently. Claims and Payments didn't. A survey with four domain experts resolved it: three of four agreed these were high-frequency actions that needed to be immediately visible, not buried under a dropdown.
            </Paragraph>

            <ImageFrame
              src={`${ASSET_PATH}/structure-comparison.png`}
              alt="Sitemap structures comparison"
              className="p-6 mb-2 bg-gray-50"
              imgClassName="w-full h-auto rounded-none"
            />
            <Caption className="mb-10">
              A comparison of the pros and cons of combined, split, and hybrid sitemap structures.
            </Caption>

            <Paragraph className="mb-10">
              Those same expert conversations surfaced a bigger open question: how should the navigation be structured for two distinct audiences? No consensus emerged. I evaluated three approaches, combined, split, and hybrid (homeowner-leaning), against a structured pros and cons assessment. Split introduced unnecessary friction: users would need to declare their role before accessing content, and overlapping content would require duplicate maintenance across two experiences. The combined view was the strongest fit. It kept SEO consolidated on a single domain and eliminated maintenance overhead. The original site gave agents a dropdown and homeowners nothing. I corrected that with symmetric dropdowns for both.
            </Paragraph>

            <ImageFrame
              className="p-8 mb-2 group flex-col !items-stretch"
            >
              {/* Header with Title and Optional Finalized Label */}
              <div className="flex items-center gap-3 mb-6">
                <Typography variant="bodyRegular" className="text-[#1A1A1A]">
                  {activeSitemap === 0 && "Combined sitemap"}
                  {activeSitemap === 1 && "Split sitemap (Homeowner)"}
                  {activeSitemap === 2 && "Split sitemap (Agent)"}
                </Typography>
                {activeSitemap === 0 && (
                  <Typography 
                    as="span" 
                    variant="extraSmallRegular" 
                    className="px-2.5 py-0.5 rounded-[4px] font-semibold tracking-wide" 
                    style={{ backgroundColor: '#008A35', color: '#ffffff' }}
                  >
                    Finalized
                  </Typography>
                )}
              </div>

              {/* Slider Images */}
              <div className="grid w-full items-center flex-1">
                <img
                  src={`${ASSET_PATH}/combined-sitemap.png`}
                  alt="Combined sitemap"
                  className={`col-start-1 row-start-1 w-full h-auto rounded-none transition-opacity duration-300 ${activeSitemap === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                />
                <img
                  src={`${ASSET_PATH}/split-sitemap-homeowner.png`}
                  alt="Split sitemap (Homeowner)"
                  className={`col-start-1 row-start-1 w-full h-auto rounded-none transition-opacity duration-300 ${activeSitemap === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                />
                <img
                  src={`${ASSET_PATH}/split-sitemap-agent.png`}
                  alt="Split sitemap (Agent)"
                  className={`col-start-1 row-start-1 w-full h-auto rounded-none transition-opacity duration-300 ${activeSitemap === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                />
              </div>

              {/* Controls */}
              <button
                onClick={() => setActiveSitemap((prev) => (prev === 0 ? 2 : prev - 1))}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-[#777] hover:text-[#1A1A1A] transition-colors z-20"
                aria-label="Previous sitemap"
              >
                <Icon icon="material-symbols:arrow-back-ios" className="text-[24px]" />
              </button>
              <button
                onClick={() => setActiveSitemap((prev) => (prev === 2 ? 0 : prev + 1))}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-[#777] hover:text-[#1A1A1A] transition-colors z-20"
                aria-label="Next sitemap"
              >
                <Icon icon="material-symbols:arrow-forward-ios" className="text-[24px]" />
              </button>
            </ImageFrame>
            <Caption className="mb-10">
              Information architecture sitemaps for the combined (finalized) and split views.
            </Caption>
          </Section>

          <Section id="crafting" title="">
            <Typography as="h2" variant="h3Regular" className="mb-10 text-[#1A1A1A]">
              Four directions, one recommendation
            </Typography>

            <Paragraph className="mb-10">
              The client had been explicit: they didn't want something cookie-cutter. Rather than limiting the reference set to insurance sites, I pulled from adjacent industries as well, anything visually adjacent to the brand's ambition without being bound by insurance conventions. About 50 references in total, split between myself and the other designer. No framework imposed upfront. We let visual patterns cluster before naming them. Four distinct directions emerged.
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
            <Caption className="mb-10">Exploration moodboard of 4 stylistic directions.</Caption>

            <Paragraph className="mb-10">
              For each, we built a brief: color logic, typography pairings, UI element behavior, and a pros/cons assessment against the client's brand and audience. That last part is where the directions started to separate. Playful and Illustrated had visual energy but nothing in it spoke to who this client was or who they were selling to. Friendly and Approachable was harder to dismiss, warmth and a modern feel had real appeal for homeowners. But most insurers were already heading that direction, and this client's customer base was high-income, high-asset homeowners. For that audience, blending in wasn't just a missed opportunity. It was the wrong signal entirely. My recommendation was Elegant and Sleek: sophisticated enough to reflect the company's positioning, distinctive enough to not disappear into the category.
            </Paragraph>

            <ImageFrame
              src={`${ASSET_PATH}/${images.styleDirections}`}
              alt="Briefs for stylistic directions"
              className="pt-6 px-6 mb-2 !bg-gray-900"
              imgClassName="w-full h-auto rounded-tl-[12px]"
            />
            <Caption className="mb-10">
              Individual briefs explaining the design language for each stylistic direction to help the client make highly informed decisions.
            </Caption>

            <Paragraph className="mb-10">
              My recommendation was Elegant and Sleek. We presented all four directions on the call, and the marketing team landed on a hybrid with Friendly and Approachable. The Elegant and Sleek half was the right call. The hybrid held until it didn't.
            </Paragraph>
          </Section>

          <Section id="pivot" title="">
            <Typography as="h2" variant="h3Regular" className="mb-10 text-[#1A1A1A]">
              When leadership redirected, the earlier explorations held the solution
            </Typography>
            <Paragraph className="mb-10">
              The marketing team had signed off. A month of iteration had produced a direction that was light, airy, and credibility-forward. What we hadn't accounted for was who wasn't in the room.
            </Paragraph>
            <Paragraph className="mb-10">
              When the CEO and CTO joined for the first time to review the work, they rejected it. They wanted something darker and bolder. We pulled earlier explorations into the same meeting, directions we had developed but not pursued, and that gave the leadership team language for what they actually wanted. Not full dark mode; strong contrast. That conversation became the new brief.
            </Paragraph>
            <ImageFrame
              src={`${ASSET_PATH}/${images.earlierExplorations}`}
              alt="Earlier explorations"
              className="mb-2 px-6 md:px-12 !bg-gray-900"
              imgClassName="w-full h-auto"
            />
            <Caption className="mb-10">
              Earlier design explorations presented to the leadership team.
            </Caption>
            <Paragraph className="mb-10">
              I didn't start from scratch. I went back into what we had already built and pulled the parts that answered it: sharp corners for a more premium, elegant feel; bold, contrasting colors; clean layouts. The earlier explorations had the bones. The pivot was about knowing which bones to keep.
            </Paragraph>
            <Paragraph className="mb-10">
              Dark and light sections in deliberate tension: dark to stop the eye, light for everything secondary. I also established imagery constraints, something the project hadn't had. Cosmos imagery works as background texture: it ties to the client's brand direction without competing for attention where it has no functional role. Lifestyle imagery, people, families, homes, anchors product sections because it projects warmth and relatability, which matters when you're asking homeowners to trust you with high-value assets. A red-element constraint on all photos tied everything back to the primary brand color, increasing cohesion across the site.
            </Paragraph>
            <Paragraph className="mb-10">
              The direction went to the marketing team first, then to the CEO and CTO. It resonated well, and was approved without revision.
            </Paragraph>
            <ImageFrame
              src={`${ASSET_PATH}/${images.finalScreens}`}
              alt="Final screens"
              className="mb-2"
              imgClassName="w-full h-auto"
            />
            <Caption className="mb-10">
              A selection of final screens across the redesigned site.
            </Caption>
          </Section>
          <Section id="impact" title="" className="mb-0 md:mb-0">
            <Typography as="h2" variant="h3Regular" className="mb-10 text-[#1A1A1A]">
              Built to grow without breaking
            </Typography>
            <Paragraph className="mb-8">
              The audit had flagged inconsistency from the start: seven different button styles across the site, imagery that mixed lifestyle and illustration with no logic, state pages that showed different content in different hierarchies with no standard for what belonged on each one.
            </Paragraph>
            <ImageFrame
              src={`${ASSET_PATH}/${images.impact}`}
              alt="Reusable components and final screens"
              className="p-6 mb-8"
              imgClassName="w-full h-auto"
            />
            <Paragraph>
              The solution was section components: 30+ reusable sections across 40+ screens whose content could change but whose layout, hierarchy, and visual logic stayed fixed.  For state and product pages, which were structurally identical, I built full page templates, making it easier to add newer state and product screens in the future.
            </Paragraph>
          </Section>

          <MoreCaseStudies currentId="insurance" />
        </main>
      </div>
    </div>
  );
};

export default InsuranceCompanyWebsiteRedesign;
