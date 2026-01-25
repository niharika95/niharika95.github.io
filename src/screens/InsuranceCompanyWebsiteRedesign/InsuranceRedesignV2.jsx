import { AnimatePresence, motion, useAnimation, useInView, useMotionValue, useTransform } from 'framer-motion';
import { DecorativeDots, StrokeAnimation } from '../../common';

import { Icon } from '@iconify/react';
import React from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';

// --- Shared Components ---

const FadeIn = ({ children, delay = 0, className = '', direction = 'up' }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const controls = useAnimation();

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
            x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
        },
        visible: { opacity: 1, y: 0, x: 0 },
    };

    React.useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay, type: "spring", stiffness: 50 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const ContentContainer = ({ children, className }) => (
    <div className={`max-w-[1440px] mx-auto px-5 lg:px-[100px] ${className || ''}`}>
        {children}
    </div>
);

// --- Before/After Slider Component ---
const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
    const [sliderPosition, setSliderPosition] = React.useState(50);
    const [isDragging, setIsDragging] = React.useState(false);
    const containerRef = React.useRef(null);

    const handleMove = (event) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;

        setSliderPosition(percentage);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    React.useEffect(() => {
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', handleMove);
        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleMove);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[500px] overflow-hidden rounded-xl cursor-ew-resize select-none"
            onMouseDown={handleMouseDown}
        >
            {/* After Image (Background) */}
            <img
                src={afterImage}
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
                draggable="false"
            />

            {/* Before Image (Clipped) */}
            <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
                <img
                    src={beforeImage}
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable="false"
                />
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-lg flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center -ml-[14px]">
                    <Icon icon="mdi:unfold-more-vertical" className="rotate-90 text-black text-xl" />
                </div>
            </div>

            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 text-sm rounded backdrop-blur-sm">Before (Wireframe)</div>
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 text-sm rounded backdrop-blur-sm">After (Final)</div>
        </div>
    );
};


const InsuranceRedesignV2 = () => {
    useAnalytics('project_detail', { projectName: 'insurance-company-website-redesign-v2', projectType: 'professional' });
    useScrollTracking();
    useTimeTracking();

    return (
        <div className='bg-[#121212] text-white font-sans min-h-screen selection:bg-[#A10026] selection:text-white'>

            {/* 1. Hero Section */}
            <header className='w-full pt-20 pb-16 relative overflow-hidden'>
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#A10026]/10 to-transparent pointer-events-none" />
                <ContentContainer>
                    <div className="max-w-4xl relative z-10">
                        <FadeIn>
                            <h1 className='font-playfair text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8'>
                                Modernizing a Legacy Insurer:<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#A10026]">A 0→1 Redesign</span>
                            </h1>
                            <p className='font-mulish text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-12'>
                                Transforming a high-friction legacy website into a scalable growth engine through a 0→1 redesign to support a <strong>$1B revenue goal</strong>, driving a <span className="text-[#FF4D4D] font-bold">37% performance boost</span>.
                            </p>

                            {/* Role & Team Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-800 pt-8">
                                <div>
                                    <h3 className="text-sm uppercase tracking-widest text-[#A10026] font-bold mb-2">Role</h3>
                                    <p className="font-playfair text-xl">UX/UI Designer, 10 months</p>
                                </div>
                                <div>
                                    <h3 className="text-sm uppercase tracking-widest text-[#A10026] font-bold mb-2">Team</h3>
                                    <p className="font-mulish text-gray-400">Product Owner, Product Manager, 2 UX/UI Designers, Content Writer, Webflow Developer, Drupal Developer</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </ContentContainer>
            </header>

            {/* 2. Standing Out in the Pitch - Large Visual Section */}
            <section className="py-20 bg-[#1A1A1A] relative">
                <ContentContainer>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <img
                                src="/insurance-company-website-design/hero.png"
                                alt="Pitch Concept"
                                className="rounded-lg shadow-2xl skew-y-1 transform transition-all duration-700 hover:skew-y-0"
                            />
                        </FadeIn>
                        <FadeIn delay={0.2} direction="left">
                            <h2 className="font-playfair text-3xl font-bold mb-6">Standing Out in the Pitch</h2>
                            <p className="font-mulish text-lg text-gray-300 leading-relaxed mb-6">
                                In a competitive selection process involving multiple agencies, our proof of concept for the landing page was chosen for its bold, forward-thinking vision.
                            </p>
                            <p className="font-mulish text-lg text-gray-300 leading-relaxed border-l-2 border-[#A10026] pl-6 italic">
                                This successful pitch secured us the 10-month contract to lead the complete website redesign.
                            </p>
                        </FadeIn>
                    </div>
                </ContentContainer>
            </section>

            {/* 3. Business Problems - The Grid */}
            <section className="py-24">
                <ContentContainer>
                    <FadeIn className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-playfair text-4xl font-bold mb-6">Business Problems</h2>
                        <p className="font-mulish text-xl text-gray-300">
                            They wanted growth, but their site was leaking revenue. We needed to prove UX could stop the bleeding.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            { title: "Outdated & inconsistent design", icon: "mdi:palette-swatch-outline" },
                            { title: "Poor scanability", icon: "mdi:eye-off-outline" },
                            { title: "Poor mobile experience", icon: "mdi:cellphone-off" },
                            { title: "Low conversions", icon: "mdi:trending-down" },
                            { title: "Inefficient CMS", icon: "mdi:database-alert-outline" }
                        ].map((problem, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1} className="bg-[#1E1E1E] p-6 rounded-xl border border-gray-800 flex flex-col items-center text-center hover:bg-[#252525] transition-colors">
                                <Icon icon={problem.icon} className="text-3xl text-[#FF4D4D] mb-4" />
                                <h3 className="font-mulish font-bold text-sm text-gray-200">{problem.title}</h3>
                            </FadeIn>
                        ))}
                    </div>
                </ContentContainer>
            </section>

            {/* 4. The Evidence - With Quote */}
            <section className="py-24 bg-[#1A1A1A] border-y border-gray-800">
                <ContentContainer>
                    <div className="grid md:grid-cols-2 gap-16">
                        <FadeIn>
                            <h2 className="font-playfair text-3xl font-bold mb-6 text-[#FF4D4D]">The Evidence</h2>
                            <p className="font-mulish text-xl text-white mb-8">
                                We audited every web page on their site, identifying <span className="text-[#FF4D4D] font-bold text-4xl align-middle mx-2">56</span> critical usability issues that were killing conversion.
                            </p>
                            <img
                                src="/insurance-company-website-design/foundation.png"
                                alt="Audit Evidence"
                                className="rounded-lg opacity-50 hover:opacity-100 transition-opacity duration-500"
                            />
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="bg-[#121212] p-10 rounded-2xl relative">
                                <Icon icon="mdi:format-quote-open" className="text-6xl text-[#2a2a2a] absolute top-4 left-4" />
                                <blockquote className="relative z-10 font-playfair text-xl leading-relaxed text-gray-300">
                                    "The new site must be visually striking, bold, and impactful, with seamless functionality and exceptional B2B and B2C content. We aim to create an enjoyable experience where customers, independent agents, prospective customers, employees and potential investors can easily find what they need and accomplish their tasks with minimal efforts and few clicks."
                                </blockquote>
                                <footer className="mt-6 text-right font-bold text-[#FF4D4D] tracking-widest uppercase text-sm">— Client</footer>
                            </div>
                        </FadeIn>
                    </div>
                </ContentContainer>
            </section>

            {/* 5. Finding the Vibe & False Start (Narrative Journey) */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#A10026]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <ContentContainer className="relative z-10 max-w-4xl">
                    <FadeIn>
                        <h2 className="font-playfair text-4xl font-bold mb-8 text-center">Finding the Vibe</h2>
                        <p className="font-mulish text-xl text-gray-300 text-center mb-12">
                            We didn't start with pixels; we started with brand sentiment. We explored four distinct themes of Friendly, Modern, Futuristic, and Playful.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2} className="mb-20">
                        <div className="bg-[#1E1E1E] border-l-4 border-[#A10026] p-8 rounded-r-xl">
                            <p className="font-mulish text-lg text-gray-300">
                                Marketing found 'Friendly' too soft and 'Modern' too cold. We aligned on a <strong>Light Hybrid</strong> of the two—a clean, approachable direction that balanced warmth with professionalism.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4} className="text-center">
                        <div className="inline-block p-4 rounded-full bg-[#FF4D4D]/10 mb-6">
                            <Icon icon="mdi:alert-decagram-outline" className="text-5xl text-[#FF4D4D]" />
                        </div>
                        <h3 className="font-playfair text-3xl font-bold mb-6">The False Start</h3>
                        <p className="font-mulish text-lg text-gray-300 leading-relaxed">
                            While our light hybrid concept earned initial team support, the executive review uncovered a crucial insight: the design needed to match the aggressive 'boldness' of the original brief.
                        </p>
                        <p className="font-mulish text-lg text-white font-bold mt-6 text-xl">
                            I led a rapid pivot to a dark theme, successfully realigning the visual strategy with the C-Suite’s vision for a strong market leader.
                        </p>
                    </FadeIn>
                </ContentContainer>
            </section>

            {/* 6. The Scalability */}
            <section className="py-20 bg-[#1A1A1A]">
                <ContentContainer className="grid md:grid-cols-2 gap-12 items-center">
                    <FadeIn>
                        <h2 className="font-playfair text-3xl font-bold mb-6">The Scalability</h2>
                        <div className="w-20 h-1 bg-[#FF4D4D] mb-6"></div>
                        <p className="font-mulish text-xl text-gray-300 leading-relaxed">
                            To prevent future debt, we built a modular design system that allowed the dev team to build new pages faster.
                        </p>
                        <div className="flex gap-4 mt-8">
                            <div className="px-4 py-2 bg-[#2a2a2a] rounded-full text-sm font-bold text-gray-400">Atoms</div>
                            <div className="px-4 py-2 bg-[#2a2a2a] rounded-full text-sm font-bold text-gray-400">Molecules</div>
                            <div className="px-4 py-2 bg-[#2a2a2a] rounded-full text-sm font-bold text-gray-400">Organisms</div>
                        </div>
                    </FadeIn>
                    {/* Visual abstraction of design system */}
                    <FadeIn delay={0.2}>
                        <div className="grid grid-cols-3 gap-4 opacity-50 hover:opacity-100 transition-opacity">
                            <div className="h-32 bg-[#252525] rounded-lg"></div>
                            <div className="h-32 bg-[#A10026] rounded-lg col-span-2"></div>
                            <div className="h-32 bg-[#333] rounded-lg col-span-2"></div>
                            <div className="h-32 bg-[#252525] rounded-lg"></div>
                        </div>
                    </FadeIn>
                </ContentContainer>
            </section>

            {/* 7. From Sketch to Success (Interactive Slider) */}
            <section className="py-24">
                <ContentContainer>
                    <FadeIn className="mb-12 text-center">
                        <h2 className="font-playfair text-4xl font-bold mb-4">From Sketch to Success</h2>
                        <p className="font-mulish text-gray-400">Drag the slider to see how the initial wireframe transformed into the final delivered asset.</p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <BeforeAfterSlider
                            beforeImage="/insurance-company-website-design/foundation.png"
                            afterImage="/insurance-company-website-design/hero.png"
                        />
                    </FadeIn>
                </ContentContainer>
            </section>

            {/* 8. The Impact (Footer Style) */}
            <section className="py-24 bg-gradient-to-b from-[#1A1A1A] to-[#121212] border-t border-gray-800">
                <ContentContainer className="grid md:grid-cols-2 gap-16">
                    <FadeIn>
                        <h2 className="font-playfair text-5xl font-bold mb-8">The Impact</h2>
                        <p className="font-mulish text-xl text-gray-300 leading-relaxed mb-8">
                            We set out to prove that UX could stop the bleeding, and the data confirms it. By delivering a <span className="text-[#FF4D4D] font-bold">37% lift in performance</span>, we successfully plugged the conversion leaks and transformed a liability into a growth asset.
                        </p>
                        <div className="p-6 bg-[#A10026]/10 rounded-xl border border-[#A10026]/30">
                            <p className="font-mulish text-gray-300 italic">
                                "In retrospect, to de-risk future timelines, I would advocate for finalizing the Brand Strategy with C-Suite stakeholders before entering the UI phase, preventing costly mid-flight pivots."
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2} className="flex flex-col justify-center">
                        <img src="/insurance-company-website-design/impact.png" alt="Impact Data" className="rounded-xl shadow-2xl skew-x-1" />
                    </FadeIn>
                </ContentContainer>
            </section>
        </div>
    );
};

export default InsuranceRedesignV2;
