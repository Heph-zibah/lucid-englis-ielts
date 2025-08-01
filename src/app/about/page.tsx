"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PageLayout from "@/layout/PageLayout";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    name: "Amina T.",
    quote:
      "I passed my IELTS with an overall band 8! The lessons were so practical and easy to follow.",
    image: "/images/img-1.png",
  },
  {
    name: "John O.",
    quote:
      "Thanks to the course, I improved my writing band from 6.0 to 7.5 in just a few weeks!",
    image: "/images/img-2.png",
  },
  {
    name: "Chioma K.",
    quote:
      "Instructors are very supportive. I loved the mock tests and review sessions!",
    image: "/images/img-3.png",
  },
];

const About = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: { perView: 2, spacing: 20 },
  });

  return (
    <PageLayout>
      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section with background image */}
        <section className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden mt-[5.6rem]">
          <Image
            src="/images/img-4.png"
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
                About Our IELTS Training Brand
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 max-w-3xl mx-auto text-lg"
              >
                We equip students with the skills, strategies, and confidence to
                pass the IELTS exam on their first try.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="container py-16 px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="/images/img-4.png"
              alt="Brand Vision"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg leading-relaxed">
                Founded by passionate educators, we believe that quality IELTS
                preparation should be accessible, flexible, and effective. With
                years of experience and proven strategies, we’ve helped hundreds
                of students achieve their desired scores and unlock
                opportunities abroad.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, and Approach */}
        <section className="bg-gray-100 py-16 px-4">
          <div className="container grid md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">🎯 Our Mission</h3>
              <p>
                To make IELTS success simple and achievable for all learners.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🌍 Our Vision</h3>
              <p>To be Africa’s most trusted IELTS preparation hub.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📘 Our Approach</h3>
              <p>
                Personalized feedback, real-life test simulations, and
                expert-led lessons.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Slider */}
        <section className="container py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Student Success Stories
          </h2>
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="keen-slider__slide bg-white rounded-lg shadow-md p-6 border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                </div>
                <p className="text-gray-700 italic">“{testimonial.quote}”</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default About;
