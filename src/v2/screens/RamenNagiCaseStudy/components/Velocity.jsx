import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Figma, Code, Rocket } from 'lucide-react';

const milestones = [
    { icon: Lightbulb, time: 'Hour 0-4', label: 'Discovery' },
    { icon: PenTool, time: 'Hour 5-12', label: 'Wireframing' },
    { icon: Figma, time: 'Hour 13-28', label: 'High-Fi Design' },
    { icon: Code, time: 'Hour 29-38', label: 'Prototyping' },
    { icon: Rocket, time: 'Hour 39-40', label: 'Polish' },
];

const Velocity = () => {
    return (
        <section className="py-[15vh] px-[5vw] max-w-[1440px] mx-auto w-full">
            <h2 className="mb-16 text-[clamp(2rem,5vw,4rem)] font-bold">Velocity: 40 Hours</h2>

            <div className="flex justify-between items-start flex-wrap gap-8">
                {milestones.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="text-center flex-1 min-w-[150px]"
                    >
                        <div className="w-20 h-20 bg-[#f5f5f5] rounded-full flex items-center justify-center mx-auto mb-6">
                            <item.icon size={32} color="#DC0411" />
                        </div>
                        <div className="font-bold text-[1.1rem] mb-2">{item.time}</div>
                        <div className="text-[#666]">{item.label}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Velocity;
