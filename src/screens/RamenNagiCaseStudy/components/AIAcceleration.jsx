import { motion } from 'framer-motion';
import { Network, MessageSquare, LayoutTemplate, Palette, Smartphone, ArrowRight, QrCode } from 'lucide-react';

const steps = [
    {
        icon: Network,
        title: "Flow mapping",
        badge: "FigJam AI",
        badgeColor: "bg-purple-100 text-purple-700",
        badgeIcon: "❖"
    },
    {
        icon: MessageSquare,
        title: "Screen prompts",
        badge: "Gemini",
        badgeColor: "bg-blue-100 text-blue-700",
        badgeIcon: "✦"
    },
    {
        icon: LayoutTemplate,
        title: "Wireframes",
        badge: "Figma First Draft AI",
        badgeColor: "bg-green-100 text-green-700",
        badgeIcon: "F"
    },
    {
        icon: Palette,
        title: "Hi-fidelity",
        subtext: "(manual refinement)",
        type: "manual"
    },
    {
        icon: Smartphone,
        title: "React Native App",
        badge: "Google Antigravity",
        badgeColor: "bg-gray-200 text-gray-800",
        badgeIcon: "G"
    }
];

const AIAcceleration = () => {
    return (
        <section className="w-full max-w-[1160px] mx-auto px-5 py-24 font-sans">
            <div className="bg-[#F9FAFB] rounded-[48px] p-8 md:p-16 text-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#111] mb-6">AI-Accelerated Execution</h2>
                    <p className="text-base text-[#555] leading-relaxed">
                        I orchestrated a full AI design-to-dev pipeline, strategically accelerating most phases using AI while keeping strategic decisions (business logic, edge cases, interaction design) human. Result: functional prototype in 2 weeks instead of 2 months.
                    </p>
                </motion.div>

                {/* Pipeline Flow */}
                <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 mb-24 px-4">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center w-full md:w-auto relative">
                            {/* Step Item */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center z-10 w-40"
                            >
                                <div className="mb-4 p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <step.icon size={32} className="text-[#333]" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-bold text-[#111] mb-2 text-sm md:text-base">{step.title}</h3>

                                {step.badge && (
                                    <div className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-semibold ${step.badgeColor}`}>
                                        <span className="mr-1 opacity-70">{step.badgeIcon}</span>
                                        {step.badge}
                                    </div>
                                )}

                                {step.subtext && (
                                    <span className="text-xs text-[#888]">{step.subtext}</span>
                                )}
                            </motion.div>

                            {/* Connector Arrow (Desktop only, between items) */}
                            {index < steps.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    whileInView={{ opacity: 0.3, scaleX: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                    viewport={{ once: true }}
                                    className="hidden md:flex justify-center flex-1 mx-2"
                                >
                                    <ArrowRight size={20} className="text-gray-400" />
                                </motion.div>
                            )}

                            {/* Connector Arrow (Mobile only, between items) */}
                            {index < steps.length - 1 && (
                                <div className="md:hidden my-4 text-gray-300 transform rotate-90">
                                    <ArrowRight size={20} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 mb-20"></div>

                {/* Interactive CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <h3 className="text-2xl font-bold text-[#111] mb-8">Try the prototype yourself!</h3>

                    {/* QR Code Placeholder */}
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
                        <QrCode size={160} className="text-[#111]" />
                    </div>

                    <p className="text-[#555]">
                        Scan the QR code or <a href="#" className="text-[#DC0411] font-bold underline decoration-2 underline-offset-4 hover:opacity-80">click here</a>.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default AIAcceleration;
