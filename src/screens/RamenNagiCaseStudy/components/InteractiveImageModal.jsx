import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

const InteractiveImageModal = ({ isOpen, onClose, imageSrc, altText }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center overflow-hidden"
                onClick={onClose} // Close on backdrop click
            >
                <div
                    className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
                    onClick={(e) => e.stopPropagation()} // Prevent close when clicking content
                >
                    <TransformWrapper
                        initialScale={1}
                        minScale={0.5}
                        maxScale={4}
                        centerOnInit={true}
                        wheel={{ step: 0.1 }}
                    >
                        {({ zoomIn, zoomOut, resetTransform }) => (
                            <>
                                {/* Controls */}
                                <div className="absolute top-6 right-6 z-50 flex gap-3">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1.5 flex gap-1">
                                        <button
                                            onClick={() => zoomIn()}
                                            className="p-2.5 text-white hover:bg-white/20 rounded-full transition-colors"
                                            title="Zoom In"
                                        >
                                            <ZoomIn size={20} />
                                        </button>
                                        <button
                                            onClick={() => zoomOut()}
                                            className="p-2.5 text-white hover:bg-white/20 rounded-full transition-colors"
                                            title="Zoom Out"
                                        >
                                            <ZoomOut size={20} />
                                        </button>
                                        <button
                                            onClick={() => resetTransform()}
                                            className="p-2.5 text-white hover:bg-white/20 rounded-full transition-colors"
                                            title="Reset View"
                                        >
                                            <RotateCcw size={20} />
                                        </button>
                                    </div>

                                    <button
                                        onClick={onClose}
                                        className="p-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-colors"
                                        title="Close"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Content */}
                                <TransformComponent
                                    wrapperClass="w-full h-full"
                                    contentClass="w-full h-full flex items-center justify-center"
                                >
                                    <img
                                        src={imageSrc}
                                        alt={altText}
                                        className="w-auto h-auto max-w-none shadow-2xl"
                                        style={{
                                            maxHeight: '90vh',
                                            maxWidth: '90vw',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </TransformComponent>
                            </>
                        )}
                    </TransformWrapper>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium pointer-events-none select-none">
                        Scroll or pinch to zoom • Drag to pan
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default InteractiveImageModal;
