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

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 flex pt-10 pb-32">
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
        <main className="w-full max-w-[800px] mx-auto lg:ml-[60px] xl:ml-[100px] flex justify-center items-start">
          <img
            src="/v2/images/home/resume.png"
            alt="Niharika Dalal Resume"
            className="w-full h-auto"
          />
        </main>
      </div>
    </div>
  );
}

export default Resume;
