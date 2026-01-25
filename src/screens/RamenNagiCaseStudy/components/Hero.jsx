import { motion } from 'framer-motion';
// @ts-ignore
import heroImage from '../../../assets/RamenNagiCaseStudy/Ramen nagi app in hand.png';

const Hero = () => {
    return (
        <section className="relative bg-white pt-[120px] pb-10 w-full px-[5vw] max-w-[1440px] mx-auto">
            {/* 12-Column Grid Container */}
            <div className="grid grid-cols-12 gap-5 items-center max-w-[1160px] mx-auto px-5 w-full">

                {/* Left Column (Visual) - Spans 6 columns (Desktop), Order 2 (Mobile impliciitly if Text is -1) */}
                <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                    <motion.img
                        src={heroImage}
                        alt="Hand holding phone with Ramen Nagi app"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-full max-h-[80vh] object-contain"
                    />
                </div>

                {/* Right Column (Text) - Spans 6 columns (Desktop), Order -1 (Mobile) */}
                <div className="col-span-12 md:col-span-6 -order-1 md:order-1 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-[32px] md:text-[clamp(3rem,8vw,6rem)] leading-[1.2] font-bold mb-6 text-black tracking-tight">
                            Ramen Nagi: Eliminating the 2-Hour Wait
                        </h1>
                        <p className="text-lg leading-relaxed text-[#333] max-w-[500px]">
                            A hybrid queuing system for a restaurant that preserves operational speed while giving customers their time back.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
