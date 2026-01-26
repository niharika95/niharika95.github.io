import { motion } from 'framer-motion';
import { Ticket, Users } from 'lucide-react';
// @ts-ignore
import phonesImage from '../../../assets/RamenNagiCaseStudy/solution-phones.png';
// @ts-ignore
import reservationIcon from '../../../assets/images/Reservation icon.png';
// @ts-ignore
import walkInIcon from '../../../assets/images/Walk-in icon.png';

const Solution = () => {
    return (
        <section className="w-full max-w-[1160px] mx-auto px-5 mb-[240px]">
            <div className="w-full pt-[100px] pb-0 bg-[#F5F5F5] text-[#111] text-center font-sans rounded-b-[40px]">

                {/* Header Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-[2.5rem] font-bold mb-4 text-black">The Solution</h2>
                    <p className="text-xl text-[#333]">
                        A hybrid model that serves two customer mindsets:
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 max-w-4xl mx-auto relative relative-grid">
                    {/* Vertical Divider for Desktop - darken slightly for contrast if needed, or keep gray-200 */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-7/8 bg-gray-400 transform -translate-x-1/2"></div>

                    {/* Stat 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-end justify-center p-6 bg-transparent text-right"
                    >
                        <div className="mb-2">
                            <img src={reservationIcon} alt="Reservation" className="w-20 h-20 object-contain" />
                        </div>
                        <div className="text-3xl font-bold text-black mb-0.5">30% Reservations</div>
                        <p className="text-lg text-[#555]">For planners who value certainty.</p>
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-start justify-center p-6 bg-transparent text-left"
                    >
                        <div className="mb-2">
                            <img src={walkInIcon} alt="Walk-in" className="w-20 h-20 object-contain" />
                        </div>
                        <div className="text-3xl font-bold text-black mb-0.5">70% Walk-ins</div>
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
                    <p className="text-2xl leading-relaxed text-[#333]">
                        A 'commitment queuing' mechanism where placing a food order is a prerequisite for checking in. This prevents ghost positions by requiring a commitment before arrival, while maintaining the ability to modify the order until the QR code is scanned.
                    </p>
                </motion.div>

                {/* Phone Mockups */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full flex justify-center"
                >
                    <img
                        src={phonesImage}
                        alt="Ramen Nagi Mobile App Screens"
                        className="max-w-full md:max-w-4xl object-contain drop-shadow-2xl"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default Solution;
