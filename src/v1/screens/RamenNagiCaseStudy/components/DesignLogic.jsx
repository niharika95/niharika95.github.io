import { motion } from 'framer-motion';

const ConnectorLine = ({ startX, startY, endX, endY, delay }) => (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]">
        <motion.line
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke="#DC0411"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: delay, ease: "easeInOut" }}
        />
        <motion.circle
            cx={startX}
            cy={startY}
            r="4"
            fill="#DC0411"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: delay, duration: 0.3 }}
        />
    </svg>
);

const Annotation = ({ x, y, title, text, align = 'left', delay }) => (
    <motion.div
        initial={{ opacity: 0, x: align === 'left' ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: delay + 0.5, duration: 0.5 }}
        className="absolute w-[250px] z-10"
        style={{
            left: x,
            top: y,
            textAlign: align,
        }}
    >
        <span className="text-[0.8rem] font-bold uppercase tracking-widest text-[#DC0411] block mb-1">
            {title}
        </span>
        <p className="text-base m-0 leading-snug">{text}</p>
    </motion.div>
);

const DesignLogic = () => {
    return (
        <section className="h-screen w-full flex items-center justify-center relative">
            {/* Context Title */}
            <div className="absolute top-[10%] left-[10%]">
                <h2 className="text-[2rem] font-bold">Interface Logic</h2>
            </div>

            <div className="relative w-[1000px] h-[800px] flex justify-center items-center">

                {/* Central Visual */}
                <div className="w-[320px] h-[640px] bg-[#f5f5f5] rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-8 border-[#333] relative z-[2] flex flex-col overflow-hidden">
                    {/* Mock Content */}
                    <div className="h-[200px] bg-[#DC0411]"></div>
                    <div className="p-5">
                        <div className="h-[30px] w-3/5 bg-[#ddd] rounded-md mb-5"></div>
                        <div className="grid grid-cols-2 gap-[10px]">
                            <div className="h-[100px] bg-[#eee] rounded-lg"></div>
                            <div className="h-[100px] bg-[#eee] rounded-lg"></div>
                        </div>
                    </div>
                </div>

                {/* Left Annotations */}
                <ConnectorLine startX="35%" startY="35%" endX="45%" endY="35%" delay={0.2} />
                <Annotation
                    x="10%"
                    y="32%"
                    title="Immersive Header"
                    text="Video-first header sets the mood immediately."
                    align="right"
                    delay={0.2}
                />

                <ConnectorLine startX="35%" startY="60%" endX="45%" endY="60%" delay={0.4} />
                <Annotation
                    x="10%"
                    y="57%"
                    title="Smart Defaults"
                    text="Pre-selected options reduce friction by 40%."
                    align="right"
                    delay={0.4}
                />

                {/* Right Annotations */}
                <ConnectorLine startX="65%" startY="45%" endX="55%" endY="45%" delay={0.6} />
                <Annotation
                    x="68%"
                    y="42%"
                    title="Visual Menu"
                    text="Grid layout replaces list view for scannability."
                    align="left"
                    delay={0.6}
                />

            </div>
        </section>
    );
};

export default DesignLogic;
