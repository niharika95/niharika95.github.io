import { Minus, Plus, RefreshCw, ZoomIn } from 'lucide-react';
// @ts-ignore
import React, { useRef, useState } from 'react';

import flowDiagram from '../../../assets/RamenNagiCaseStudy/reservation_flow_diagram.png';
import { motion } from 'framer-motion';

const ReservationFlow = () => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [startPan, setStartPan] = useState({ x: 0, y: 0 });

    const containerRef = useRef(null);

    const handleWheel = (e) => {
        if (e.ctrlKey || e.metaKey) { // Pinch to zoom on trackpad usually fires with ctrl/meta
            e.preventDefault();
            const newScale = scale - e.deltaY * 0.01;
            setScale(Math.min(Math.max(0.5, newScale), 4));
        } else {
            // Optional: allow wheel to zoom even without ctrl if we want aggressive zooming
            // sticking to standard behavior: scroll pans, ctrl+scroll zooms? 
            // The prompt says "using mouse wheel or pinch gesture". 
            // Often standard mouse wheel is scroll, but for a "viewer" wheel often zooms.
            // Let's make wheel zoom for better UX in this specific customized viewer.
            e.preventDefault();
            const scaleAdjustment = -e.deltaY * 0.001;
            const newScale = Math.min(Math.max(0.5, scale + scaleAdjustment), 4);
            setScale(newScale);
        }
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartPan({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const newX = e.clientX - startPan.x;
        const newY = e.clientY - startPan.y;
        setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const zoomIn = () => setScale(Math.min(4, scale + 0.5));
    const zoomOut = () => setScale(Math.max(0.5, scale - 0.5));
    const reset = () => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    return (
        <section className="ramen-nagi-wrapper section-wrapper full-width" style={{ background: '#fff', paddingBottom: '80px' }}>
            <div className="grid-container grid-12">
                <div className="col-span-12" style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#000' }}>
                        Reservation flow
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: '#333' }}>
                        Check-in triggers the order lock, not a manual 'confirm' button. Removes the anxiety of premature commitment.
                    </p>
                </div>

                <div className="col-span-12">
                    <div
                        ref={containerRef}
                        className="relative w-full h-[600px] bg-white border border-gray-200 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onWheel={handleWheel}
                    >
                        <div
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                                transformOrigin: 'center',
                                transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <img
                                src={flowDiagram}
                                alt="Reservation Flow Diagram"
                                style={{
                                    maxWidth: '90%',
                                    maxHeight: '90%',
                                    objectFit: 'contain',
                                    pointerEvents: 'none' // Prevent default drag behavior of img
                                }}
                            />
                        </div>

                        {/* Controls Overlay */}
                        <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-10">
                            <div className="bg-white/90 backdrop-blur shadow-md rounded-lg p-1 flex flex-col gap-1 border border-gray-100">
                                <button onClick={zoomIn} className="p-2 hover:bg-gray-100 rounded text-gray-700" title="Zoom In">
                                    <Plus size={20} />
                                </button>
                                <button onClick={reset} className="p-2 hover:bg-gray-100 rounded text-gray-700" title="Reset View">
                                    <RefreshCw size={18} />
                                </button>
                                <button onClick={zoomOut} className="p-2 hover:bg-gray-100 rounded text-gray-700" title="Zoom Out">
                                    <Minus size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Instruction Overlay */}
                        <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-2 pointer-events-none">
                            <ZoomIn size={14} className="text-gray-500" />
                            <span className="text-xs font-medium text-gray-600">Pan and zoom to explore details</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReservationFlow;
