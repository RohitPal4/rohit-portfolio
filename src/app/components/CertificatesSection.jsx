"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const CertificatesSection = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const certificates = [
        {
            id: 1,
            title: "AI-ML Vertual Internship",
            provider: "AWS",
            delay: 0.1,
            image: "/certificates/aiml-web-dev.jpg", // Add your certificate image path
            description: "Comprehensive virtual internship focused on Artificial Intelligence and Machine Learning using AWS services and tools."
        },
        {
            id: 2,
            title: "Full-Stack Web Development",
            provider: "AICTE",
            delay: 0.2,
            image: "/certificates/fullstack-web-dev.jpg",
            description: "Complete web development course covering frontend and backend technologies"
        },
        {
            id: 3,
            title: "Cloud Virtual Internship",
            provider: "AWS Academy & EduSkills",
            delay: 0.3,
            image: "/certificates/cloud-web-dev.jpg",
            description: "Finished 10-week AWS Cloud Internship, gaining hands-on experience with cloud services."
        },
        {
            "id": 4,
            "title": "IBM SkillsBuild and CSRBOX Academic Internship",
            "provider": "CSRBOX Foundation",
            "delay": 0.4,
            "image": "/certificates/csrbox-web-dev.jpg",
            "description": "Completed Data Analytics internship (June-July 2023)."
        },
        {
            "id": 5,
            "title": "CCNA: Introduction to Networks",
            "provider": "Cisco Networking Academy (GU)",
            "delay": 0.5,
            "image": "/certificates/cisco-web-dev.jpg",
            "description": "Completed Cisco's foundational networking course."
        },
        {
            "id": 6,
            "title": "Software Engineering",
            "provider": "NPTEL (IIT Kharagpur)",
            "delay": 0.6,
            "image": "/certificates/software-engineering-web-dev.jpg",
            "description": "Certified in Software Engineering by IIT Kharagpur (NPTEL)."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: {
                duration: 0.2
            }
        }
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    const openCertificate = (certificate) => {
        setSelectedCertificate(certificate);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeCertificate = () => {
        setSelectedCertificate(null);
        document.body.style.overflow = 'unset'; // Restore scrolling
    };

    // Handle escape key to close modal
    React.useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && selectedCertificate) {
                closeCertificate();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [selectedCertificate]);

    return (
        <>
            <section className="py-16 px-4 relative">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-purple-500">
                            my
                        </span>
                        <span className="text-white">Certifications</span>
                    </h2>
                    <motion.p
                        className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Continuous learning and professional development through industry-recognized certifications
                    </motion.p>
                </motion.div>

                {/* Certificates Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="relative group"
                        >
                            {/* Glow effect behind card */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-green-400 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"
                                aria-hidden="true"
                            />

                            {/* Certificate Card */}
                            <div className="bg-[#181818] border border-[#33353F] rounded-2xl p-6 h-full flex flex-col relative overflow-hidden">
                                {/* Background pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl -translate-y-8 translate-x-8" />

                                <div className="relative z-10 flex-grow">
                                    <h3 className="text-white text-xl font-bold mb-2 leading-tight">
                                        {cert.title}
                                    </h3>
                                    <p className="text-[#ADB7BE] text-sm mb-4">
                                        ~ {cert.provider}
                                    </p>
                                    <p className="text-[#ADB7BE] text-xs mb-6 opacity-80">
                                        {cert.description}
                                    </p>
                                </div>

                                {/* View Certificate Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => openCertificate(cert)}
                                    className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white font-semibold shadow-lg transition-all duration-300 relative z-10"
                                >
                                    View Certificate
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                    className="absolute top-1/4 left-10 w-2 h-2 bg-blue-500 rounded-full opacity-60"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    aria-hidden="true"
                />
                <motion.div
                    className="absolute top-3/4 right-16 w-3 h-3 bg-green-400 rounded-full opacity-40"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    aria-hidden="true"
                />
            </section>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCertificate && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={closeCertificate}
                    >
                        <motion.div
                            className="bg-[#181818] border border-[#33353F] rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={closeCertificate}
                                className="absolute top-4 right-4 w-8 h-8 bg-red-500/20 hover:bg-red-500/30 rounded-full flex items-center justify-center text-red-400 hover:text-red-300 transition-colors z-10"
                                aria-label="Close certificate view"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>

                            {/* Certificate Header */}
                            <div className="mb-6 pr-8">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                    {selectedCertificate.title}
                                </h3>
                                <p className="text-[#ADB7BE] text-lg">
                                    Issued by {selectedCertificate.provider}
                                </p>
                                <p className="text-[#ADB7BE] text-sm mt-2 opacity-80">
                                    {selectedCertificate.description}
                                </p>
                            </div>

                            {/* Certificate Image */}
                            <div className="relative bg-white rounded-lg p-4 shadow-2xl">
                                <div className="relative aspect-[4/3] w-full">
                                    <Image
                                        src={selectedCertificate.image}
                                        alt={`${selectedCertificate.title} Certificate`}
                                        fill
                                        className="object-contain rounded"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                        onError={(e) => {
                                            // Fallback for missing images
                                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='16' fill='%23666' text-anchor='middle' dy='0.3em'%3ECertificate Image%3C/text%3E%3C/svg%3E";
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Download Button */}
                            <motion.div
                                className="mt-6 flex flex-col sm:flex-row gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href={selectedCertificate.image}
                                    download={`${selectedCertificate.title.replace(/\s+/g, '-')}-Certificate.jpg`}
                                    className="flex-1 py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white font-semibold text-center shadow-lg transition-all duration-300"
                                >
                                    Download Certificate
                                </motion.a>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={closeCertificate}
                                    className="flex-1 py-3 px-6 rounded-lg border border-[#33353F] text-[#ADB7BE] hover:text-white hover:border-white/20 font-semibold transition-all duration-300"
                                >
                                    Close
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CertificatesSection;