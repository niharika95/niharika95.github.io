import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import HistoryBackLink from '../../components/HistoryBackLink';
import Typography from '../../components/Typography';
import { ChevronLeft } from 'lucide-react';
import { selectedWorksCatalog } from './selectedWorksCatalog';
import './SelectedWorks.css';

export default function SelectedWorksLayout({ children }) {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (!location.hash) return undefined;

    const imageId = decodeURIComponent(location.hash.slice(1));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frameId;
    let image;

    const scrollToImage = () => {
      const target = document.getElementById(imageId);
      if (!target) return;

      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });
      target.focus({ preventScroll: true });

      image = target.querySelector('img');
      if (image && !image.complete) {
        image.addEventListener('load', scrollToImage, { once: true });
      }
    };

    // Let the routed category render first, then override the app-level scroll-to-top.
    frameId = window.requestAnimationFrame(() => {
      frameId = window.requestAnimationFrame(scrollToImage);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      image?.removeEventListener('load', scrollToImage);
    };
  }, [location.hash, location.pathname]);

  return (
    <div className="bg-gradient-to-br from-white to-[#EBEBEB] min-h-screen text-gray-900">
      <HeaderV2 isInitialLoad={false} />
      
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 flex pt-10 pb-32">
        <aside className="hidden lg:block w-[180px] flex-shrink-0 sticky top-[130px] self-start">
          <nav className="flex flex-col gap-[40px]">
            <HistoryBackLink className="back-link-group inline-flex items-center text-gray-500 transition-colors duration-200 gap-1 font-ibm-plex text-base font-medium -ml-1 no-underline hover:text-gray-900">
              <ChevronLeft size={20} className="icon-solid-hover transition-colors duration-200" />
              <Typography as="span" variant="smallLight" className="shimmer-text">Home</Typography>
            </HistoryBackLink>
          </nav>
        </aside>

        <main className="w-full max-w-[720px] mx-auto lg:ml-20 xl:ml-32">
          <Typography as="h1" variant="h2Regular" className="page-title">
            Selected works
          </Typography>


          <nav className="selected-works-subnav">
            {selectedWorksCatalog.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`selected-works-subnav-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Typography as="span" variant="bodyRegular" className="subnav-text">
                    {item.label}
                  </Typography>
                </Link>
              );
            })}
          </nav>

          <div className="selected-works-divider" />

          <div className="selected-works-content">
            {children}
          </div>

        </main>
      </div>
    </div>
  );
}
