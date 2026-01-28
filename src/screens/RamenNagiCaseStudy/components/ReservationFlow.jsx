import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import flowDiagram from '../../../assets/images/Ramen Nagi/Ramen Nagi - Reservation flow.png';
import InteractiveImageModal from './InteractiveImageModal';

const ReservationFlow = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="w-full max-w-[1160px] mx-auto px-5 py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[20px]">
                {/* Text Content */}
                <div className="col-span-1 md:col-span-5 mb-8 md:mb-12">
                    <h2 className="text-[36px] font-semibold text-[#111] mb-4">
                        Reservation flow
                    </h2>
                    <p className="text-base text-[#333] max-w-3xl">
                        Check-in triggers the order lock, not a manual 'confirm' button. Removes the anxiety of premature commitment.
                    </p>
                </div>

                {/* Image Preview */}
                <div className="col-span-1 md:col-span-12">
                    <motion.div
                        className="relative w-full h-[500px] md:h-[600px] bg-gray-50 border border-gray-200 rounded-[32px] overflow-hidden shadow-sm cursor-zoom-in group"
                        onClick={() => setIsModalOpen(true)}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Image */}
                        <div className="w-full h-full p-8 flex items-center justify-center">
                            <img
                                src={flowDiagram}
                                alt="Reservation Flow Diagram"
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
                imageSrc={flowDiagram}
                altText="Reservation Flow Diagram"
            />
        </section>
    );
};

export default ReservationFlow;

