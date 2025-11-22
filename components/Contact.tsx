"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        const form = event.currentTarget; // Store form reference BEFORE async operation
        const formData = new FormData(form);
        formData.append("access_key", "2a7ef40a-b93c-44a0-a936-ddf7fe33e7a4");

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })
            .then(async (response) => {
                const data = await response.json();

                if (data.success) {
                    setStatus({ success: true, message: "Message sent successfully! We'll get back to you soon." });
                    form.reset(); // Now this works because we stored the reference
                } else {
                    setStatus({ success: false, message: data.message || "Something went wrong. Please try again." });
                }
            })
            .catch((error) => {
                console.error("Form submission error:", error);
                setStatus({ success: false, message: "Network error. Please check your connection and try again." });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-24 bg-charcoal text-white relative overflow-hidden">
            {/* Topological Map Background (SVG Pattern) */}
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif mb-4">Begin Your Journey</h2>
                        <p className="text-white/60">
                            Ready to shape your destiny? Let's discuss your vision.
                        </p>
                    </motion.div>

                    <motion.form
                        onSubmit={onSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-sans text-gold uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    suppressHydrationWarning
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-sans text-gold uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    suppressHydrationWarning
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-sans text-gold uppercase tracking-wider">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                suppressHydrationWarning
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                                placeholder="Tell us about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gold text-charcoal font-bold py-4 rounded-lg hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    Sending...
                                    <Loader2 size={18} className="animate-spin" />
                                </>
                            ) : (
                                <>
                                    Initiate Consultation
                                    <Send size={18} />
                                </>
                            )}
                        </button>

                        {status && (
                            <div
                                className={`text-center text-sm p-3 rounded-lg ${status.success ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"
                                    }`}
                            >
                                {status.message}
                            </div>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
