"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import HomePageForm from "@/components/custom/homePage/HomePageForm";

const HeroComponent = () => {
  return (
    <section className="relative bg-black/40 h-full lg:h-screen w-full mt-[5.5rem] pt-4">
      {/* Background Image */}
      <Image
        src="/images/img-1.png"
        alt="IELTS Training Background"
        fill
        priority
        className="-z-20 object-cover object-top"
      />

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/10 -z-10" />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/20 -z-10" />

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-10 mt-7 md:mt-14 container">
        <div className=" relative z-10 text-white text-center lg:text-start px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold md:text-6xl leading-tight"
          >
            <span className="text-[#E30613]">Master</span> the IELTS Exam with
            Confidence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-gray-300"
          >
            Achieve your dream score with our expert tutors, comprehensive
            resources, and personalized support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center  gap-4"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="destructive"
                className="transition duration-300 w-full sm:w-auto"
              >
                Get Started
              </Button>
            </Link>

            <Link href="/about" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="bg-muted text-black hover:bg-gray-200 w-full sm:w-auto"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 text-sm text-gray-300"
          >
            Trusted by 2,000+ students worldwide
          </motion.p>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.5,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2,
            }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl animate-bounce"
          >
            ↓
          </motion.div>
        </div>
        <HomePageForm />
      </div>
    </section>
  );
};

export default HeroComponent;
