import BackgroundShapes from './components/BackgroundShapes';
import Hero from './components/Hero';
import Impact from './components/Impact';
import AIAcceleration from './components/AIAcceleration';
import KeyTakeaways from './components/KeyTakeaways';
import WalkInFlow from './components/WalkInFlow';
import Problem from './components/Problem';
import React, { useState } from 'react';
import ReservationFlow from './components/ReservationFlow';
import Solution from './components/Solution';
import WhyThisWorks from './components/WhyThisWorks';

const RamenNagiCaseStudy = () => {
    const [showGrid, setShowGrid] = useState(true);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="w-full overflow-x-hidden font-sans text-neutral-900 bg-white antialiased">
            <div
                className="fixed top-0 left-0 right-0 h-[6px] bg-[#DC0411] z-[1000] origin-left cursor-pointer"
                onClick={scrollToTop}
                title="Back to Top"
            />

            {/* Grid Toggle Button */}
            <button
                onClick={() => setShowGrid(!showGrid)}
                className="fixed bottom-5 left-5 z-[10000] px-4 py-2 bg-red-600 text-white rounded-full shadow-lg text-sm font-bold hover:bg-red-700 transition-colors"
                style={{ fontFamily: 'sans-serif' }}
            >
                {showGrid ? 'Hide Grid' : 'Show Grid'}
            </button>

            {/* Temporary Grid Overlay */}
            {showGrid && (
                <div className="fixed inset-0 z-[9999] pointer-events-none w-full h-full">
                    <div className="max-w-[1160px] mx-auto w-full h-full grid grid-cols-12 gap-5 px-5">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="bg-[#FF0000] opacity-10 h-full w-full"></div>
                        ))}
                    </div>
                </div>
            )}

            <div className="fixed inset-0 -z-10">
                <BackgroundShapes />
            </div>

            <main className="w-full overflow-x-hidden">
                <Hero />
                <Problem />
                <Solution />
                <WhyThisWorks />
                <div className="bg-white py-[5vh]">
                    <Impact />
                    <AIAcceleration />
                    <ReservationFlow />
                    <WalkInFlow />
                    <KeyTakeaways />
                </div>
            </main>
        </div>
    );
};

export default RamenNagiCaseStudy;
