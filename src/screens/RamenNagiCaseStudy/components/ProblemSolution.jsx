import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ProblemSolution = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);

    const handleDrag = (event, info) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
            const percentage = (x / rect.width) * 100;
            setSliderPosition(percentage);
        }
    };

    // Mobile touch support handled by framer gesture helper if needed, 
    // but for simple demo, we will use a dedicated drag logic or simplified mouse move
    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        setSliderPosition((x / rect.width) * 100);
    }

    return (
        <section className="py-[15vh] px-[5vw] max-w-[1440px] mx-auto w-full">
            <div className="mb-16">
                <span className="text-[#DC0411] font-bold">THE TRANSFORMATION</span>
                <h2 className="max-w-[600px] mt-4 text-[clamp(2rem,5vw,4rem)] font-bold">Bringing the Heat to Digital</h2>
            </div>

            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                className="relative w-full h-[80vh] bg-[#eee] rounded-[20px] overflow-hidden cursor-col-resize"
            >
                {/* AFTER Image (Background) */}
                <div className="absolute inset-0 bg-[#111] flex items-center justify-center text-white">
                    {/* Placeholder for After Design */}
                    <div className="text-center">
                        <h3 className="text-[3rem] text-[#DC0411]">AFTER</h3>
                        <p>Immersive, Visual, Fast</p>
                        {/* Mock UI Element */}
                        <div className="w-[300px] h-[500px] bg-[#222] mx-auto my-5 rounded-[20px] border border-[#333]"></div>
                    </div>
                </div>

                {/* BEFORE Image (Foreground - Clipped) */}
                <div
                    className="absolute inset-0 bg-white flex items-center justify-center text-black"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    {/* Placeholder for Before Design */}
                    <div className="text-center">
                        <h3 className="text-[3rem] text-[#999]">BEFORE</h3>
                        <p>Cluttered, Text-Heavy</p>
                        {/* Mock UI Element */}
                        <div className="w-[300px] h-[500px] bg-[#ddd] mx-auto my-5 rounded-[20px] border border-[#ccc]"></div>
                    </div>
                </div>

                {/* Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-[#DC0411] z-10"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#DC0411] rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-ml-3">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
