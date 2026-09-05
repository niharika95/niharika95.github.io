import React from 'react';
import { Icon } from '@iconify/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import Typography from '../../components/Typography/Typography';
import { trackExternalLink } from '../../utils/analytics';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';
import resumePDF from '../../../assets/documents/Resume_Niharika Dalal_Product Designer.pdf';

function Resume() {
  // Track page view, scroll depth, and time on page
  useAnalytics('resume');
  useScrollTracking();
  useTimeTracking();

  return (
    <div className="bg-gradient-to-br from-white to-[#EBEBEB] text-[#1A1A1A] min-h-screen">
      <HeaderV2 style={{ background: 'rgba(250, 250, 250, 0.85)' }} />

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 flex pt-3 lg:pt-10 pb-20 lg:pb-32">
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-[180px] flex-shrink-0 sticky top-[130px] self-start max-h-[calc(100vh-140px)] overflow-y-auto">
          <nav className="flex flex-col gap-[40px]">
            <Link to="/" className="back-link-group inline-flex items-center text-gray-500 transition-colors duration-200 gap-1 font-ibm-plex text-base font-medium -ml-1 no-underline hover:text-gray-900">
              <ChevronLeft size={20} className="icon-solid-hover transition-colors duration-200" />
              <Typography as="span" variant="smallLight" className="shimmer-text">Home</Typography>
            </Link>

            {/* Download Link */}
            <a
              href={resumePDF}
              download="Resume_Niharika Dalal_Product Designer.pdf"
              onClick={() => trackExternalLink('resume_download', resumePDF, 'Download Resume PDF', window.location.pathname)}
              className="back-link-group inline-flex items-center text-gray-500 transition-colors duration-200 gap-1 font-ibm-plex text-base font-medium -ml-1"
            >
              <Icon icon="material-symbols:download" style={{ fontWeight: 200 }} className="icon-solid-hover transition-colors duration-200 text-[24px]" />
              <Typography as="span" variant="smallLight" className="shimmer-text">Download resume</Typography>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-full max-w-[800px] mx-auto lg:ml-[60px] xl:ml-[100px] flex flex-col justify-start items-start lg:justify-center">
          {/* Mobile Download Link */}
          <a
            href={resumePDF}
            download="Resume_Niharika Dalal_Product Designer.pdf"
            onClick={() => trackExternalLink('resume_download', resumePDF, 'Download Resume PDF', window.location.pathname)}
            className="lg:hidden back-link-group inline-flex items-center text-gray-500 transition-colors duration-200 gap-1 font-ibm-plex text-base font-medium mb-6 -ml-1"
          >
            <Icon icon="material-symbols:download" style={{ fontWeight: 200 }} className="icon-solid-hover transition-colors duration-200 text-[24px]" />
            <Typography as="span" variant="smallRegular" className="shimmer-text">Download resume</Typography>
          </a>

          {/* Responsive HTML Resume Sheet */}
          <div className="w-full bg-white rounded-[24px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[#E5E7EB] px-4 py-6 md:p-12 text-left font-ibm-plex text-[#1A1A1A]">
            
            {/* Header Block */}
            <div className="pb-6 mb-6 border-b border-[#F3F4F6]">
              <h1 className="text-[#3C83F6] text-[28px] md:text-[32px] font-bold tracking-tight mb-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                Niharika Dalal
              </h1>
              <div className="text-gray-700 text-[15px] font-bold mb-2.5">
                Product Designer | B2B Enterprise SaaS, Fintech and Insurance
              </div>
              <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1.5 text-gray-800 text-[14px] font-medium leading-relaxed">
                <a href="https://niharika95.github.io" className="text-gray-800 underline hover:text-blue-600 transition-colors">niharika95.github.io</a>
                <span className="text-gray-300">•</span>
                <a href="https://www.linkedin.com/in/niharikadalal" target="_blank" rel="noopener noreferrer" className="text-gray-800 underline hover:text-blue-600 transition-colors">in/niharikadalal</a>
                <span className="text-gray-300">•</span>
                <a href="mailto:niharika13dalal@gmail.com" className="text-gray-800 underline hover:text-blue-600 transition-colors">niharika13dalal@gmail.com</a>
                <span className="text-gray-300">•</span>
                <a href="tel:585-729-3306" className="text-gray-800 underline hover:text-blue-600 transition-colors">585-729-3306</a>
                <span className="text-gray-300">•</span>
                <span>San Jose, CA</span>
              </div>
            </div>

            {/* Summary Section */}
            <div className="mb-6">
              <Typography as="h2" variant="bodySemibold" className="text-[#3C83F6] uppercase tracking-wider text-[13px] font-bold mb-3" style={{ fontWeight: 700 }}>
                Summary
              </Typography>
              <Typography as="p" variant="bodyRegular" className="text-gray-800 leading-[1.8]" style={{ fontSize: '14px' }}>
                Product Designer with 5+ years leading design in fast-paced, multi-project environments, grounded in a software engineering background. Adept at translating ambiguous, complex problems into simplified and scalable systems, rapidly mastering industry contexts, and managing context-switching across asynchronous priorities. Delivered a 60% lift in university admin productivity, and spearheaded a design strategy that secured a $600M insurance contract. Leverages systems thinking and end‑to‑end delivery expertise to drive user‑centric growth, eliminate user friction, and deliver high-impact business outcomes.
              </Typography>
            </div>

            {/* Experience Section */}
            <div className="mb-6">
              <Typography as="h2" variant="bodySemibold" className="text-[#3C83F6] uppercase tracking-wider text-[13px] font-bold mb-4" style={{ fontWeight: 700 }}>
                Work Experience
              </Typography>

              {/* UX Designer | EXL */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-3 gap-1">
                  <span className="text-gray-900 text-[16px] font-bold">
                    UX Designer <span className="font-normal text-gray-500">| EXL</span>
                  </span>
                  <span className="text-gray-500 text-[13px] sm:text-[14px] font-medium">
                    2021 - 2026
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Dual-Audience Experience Restructuring */}
                  <div>
                    <Link
                      to="/insurance-company-website-redesign"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 text-[14px] italic mb-1.5 font-normal underline decoration-gray-300 underline-offset-2 hover:text-[#3C83F6] hover:decoration-[#3C83F6] transition-colors inline-flex items-center gap-1 group"
                    >
                      Dual-Audience Experience Restructuring
                      <Icon icon="material-symbols:arrow-outward" className="text-gray-400 group-hover:text-[#3C83F6] transition-colors text-[14px] inline-block" />
                    </Link>
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[13.5px] leading-relaxed">
                      <li>Spearheaded the design strategy for a <strong className="font-bold text-gray-950">winning RFP proof-of-concept</strong>, securing a contract with a <strong className="font-bold text-gray-950">$600M insurance provider</strong> and directly impacting the user experience for <strong className="font-bold text-gray-950">250K+ monthly users</strong>.</li>
                      <li>Aligned executive leadership behind a <strong className="font-bold text-gray-950">high-contrast visual standard</strong> (leveraged <strong className="font-bold text-gray-950">UX Pilot AI</strong> to accelerate designs) that lifted <strong className="font-bold text-gray-950">desktop performance by +37%</strong>, <strong className="font-bold text-gray-950">web best practices by +28%</strong>, and achieved <strong className="font-bold text-gray-950">100% accessibility compliance</strong>.</li>
                      <li>Re-architected the core website information architecture end-to-end, for homeowners and independent agents, with a <strong className="font-bold text-gray-950">symmetric navigation model</strong> that surfaced critical self-service paths, while <strong className="font-bold text-gray-950">reducing long-term CMS maintenance</strong>.</li>
                    </ul>
                  </div>

                  {/* Exposure Tool Architecture Centralization */}
                  <div>
                    <Link
                      to="/exposure-tool"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 text-[14px] italic mb-1.5 font-normal underline decoration-gray-300 underline-offset-2 hover:text-[#3C83F6] hover:decoration-[#3C83F6] transition-colors inline-flex items-center gap-1 group"
                    >
                      Exposure Tool Architecture Centralization
                      <Icon icon="material-symbols:arrow-outward" className="text-gray-400 group-hover:text-[#3C83F6] transition-colors text-[14px] inline-block" />
                    </Link>
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[13.5px] leading-relaxed">
                      <li>Directed end-to-end UX discovery and delivery across a <strong className="font-bold text-gray-950">4‑week engagement</strong>, <strong className="font-bold text-gray-950">without direct access to end users</strong>, producing validated design concepts to inform the product roadmap and enable the team to proceed with confidence.</li>
                      <li>Restructured the fragmented information architecture of a critical risk validation tool by collapsing <strong className="font-bold text-gray-950">3 redundant data views</strong> into a <strong className="font-bold text-gray-950">unified master-detail framework</strong>, <strong className="font-bold text-gray-950">eliminating cognitive re-mapping</strong> across disparate data models.</li>
                      <li><strong className="font-bold text-gray-950">Eliminated dual-save ambiguity</strong> and <strong className="font-bold text-gray-950">stacked-row cognitive friction</strong> across complex financial datasets by designing a <strong className="font-bold text-gray-950">unified high-density table framework</strong> and a <strong className="font-bold text-gray-950">session-commit model</strong>.</li>
                    </ul>
                  </div>

                  {/* Loan App Experience Optimization */}
                  <div>
                    <Link
                      to="/loan-app-experience-optimization"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 text-[14px] italic mb-1.5 font-normal underline decoration-gray-300 underline-offset-2 hover:text-[#3C83F6] hover:decoration-[#3C83F6] transition-colors inline-flex items-center gap-1 group"
                    >
                      Loan App Experience Optimization
                      <Icon icon="material-symbols:arrow-outward" className="text-gray-400 group-hover:text-[#3C83F6] transition-colors text-[14px] inline-block" />
                    </Link>
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[13.5px] leading-relaxed">
                      <li>Streamlined the loan application mobile app for <strong className="font-bold text-gray-950">16M+ customers</strong> in <strong className="font-bold text-gray-950">4 weeks</strong> by <strong className="font-bold text-gray-950">reducing friction 36%</strong>, optimizing the primary digital channel for pre-approved customers: <strong className="font-bold text-gray-950">80% of digital installment loan volume</strong>.</li>
                      <li><strong className="font-bold text-gray-950">Reduced interaction cost</strong>, <strong className="font-bold text-gray-950">improved funnel conversion</strong> and elevated visual craft by applying behavioral design principles: replacing multi-tap dropdowns with dynamic sliders for <strong className="font-bold text-gray-950">real-time rate updates</strong>.</li>
                      <li><strong className="font-bold text-gray-950">Sustained user momentum</strong> and <strong className="font-bold text-gray-950">reduced abandonment risk</strong> by introducing progress indicators and milestone illustrations at <strong className="font-bold text-gray-950">3 key completion points</strong> throughout the application flow.</li>
                    </ul>
                  </div>

                  {/* Centralizing Enterprise CSR Reporting and Analytics */}
                  <div>
                    <p className="text-gray-900 text-[14px] italic mb-1.5 font-normal">
                      Centralizing Enterprise CSR Reporting and Analytics
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[13.5px] leading-relaxed">
                      <li>Spearheaded the end-to-end design strategy to consolidate cross-departmental data workflows into a <strong className="font-bold text-gray-950">centralized platform architecture</strong>, translating siloed operational pain points into a <strong className="font-bold text-gray-950">unified information hierarchy</strong> and comprehensive user flows to <strong className="font-bold text-gray-950">establish organization-wide impact visibility</strong>.</li>
                      <li>Modularized enterprise tracking mechanisms by designing a scalable, customizable dashboard framework for <strong className="font-bold text-gray-950">real-time KPI and budget tracking</strong>, integrated with a multi-variable data visualization tool that enabled executive filtering across regions to <strong className="font-bold text-gray-950">accelerate strategic decision-making</strong>.</li>
                      <li>Championed collaborative prototype testing and feedback sessions with departmental leaders to <strong className="font-bold text-gray-950">de-risk feature usability</strong> and aligning cross-functional requirements with engineering feasibility to drive execution.</li>
                    </ul>
                  </div>

                  {/* Admissions Process Acceleration */}
                  <div>
                    <p className="text-gray-900 text-[14px] italic mb-1.5 font-normal">
                      Admissions Process Acceleration
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[13.5px] leading-relaxed">
                      <li><strong className="font-bold text-gray-950">Boosted admissions counselor productivity by 60%</strong> (from 16 to 25 applications daily) by designing an automated transfer credit evaluation system with a rules engine <strong className="font-bold text-gray-950">eliminating manual cross-referencing and reducing error</strong>.</li>
                      <li><strong className="font-bold text-gray-950">Simplified evaluation workflow</strong> by architecting a platform that automatically mapped transfer credits to coursework, allowing counselors to focus on exceptions requiring expert review rather than repetitive manual tasks.</li>
                    </ul>
                  </div>

                  {/* Accelerating Targeted Lead Generation */}
                  <div>
                    <p className="text-gray-900 text-[14px] italic mb-1.5 font-normal">
                      Accelerating Targeted Lead Generation
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[13.5px] leading-relaxed">
                      <li>Transformed complex lead-generation workflows for an enterprise marketing campaign tool into a 5-step guided segmentation engine, <strong className="font-bold text-gray-950">resolving cognitive overload</strong> and <strong className="font-bold text-gray-950">unblocking multi-channel deployment for marketers</strong>.</li>
                      <li>Integrated dynamic data visualizations and real-time calculation feedback loops into the workflow, enabling users to instantly evaluate population changes and <strong className="font-bold text-gray-950">define target segments with high confidence</strong>.</li>
                      <li>Drove discovery-to-delivery strategy, leveraging AI-driven research in Copilot to translate multi-layered filtering criteria into high-confidence publishing workflows that <strong className="font-bold text-gray-950">eliminated user friction and elevated brand trust</strong>.</li>
                    </ul>
                  </div>

                  {/* Untethering Diners From Peak Restaurant Lines (personal project) */}
                  <div>
                    <div className="mb-1.5 flex flex-wrap items-baseline gap-x-1.5">
                      <Link
                        to="/ramen-nagi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 text-[14px] italic font-normal underline decoration-gray-300 underline-offset-2 hover:text-[#3C83F6] hover:decoration-[#3C83F6] transition-colors inline-flex items-center gap-1 group"
                      >
                        Untethering Diners From Peak Restaurant Lines
                        <Icon icon="material-symbols:arrow-outward" className="text-gray-400 group-hover:text-[#3C83F6] transition-colors text-[14px] inline-block" />
                      </Link>
                      <span className="text-gray-900 text-[14px] italic font-normal">
                        (personal project)
                      </span>
                    </div>
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[13.5px] leading-relaxed">
                      <li>Formulated a dual-stream access framework bifurcating restaurant throughput into a 30% advance-reservation model and a 70% geofenced virtual queue, utilizing Google Gemini to pressure-test service logic and eliminate a critical check-in bypass bug to <strong className="font-bold text-gray-950">untether foot traffic from 2+ hour physical wait lines</strong>.</li>
                      <li>Engineered a commitment-queuing interaction model using Figma AI to implement transparent order-lock thresholds and QR arrival triggers that <strong className="font-bold text-gray-950">prevent ghost queue entries while eliminating premature kitchen waste</strong>.</li>
                      <li>Accelerated cross-functional validation from problem discovery to a <strong className="font-bold text-gray-950">functional React Native prototype in 2 weeks</strong>, translating high-fidelity mockups into working code using Google Antigravity.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Front-end Developer | EXL */}
              <div className="mt-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-3 gap-1">
                  <span className="text-gray-900 text-[16px] font-bold">
                    Front-end Developer <span className="font-normal text-gray-500">| EXL</span>
                  </span>
                  <span className="text-gray-500 text-[13px] sm:text-[14px] font-medium">
                    2020 - 2021
                  </span>
                </div>

                <div>
                  <p className="text-gray-900 text-[14px] italic mb-1.5 font-normal">
                    Transaction Ledger Centralization
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[13.5px] leading-relaxed">
                    <li><strong className="font-bold text-gray-950">Improved data-entry accuracy</strong> and enabled <strong className="font-bold text-gray-950">real-time transaction visibility</strong> by building a React ledger application; translated mockups into production UI while reducing defects through proactive engineering and QA collaboration.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-6">
              <Typography as="h2" variant="bodySemibold" className="text-[#3C83F6] uppercase tracking-wider text-[13px] font-bold mb-3" style={{ fontWeight: 700 }}>
                Skills
              </Typography>
              
              <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[13.5px] leading-relaxed">
                <li><strong className="font-bold text-gray-950">Design:</strong> Product Design, UX/UI, Interaction Design, User Research, Design Systems (Style Guides, Components), Information Architecture, Data Visualization, Usability Testing, Prototyping, User Flows, Wireframing, Visual Design.</li>
                <li><strong className="font-bold text-gray-950">AI Tools:</strong> Gemini, ChatGPT, Claude, UX Pilot, Open Design, Google Antigravity.</li>
                <li><strong className="font-bold text-gray-950">Toolkit:</strong> Figma, FigJam, Photoshop, JIRA, ReactJS, JavaScript, HTML/CSS, Drupal.</li>
                <li><strong className="font-bold text-gray-950">Methods & Process:</strong> User-Centered Design, Agile/SCRUM, Persona Development, User Journey Mapping, Analytical Problem Solving, Cross-functional & Cross-cultural Collaboration.</li>
              </ul>
            </div>

            {/* Education Section */}
            <div>
              <Typography as="h2" variant="bodySemibold" className="text-[#3C83F6] uppercase tracking-wider text-[13px] font-bold mb-3" style={{ fontWeight: 700 }}>
                Education & Certification
              </Typography>

              <div className="space-y-3 text-[14px]">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-1 sm:gap-4">
                  <span className="text-gray-800">
                    <strong className="font-bold text-gray-950">Google UX Design Certification,</strong> Coursera
                  </span>
                  <span className="text-gray-500 font-medium flex-shrink-0 text-[13px] sm:text-[14px]">
                    2021
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-1 sm:gap-4">
                  <span className="text-gray-800">
                    <strong className="font-bold text-gray-950">Rochester Institute of Technology,</strong> MS in Software Engineering
                  </span>
                  <span className="text-gray-500 font-medium flex-shrink-0 text-[13px] sm:text-[14px]">
                    2020
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-1 sm:gap-4">
                  <span className="text-gray-800">
                    <strong className="font-bold text-gray-950">Narsee Monjee Institute of Management Studies (NMIMS),</strong> BTech in Computer Engineering
                  </span>
                  <span className="text-gray-500 font-medium flex-shrink-0 text-[13px] sm:text-[14px]">
                    2017
                  </span>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Resume;
