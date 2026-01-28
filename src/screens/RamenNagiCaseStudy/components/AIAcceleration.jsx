import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import flowMappingIcon from '../../../assets/images/ai_execution_icons/flow_mapping.svg';
import screenPromptsIcon from '../../../assets/images/ai_execution_icons/screen_prompts.svg';
import wireframesIcon from '../../../assets/images/ai_execution_icons/wireframes.svg';
import hiFidelityIcon from '../../../assets/images/ai_execution_icons/hi_fidelity.svg';
import reactNativeAppIcon from '../../../assets/images/ai_execution_icons/react_native_app.svg';
import antigravityIcon from '../../../assets/images/ai_execution_icons/antigravity.svg';

import figjamIcon from '../../../assets/images/tool_icons/figjam.svg';
import geminiIcon from '../../../assets/images/tool_icons/gemini.svg';
import figmaIcon from '../../../assets/images/tool_icons/figma.svg';
import googleIcon from '../../../assets/images/tool_icons/google.svg';
import ramenNagiQrCode from '../../../assets/images/ramen_nagi_qr_code.svg';

const steps = [
    {
        icon: flowMappingIcon,
        title: "Flow mapping",
        badge: "FigJam AI",
        badgeColor: "bg-purple-100 text-purple-700",
        badgeIcon: figjamIcon
    },
    {
        icon: screenPromptsIcon,
        title: "Screen prompts",
        badge: "Gemini",
        badgeColor: "bg-blue-100 text-blue-700 font-medium",
        badgeIcon: geminiIcon
    },
    {
        icon: wireframesIcon,
        title: "Wireframes",
        badge: "Figma First Draft",
        badgeColor: "bg-green-100 text-green-700",
        badgeIcon: figmaIcon
    },
    {
        icon: hiFidelityIcon,
        title: "Hi-fidelity",
        subtext: "(manual refinement)",
        type: "manual",
        isFigma: true
    },
    {
        icon: reactNativeAppIcon,
        title: "React Native App",
        badge: "Google Antigravity",
        badgeColor: "bg-gray-100 text-gray-800",
        badgeIcon: antigravityIcon
    }
];

const AIAcceleration = () => {
    return (
        <section className="w-full max-w-[1160px] mx-auto px-5 pt-0 pb-[60px] md:pb-24 font-sans">
            <div className="bg-[#F9FAFB] rounded-t-none rounded-b-[48px] px-8 md:px-16 py-[60px] md:py-[100px] text-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-[36px] font-semibold text-[#111] mb-6">AI-Accelerated Execution</h2>
                    <p className="text-base text-[#333] leading-relaxed">
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
                                <img src={step.icon} alt={step.title} className="w-14 h-14 mb-4" />
                                <h3 className="font-bold text-[#111] mb-2 text-sm md:text-base">{step.title}</h3>

                                {step.badge && (
                                    <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${step.badgeColor} border border-transparent`}>
                                        <img src={step.badgeIcon} alt="" className="w-4 h-4 mr-2" />
                                        {step.badge}
                                    </div>
                                )}

                                {step.subtext && (
                                    <span className="text-xs text-[#888] mt-1">{step.subtext}</span>
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
                                    <ArrowRight size={20} className="text-gray-600" />
                                </motion.div>
                            )}

                            {/* Connector Arrow (Mobile only, between items) */}
                            {index < steps.length - 1 && (
                                <div className="md:hidden my-4 text-gray-600 transform rotate-90">
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
                    <h3 className="text-[24px] leading-[1.5] font-normal text-[#111] mb-8">Try the prototype yourself!</h3>

                    {/* QR Code Placeholder */}
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
                        <img src={ramenNagiQrCode} alt="Scan to try prototype" className="w-40 h-40" />
                    </div>

                    <p className="text-[#333]">
                        Scan the QR code or <a href="https://expo.dev/preview/update?message=Initial+preview+release&updateRuntimeVersion=1.0.0&createdAt=2026-01-26T05%3A39%3A56.579Z&slug=exp&projectId=73b9bb21-05c2-4ec2-99af-c43ebaa8bc87&group=b03c7e9a-cfd8-4851-b700-968fc081da85" target="_blank" rel="noopener noreferrer" className="text-[#DC0411] underline decoration-2 underline-offset-4 hover:opacity-80">click here</a>.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default AIAcceleration;
