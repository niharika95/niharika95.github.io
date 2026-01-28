import { motion } from 'framer-motion';
// @ts-ignore
import impactPhone from '../../../assets/images/Ramen Nagi/Ramen Nagi - Impact screen.png';

const Impact = () => {
    return (
        <section className="w-full max-w-[1160px] mx-auto px-5">
            <div className="bg-[#111] rounded-t-[48px] rounded-b-none py-[100px] overflow-hidden relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-[20px] items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-white z-10 md:col-start-3 md:col-end-7"
                    >
                        <h2 className="text-[36px] font-semibold mb-12">The Impact</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4">Customer Value</h3>
                            <ul className="list-none space-y-2 text-[#ccc] text-base">
                                <li className="flex items-start">
                                    <span className="mr-3 mt-3 w-1.5 h-1.5 bg-white rounded-full"></span>
                                    2 hours reclaimed during peak times
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-3 w-1.5 h-1.5 bg-white rounded-full"></span>
                                    Zero physical waiting
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-3 w-1.5 h-1.5 bg-white rounded-full"></span>
                                    Full autonomy over wait experience
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4">Business Value</h3>
                            <ul className="list-none space-y-2 text-[#ccc] text-base">
                                <li className="flex items-start">
                                    <span className="mr-3 mt-3 w-1.5 h-1.5 bg-white rounded-full"></span>
                                    Reduced no-shows through commitment mechanism
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-3 w-1.5 h-1.5 bg-white rounded-full"></span>
                                    Predictable demand forecasting via reservation data
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-3 w-1.5 h-1.5 bg-white rounded-full"></span>
                                    Kitchen efficiency maintained—orders fire only when customers are verified on-site
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-3 w-1.5 h-1.5 bg-white rounded-full"></span>
                                    Lower staff friction with pre-submitted orders
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Column: Phone Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex justify-center z-10 md:col-start-8 md:col-end-11"
                    >
                        <img
                            src={impactPhone}
                            alt="Consumer App Reservation Screen"
                            className="w-full max-w-[320px] md:max-w-md object-contain"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
