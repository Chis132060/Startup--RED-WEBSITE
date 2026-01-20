"use client";

import { motion } from "framer-motion";
import { ArrowDown, Smartphone } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(225, 29, 72, 0.3) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E11D48]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E11D48]/10 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-[#E11D48]/10 border border-[#E11D48]/20 rounded-full px-4 py-2 mb-6"
                        >
                            <span className="w-2 h-2 bg-[#E11D48] rounded-full animate-pulse" />
                            <span className="text-[#E11D48] text-sm font-medium">
                                Compassionate Healthcare Technology
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                        >
                            <span className="block">Reaching people.</span>
                            <span className="block text-[#E11D48]">Educating minds.</span>
                            <span className="block">Delivering care.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            RED is a compassionate healthcare platform empowering individuals
                            living with HIV through education, secure health tracking, and
                            community support. Your journey to better health starts here.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center justify-center gap-3 bg-[#E11D48] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#E11D48]/25 hover:bg-[#be123c] transition-all duration-300"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                Download for iOS
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                </svg>
                                Download for Android
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="mt-12 flex items-center justify-center lg:justify-start gap-8"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">50K+</div>
                                <div className="text-sm text-slate-400">Active Users</div>
                            </div>
                            <div className="w-px h-12 bg-slate-600" />
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">98%</div>
                                <div className="text-sm text-slate-400">Satisfaction</div>
                            </div>
                            <div className="w-px h-12 bg-slate-600" />
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">24/7</div>
                                <div className="text-sm text-slate-400">Support</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* App Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Phone Frame */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                <div className="w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-black/50 border border-slate-700">
                                    <div className="w-full h-full bg-gradient-to-b from-white to-slate-50 rounded-[2.5rem] overflow-hidden relative">
                                        {/* Phone Screen Content */}
                                        <div className="absolute inset-0 flex flex-col">
                                            {/* Status Bar */}
                                            <div className="flex items-center justify-between px-6 py-3 bg-[#E11D48]">
                                                <span className="text-white text-xs font-medium">9:41</span>
                                                <div className="flex items-center gap-1">
                                                    <div className="w-4 h-2 bg-white/80 rounded-sm" />
                                                    <div className="w-6 h-3 border border-white/80 rounded-sm">
                                                        <div className="w-4 h-full bg-white/80 rounded-sm" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* App Header */}
                                            <div className="bg-[#E11D48] px-6 pb-8 pt-4">
                                                <h3 className="text-white text-xl font-bold">Welcome back!</h3>
                                                <p className="text-white/80 text-sm mt-1">Your health journey continues</p>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 px-4 py-4 space-y-4">
                                                {/* Medication Card */}
                                                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-[#E11D48]/10 rounded-full flex items-center justify-center">
                                                            <div className="w-5 h-5 bg-[#E11D48] rounded-full" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="text-sm font-semibold text-slate-800">Medication Reminder</div>
                                                            <div className="text-xs text-slate-500">Take at 8:00 PM</div>
                                                        </div>
                                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Progress Card */}
                                                <div className="bg-gradient-to-r from-[#E11D48] to-[#be123c] rounded-2xl p-4 text-white">
                                                    <div className="text-sm font-medium mb-2">Learning Progress</div>
                                                    <div className="flex items-end justify-between">
                                                        <div>
                                                            <div className="text-3xl font-bold">78%</div>
                                                            <div className="text-xs text-white/80">Module 3 of 10</div>
                                                        </div>
                                                        <div className="w-16 h-16 border-4 border-white/30 rounded-full flex items-center justify-center">
                                                            <span className="text-lg font-bold">🏆</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Quick Actions */}
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div className="bg-slate-50 rounded-xl p-3 text-center">
                                                        <div className="text-2xl mb-1">💬</div>
                                                        <div className="text-xs font-medium text-slate-700">Chat</div>
                                                    </div>
                                                    <div className="bg-slate-50 rounded-xl p-3 text-center">
                                                        <div className="text-2xl mb-1">📚</div>
                                                        <div className="text-xs font-medium text-slate-700">Learn</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom Nav */}
                                            <div className="flex items-center justify-around py-4 bg-white border-t border-slate-100">
                                                <div className="w-6 h-6 bg-[#E11D48] rounded-lg" />
                                                <div className="w-6 h-6 bg-slate-300 rounded-lg" />
                                                <div className="w-6 h-6 bg-slate-300 rounded-lg" />
                                                <div className="w-6 h-6 bg-slate-300 rounded-lg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -left-8 top-1/4 bg-white rounded-2xl p-4 shadow-xl z-20"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-slate-800">Secured</div>
                                        <div className="text-xs text-slate-500">HIPAA Compliant</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -right-4 bottom-1/3 bg-white rounded-2xl p-4 shadow-xl z-20"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-[#E11D48]/10 rounded-full flex items-center justify-center">
                                        <Smartphone className="w-5 h-5 text-[#E11D48]" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-slate-800">24/7</div>
                                        <div className="text-xs text-slate-500">Expert Chat</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-white/60"
                >
                    <span className="text-sm">Scroll to explore</span>
                    <ArrowDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}
