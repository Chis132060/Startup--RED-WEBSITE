"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Heart } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#features", label: "Features" },
        { href: "#security", label: "Security" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <Heart
                                className={`w-8 h-8 transition-colors duration-300 ${isScrolled ? "text-[#E11D48]" : "text-white"
                                    } group-hover:text-[#be123c]`}
                                fill="currentColor"
                            />
                            <motion.div
                                className="absolute inset-0 bg-[#E11D48]/20 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </div>
                        <span
                            className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-slate-900" : "text-white"
                                }`}
                        >
                            RED
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-300 hover:text-[#E11D48] ${isScrolled ? "text-slate-600" : "text-white/90"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-[#E11D48] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:bg-[#be123c] transition-colors duration-300"
                        >
                            <Download className="w-4 h-4" />
                            Download App
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-slate-900" : "text-white"
                            }`}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-slate-600 hover:text-[#E11D48] font-medium py-2"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <button className="w-full flex items-center justify-center gap-2 bg-[#E11D48] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#be123c] transition-colors">
                                <Download className="w-4 h-4" />
                                Download App
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
