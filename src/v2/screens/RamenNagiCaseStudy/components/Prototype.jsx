import { motion } from 'framer-motion';
import AnimatedPillButton from '../../../components/AnimatedPillButton/AnimatedPillButton';

const Prototype = () => {
    return (
        <section className="w-full bg-black text-white py-[15vh] px-[5vw] text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-white mb-12 text-[2rem] font-bold">The Final Product</h2>
                <AnimatedPillButton
                    as="button"
                    strokeColor="#FFFFFF"
                    offset={3}
                    className="bg-[#DC0411] transition-colors duration-200 ease-out text-white border-none py-5 px-10 text-[1.5rem] font-bold rounded-[50px] cursor-pointer shadow-[0_10px_30px_rgba(220,4,17,0.4)]"
                >
                    Experience the Live Prototype
                </AnimatedPillButton>
            </motion.div>
        </section>
    );
};

export default Prototype;
