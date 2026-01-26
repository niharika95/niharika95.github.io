import { useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { motion } from "framer-motion";
import { ZoomIn, Move } from "lucide-react";
// @ts-ignore
import walkInFlowImage from "../../../assets/RamenNagiCaseStudy/walk_in_flow_diagram.png";

const WalkInFlow = () => {
    return (
        <section className="w-full max-w-[1160px] mx-auto px-5 py-24 font-sans">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#111] mb-4">
                    Walk-in flow
                </h2>
                <p className="text-base text-[#555] max-w-3xl mx-auto">
                    Clear visual distinction between the "safe zone" (free modifications) and "danger zone" (fees apply). Prevents surprise charges.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full h-[600px] border border-gray-200 rounded-[32px] overflow-hidden bg-white relative shadow-sm"
            >
                <TransformWrapper
                    initialScale={0.5}
                    minScale={0.2}
                    maxScale={3}
                    centerOnInit={true}
                    wheel={{ step: 0.1 }}
                >
                    {({ zoomIn, zoomOut, resetTransform }) => (
                        <>
                            <div className="absolute top-4 right-4 z-10 flex gap-2">
                                <button
                                    onClick={() => zoomIn()}
                                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                                    aria-label="Zoom In"
                                >
                                    <ZoomIn size={20} className="text-[#333]" />
                                </button>
                            </div>

                            <TransformComponent
                                wrapperClass="w-full h-full cursor-grab active:cursor-grabbing bg-white"
                                contentClass="w-full h-full flex items-center justify-center p-8"
                            >
                                <img
                                    src={walkInFlowImage}
                                    alt="Walk-in Flow Diagram"
                                    className="w-auto h-auto max-w-none shadow-sm"
                                    style={{ minWidth: '100%', minHeight: '100%', objectFit: 'contain' }}
                                />
                            </TransformComponent>

                            <div className="absolute bottom-6 right-6 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200 text-sm text-[#555] flex items-center gap-2 pointer-events-none">
                                <Move size={16} />
                                <span>Pan and zoom to explore details</span>
                            </div>
                        </>
                    )}
                </TransformWrapper>
            </motion.div>
        </section>
    );
};

export default WalkInFlow;
