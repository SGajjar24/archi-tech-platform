"use client";

import { motion } from "framer-motion";
import { Cpu, Compass, Layers, Palette } from "lucide-react";

const services = [
    {
        id: 1,
        title: "AI-Driven Architecture",
        description: "Generative design for optimized layouts.",
        icon: <Cpu size={40} />,
        colSpan: "md:col-span-2",
        bg: "bg-charcoal",
    },
    {
        id: 2,
        title: "Vastu Shastra Consulting",
        description: "Ancient alignment for modern prosperity.",
        icon: <Compass size={40} />,
        colSpan: "md:col-span-1",
        bg: "bg-charcoal/80",
    },
    {
        id: 3,
        title: "Holistic Planning",
        description: "End-to-end project execution.",
        icon: <Layers size={40} />,
        colSpan: "md:col-span-1",
        bg: "bg-charcoal/80",
    },
    {
        id: 4,
        title: "Interior Design",
        description: "Luxury residential & commercial interiors.",
        icon: <Palette size={40} />,
        colSpan: "md:col-span-2",
        bg: "bg-charcoal",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-black text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Expertise</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Blending computational power with timeless wisdom to create spaces that resonate.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className={`${service.colSpan} p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-gold/50 transition-colors group relative overflow-hidden`}
                        >
                            <div className={`absolute inset-0 ${service.bg} opacity-50 z-0`} />
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="mb-6 text-gold group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif mb-2 group-hover:text-gold transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
