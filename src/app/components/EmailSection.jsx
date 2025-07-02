// components/EmailSection.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const EmailSection = () => {
  const formRef = useRef();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,     // e.g., service_123abc
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,    // e.g., template_xyz456
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY     // e.g., 6uK3ZyPo_xxxxx
      );

      console.log(result.text);
      setEmailSubmitted(true);
      e.target.reset();
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isClient) return null;

  return (
    <motion.section
      id="contact"
      className="grid md:grid-cols-2 my-20 py-20 px-6 sm:px-12 gap-8 items-center bg-[#0D1117] rounded-xl shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <motion.div custom={1}>
        <h3 className="text-3xl font-bold text-white mb-4">Let’s Connect</h3>
        <p className="text-[#C9D1D9] mb-6 max-w-md leading-relaxed">
          I'm currently open to new collaborations. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>
        <div className="flex space-x-4">
          <Link href="https://github.com/RohitPal4/" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" className="w-8 h-8 hover:scale-125 transition-transform duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/rohit-pal-4a36b5269/" target="_blank">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" className="w-8 h-8 hover:scale-125 transition-transform duration-300" />
          </Link>
        </div>
      </motion.div>

      <motion.div custom={2}>
        {emailSubmitted ? (
          <motion.div
            className="p-6 bg-green-900/20 border border-green-500/30 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl mb-4">✅</div>
            <p className="text-green-400 text-lg font-semibold mb-2">Message Sent Successfully!</p>
            <p className="text-green-300 text-sm mb-4">Thank you for reaching out. I’ll get back to you soon.</p>
            <button
              onClick={() => setEmailSubmitted(false)}
              className="text-green-400 hover:text-green-300 underline text-sm"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            ref={formRef}
            className="flex flex-col bg-[#161B22] p-6 rounded-xl shadow-inner"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {error && (
              <div className="mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm">❌ {error}</p>
              </div>
            )}

            <label htmlFor="user_email" className="text-sm text-white mb-1">Your email</label>
            <input
              name="user_email"
              type="email"
              required
              disabled={isLoading}
              placeholder="e.g. you@email.com"
              className="mb-4 bg-[#0D1117] border border-gray-700 text-white placeholder-[#586069] text-sm rounded-lg p-3 disabled:opacity-60"
            />

            <label htmlFor="subject" className="text-sm text-white mb-1">Subject</label>
            <input
              name="subject"
              type="text"
              required
              disabled={isLoading}
              placeholder="Just saying hi"
              className="mb-4 bg-[#0D1117] border border-gray-700 text-white placeholder-[#586069] text-sm rounded-lg p-3 disabled:opacity-60"
            />

            <label htmlFor="message" className="text-sm text-white mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              disabled={isLoading}
              placeholder="What’s on your mind?"
              className="mb-4 bg-[#0D1117] border border-gray-700 text-white placeholder-[#586069] text-sm rounded-lg p-3 disabled:opacity-60"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        )}
      </motion.div>
    </motion.section>
  );
};

export default EmailSection;
