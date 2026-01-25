import { motion } from 'framer-motion';
import { Ticket, Users } from 'lucide-react';
// @ts-ignore
import phonesImage from '../../../assets/RamenNagiCaseStudy/solution-phones.png';

const Solution = () => {
    return (
        <section className="w-full max-w-[1160px] mx-auto px-5 py-24 bg-white text-[#111] text-center font-sans">

            {/* Header Area */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <h2 className="text-[2.5rem] font-bold mb-4 text-black">The Solution</h2>
                <p className="text-xl text-[#333]">
                    A hybrid model that serves two customer mindsets:
                </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 max-w-4xl mx-auto relative relative-grid">
                {/* Vertical Divider for Desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>

                {/* Stat 1 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center p-6 bg-white"
                >
                    <div className="mb-6">
                        <Ticket size={48} className="text-black fill-black" strokeWidth={1.5} />
                    </div>
                    <div className="text-3xl font-bold text-black mb-2">30% Reservations</div>
                    <p className="text-lg text-[#555]">For planners who value certainty.</p>
                </motion.div>

                {/* Stat 2 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center p-6 bg-white"
                >
                    <div className="mb-6">
                        <Users size={48} className="text-black fill-black" strokeWidth={1.5} />
                    </div>
                    <div className="text-3xl font-bold text-black mb-2">70% Walk-ins</div>
                    <p className="text-lg text-[#555]">For flexible guests who value spontaneity.</p>
                </motion.div>
            </div>

            {/* Key Innovation Callout */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto mb-24"
            >
                <div className="inline-block px-4 py-1.5 bg-[#E5E7EB] rounded-full text-sm font-semibold text-[#374151] mb-6">
                    Key innovation
                </div>
                <p className="text-2xl leading-relaxed text-black font-medium">
                    A 'commitment queuing' mechanism where placing a food order is a prerequisite for checking in. This prevents ghost positions by requiring a commitment before arrival, while maintaining the ability to modify the order until the QR code is scanned.
                </p>
            </motion.div>

            {/* Phone Mockups */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full flex justify-center -mb-32 md:-mb-48"
            >
                <img
                    src={phonesImage}
                    alt="Ramen Nagi Mobile App Screens"
                    className="max-w-full md:max-w-4xl object-contain drop-shadow-2xl"
                />
            </motion.div>

        </section>
    );
};

export default Solution;
