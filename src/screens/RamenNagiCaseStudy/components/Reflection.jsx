import { motion } from 'framer-motion';

const Reflection = () => {
    const points = [
        "Constraint Breeds Creativity",
        "Visuals Are The New Copy",
        "Speed Is A Feature"
    ];

    return (
        <section className="py-[15vh] px-[5vw] max-w-[1440px] mx-auto w-full pb-[20vh]">
            <h2 className="font-serif text-[3rem] italic mb-16">
                What I Learned
            </h2>

            <div className="max-w-[800px]">
                {points.map((point, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        className="text-[clamp(2rem,4vw,3.5rem)] font-serif border-b border-[#eee] py-8 text-[#333]"
                    >
                        {point}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Reflection;
