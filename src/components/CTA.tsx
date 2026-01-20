"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Star, ArrowRight } from "lucide-react";

export default function CTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-br from-[#E11D48] via-rose-600 to-[#be123c] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Rating Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
                    >
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                            ))}
                        </div>
                        <span className="text-white text-sm font-medium">4.9 Rating on App Store</span>
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Start Your Journey to{" "}
                        <span className="block sm:inline">Better Health Today</span>
                    </h2>

                    <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Join thousands of individuals who have taken control of their health with RED.
                        Download now and experience compassionate care at your fingertips.
                    </p>

                    {/* Download Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                    >
                        {/* App Store Button */}
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-xs text-white/70">Download on the</div>
                                <div className="text-lg font-bold -mt-1">App Store</div>
                            </div>
                        </motion.a>

                        {/* Google Play Button */}
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-xs text-white/70">Get it on</div>
                                <div className="text-lg font-bold -mt-1">Google Play</div>
                            </div>
                        </motion.a>
                    </motion.div>

                    {/* Additional Link */}
                    <motion.a
                        href="#"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors"
                    >
                        <span>Learn more about RED</span>
                        <ArrowRight className="w-4 h-4" />
                    </motion.a>
                </motion.div>

                {/* Floating Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { value: "50K+", label: "Downloads" },
                        { value: "4.9", label: "App Rating" },
                        { value: "15+", label: "Countries" },
                        { value: "100%", label: "Free to Use" },
                    ].map((stat, index) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                            <div className="text-white/70 text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
