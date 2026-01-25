import { motion } from 'framer-motion';
// @ts-ignore
import problemImage from '../../../assets/RamenNagiCaseStudy/A long line at Ramen Nagi.png';

const Problem = () => {
    return (
        <section
            className="w-full max-w-[1160px] mx-auto px-5 relative z-[2] pb-[50px] -mt-10"
        >
            <div className="grid grid-cols-12 gap-5 bg-[#121212] text-white rounded-t-[40px] px-[60px] py-[100px] items-center w-full">

                {/* Left Column (Copy) - Span 6 */}
                <div className="col-span-12 md:col-span-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[2.5rem] font-bold mb-6 text-white leading-tight">The Problem</h2>
                        <p className="text-xl leading-relaxed text-[#e0e0e0] mb-8">
                            High-demand restaurants face a paradox: quality creates lines, but lines destroy the experience. At Ramen Nagi, 1-2 hour waits with no seating meant customers arrived exhausted and anxious; undermining an otherwise excellent product.
                        </p>
                        <p className="text-xl leading-relaxed text-white">
                            <strong className="font-bold">The constraint:</strong> Can't sacrifice the walk-in culture or kitchen efficiency that made them successful.
                        </p>
                    </motion.div>
                </div>

                {/* Right Column (Visual) - Span 6 */}
                <div className="col-span-12 md:col-span-6 flex justify-center">
                    <motion.img
                        src={problemImage}
                        alt="Crowded line at Ramen Nagi"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] object-cover"
                    />
                </div>

            </div>
        </section>
    );
};

export default Problem;
