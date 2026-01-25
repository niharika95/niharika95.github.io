import { motion } from 'framer-motion';

const Prototype = () => {
    return (
        <section className="w-full bg-black text-white py-[15vh] px-[5vw] text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-white mb-12 text-[2rem] font-bold">The Final Product</h2>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#DC0411] text-white border-none py-5 px-10 text-[1.5rem] font-bold rounded-[50px] cursor-pointer shadow-[0_10px_30px_rgba(220,4,17,0.4)]"
                >
                    Experience the Live Prototype
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Prototype;
