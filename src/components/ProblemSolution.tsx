"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, CheckCircle, Users, BookOpen, Shield, TrendingUp } from "lucide-react";

export default function ProblemSolution() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const problems = [
        {
            icon: AlertTriangle,
            title: "Limited Access",
            description: "Many individuals lack access to consistent HIV care and education resources.",
        },
        {
            icon: AlertTriangle,
            title: "Stigma & Isolation",
            description: "Social stigma prevents people from seeking help and connecting with support networks.",
        },
        {
            icon: AlertTriangle,
            title: "Medication Adherence",
            description: "Without proper tracking, maintaining medication schedules becomes challenging.",
        },
    ];

    const solutions = [
        {
            icon: BookOpen,
            title: "Gamified Learning",
            description: "Engaging, bite-sized educational modules that reward progress and make learning enjoyable.",
            color: "from-blue-500 to-blue-600",
        },
        {
            icon: Shield,
            title: "Secure Tracking",
            description: "Private health tracking with end-to-end encryption to monitor your wellness journey safely.",
            color: "from-[#E11D48] to-[#be123c]",
        },
        {
            icon: Users,
            title: "Community Support",
            description: "Anonymous peer support groups and 24/7 access to healthcare professionals.",
            color: "from-emerald-500 to-emerald-600",
        },
    ];

    return (
        <section id="about" ref={ref} className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 lg:mb-24"
                >
                    <span className="inline-block text-[#E11D48] font-semibold text-sm uppercase tracking-wider mb-4">
                        The Challenge & Our Solution
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Bridging the Gap in{" "}
                        <span className="text-[#E11D48]">HIV Care</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We understand the challenges. RED is designed to address the real barriers
                        people face in accessing quality HIV care and support.
                    </p>
                </motion.div>

                {/* Problems Section */}
                <div className="mb-20">
                    <motion.h3
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl font-semibold text-slate-500 mb-8 flex items-center gap-3"
                    >
                        <span className="w-12 h-0.5 bg-slate-300" />
                        The Challenges
                    </motion.h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {problems.map((problem, index) => (
                            <motion.div
                                key={problem.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
                            >
                                <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mb-4">
                                    <problem.icon className="w-6 h-6 text-slate-500" />
                                </div>
                                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                                    {problem.title}
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {problem.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Arrow Transition */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex justify-center mb-20"
                >
                    <div className="relative">
                        <div className="w-16 h-16 bg-[#E11D48] rounded-full flex items-center justify-center shadow-xl shadow-[#E11D48]/25">
                            <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -inset-3 bg-[#E11D48]/20 rounded-full animate-ping" />
                    </div>
                </motion.div>

                {/* Solutions Section */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="text-xl font-semibold text-[#E11D48] mb-8 flex items-center gap-3"
                    >
                        <span className="w-12 h-0.5 bg-[#E11D48]" />
                        How RED Helps
                    </motion.h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                className="group relative bg-white rounded-2xl p-6 shadow-lg border border-slate-100 card-hover overflow-hidden"
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                                    <solution.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-[#E11D48] transition-colors">
                                    {solution.title}
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {solution.description}
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-[#E11D48] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Available in RED</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
