"use client"
import React, { useEffect, useRef } from "react";
import {
    FaLinkedin,
    FaGithub,
    FaDownload,
    FaArrowUp,
    FaCode,
    FaLightbulb,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt
} from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const textRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        if (textElement) {
            const animateText = () => {
                textElement.style.transform = "translateX(-100%)";
                textElement.style.transition = "none";
                setTimeout(() => {
                    textElement.style.transition = "transform 15s linear";
                    textElement.style.transform = "translateX(100vw)";
                }, 100);
            };

            animateText();
            const interval = setInterval(animateText, 15000);
            return () => clearInterval(interval);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="relative overflow-hidden">
            {/* Animated Text Banner */}
            <div className="relative h-20 overflow-hidden bg-gradient-to-r from-blue-500/10 via-green-500/10 to-purple-500/10 flex items-center">
                <div
                    ref={textRef}
                    className="absolute whitespace-nowrap text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 opacity-70"
                >
                    Let's Work Together • Available for Freelance • Let's Work Together • Available for Freelance •
                </div>
            </div>

            {/* Wave SVG */}
            <svg
                className="w-full h-16 md:h-24"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="rgb(34, 197, 94)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#waveGradient)"
                    d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </svg>

            {/* Main Footer */}
            <footer
                ref={footerRef}
                className="relative bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 text-white"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_70%)]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Brand Section */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                    <FaCode className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Rohit
                                </h3>
                            </div>
                            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                                Passionate developer crafting digital experiences with modern technologies. 
                                Always excited to work on innovative projects and bring ideas to life.
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="w-4 h-4" />
                                    <span>Available Worldwide</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaLightbulb className="w-4 h-4" />
                                    <span>Open to Work</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                            <ul className="space-y-3">
                                {[
                                    { href: "#", label: "Home" },
                                    { href: "#projects", label: "Projects" },
                                    { href: "#about", label: "About" },
                                    { href: "#contact", label: "Contact" }
                                ].map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-300 flex items-center gap-2 group"
                                        >
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"></span>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
                            <div className="space-y-4">
                                <a
                                    href="mailto:rp2012946@gmail.com"
                                    className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors duration-300 group"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                                        <FaEnvelope className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm">rp2012946@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                                        <FaPhone className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm">Available for consultation</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="border-t border-gray-700/50 pt-12 mb-12">
                        <div className="text-center mb-8">
                            <h4 className="text-xl font-semibold mb-4 text-white">Connect With Me</h4>
                            <div className="flex justify-center gap-6">
                                {[
                                    { href: "mailto:rp2012946@gmail.com", icon: FaEnvelope, label: "Email" },
                                    { href: "https://www.linkedin.com/in/rohit-pal-4a36b5269/", icon: FaLinkedin, label: "LinkedIn" },
                                    { href: "https://github.com/rohitpal4", icon: FaGithub, label: "GitHub" },
                                    { href: "https://x.com/", icon: FaXTwitter, label: "Twitter" }
                                ].map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative w-14 h-14 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-110 hover:-rotate-6"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {social.label}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-700/50 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="text-center md:text-left">
                                <p className="text-gray-400 text-sm mb-2">
                                    © {new Date().getFullYear()} Rohit (callmecrafter). All rights reserved.
                                </p>
                                <p className="text-xs text-gray-500">Crafted with 💜 and lots of ☕</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-xs text-gray-500 text-center">
                                    <p>💡 Always learning</p>
                                    <p>🚀 Ready to innovate</p>
                                </div>
                                <button
                                    onClick={scrollToTop}
                                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                                    aria-label="Scroll to top"
                                >
                                    <FaArrowUp className="w-4 h-4 text-white group-hover:animate-bounce" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-green-400/10 to-purple-500/10 rounded-full blur-2xl"></div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
