import { motion } from 'framer-motion';
import { Users, Sliders, Settings } from 'lucide-react';

const WhyThisWorks = () => {
    const cards = [
        {
            icon: Users,
            title: "Preserves the Culture",
            text: "Doesn't force reservations-only. The 70% walk-in allocation maintains the spontaneous, high-turnover identity that makes them successful."
        },
        {
            icon: Sliders,
            title: "Balances Flexibility with Commitment",
            text: "Users modify orders freely until QR check-in locks the order, reducing no-shows without sacrificing control."
        },
        {
            icon: Settings,
            title: "Builds Operational Intelligence",
            text: "Geofencing + queue position triggers kitchen prep only when customers are verified to be physically present at the location."
        }
    ];

    return (
        <section className="w-full max-w-[1160px] mx-auto px-5 mb-[240px] bg-white text-[#111] font-sans">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-black">Why This Works</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-[#F3F4F6] p-8 rounded-[32px] flex flex-col items-center text-center h-full"
                    >
                        <div className="mb-6">
                            <card.icon size={40} className="text-black" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-black leading-tight">{card.title}</h3>
                        <p className="text-[#333] leading-relaxed text-base">
                            {card.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WhyThisWorks;
