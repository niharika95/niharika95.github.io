import { motion } from "framer-motion";

const KeyTakeaways = () => {
    const takeaways = [
        "Design the business model, not just the interface.",
        "Edge cases reveal your maturity.",
        "AI amplifies strategic thinking."
    ];

    return (
        <section className="w-full max-w-[1160px] mx-auto px-5 py-32 bg-white font-sans text-[#111]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-[2rem] md:text-[2.5rem] font-bold">Key Takeaways</h2>
                </motion.div>

                <div className="space-y-12">
                    {takeaways.map((takeaway, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-base md:text-xl font-medium leading-relaxed">
                                {takeaway}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyTakeaways;
