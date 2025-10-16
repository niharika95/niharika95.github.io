import { Gutter } from '../../common';
import { Icon } from '@iconify/react';
import React from 'react';
import resumePDF from '../../assets/documents/Dalal, Niharika Resume.pdf';
import resumePNG from '../../assets/documents/resume.png';
import { trackExternalLink } from '../../utils/analytics';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';

function Resume() {
  // Track page view, scroll depth, and time on page
  useAnalytics('resume');
  useScrollTracking();
  useTimeTracking();

  return (
    <Gutter className="pt-[100px] mt-[100px] flex flex-col justify-center items-center mb-[100px]">
      <a
        href={resumePDF}
        download="Resume-NiharikaDalal.pdf"
        onClick={() => trackExternalLink('resume_download', resumePDF, 'Download Resume PDF', window.location.pathname)}
        className="flex items-center gap-[8px] font-normal text-[20px] bg-[var(--color-brand-primary)] text-white py-[8px] px-[16px] rounded-[4px] mb-[20px] no-underline cursor-pointer self-end"
      >
        <Icon icon="charm:download" />
        Download
      </a>
      <img
        src={resumePNG}
        alt="resume"
        className="w-[70%] border-2 border-[var(--color-brand-primary)] rounded-[8px] max-[600px]:w-full"
      />
    </Gutter>
  );
}

export default Resume;
