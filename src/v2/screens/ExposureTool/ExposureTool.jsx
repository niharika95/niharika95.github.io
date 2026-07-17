import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import Typography from '../../components/Typography';
import { ChevronLeft } from 'lucide-react';
import { Icon } from '@iconify/react';
import MoreCaseStudies from '../../components/MoreCaseStudies/MoreCaseStudies';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';

const ASSET_PATH = '/v2/images/projects/exposure-tool';

const TOC = [
  { id: 'intro', label: 'Intro' },
  { id: 'heuristic-analysis', label: 'UX Audit' },
  { id: 'constraints', label: 'First direction' },
  { id: 'navigation-problem', label: 'The reframe' },
  { id: 'solution', label: 'Solution' },
  { id: 'reflection', label: 'Reflection' },
];

const images = {
  hero: 'hero-data-tool.png',
  workflow: 'generic-workflow-diagram.png',
  wizard: 'wizard-sloution-wireframe.png',
  accountTable: 'account-match-table.png',
  beforeArchitecture: 'before-architecture.png',
  afterArchitecture: 'after-architecture.png',
  validationFlow: 'validation-tool-main.png',
  exceptionFilters: 'exception-filters.png',
  resolvedFilter: 'resolved-filter.png',
  dashboard: 'dashboard.png',
  firstPass: 'first-pass-split-view.png',
  stateChange: 'state-change-comparison.png',
  fragmentedData: 'fragmented-data-example.png',
};


const Section = ({ id, title, titleVariant = 'h6Medium', children, className = '', titleClassName = 'mb-8' }) => (
  <section id={id} className={`scroll-mt-28 mb-12 md:mb-[88px] ${className}`}>
    {title && (
      <Typography as="h2" variant={titleVariant} className={`${titleClassName} text-gray-900`}>
        {title}
      </Typography>
    )}
    {children}
  </section>
);

const Paragraph = ({ children, className = '' }) => (
  <Typography as="p" variant="bodyRegular" className={`text-gray-900 ${className}`}>
    {children}
  </Typography>
);

const Caption = ({ children, className = '' }) => (
  <Typography as="p" variant="smallRegular" className={`text-gray-600 ${className}`}>
    {children}
  </Typography>
);

const ImageFrame = ({
  id,
  src,
  alt,
  caption,
  captionVariant = 'smallRegular',
  dark = true,
  className = '',
  imgClassName = 'w-full h-auto mx-auto',
  containerClassName = 'p-4 md:p-6',
  splitView = false,
  splitViewClassName = 'top-0 bottom-0 bg-gray-300',
  splitViewStyle = {},
}) => (
  <figure id={id} className={className}>
    <div className={`relative ${dark ? 'bg-gray-900' : 'bg-gray-50'} rounded-[20px] overflow-hidden ${containerClassName}`}>
      {splitView && (
        <div 
          className={`absolute left-1/2 w-[2px] z-20 ${splitViewClassName}`} 
          style={splitViewStyle}
        />
      )}
      <img src={`${ASSET_PATH}/${src}`} alt={alt} className={`${imgClassName} relative z-10`} />
    </div>
    {caption && captionVariant === 'bodyRegular' ? (
      <Typography as="p" variant="bodyRegular" className="mt-2 text-gray-600">
        {caption}
      </Typography>
    ) : (
      caption && <Caption className="mt-2">{caption}</Caption>
    )}
  </figure>
);


const BeforeArchitectureChart = () => (
  <figure className="mb-12">
    <div className="rounded-[20px] bg-gray-50 p-4 md:p-6">
      <TransformWrapper
        initialScale={1}
        minScale={0.75}
        maxScale={3}
        centerOnInit
        limitToBounds={false}
        wheel={{ step: 0.12 }}
        panning={{ velocityDisabled: true }}
      >
        <TransformComponent
          wrapperClass="!w-full !h-[360px] md:!h-[420px] cursor-grab active:cursor-grabbing"
          contentClass="!w-full !h-full"
        >
          <svg
            viewBox="0 0 1040 650"
            role="img"
            aria-labelledby="before-user-flow-title"
            className="h-full w-full min-w-[880px]"
          >
            <title id="before-user-flow-title">Before user flow diagram for the Exposure Tool</title>
            <defs>
              <marker id="arrow-gray" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                <path d="M2,2 L10,6 L2,10" fill="none" stroke="#A5A5A5" strokeWidth="2" />
              </marker>
              <marker id="arrow-red" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                <path d="M2,2 L10,6 L2,10" fill="none" stroke="#FF4A2E" strokeWidth="2" />
              </marker>
              <filter id="subtle-shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.08" />
              </filter>
            </defs>

            <text x="120" y="68" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="24" fontWeight="700">
              Before: User Flow
            </text>
            <line x1="120" y1="104" x2="225" y2="104" stroke="#A5A5A5" strokeWidth="2" markerEnd="url(#arrow-gray)" />
            <text x="238" y="109" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="11">
              Forward navigation
            </text>
            <line x1="390" y1="104" x2="492" y2="104" stroke="#FF4A2E" strokeWidth="2" strokeDasharray="8 7" markerEnd="url(#arrow-red)" />
            <text x="505" y="109" fill="#FF4A2E" fontFamily="IBM Plex Sans, sans-serif" fontSize="11" fontWeight="700">
              Return to dashboard (required)
            </text>

            <rect x="247" y="310" width="58" height="42" rx="3" fill="#DCDCDC" />
            <text x="276" y="336" textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="12">
              Start
            </text>

            <rect x="390" y="280" width="175" height="82" rx="5" fill="#64B8F5" filter="url(#subtle-shadow)" />
            <text x="477.5" y="316" textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
              Dashboard
            </text>
            <text x="423" y="344" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="11">
              Select a client
            </text>
            <line x1="493" y1="340" x2="532" y2="340" stroke="#111" strokeWidth="1.5" markerEnd="url(#arrow-gray)" />
            <text x="540" y="344" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="11">
              View LOBs
            </text>

            {[
              { y: 220, label: 'LOB details' },
              { y: 305, label: 'Exception', label2: 'Summary' },
              { y: 390, label: 'Correction', label2: 'Summary' },
              { y: 475, label: 'Client Profile' },
            ].map((node) => (
              <g key={node.y}>
                <rect x="735" y={node.y} width="128" height="62" rx="4" fill="#53B4F7" filter="url(#subtle-shadow)" />
                <text x="799" y={node.label2 ? node.y + 25 : node.y + 38} textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
                  {node.label}
                </text>
                {node.label2 && (
                  <text x="799" y={node.y + 43} textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
                    {node.label2}
                  </text>
                )}
              </g>
            ))}

            <path d="M565 318 H648 C675 318 675 251 702 251 H735" fill="none" stroke="#A5A5A5" strokeWidth="2" markerEnd="url(#arrow-gray)" />
            <path d="M565 318 H710 H735" fill="none" stroke="#A5A5A5" strokeWidth="2" markerEnd="url(#arrow-gray)" />
            <path d="M565 330 H646 C676 330 676 421 704 421 H735" fill="none" stroke="#A5A5A5" strokeWidth="2" markerEnd="url(#arrow-gray)" />
            <path d="M565 341 H625 C674 341 674 506 704 506 H735" fill="none" stroke="#A5A5A5" strokeWidth="2" markerEnd="url(#arrow-gray)" />
            <line x1="305" y1="331" x2="390" y2="331" stroke="#A5A5A5" strokeWidth="2" markerEnd="url(#arrow-gray)" />

            <path d="M863 251 H902 V170 H430 V280" fill="none" stroke="#FF4A2E" strokeWidth="2" strokeDasharray="10 8" markerEnd="url(#arrow-red)" />
            <path d="M863 336 H932 V198 H456 V280" fill="none" stroke="#FF4A2E" strokeWidth="2" strokeDasharray="10 8" markerEnd="url(#arrow-red)" />
            <path d="M863 421 H932 V562 H456 V362" fill="none" stroke="#FF4A2E" strokeWidth="2" strokeDasharray="10 8" markerEnd="url(#arrow-red)" />
            <path d="M863 506 H902 V590 H430 V362" fill="none" stroke="#FF4A2E" strokeWidth="2" strokeDasharray="10 8" markerEnd="url(#arrow-red)" />

            <text x="120" y="585" fill="#777" fontFamily="IBM Plex Sans, sans-serif" fontSize="11">
              Example round trip
            </text>
            <text x="120" y="606" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13">
              LOB Details -&gt; back to Dashboard -&gt; Exception Summary -&gt; back to Dashboard -&gt; Correction Summary
            </text>
            <text x="120" y="628" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
              Every cross-screen action requires going back to the dashboard.
            </text>
          </svg>
        </TransformComponent>
      </TransformWrapper>
    </div>
    <Caption className="mt-2">Original user flow of the Exposure Tool.</Caption>
  </figure>
);

const AfterArchitectureChart = () => (
  <figure>
    <div className="rounded-[20px] bg-gray-50 p-4 md:p-6">
      <TransformWrapper
        initialScale={1}
        minScale={0.75}
        maxScale={3}
        centerOnInit
        limitToBounds={false}
        wheel={{ step: 0.12 }}
        panning={{ velocityDisabled: true }}
      >
        <TransformComponent
          wrapperClass="!w-full !h-[360px] md:!h-[420px] cursor-grab active:cursor-grabbing"
          contentClass="!w-full !h-full"
        >
          <svg
            viewBox="0 0 1040 650"
            role="img"
            aria-labelledby="after-user-flow-title"
            className="h-full w-full min-w-[880px]"
          >
            <title id="after-user-flow-title">After user flow diagram for the Exposure Tool</title>
            <defs>
              <marker id="arrow-after-gray" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                <path d="M2,2 L10,6 L2,10" fill="none" stroke="#7F7F7F" strokeWidth="2" />
              </marker>
              <marker id="arrow-after-green" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                <path d="M2,2 L10,6 L2,10" fill="none" stroke="#57C66B" strokeWidth="2" />
              </marker>
              <filter id="after-subtle-shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.06" />
              </filter>
            </defs>

            <text x="62" y="65" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="24" fontWeight="700">
              After: User Flow
            </text>

            <rect x="90" y="323" width="62" height="42" rx="4" fill="#DFDFDF" />
            <text x="121" y="349" textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="12">
              Start
            </text>

            <line x1="152" y1="344" x2="230" y2="344" stroke="#7F7F7F" strokeWidth="2" markerEnd="url(#arrow-after-gray)" />
            <rect x="238" y="292" width="112" height="104" rx="4" fill="#D9F8DF" filter="url(#after-subtle-shadow)" />
            <text x="294" y="336" textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
              Dashboard
            </text>
            <text x="294" y="362" textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="11">
              Select a client
            </text>

            <line x1="350" y1="344" x2="440" y2="344" stroke="#7F7F7F" strokeWidth="2" markerEnd="url(#arrow-after-gray)" />

            <rect x="446" y="120" width="420" height="390" rx="2" fill="#D9F8DF" />
            <text x="656" y="158" textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
              Selected Client
            </text>

            <rect x="498" y="206" width="76" height="282" rx="4" fill="#D9F8DF" stroke="#57C66B" strokeWidth="3" />
            <text x="536" y="348" textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
              List of
            </text>
            <text x="536" y="367" textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
              LOBs
            </text>

            <line x1="574" y1="348" x2="642" y2="348" stroke="#57C66B" strokeWidth="2" markerEnd="url(#arrow-after-green)" />

            <rect x="638" y="186" width="230" height="322" rx="4" fill="#D9F8DF" stroke="#57C66B" strokeWidth="3" />
            <text x="753" y="230" textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
              Selected LOB
            </text>

            <rect x="692" y="276" width="122" height="54" rx="3" fill="#D9F8DF" stroke="#57C66B" strokeWidth="3" />
            <text x="753" y="308" textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
              LOB Details
            </text>

            <rect x="692" y="384" width="122" height="60" rx="3" fill="#D9F8DF" stroke="#57C66B" strokeWidth="3" />
            <text x="753" y="408" textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
              Exception
            </text>
            <text x="753" y="427" textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
              Summary
            </text>

            <rect x="692" y="492" width="122" height="60" rx="3" fill="#D9F8DF" stroke="#57C66B" strokeWidth="3" />
            <text x="753" y="516" textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
              Correction
            </text>
            <text x="753" y="535" textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
              Summary
            </text>

            <path d="M753 330 V377" fill="none" stroke="#7F7F7F" strokeWidth="2" markerEnd="url(#arrow-after-gray)" />
            <path d="M753 384 V337" fill="none" stroke="#7F7F7F" strokeWidth="2" markerEnd="url(#arrow-after-gray)" />
            <path d="M753 444 V485" fill="none" stroke="#7F7F7F" strokeWidth="2" markerEnd="url(#arrow-after-gray)" />
            <path d="M753 492 V451" fill="none" stroke="#7F7F7F" strokeWidth="2" markerEnd="url(#arrow-after-gray)" />

            <line x1="866" y1="344" x2="940" y2="344" stroke="#7F7F7F" strokeWidth="2" markerEnd="url(#arrow-after-gray)" />
            <rect x="946" y="315" width="140" height="58" rx="4" fill="#D9F8DF" filter="url(#after-subtle-shadow)" />
            <text x="1016" y="349" textAnchor="middle" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
              Client profile
            </text>

            <text x="90" y="595" fill="#111" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
              One destination from the dashboard. All states are accessible within the selected client page.
            </text>
          </svg>
        </TransformComponent>
      </TransformWrapper>
    </div>
    <Caption className="mt-2">Improved user flow of the Exposure Tool.</Caption>
  </figure>
);



const ExposureTool = () => {
  useAnalytics('project_detail', {
    projectName: 'exposure-tool',
    projectType: 'professional'
  });
  useScrollTracking();
  useTimeTracking();

  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveId = 'intro';
      TOC.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element && element.getBoundingClientRect().top <= 140) {
          currentActiveId = item.id;
        }
      });

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

  const scrollToSection = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-[#EBEBEB] min-h-screen text-gray-900">
      <HeaderV2 />

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 flex pt-10 pb-32">
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

        <main className="w-full max-w-[720px] mx-auto lg:ml-20 xl:ml-32">
          <section id="intro" className="scroll-mt-28 mb-10 md:mb-[84px]">
            <ImageFrame
              src={images.hero}
              alt="Exposure Tool hero placeholder"
              className="mb-[80px]"
              imgClassName="w-full h-auto"
              containerClassName="!p-0 !bg-transparent"
              dark={false}
              splitView={true}
              splitViewClassName="bg-gray-900"
              splitViewStyle={{ top: '0%', height: '98.8%' }}
            />

            <Typography as="h1" variant="h2Regular" className="mb-[100px] max-w-[720px] text-gray-900">
              Aligning system architecture with user mental models in a high-density financial tool.
            </Typography>

            <div className="mb-12 md:mb-[100px] flex flex-col gap-1 text-gray-500">
              <div className="flex gap-4">
                <Typography as="span" variant="bodyRegular" className="w-[74px] flex-shrink-0">Role</Typography>
                <Typography as="span" variant="bodyRegular">Lead Product Designer, 4 weeks</Typography>
              </div>
              <div className="flex gap-4">
                <Typography as="span" variant="bodyRegular" className="w-[74px] flex-shrink-0">Team</Typography>
                <Typography as="span" variant="bodyRegular">2 Product Designers, Product Manager</Typography>
              </div>
            </div>

            <Paragraph className="mb-[40px]">
              The Exposure Tool helps insurance account teams review and validate a client's risk data year over year, flag discrepancies, and generate a final report before the policy renews.
            </Paragraph>

            <ImageFrame
              src={images.workflow}
              alt="Generic workflow diagram"
              caption="Exposure process workflow."
              className="mb-[40px]"
              imgClassName="w-full h-auto"
              containerClassName="!p-0 !bg-transparent !rounded-none"
              dark={false}
            />

            <Paragraph className="mb-12 md:mb-[100px]">
              The ask was to modernize the UI. There was no direct access to end users, and all project communication ran through a PM intermediary.
            </Paragraph>

            <ImageFrame
              src={images.accountTable}
              alt="Account match table placeholder"
              caption="The original dashboard after client selection, showing Lines of Business with no indication of next steps."
              className="mb-[100px]"
              imgClassName="w-full h-auto"
              containerClassName="!p-0 !bg-transparent"
              dark={false}
            />

            <Typography id="heuristic-analysis" as="h3" variant="h3Regular" className="scroll-mt-28 mb-[40px] text-gray-900">
              The audit found more than what I expected.
            </Typography>

            <Paragraph className="mb-[40px]">
              I audited the live tool end to end, documenting interaction patterns, navigation behavior, system feedback, and visual inconsistencies across every screen; and found 43 heuristic issues across 5 screens.
            </Paragraph>


            <Paragraph className="mb-[40px]">
              The pattern pointed to something specific: the functionality worked. The tool was hard to learn, hard to navigate, and visually inconsistent, but those were experience problems, not functional ones. That distinction mattered for where the redesign needed to focus.
            </Paragraph>

            <Paragraph className="mb-[100px]">
              The audit also surfaced something structural. Every inner page routed back through the dashboard. There was no direct path between any two working pages. To move from LOB Details to Exception Summary, you had to return to the dashboard first, every time.
            </Paragraph>
          </section>

          <Section id="discovery" className="!mb-[100px]">
            <ImageFrame
              src={images.beforeArchitecture}
              alt="Before user flow diagram"
              caption="Original user flow of the Exposure Tool."
              className="mb-0"
              imgClassName="w-[90%] h-auto mx-auto"
              dark={false}
            />
          </Section>

          <Section id="constraints" className="!mb-[100px]">
            <Typography as="h3" variant="h3Regular" className="mb-[40px] text-gray-900">
              The first direction that revealed a deeper problem.
            </Typography>

            <Paragraph className="mb-[100px]">
              The navigation felt like the primary problem, so we started there: a wizard-style flow linking the main stages, with explicit step navigation so users could move between them without retracing. A reasonable response to what the audit had surfaced.
            </Paragraph>

            <ImageFrame
              src={images.wizard}
              alt="Wizard solution wireframe"
              caption="A wireframe of the wizard-style flow solution."
              className="mb-[100px]"
              imgClassName="w-full h-auto"
              containerClassName="!p-0 !bg-transparent border border-gray-150"
              dark={false}
            />

            <Paragraph className="mb-[40px]">
              As I wireframed the individual steps, something kept feeling off. The LOB Details table and the Exception Summary table were showing the same records. Column names were nearly identical across both. And structurally, one showed Renewal and In-Force data as stacked row pairs, while the other showed the same values side by side with delta columns.
            </Paragraph>

            <Paragraph className="mb-[100px]">
              Looking closer at how the tool actually worked made it clear why. Exceptions aren't manually created. The system automatically compares Renewal and In-Force values and flags records where the difference exceeds a threshold. Exception Summary wasn't a separate workflow. It was LOB Details filtered to flagged records. Correction Summary was the same data again, filtered to approved records, with export controls added.
            </Paragraph>

            <ImageFrame
              src={images.fragmentedData}
              alt="Fragmented data example"
              caption="Stacked pairs on LOB Details (top); side-by-side comparison on Exception Summary (bottom)."
              className="mb-[100px]"
              imgClassName="w-full h-auto mx-auto"
              containerClassName="p-4 md:p-6"
              dark={true}
            />

            <Paragraph className="mb-[40px]">
              Three pages. Same dataset. Two different structures. No clear reason for any of it to exist separately.
            </Paragraph>

            <Paragraph className="mb-0">
              I walked the PM through what we were seeing. The three pages weren't three distinct workflows. They were the same dataset, filtered differently and structured inconsistently.
            </Paragraph>
          </Section>

          <Section id="navigation-problem" className="!mb-[100px]">
            <Typography as="h3" variant="h3Regular" className="mb-[40px] text-gray-900">
              The navigation was never the problem.
            </Typography>

            <Paragraph className="mb-[40px]">
              That changed the design problem entirely.
            </Paragraph>

            <Paragraph className="mb-[40px]">
              If LOB Details, Exception Summary, and Correction Summary were all showing the same underlying data, differing only in filter state and visual structure, then navigating between them more efficiently wasn't the answer. The question was whether those pages needed to exist separately at all.
            </Paragraph>

            <Paragraph className="mb-0">
              The ask was to clean up the UI. What the tool actually needed was a rethink of its information architecture.
            </Paragraph>
          </Section>

          <Section id="solution" className="!mb-12 md:!mb-[100px]">
            <Typography as="h3" variant="h3Regular" className="mb-[40px] text-gray-900">
              From fragmentation to a single source of truth.
            </Typography>

            <Paragraph className="mb-10">
              Once I could see the redundancy clearly, the structure followed directly. If LOB Details, Exception Summary, and Correction Summary were all showing the same underlying data, the answer was not better navigation between them. It was one view with the ability to filter to what mattered at each stage.
            </Paragraph>

            {/* <AfterArchitectureChart /> */}
            <ImageFrame
              src={images.afterArchitecture}
              alt="After architecture"
              caption="Improved user flow of the Exposure Tool."
              imgClassName="w-[90%] h-auto mx-auto"
              dark={false}
            />
          </Section>

          <Section id="validation-tab" title="The Validation Tab" titleVariant="bodySemibold" className="!mb-12 md:!mb-[100px]">
            <Paragraph className="mb-[40px]">
              A single persistent table replacing the original three pages. One row per record. One consistent data structure regardless of where a user is in the workflow.
            </Paragraph>

            <Paragraph className="mb-[100px]">
              Two filter states replaced the three-page structure entirely. Exceptions surfaces open, unresolved flags: the delta columns that were previously only accessible on Exception Summary are now always present in this state, no page switch required. Resolved replaces Correction Summary: approved records available for verification before export.
            </Paragraph>

            <ImageFrame
              src={images.validationFlow}
              alt="Validation tool main screen placeholder"
              caption="The core of the architecture. A single unified table replacing LOB Details, Exception Summary, and Correction Summary. One row per record."
              className="mb-12 md:mb-[100px]"
              imgClassName="w-full h-auto"
              containerClassName="!p-0 !bg-transparent border border-gray-150"
              dark={false}
            />

            <ImageFrame
              src={images.exceptionFilters}
              alt="Exception filters placeholder"
              caption="The Exceptions state. Delta columns surface here and the the difference between Renewal and In-Force values is visible at a glance, on the records that need attention."
              className="mb-12 md:mb-[100px]"
              imgClassName="w-full h-auto"
              containerClassName="!p-0 !bg-transparent border border-gray-150"
              dark={false}
            />

            <ImageFrame
              src={images.resolvedFilter}
              alt="Resolved filter placeholder"
              caption="The Resolved state. Approved records staged for export. Same records, no separate page."
              className="mb-12 md:mb-[100px]"
              imgClassName="w-full h-auto"
              containerClassName="!p-0 !bg-transparent border border-gray-150"
              dark={false}
            />

            <Paragraph className="mb-[40px]">
              I chose a single row per record over stacked pairs. It was a tradeoff on familiarity. Maintaining stacked Renewal and In-Force pairs would have preserved the structure users already knew, but a single row per record structure let users compare values at a glance rather than read them across stacked rows.
            </Paragraph>

            <Paragraph className="mb-[40px]">
              The original tool required users to manually select which records they had changed before saving, despite the system already knowing which records had been modified. I removed the checkboxes and per-row Update buttons and replaced them with a single Save Changes button. Auto-save would have gone further, but in a tool where data directly affects policy pricing, explicit control over what gets committed matters more than convenience.
            </Paragraph>

            <ImageFrame
              src={images.stateChange}
              alt="State change comparison placeholder"
              caption="A before and after of the mechanism of saving changes."
              className="mb-12 md:mb-[100px]"
              containerClassName="p-4 md:p-6"
              dark={true}
            />

            <div>
              <Typography as="h3" variant="bodySemibold" className="mb-4 text-gray-900">
                Dashboard
              </Typography>
              <Paragraph className="mb-[40px]">
                The original dashboard presented all destinations as equal buttons with no indication of sequence or status. The redesigned dashboard has one job: client selection. Exception counts and status indicators now surface at this level, so a user knows who needs attention before clicking into anything.
              </Paragraph>
              <ImageFrame
                src={images.dashboard}
                alt="Dashboard placeholder"
                imgClassName="w-full h-auto"
                containerClassName="!p-0 !bg-transparent border border-gray-150"
                dark={false}
              />
            </div>
          </Section>

          <Section id="reflection" className="mb-0">
            <Typography as="h3" variant="h3Regular" className="mb-[40px] text-gray-900">
              What I would have measured.
            </Typography>
            <Paragraph>
              All client communication ran through a PM intermediary. I asked for direct access to the client, early in the engagement. It wasn't offered. I handed off the designs for client-side implementation, and the engagement ended at delivery. The average review session time would have been the right measure of whether the consolidation landed, but that data wasn't within scope to capture.
            </Paragraph>
          </Section>

          <MoreCaseStudies currentId="exposure" />
        </main>
      </div>
    </div>
  );
};

export default ExposureTool;
