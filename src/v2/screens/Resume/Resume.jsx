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
import resumePDF from '../../assets/documents/Dalal, Niharika Resume.pdf';

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
          <div className="w-full bg-white rounded-[24px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[#E5E7EB] p-6 md:p-12 text-left font-ibm-plex text-[#1A1A1A]">
            
            {/* Header Block */}
            <div className="border-b border-[#F3F4F6] pb-6 mb-6">
              <Typography as="h1" variant="h3Medium" className="text-gray-900 font-bold tracking-tight mb-2" style={{ fontWeight: 700 }}>
                Niharika Dalal
              </Typography>
              <Typography as="p" variant="bodySemibold" className="text-gray-600 mb-4 font-normal" style={{ fontSize: '16px' }}>
                Product Designer | San Jose, CA
              </Typography>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[#777] text-[14px]">
                <a href="https://niharika95.github.io" className="hover:text-gray-950 transition-colors duration-200 flex items-center gap-1.5 no-underline">
                  <Icon icon="material-symbols:language" className="text-lg" />
                  <span>niharika95.github.io</span>
                </a>
                <a href="https://www.linkedin.com/in/niharikadalal" target="_blank" rel="noopener noreferrer" className="hover:text-gray-950 transition-colors duration-200 flex items-center gap-1.5 no-underline">
                  <Icon icon="mdi:linkedin" className="text-lg" />
                  <span>in/niharikadalal</span>
                </a>
                <a href="mailto:niharika13dalal@gmail.com" className="hover:text-gray-950 transition-colors duration-200 flex items-center gap-1.5 no-underline">
                  <Icon icon="material-symbols:mail-outline" className="text-lg" />
                  <span>niharika13dalal@gmail.com</span>
                </a>
                <span className="flex items-center gap-1.5">
                  <Icon icon="material-symbols:call-outline" className="text-lg" />
                  <span>585-729-3306</span>
                </span>
              </div>
            </div>

            {/* Summary Section */}
            <div className="mb-6">
              <Typography as="h2" variant="bodySemibold" className="text-gray-900 uppercase tracking-wider text-[13px] font-bold mb-3 border-b border-[#E5E7EB] pb-1.5" style={{ fontWeight: 700 }}>
                Summary
              </Typography>
              <Typography as="p" variant="bodyRegular" className="text-gray-800 leading-[1.8]" style={{ fontSize: '15px' }}>
                5+ years asking "why" before "what" and simplifying complex workflows across finance, insurance, and education. Former developer with technical fluency bridging design and engineering. Reduced loan app friction by 36%, and optimized conversion by ~20% across projects. Seeking product design roles where systems thinking drives measurable outcomes.
              </Typography>
            </div>

            {/* Experience Section */}
            <div className="mb-6">
              <Typography as="h2" variant="bodySemibold" className="text-gray-900 uppercase tracking-wider text-[13px] font-bold mb-4 border-b border-[#E5E7EB] pb-1.5" style={{ fontWeight: 700 }}>
                Work Experience
              </Typography>

              {/* UX Designer | EXL */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                  <Typography as="h3" variant="bodySemibold" className="text-gray-900 text-[17px] font-bold">
                    UX Designer <span className="font-light text-gray-500">| EXL</span>
                  </Typography>
                  <Typography as="span" variant="smallRegular" className="text-gray-500 font-medium mt-1 sm:mt-0">
                    2021 - Present
                  </Typography>
                </div>

                <div className="space-y-5">
                  <div>
                    <Typography as="h4" variant="bodySemibold" className="text-gray-900 text-[15px] mb-1.5 font-semibold">
                      Marketing Website Redesign (Client: Insurance Company)
                    </Typography>
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[14px] leading-relaxed">
                      <li>Spearheaded redesign strategy for a winning RFP proof-of-concept, securing a contract with a $600M insurance provider impacting the user experience for 250K+ users across a responsive customer-facing platform.</li>
                      <li>Elevated site performance through strategic UX audit (56 violations identified) and competitive analysis of 8 competitors, architecting a scalable design system with 30+ reusable components across 40+ pages; accelerated design by leveraging AI tools (ChatGPT, UX Pilot, Photoshop’s AI) for rapid ideation and image optimization.</li>
                      <li>Achieved measurable post-launch improvements: +37% desktop performance, +28% best practices, and 90+ accessibility score.</li>
                    </ul>
                  </div>

                  <div>
                    <Typography as="h4" variant="bodySemibold" className="text-gray-900 text-[15px] mb-1.5 font-semibold">
                      Loan App Experience Optimization (Client: Global Bank)
                    </Typography>
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[14px] leading-relaxed">
                      <li>Streamlined loan application for 16M+ customers by reducing friction 36% (11 to 7 screens), optimizing the primary digital channel for pre-approved customers representing 80% of digital installment loan volume.</li>
                      <li>Reduced interaction cost and enabled instant loan rate comparison by replacing multi-tap dropdowns with dynamic sliders that provided real-time rate updates based on term selection.</li>
                      <li>Sustained user momentum and reduced abandonment risk by introducing progress indicators and milestone illustrations at 3 key completion points throughout the application flow.</li>
                    </ul>
                  </div>

                  <div>
                    <Typography as="h4" variant="bodySemibold" className="text-gray-900 text-[15px] mb-1.5 font-semibold">
                      Admissions Process Acceleration (Client: Private University)
                    </Typography>
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[14px] leading-relaxed">
                      <li>Boosted admissions counselor productivity by 60% (from 16 to 25 applications daily) by designing an automated transfer credit evaluation system with a rules engine eliminating manual cross-referencing and reducing human error.</li>
                      <li>Simplified evaluation workflow by architecting a platform that automatically mapped transfer credits to coursework, allowing counselors to focus on exceptions requiring expert review rather than repetitive manual tasks.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Front-end Developer | EXL */}
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                  <Typography as="h3" variant="bodySemibold" className="text-gray-900 text-[17px] font-bold">
                    Front-end Developer <span className="font-light text-gray-500">| EXL</span>
                  </Typography>
                  <Typography as="span" variant="smallRegular" className="text-gray-500 font-medium mt-1 sm:mt-0">
                    2020 - 2021
                  </Typography>
                </div>

                <div>
                  <Typography as="h4" variant="bodySemibold" className="text-gray-900 text-[15px] mb-1.5 font-semibold">
                    Transaction Ledger Centralization (Client: FinTech Company)
                  </Typography>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-[14px] leading-relaxed">
                    <li>Improved data-entry accuracy and enabled real-time transaction visibility by building a ReactJS ledger application; translated mockups into production UI while reducing defects through QA and engineering collaboration.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-6">
              <Typography as="h2" variant="bodySemibold" className="text-gray-900 uppercase tracking-wider text-[13px] font-bold mb-3 border-b border-[#E5E7EB] pb-1.5" style={{ fontWeight: 700 }}>
                Skills
              </Typography>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-[14px]">
                <div>
                  <Typography as="p" variant="bodyRegular" className="text-gray-800 leading-relaxed mb-2" style={{ fontSize: '14px' }}>
                    <strong className="font-semibold text-gray-950">Design & UX:</strong> Product Design, UX/UI Design, Interaction Design, User Research, Design Systems (Style Guides, Components), Information Architecture, Usability Testing, Prototyping, User Flows, Wireframing, Visual Design.
                  </Typography>
                  <Typography as="p" variant="bodyRegular" className="text-gray-800 leading-relaxed" style={{ fontSize: '14px' }}>
                    <strong className="font-semibold text-gray-950">Tools & Tech:</strong> Figma, Adobe XD, Balsamiq, InVision, Photoshop, JIRA, ReactJS, JavaScript, HTML/CSS, Drupal, Tableau.
                  </Typography>
                </div>
                <div>
                  <Typography as="p" variant="bodyRegular" className="text-gray-800 leading-relaxed mb-2" style={{ fontSize: '14px' }}>
                    <strong className="font-semibold text-gray-950">AI Tools:</strong> Gemini, ChatGPT, UX Pilot, Google Antigravity, Photoshop AI (Generative Fill and Expand), FigJam AI.
                  </Typography>
                  <Typography as="p" variant="bodyRegular" className="text-gray-800 leading-relaxed" style={{ fontSize: '14px' }}>
                    <strong className="font-semibold text-gray-950">Methods & Process:</strong> User-Centered Design, Agile/SCRUM, Persona Development, User Journey Mapping, Analytical Problem Solving, Cross-functional & Cross-cultural Collaboration.
                  </Typography>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <Typography as="h2" variant="bodySemibold" className="text-gray-900 uppercase tracking-wider text-[13px] font-bold mb-3 border-b border-[#E5E7EB] pb-1.5" style={{ fontWeight: 700 }}>
                Education & Certification
              </Typography>

              <div className="space-y-3 text-[14px]">
                <div className="flex justify-between items-start">
                  <Typography as="p" variant="bodyRegular" className="text-gray-800" style={{ fontSize: '14px' }}>
                    <strong className="font-semibold text-gray-950">Google UX Design Certification</strong>, Coursera
                  </Typography>
                  <Typography as="span" variant="smallRegular" className="text-gray-500 font-medium flex-shrink-0 ml-4">
                    2021
                  </Typography>
                </div>

                <div className="flex justify-between items-start">
                  <Typography as="p" variant="bodyRegular" className="text-gray-800" style={{ fontSize: '14px' }}>
                    <strong className="font-semibold text-gray-950">Rochester Institute of Technology</strong>, MS in Software Engineering
                  </Typography>
                  <Typography as="span" variant="smallRegular" className="text-gray-500 font-medium flex-shrink-0 ml-4">
                    2020
                  </Typography>
                </div>

                <div className="flex justify-between items-start">
                  <Typography as="p" variant="bodyRegular" className="text-gray-800" style={{ fontSize: '14px' }}>
                    <strong className="font-semibold text-gray-950">Narsee Monjee Institute of Management Studies (NMIMS)</strong>, BTech in Computer Engineering
                  </Typography>
                  <Typography as="span" variant="smallRegular" className="text-gray-500 font-medium flex-shrink-0 ml-4">
                    2017
                  </Typography>
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
