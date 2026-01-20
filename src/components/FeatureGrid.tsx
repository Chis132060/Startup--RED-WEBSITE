"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    MessageCircle,
    Bell,
    HeadphonesIcon,
    BookOpen,
    Lock,
    Heart,
    Calendar,
    Users
} from "lucide-react";

export default function FeatureGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const features = [
        {
            icon: Lock,
            title: "Secure Private Messaging",
            description: "End-to-end encrypted messaging with healthcare providers. Your conversations stay completely private and protected.",
            gradient: "from-violet-500 to-purple-600",
            bgGradient: "from-violet-50 to-purple-50",
        },
        {
            icon: Bell,
            title: "Medication Reminders",
            description: "Smart, customizable reminders that adapt to your schedule. Never miss a dose with gentle, discreet notifications.",
            gradient: "from-[#E11D48] to-rose-600",
            bgGradient: "from-rose-50 to-pink-50",
        },
        {
            icon: HeadphonesIcon,
            title: "24/7 Expert Chat",
            description: "Round-the-clock access to healthcare professionals and counselors. Get answers and support whenever you need them.",
            gradient: "from-emerald-500 to-teal-600",
            bgGradient: "from-emerald-50 to-teal-50",
        },
        {
            icon: BookOpen,
            title: "Educational Content",
            description: "Curated, up-to-date information about HIV care, treatment advances, and wellness tips from medical experts.",
            gradient: "from-blue-500 to-indigo-600",
            bgGradient: "from-blue-50 to-indigo-50",
        },
        {
            icon: Calendar,
            title: "Appointment Tracking",
            description: "Keep track of all your medical appointments with automated reminders and easy rescheduling options.",
            gradient: "from-amber-500 to-orange-600",
            bgGradient: "from-amber-50 to-orange-50",
        },
        {
            icon: Users,
            title: "Community Support",
            description: "Connect with others on similar journeys through anonymous support groups and shared experiences.",
            gradient: "from-pink-500 to-rose-600",
            bgGradient: "from-pink-50 to-rose-50",
        },
        {
            icon: Heart,
            title: "Wellness Dashboard",
            description: "Track your overall health metrics, mood, and wellness goals in one beautiful, private dashboard.",
            gradient: "from-red-500 to-[#E11D48]",
            bgGradient: "from-red-50 to-rose-50",
        },
        {
            icon: MessageCircle,
            title: "AI Health Assistant",
            description: "Get instant answers to common questions with our AI-powered assistant, trained on verified medical information.",
            gradient: "from-cyan-500 to-blue-600",
            bgGradient: "from-cyan-50 to-blue-50",
        },
    ];

    return (
        <section id="features" ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <span className="inline-block text-[#E11D48] font-semibold text-sm uppercase tracking-wider mb-4">
                        Powerful Features
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Everything You Need,{" "}
                        <span className="text-[#E11D48]">In One App</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        RED combines powerful health management tools with compassionate design,
                        giving you complete control over your wellness journey.
                    </p>
                </motion.div>

                {/* Feature Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                            className="group relative"
                        >
                            <div className={`h-full bg-gradient-to-br ${feature.bgGradient} rounded-2xl p-6 border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
                                {/* Icon */}
                                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-[#E11D48] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Hover Indicator */}
                                <div className="mt-4 flex items-center gap-2 text-[#E11D48] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span>Learn more</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-slate-500 mb-4">And many more features coming soon...</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 text-[#E11D48] font-semibold hover:underline"
                    >
                        View all features
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
