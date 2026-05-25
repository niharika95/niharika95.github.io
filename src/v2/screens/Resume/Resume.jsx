import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import Typography from '../../components/Typography/Typography';
import { trackExternalLink } from '../../utils/analytics';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';
import resumePDF from '../../assets/documents/Resume_Niharika Dalal_Product Designer.pdf';

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
            <Link to="/v2" className="back-link-group inline-flex items-center text-gray-500 transition-colors duration-200 gap-1 font-ibm-plex text-base font-medium -ml-1">
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
            className="lg:hidden inline-flex items-center justify-center gap-2 font-ibm-plex text-base font-medium mb-6 py-3 px-6 bg-gray-900 text-white rounded-full transition-transform hover:scale-[1.02] shadow-sm w-full no-underline"
          >
            <Icon icon="material-symbols:download" className="text-xl" />
            <span>Download Resume PDF</span>
          </a>

          {/* Responsive HTML Resume Sheet */}
          <div className="w-full bg-white rounded-[24px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[#E5E7EB] px-4 py-6 md:p-12 text-left font-ibm-plex text-[#1A1A1A]">
            
            {/* Header Block */}
            <div className="pb-6 mb-6 border-b border-[#F3F4F6]">
              <h1 className="text-[#2F63CF] text-[28px] md:text-[32px] font-bold tracking-tight mb-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                Niharika Dalal
              </h1>
              <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1.5 text-gray-800 text-[14px] font-medium leading-relaxed">
                <span className="font-bold text-gray-950 mr-1">Product Designer | San Jose, CA</span>
                <span className="hidden sm:inline text-gray-300">•</span>
                <a href="https://niharika95.github.io" className="text-gray-800 underline hover:text-[#2F63CF] transition-colors">niharika95.github.io</a>
                <span className="hidden sm:inline text-gray-300">•</span>
                <a href="https://www.linkedin.com/in/niharikadalal" target="_blank" rel="noopener noreferrer" className="text-gray-800 underline hover:text-[#2F63CF] transition-colors">in/niharikadalal</a>
                <span className="hidden sm:inline text-gray-300">•</span>
                <a href="mailto:niharika13dalal@gmail.com" className="text-gray-800 underline hover:text-[#2F63CF] transition-colors">niharika13dalal@gmail.com</a>
                <span className="hidden sm:inline text-gray-300">•</span>
                <span className="text-gray-800">585-729-3306</span>
              </div>
            </div>

            {/* Summary Section */}
            <div className="mb-6">
              <Typography as="h2" variant="bodySemibold" className="text-[#2F63CF] uppercase tracking-wider text-[13px] font-bold mb-3" style={{ fontWeight: 700 }}>
                Summary
              </Typography>
              <Typography as="p" variant="bodyRegular" className="text-gray-800 leading-[1.8]" style={{ fontSize: '14px' }}>
                <strong className="font-bold text-gray-950">5+ years asking "why" before "what"</strong> and simplifying workflows across finance, insurance, and education. <strong className="font-bold text-gray-950">Former developer</strong> with technical fluency bridging design and engineering. <strong className="font-bold text-gray-950">Reduced loan app friction by 36%</strong>, and <strong className="font-bold text-gray-950">optimized conversion by ~20%</strong> across projects. Seeking product design roles where <strong className="font-bold text-gray-950">systems thinking</strong> drives measurable outcomes.
              </Typography>
            </div>

            {/* Experience Section */}
            <div className="mb-6">
              <Typography as="h2" variant="bodySemibold" className="text-[#2F63CF] uppercase tracking-wider text-[13px] font-bold mb-4" style={{ fontWeight: 700 }}>
                Work Experience
              </Typography>

              {/* UX Designer | EXL */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-2 gap-1">
                  <span className="text-gray-900 text-[16px] font-bold">
                    UX Designer <span className="font-normal text-gray-500">| EXL</span>
                  </span>
                  <span className="text-gray-500 text-[13px] sm:text-[14px] font-medium">
                    2021 - Present
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-gray-900 text-[14px] italic mb-1.5 font-normal">
                      Marketing Website Redesign (Client: Insurance Company)
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[13.5px] leading-relaxed">
                      <li>Spearheaded redesign strategy for a <strong className="font-bold text-gray-950">winning RFP proof-of-concept</strong>, securing a contract with a <strong className="font-bold text-gray-950">$600M insurance provider</strong> impacting the user experience for <strong className="font-bold text-gray-950">250K+ users</strong> across a responsive customer-facing platform.</li>
                      <li>Elevated site performance through strategic UX audit (<strong className="font-bold text-gray-950">56 violations identified</strong>) and competitive analysis of <strong className="font-bold text-gray-950">8 competitors</strong>, architecting a scalable design system with <strong className="font-bold text-gray-950">30+ reusable components</strong> across <strong className="font-bold text-gray-950">40+ pages</strong>; accelerated design by leveraging <strong className="font-bold text-gray-950">AI tools</strong> (ChatGPT, UX Pilot, Photoshop’s AI) for rapid ideation and image optimization.</li>
                      <li>Achieved measurable post-launch improvements: <strong className="font-bold text-gray-950">+37% desktop performance</strong>, <strong className="font-bold text-gray-950">+28% best practices</strong>, and <strong className="font-bold text-gray-950">90+ accessibility score</strong>.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-900 text-[14px] italic mb-1.5 font-normal">
                      Loan App Experience Optimization (Client: Global Bank)
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[13.5px] leading-relaxed">
                      <li><strong className="font-bold text-gray-950">Streamlined loan application</strong> for <strong className="font-bold text-gray-950">16M+ customers</strong> by <strong className="font-bold text-gray-950">reducing friction 36% (11 to 7 screens)</strong>, optimizing the primary digital channel for pre-approved customers representing <strong className="font-bold text-gray-950">80% of digital installment loan volume</strong>.</li>
                      <li><strong className="font-bold text-gray-950">Reduced interaction cost</strong> and <strong className="font-bold text-gray-950">enabled instant loan rate comparison</strong> by replacing multi-tap dropdowns with dynamic sliders that <strong className="font-bold text-gray-950">provided real-time rate updates</strong> based on term selection.</li>
                      <li><strong className="font-bold text-gray-950">Sustained user momentum</strong> and <strong className="font-bold text-gray-950">reduced abandonment risk</strong> by introducing progress indicators and milestone illustrations at <strong className="font-bold text-gray-950">3 key completion points</strong> throughout the application flow.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-900 text-[14px] italic mb-1.5 font-normal">
                      Admissions Process Acceleration (Client: Private University)
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[13.5px] leading-relaxed">
                      <li><strong className="font-bold text-gray-950">Boosted admissions counselor productivity by 60%</strong> (from 16 to 25 applications daily) by designing an <strong className="font-bold text-gray-950">automated transfer credit evaluation system</strong> with a rules engine eliminating manual cross-referencing and reducing human error.</li>
                      <li><strong className="font-bold text-gray-950">Simplified evaluation workflow</strong> by architecting a platform that <strong className="font-bold text-gray-950">automatically mapped transfer credits</strong> to coursework, allowing counselors to focus on exceptions requiring expert review rather than repetitive manual tasks.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Front-end Developer | EXL */}
              <div className="mt-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-2 gap-1">
                  <span className="text-gray-900 text-[16px] font-bold">
                    Front-end Developer <span className="font-normal text-gray-500">| EXL</span>
                  </span>
                  <span className="text-gray-500 text-[13px] sm:text-[14px] font-medium">
                    2020 - 2021
                  </span>
                </div>

                <div>
                  <p className="text-gray-900 text-[14px] italic mb-1.5 font-normal">
                    Transaction Ledger Centralization (Client: FinTech Company)
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[13.5px] leading-relaxed">
                    <li>Improved <strong className="font-bold text-gray-950">data-entry accuracy</strong> and enabled <strong className="font-bold text-gray-950">real-time transaction visibility</strong> by building a ReactJS ledger application; <strong className="font-bold text-gray-950">translated mockups into production UI</strong> while <strong className="font-bold text-gray-950">reducing defects</strong> through QA and engineering collaboration.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-6">
              <Typography as="h2" variant="bodySemibold" className="text-[#2F63CF] uppercase tracking-wider text-[13px] font-bold mb-3" style={{ fontWeight: 700 }}>
                Skills
              </Typography>
              
              <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[13.5px] leading-relaxed">
                <li><strong className="font-bold text-gray-950">Design & UX:</strong> Product Design, UX/UI Design, Interaction Design, User Research, Design Systems (Style Guides, Components), Information Architecture, Usability Testing, Prototyping, User Flows, Wireframing, Visual Design.</li>
                <li><strong className="font-bold text-gray-950">Tools & Tech:</strong> Figma, Adobe XD, Balsamiq, InVision, Photoshop, JIRA, ReactJS, JavaScript, HTML/CSS, Drupal, Tableau.</li>
                <li><strong className="font-bold text-gray-950">AI Tools:</strong> Gemini, ChatGPT, UX Pilot, Google Antigravity, Photoshop AI (Generative Fill and Expand), FigJam AI.</li>
                <li><strong className="font-bold text-gray-950">Methods & Process:</strong> User-Centered Design, Agile/SCRUM, Persona Development, User Journey Mapping, Analytical Problem Solving, Cross-functional & Cross-cultural Collaboration.</li>
              </ul>
            </div>

            {/* Education Section */}
            <div>
              <Typography as="h2" variant="bodySemibold" className="text-[#2F63CF] uppercase tracking-wider text-[13px] font-bold mb-3" style={{ fontWeight: 700 }}>
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
