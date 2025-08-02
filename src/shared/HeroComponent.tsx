"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
}: HeroSectionProps) => {
  return (
    <section className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden mt-[5.6rem]">
      <Image
        src={backgroundImage}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center text-white px-6">
        <div>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-3xl mx-auto text-lg"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
