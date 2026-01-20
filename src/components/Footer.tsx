"use client";

import Link from "next/link";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { label: "Features", href: "#features" },
            { label: "Security", href: "#security" },
            { label: "Download", href: "#" },
            { label: "Pricing", href: "#" },
        ],
        company: [
            { label: "About Us", href: "#about" },
            { label: "Careers", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Press Kit", href: "#" },
        ],
        support: [
            { label: "Help Center", href: "#" },
            { label: "Contact Us", href: "#contact" },
            { label: "Community", href: "#" },
            { label: "Status", href: "#" },
        ],
        legal: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Cookie Policy", href: "#" },
            { label: "HIPAA Notice", href: "#" },
        ],
    };

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
    ];

    return (
        <footer id="contact" className="bg-slate-900 text-slate-300">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Heart className="w-8 h-8 text-[#E11D48]" fill="currentColor" />
                            <span className="text-2xl font-bold text-white">RED</span>
                        </Link>
                        <p className="text-slate-400 mb-6 max-w-sm">
                            Reach. Educate. Deliver. A compassionate healthcare platform empowering
                            individuals living with HIV through technology and community support.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a href="mailto:support@red-health.app" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                                <Mail className="w-5 h-5 text-[#E11D48]" />
                                <span>support@red-health.app</span>
                            </a>
                            <a href="tel:+1-800-RED-CARE" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                                <Phone className="w-5 h-5 text-[#E11D48]" />
                                <span>1-800-RED-CARE</span>
                            </a>
                            <div className="flex items-center gap-3 text-slate-400">
                                <MapPin className="w-5 h-5 text-[#E11D48]" />
                                <span>Manila, Philippines</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-[#E11D48] hover:text-white transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm text-center md:text-left">
                            © {currentYear} RED Health Technologies. All rights reserved.
                        </p>
                        <p className="text-slate-500 text-sm text-center md:text-right max-w-lg">
                            <strong className="text-slate-400">Privacy Disclaimer:</strong> RED is committed to protecting your privacy.
                            All personal health information is encrypted and stored in compliance with HIPAA regulations.
                            We never sell or share your data with third parties.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
