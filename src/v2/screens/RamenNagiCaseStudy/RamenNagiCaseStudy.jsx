import BackgroundShapes from './components/BackgroundShapes';
import Hero from './components/Hero';
import Impact from './components/Impact';
import AIAcceleration from './components/AIAcceleration';
import KeyTakeaways from './components/KeyTakeaways';
import WalkInFlow from './components/WalkInFlow';
import Problem from './components/Problem';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReservationFlow from './components/ReservationFlow';
import Solution from './components/Solution';
import WhyThisWorks from './components/WhyThisWorks';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import { ChevronLeft } from 'lucide-react';
import MoreCaseStudies from '../../components/MoreCaseStudies/MoreCaseStudies';

const RamenNagiCaseStudy = () => {
    const progressBarRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            if (progressBarRef.current) {
                progressBarRef.current.style.width = `${progress}%`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full overflow-x-hidden font-ibm-plex text-neutral-900 bg-white antialiased">
            {/* <div
                ref={progressBarRef}
                className="fixed top-0 left-0 h-[6px] bg-[#DC0411] z-[1000] origin-left cursor-pointer"
                style={{ width: '0%' }}
                onClick={scrollToTop}
                title="Back to Top"
            /> */}



            <div className="fixed inset-0 -z-10">
                <BackgroundShapes />
            </div>

            <HeaderV2 />

            <div className="w-full pt-8 px-[5vw] max-w-[1440px] mx-auto z-10 relative">
                <div className="max-w-[1160px] mx-auto px-5 w-full">
                    <Link to="/" className="back-link-group inline-flex items-center text-[#999] transition-colors duration-200 gap-1 font-ibm-plex text-base font-medium no-underline hover:text-neutral-900">
                        <ChevronLeft size={20} className="icon-solid-hover transition-colors duration-200" />
                        <span className="shimmer-text">Home</span>
                    </Link>
                </div>
            </div>

            <main className="w-full overflow-x-hidden">
                <Hero />
                <Problem />
                <Solution />
                <WhyThisWorks />
                <div className="bg-white">
                    <Impact />
                    <AIAcceleration />
                    <ReservationFlow />
                    <WalkInFlow />
                    <KeyTakeaways />
                    <div className="max-w-[1160px] mx-auto px-5 pb-32">
                        <MoreCaseStudies currentId="ramen" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RamenNagiCaseStudy;
