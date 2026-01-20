"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Eye, Server, CheckCircle, FileCheck } from "lucide-react";

export default function TrustSecurity() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const securityFeatures = [
        {
            icon: Lock,
            title: "End-to-End Encryption",
            description: "All your data is encrypted in transit and at rest using military-grade AES-256 encryption.",
        },
        {
            icon: Eye,
            title: "Zero-Knowledge Architecture",
            description: "We can't read your data. Only you have the keys to access your personal health information.",
        },
        {
            icon: Server,
            title: "Secure Cloud Storage",
            description: "Data stored in HIPAA-compliant data centers with 99.99% uptime and regular security audits.",
        },
        {
            icon: FileCheck,
            title: "Regular Audits",
            description: "Third-party security assessments and penetration testing to ensure maximum protection.",
        },
    ];

    const certifications = [
        { name: "HIPAA Compliant", icon: "🏥" },
        { name: "SOC 2 Type II", icon: "🔐" },
        { name: "GDPR Ready", icon: "🇪🇺" },
        { name: "ISO 27001", icon: "✅" },
    ];

    return (
        <section id="security" ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Gradient Orb */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E11D48]/10 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-[#E11D48] font-semibold text-sm uppercase tracking-wider mb-4">
                            Trust & Security
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Your Privacy is{" "}
                            <span className="text-[#E11D48]">Our Priority</span>
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                            We understand the sensitivity of health data. RED is built from the ground up
                            with privacy and security at its core. Your information is protected by
                            the same standards used by leading healthcare institutions.
                        </p>

                        {/* Security Features List */}
                        <div className="space-y-4">
                            {securityFeatures.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="w-10 h-10 bg-[#E11D48]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <feature.icon className="w-5 h-5 text-[#E11D48]" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                                        <p className="text-slate-400 text-sm">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Certifications */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-10"
                        >
                            <p className="text-slate-400 text-sm mb-4">Trusted Certifications:</p>
                            <div className="flex flex-wrap gap-3">
                                {certifications.map((cert) => (
                                    <div
                                        key={cert.name}
                                        className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                                    >
                                        <span className="text-lg">{cert.icon}</span>
                                        <span className="text-white text-sm font-medium">{cert.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Shield Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            {/* Animated Shield */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.02, 1],
                                    rotate: [0, 1, -1, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative z-10"
                            >
                                <div className="w-64 h-72 sm:w-80 sm:h-96 relative">
                                    {/* Shield Shape */}
                                    <svg viewBox="0 0 200 240" className="w-full h-full" fill="none">
                                        <defs>
                                            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#E11D48" />
                                                <stop offset="100%" stopColor="#be123c" />
                                            </linearGradient>
                                            <filter id="glow">
                                                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                                <feMerge>
                                                    <feMergeNode in="coloredBlur" />
                                                    <feMergeNode in="SourceGraphic" />
                                                </feMerge>
                                            </filter>
                                        </defs>
                                        <path
                                            d="M100 10 L180 50 L180 130 C180 180 140 220 100 230 C60 220 20 180 20 130 L20 50 Z"
                                            fill="url(#shieldGradient)"
                                            filter="url(#glow)"
                                            className="drop-shadow-2xl"
                                        />
                                        <path
                                            d="M100 30 L160 60 L160 130 C160 170 130 200 100 210 C70 200 40 170 40 130 L40 60 Z"
                                            fill="rgba(255,255,255,0.1)"
                                        />
                                        {/* Checkmark */}
                                        <path
                                            d="M70 120 L90 140 L130 100"
                                            stroke="white"
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                        />
                                    </svg>
                                </div>
                            </motion.div>

                            {/* Orbiting Elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <Lock className="w-4 h-4 text-[#E11D48]" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <div className="absolute bottom-10 right-0 translate-x-4">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Pulse Rings */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-64 h-72 sm:w-80 sm:h-96 border-2 border-[#E11D48] rounded-full absolute"
                                />
                                <motion.div
                                    animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                    className="w-64 h-72 sm:w-80 sm:h-96 border-2 border-[#E11D48] rounded-full absolute"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
