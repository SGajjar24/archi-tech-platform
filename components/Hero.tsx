"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        // We use clientX/Y directly for fixed/absolute positioning relative to viewport if needed,
        // but here we want it relative to the container if it's full screen.
        // However, for the mask which is absolute in the container, we need relative coordinates.
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({ x: clientX - rect.left, y: clientY - rect.top });
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-charcoal cursor-default"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Wireframe Background (Base) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-wireframe.png"
                    alt="Architectural Wireframe"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-charcoal/60" />
            </div>

            {/* Reality Reveal (Masked) */}
            <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                animate={{ opacity: isHovering ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 0)`,
                    WebkitMaskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 0)`,
                }}
            >
                <Image
                    src="/images/hero-reality.png"
                    alt="Architectural Reality"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-5xl md:text-7xl font-serif text-white mb-6 max-w-4xl leading-tight"
                >
                    Designing Destiny: <br />
                    <span className="text-gold italic">Where AI Precision Meets Vastu Harmony.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-white/70 text-lg md:text-xl max-w-2xl font-sans tracking-wide"
                >
                    Experience the future of living with our generative design engine aligned with ancient wisdom.
                </motion.p>
            </div>

            {/* Custom Cursor Follower */}
            <AnimatePresence>
                {isHovering && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, x: mousePosition.x - 16, y: mousePosition.y - 16 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 28, opacity: { duration: 0.2 } }}
                        className="absolute top-0 left-0 w-8 h-8 border border-gold rounded-full pointer-events-none z-50 mix-blend-difference"
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
