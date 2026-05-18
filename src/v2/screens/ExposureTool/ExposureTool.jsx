import React, { useEffect, useState } from 'react';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import Typography from '../../components/Typography';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Icon } from '@iconify/react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';

const ASSET_PATH = '/v2/images/projects/exposure-tool';

const TOC = [
  { id: 'intro', label: 'Intro' },
  { id: 'problem', label: 'Problem' },
  { id: 'constraints', label: 'Constraints' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'solution', label: 'Solution' },
  { id: 'tradeoffs', label: 'Tradeoffs' },
  { id: 'impact', label: 'Impact' },
  { id: 'reflection', label: 'Reflection' },
];

const images = {
  hero: 'hero-data-tool.png',
  accountTable: 'account-match-table.png',
  beforeArchitecture: 'before-architecture.png',
  wayfinding: 'wayfinding-example.png',
  fragmentedData: 'fragmented-data-example.png',
  afterArchitecture: 'after-architecture.png',
  validationFlow: 'validation-tool-main.png',
  exceptionFilters: 'exception-filters.png',
  resolvedFilter: 'resolved-filter.png',
  dashboard: 'dashboard.png',
  firstPass: 'first-pass-split-view.png',
  stateChange: 'state-change-comparison.png',
};

const heuristicIssues = [
  { label: 'Flexibility & Efficiency of Use', value: 9, highlight: true },
  { label: 'Recognition Rather than Recall', value: 9, highlight: true },
  { label: 'Aesthetic & Minimalist Design', value: 9, highlight: true },
  { label: 'Consistency & Standards', value: 9, highlight: true },
  { label: 'Visibility of System Status', value: 4 },
  { label: 'Error Prevention', value: 2 },
  { label: 'Help & Documentation', value: 1 },
  { label: 'Other heuristics', value: null },
];

const heuristicExamples = [
  'Inconsistent alignment',
  'Missing tooltips',
  'Missing contextual guidance',
  'Unclear system status',
  'Inadequate spacing',
];

const Section = ({ id, title, titleVariant = 'h6Regular', children, className = '' }) => (
  <section id={id} className={`scroll-mt-28 mb-[88px] ${className}`}>
    {title && (
      <Typography as="h2" variant={titleVariant} className="mb-8 text-[#171717]">
        {title}
      </Typography>
    )}
    {children}
  </section>
);

const Paragraph = ({ children, className = '' }) => (
  <Typography as="p" variant="bodyRegular" className={`text-[#1E1E1E] ${className}`}>
    {children}
  </Typography>
);

const Caption = ({ children, className = '' }) => (
  <Typography as="p" variant="extraSmallRegular" className={`text-[#555] ${className}`}>
    {children}
  </Typography>
);

const ImageFrame = ({
  src,
  alt,
  caption,
  captionVariant = 'extraSmallRegular',
  dark = true,
  className = '',
  imgClassName = 'w-full h-auto',
}) => (
  <figure className={className}>
    <div className={`${dark ? 'bg-[#141414]' : 'bg-[#F5F5F5]'} rounded-[10px] p-4 md:p-6 overflow-hidden`}>
      <img src={`${ASSET_PATH}/${src}`} alt={alt} className={`${imgClassName} mx-auto rounded-[4px]`} />
    </div>
    {caption && captionVariant === 'bodyRegular' ? (
      <Typography as="p" variant="bodyRegular" className="mt-2 text-[#555]">
        {caption}
      </Typography>
    ) : (
      caption && <Caption className="mt-2">{caption}</Caption>
    )}
  </figure>
);

const HeuristicIssuesChart = () => (
  <figure className="mt-10">
    <div className="rounded-[18px] bg-[#F5F5F5] px-6 py-7 md:px-8 md:py-8">
      <div className="flex items-center justify-between border-b border-[#DDDDDD] pb-6">
        <Typography as="h3" variant="smallRegular" className="text-[#1A1A1A]">
          Heuristic issues
        </Typography>
        <Typography as="span" variant="smallRegular" className="text-[#1A1A1A]">
          43 total
        </Typography>
      </div>

      <div className="py-7 space-y-5 border-b border-[#DDDDDD]">
        {heuristicIssues.map((issue) => {
          const width = issue.value ? `${(issue.value / 9) * 100}%` : '0%';
          const lineColor = issue.highlight ? 'bg-[#8A2BFF]' : 'bg-[#9E9E9E]';
          const muted = !issue.highlight;

          return (
            <div
              key={issue.label}
              className="grid grid-cols-[minmax(130px,210px)_1fr_24px] gap-4 items-center"
            >
              <Typography
                as="span"
                variant="extraSmallRegular"
                className={muted ? 'text-[#777]' : 'text-[#1A1A1A]'}
              >
                {issue.label}
              </Typography>
              <div className="relative h-px bg-[#D2D2D2]">
                {issue.value && (
                  <>
                    <span
                      className={`absolute left-0 top-1/2 h-[2px] -translate-y-1/2 ${lineColor}`}
                      style={{ width }}
                    />
                    <span
                      className={`absolute top-1/2 size-[7px] -translate-y-1/2 rounded-full ${lineColor}`}
                      style={{ left: `calc(${width} - 3.5px)` }}
                    />
                  </>
                )}
              </div>
              <Typography as="span" variant="extraSmallRegular" className="text-right text-[#1A1A1A]">
                {issue.value || '-'}
              </Typography>
            </div>
          );
        })}
      </div>

      <div className="pt-5">
        <Typography as="h4" variant="extraSmallRegular" className="mb-4 text-[#1A1A1A]" style={{ fontWeight: 600 }}>
          Example issues
        </Typography>
        <div className="flex flex-wrap gap-3">
          {heuristicExamples.map((example) => (
            <Typography
              key={example}
              as="span"
              variant="extraSmallRegular"
              className="rounded-[7px] bg-[#DDDDDD] px-4 py-2 text-[#1A1A1A]"
            >
              {example}
            </Typography>
          ))}
        </div>
      </div>
    </div>
    <Caption className="mt-2">
      36 of 43 issues clustered in four heuristics — Flexibility and Efficiency of Use, Recognition Rather than Recall, Aesthetic &amp; Minimalist Design, Consistency and Standards.
    </Caption>
  </figure>
);

const BeforeArchitectureChart = () => (
  <figure className="mb-12">
    <div className="rounded-[18px] bg-[#F5F5F5] p-4 md:p-6">
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
    <div className="rounded-[18px] bg-[#F5F5F5] p-4 md:p-6">
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

const Quote = ({ children }) => (
  <blockquote className="border-l-[8px] border-[#1A1A1A] pl-5 my-10">
    <Typography as="p" variant="bodyRegular" className="text-[#1A1A1A]">
      {children}
    </Typography>
  </blockquote>
);

const SplitQuote = () => (
  <blockquote className="border-l-[8px] border-[#1A1A1A] pl-5 my-10">
    <Typography as="p" variant="h6Regular" className="text-[#1A1A1A]">
      The ask was straightforward: modernize the UI.
    </Typography>
    <Typography as="p" variant="h6Regular" className="text-[#1A1A1A]" style={{ fontWeight: 700 }}>
      But the audit revealed something deeper.
    </Typography>
  </blockquote>
);

const StructuralFinding = ({ icon, title, children }) => (
  <div>
    <div className="flex items-center gap-5 mb-5">
      <Icon icon={icon} className="text-[#6D20E8] text-[38px] flex-shrink-0" />
      <Typography as="h3" variant="bodyRegular" className="text-[#1A1A1A]" style={{ fontWeight: 700 }}>
        {title}
      </Typography>
    </div>
    <Paragraph>{children}</Paragraph>
  </div>
);

const ImpactItem = ({ icon, title, children }) => (
  <div className="flex items-start gap-6">
    <div className="w-[34px] flex-shrink-0">
      <Icon icon={icon} className="mt-1 text-[32px] text-[#6D20E8]" />
    </div>
    <div className="min-w-0">
      <Typography as="h3" variant="bodySemibold" className="mb-3 text-[#1A1A1A]">
        {title}
      </Typography>
      <Paragraph>{children}</Paragraph>
    </div>
  </div>
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
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <HeaderV2 />

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 flex pt-10 pb-32">
        <aside className="hidden lg:block w-[180px] flex-shrink-0 sticky top-[130px] self-start max-h-[calc(100vh-140px)] overflow-y-auto">
          <nav className="flex flex-col gap-[40px]">
            <Link to="/v2" className="back-link-group inline-flex items-center text-[#999] transition-colors duration-200 gap-1 font-ibm-plex text-base font-medium -ml-1">
              <ChevronLeft size={20} className="icon-solid-hover transition-colors duration-200" />
              <Typography as="span" variant="smallLight" className="shimmer-text">Home</Typography>
            </Link>
            <div className="flex flex-col gap-[12px]">
              {TOC.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => scrollToSection(event, item.id)}
                  className={`transition-colors ${activeSection === item.id ? 'text-[#000]' : 'text-[#A0A0A0] nav-item-shimmer'}`}
                >
                  <Typography as="span" variant="extraSmallRegular">{item.label}</Typography>
                </a>
              ))}
            </div>
          </nav>
        </aside>

        <main className="w-full max-w-[720px] mx-auto lg:ml-20 xl:ml-32">
          <section id="intro" className="scroll-mt-28 mb-[84px]">
            <Typography as="h1" variant="h5Regular" className="mb-12 max-w-[620px] text-[#1A1A1A]">
              An architectural rethink that resolved a structural data inconsistency across 3 fragmented views, consolidating them into 1 unified view.
            </Typography>

            <div className="mb-12 flex flex-col gap-1 text-[#686868]">
              <div className="flex gap-4">
                <Typography as="span" variant="bodyRegular" className="w-[50px] flex-shrink-0">Role</Typography>
                <Typography as="span" variant="bodyRegular">Lead Product Designer, 4 weeks</Typography>
              </div>
              <div className="flex gap-4">
                <Typography as="span" variant="bodyRegular" className="w-[50px] flex-shrink-0">Team</Typography>
                <Typography as="span" variant="bodyRegular">2 Product Designers, Product Manager</Typography>
              </div>
            </div>

            <ImageFrame
              src={images.hero}
              alt="Exposure Tool hero placeholder"
              caption="The before and after of the home screen on the Exposure Tool."
              className="mb-12"
            />

            <Paragraph>
              The Exposure Tool helps insurance account teams review and validate a client's risk data year over year. For this improvement, one process had major confusion in the system.
            </Paragraph>

            <SplitQuote />

            <ImageFrame
              src={images.accountTable}
              alt="Account match table placeholder"
              caption="The original table had multiple columns that changed state and meaning across rows."
              className="mb-10"
            />

            <Paragraph className="mb-5">
              Account teams found the tool <strong className="font-semibold">difficult to navigate</strong> and <strong className="font-semibold">visually outdated</strong>.
            </Paragraph>
            <Paragraph>
              With no client access to end users and a four-week timeline, a heuristic evaluation of the flow became the foundation, surfacing 43 documented issues across five screens.
            </Paragraph>

            <HeuristicIssuesChart />
          </section>

          <Section id="problem" title="The architecture was the problem.">
            <BeforeArchitectureChart />

            <Typography as="h3" variant="smallRegular" className="mb-8 text-[#1A1A1A]" style={{ fontWeight: 600 }}>
              The audit surfaced two structural problems early.
            </Typography>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <StructuralFinding icon="material-symbols:signpost-rounded" title="No wayfinding">
                The dashboard presented all destinations as equal. Client Profile, Exception Summary, and Correction Summary sat as parallel buttons with no indication of how they related to each other or to the broader workflow. <strong className="font-semibold">A user opening the tool for the first time had nothing to orient them.</strong>
              </StructuralFinding>
              <ImageFrame
                src={images.wayfinding}
                alt="Wayfinding issue placeholder"
                caption="Three equal-weight buttons with no indication of sequence or priority."
                className="w-full md:mt-2"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <StructuralFinding icon="material-symbols:view-column-rounded" title={<>Same data,<br />two different structures</>}>
                LOB Details showed Renewal and In-Force data as stacked pairs. Exception Summary showed the same data side by side with Value Change and Percentage Difference columns. <strong className="font-semibold">Every time a user moved between pages, they had to mentally re-map the same information into a different structure.</strong>
              </StructuralFinding>
              <ImageFrame
                src={images.fragmentedData}
                alt="Fragmented data placeholder"
                caption="Stacked pairs on LOB Details (top), side-by-side comparison on Exception Summary (bottom)."
                className="w-full md:mt-2"
              />
            </div>

            <Paragraph className="mt-12">
              The second observation became the thread that pulled the whole information architecture apart.
            </Paragraph>
          </Section>

          <Section id="constraints" title="Constraints">
            <Quote>
              Exceptions are system-generated. The tool automatically compares Renewal and In-Force pairs and flags records where the delta exceeds a threshold. Exception Summary was not a separate workflow. It was LOS Details filtered to flagged records. And Correction Summary was the same data again, filtered to approved records, with export controls added.
            </Quote>

            <div className="flex items-start gap-7 py-4">
              <Icon icon="material-symbols:emoji-objects-rounded" className="mt-1 flex-shrink-0 text-[46px] text-[#6D20E8]" />
              <div>
                <Typography as="p" variant="bodyRegular" className="text-[#1A1A1A]">
                  The question that reframed the design:
                </Typography>
                <Typography as="p" variant="bodyRegular" className="text-[#1A1A1A]" style={{ fontWeight: 700 }}>
                  If the data is the same, why do the pages need to exist separately?
                </Typography>
              </div>
            </div>
          </Section>

          <Section id="architecture" title="From fragmentation to a single source of truth">
            <Paragraph className="mb-10">
              A master-detail architecture that consolidates the original three-page structure into a single persistent layout. One view. All states. No context switching.
            </Paragraph>

            <AfterArchitectureChart />
          </Section>

          <Section id="solution" title="The Validation Tab" titleVariant="bodySemibold">
            <ImageFrame
              src={images.validationFlow}
              alt="Validation tool main screen placeholder"
              caption="The core of the architecture. A single unified table replacing LOB Details, Exception Summary, and Correction Summary. One row per record."
              captionVariant="bodyRegular"
              className="mb-12"
            />

            <ImageFrame
              src={images.exceptionFilters}
              alt="Exception filters placeholder"
              caption={<><strong className="font-semibold">Exception filters:</strong> filters by open, unresolved flags. Value Change and Percentage Change columns appear only in this state, surfacing the data that triggered the flag.</>}
              captionVariant="bodyRegular"
              className="mb-12"
            />

            <ImageFrame
              src={images.resolvedFilter}
              alt="Resolved filter placeholder"
              caption={<><strong className="font-semibold">Resolved filter:</strong> approved records for verification before export, replacing the original Correction Summary page entirely.</>}
              captionVariant="bodyRegular"
              className="mb-12"
            />

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <Typography as="h3" variant="bodySemibold" className="mb-4 text-[#1A1A1A]">
                  Dashboard
                </Typography>
                <Paragraph>
                  The dashboard only acts as a client selection surface. Exception counts and status chips surface risk-record attention before clicking into anything. In-force and renewal dates are presented as columns, removing ambiguity before data appears.
                </Paragraph>
              </div>
              <ImageFrame
                src={images.dashboard}
                alt="Dashboard placeholder"
              />
            </div>
          </Section>

          <Section id="tradeoffs" title="Tradeoffs worth making">
            <Typography as="h3" variant="bodySemibold" className="mb-5 text-[#1A1A1A]">
              Single-row pair record replacing stacked Renewal/In-Force pairs
            </Typography>
            <ImageFrame
              src={images.firstPass}
              alt="First pass split view placeholder"
              caption="Maintaining stacked Renewal and In-Force pairs would have preserved familiarity but made triage significantly harder. Moving to a single row per record was the less familiar choice, but it was the right one."
              captionVariant="bodyRegular"
              className="mb-12"
            />

            <Typography as="h3" variant="bodySemibold" className="mb-5 text-[#1A1A1A]">
              Single State Change: replacing row-level and bulk-state mechanisms
            </Typography>
            <ImageFrame
              src={images.stateChange}
              alt="State change comparison placeholder"
              caption="The original tool offered two state mechanisms: per-row, or multiple records at once. A single State Changes button simplified bulk, contextual actions and reduced display noise."
              captionVariant="bodyRegular"
            />
          </Section>

          <Section id="impact" title="Impact">
            <div className="space-y-10">
              <ImpactItem icon="material-symbols:account-tree-rounded" title="Full workflow, no context switching.">
                Three separate screens consolidated into one persistent layout with no dashboard round trips required.
              </ImpactItem>
              <ImpactItem icon="material-symbols:save-outline-rounded" title="Review rhythm uninterrupted across high-volume exception sets.">
                A single Save Changes replaced two separate save mechanisms, removing decision fatigue during sessions with numerous flagged records.
              </ImpactItem>
              <ImpactItem icon="material-symbols:table-rows-rounded" title="Consistent mental model across all data views.">
                Two inconsistent data structures unified into one with no cognitive re-mapping when switching between views.
              </ImpactItem>
            </div>
          </Section>

          <Section id="reflection" title="Reflection" className="mb-0">
            <Paragraph>
              Enterprise UI problems are rarely screen-level. The 45 audit issues were symptoms. The real problem was an inconsistent mental model embedded in the architecture. Without time for usability testing, the most important question remains unanswered: whether the unified validation tool feels as logical to users as it does on paper.
            </Paragraph>
          </Section>
        </main>
      </div>
    </div>
  );
};

export default ExposureTool;
