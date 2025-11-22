"use client";

import { motion } from "framer-motion";

const steps = [
    {
        id: 1,
        title: "AI Site Analysis",
        description: "Deep learning algorithms analyze topography, climate, and light patterns.",
        year: "01",
    },
    {
        id: 2,
        title: "Vastu Alignment Check",
        description: "Ensuring energy flow and directional harmony based on ancient principles.",
        year: "02",
    },
    {
        id: 3,
        title: "3D Generative Modeling",
        description: "Creating thousands of design iterations to find the perfect form.",
        year: "03",
    },
    {
        id: 4,
        title: "Execution",
        description: "Precision construction with real-time monitoring and quality control.",
        year: "04",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-24 bg-charcoal text-white relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-serif mb-4">The Process</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        From data to destiny: A seamless journey of creation.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Center Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gold/30 hidden md:block" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row items-center justify-between mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="w-full md:w-5/12 mb-6 md:mb-0">
                                <div className={`p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-gold/50 transition-colors text-center md:text-left`}>
                                    <span className="text-gold font-serif text-xl mb-2 block">{step.year}</span>
                                    <h3 className="text-2xl font-serif mb-3">{step.title}</h3>
                                    <p className="text-white/60">{step.description}</p>
                                </div>
                            </div>

                            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-charcoal border border-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                                <div className="w-3 h-3 bg-gold rounded-full" />
                            </div>

                            <div className="w-full md:w-5/12" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
