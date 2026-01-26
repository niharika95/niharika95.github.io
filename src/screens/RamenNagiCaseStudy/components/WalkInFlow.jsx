import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import walkInFlowImage from "../../../assets/RamenNagiCaseStudy/walk_in_flow_diagram.png";
import InteractiveImageModal from './InteractiveImageModal';

const WalkInFlow = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="w-full max-w-[1160px] mx-auto px-5 py-24 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[20px]">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="col-span-1 md:col-span-5 mb-12 text-left"
                >
                    <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#111] mb-4">
                        Walk-in flow
                    </h2>
                    <p className="text-base text-[#555] max-w-3xl">
                        Clear visual distinction between the "safe zone" (free modifications) and "danger zone" (fees apply). Prevents surprise charges.
                    </p>
                </motion.div>

                {/* Image Preview */}
                <div className="col-span-1 md:col-span-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative w-full h-[500px] md:h-[600px] bg-white border border-gray-200 rounded-[32px] overflow-hidden shadow-sm cursor-zoom-in group"
                        onClick={() => setIsModalOpen(true)}
                        whileHover={{ scale: 1.01 }}
                    >
                        {/* Image */}
                        <div className="w-full h-full p-8 flex items-center justify-center">
                            <img
                                src={walkInFlowImage}
                                alt="Walk-in Flow Diagram"
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                                <Expand size={16} className="text-gray-700" />
                                <span className="text-sm font-medium text-gray-700">Click to expand</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <InteractiveImageModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                imageSrc={walkInFlowImage}
                altText="Walk-in Flow Diagram"
            />
        </section>
    );
};

export default WalkInFlow;

