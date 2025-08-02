"use client";

import React from "react";
import PageLayout from "@/layout/PageLayout";
import HeroComponent from "@/shared/HeroComponent";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { testimonials, ieltsTypes } from "@/lib/data";
import { TriangleAlertIcon, Binoculars, Brain, Rocket } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "free-snap",
      slides: { perView: 2, spacing: 20 },
      breakpoints: {
        "(max-width: 500px)": {
          slides: { perView: 1, spacing: 20 },
        },
        "(min-width: 1440px)": {
          slides: { perView: 4, spacing: 30 },
        },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <PageLayout>
      <main className="min-h-screen bg-white text-gray-900">
        <HeroComponent
          title="About Our IELTS Training Brand"
          subtitle="We equip students with the skills, strategies, and confidence to pass the IELTS exam on their first try."
          backgroundImage="/images/img-4.png"
        />

        <section className="container py-16 px-4 mt-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="/images/img-4.png"
              alt="Brand Vision"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold mb-5 text-primary">
                Our Story
              </h2>
              <div className="space-y-2 ">
                <p className="">
                  Lucid English IELTS offers practical and result-oriented
                  classes with tips and strategies for tackling challenging
                  questions in English exams such as IELTS, TOEFL, UTME, SSCE,
                  SELT, CELPIP, CHECKPOINT, GCSE, IGCSE. We also host
                  interactive sessions where guided answers to past questions
                  are provided, giving learners clear insights into what to
                  expect and how to excel.
                </p>
                <p>
                  For over eight years, we have trained individuals from various
                  professional and academic backgrounds, including medical
                  practitioners, tech professionals, adult learners, and school
                  students, many of whom are preparing to relocate abroad for
                  studies or work. Our goal is to equip every learner with the
                  confidence and competence to use English effectively in
                  real-life and academic settings.
                </p>
                <p>
                  Lucid English IELTS is more than just a learning platform. It
                  is a community for both native and non-native English speakers
                  who desire to master the language. We are committed to helping
                  learners develop strong communication skills, deepen their
                  understanding of English, and prepare successfully for both
                  national and international examinations.
                </p>
                <p>
                  Our videos and materials address diverse learner needs.
                  Whether you&#39;re a complete beginner or an advanced student,
                  you’ll find relevant, level-appropriate content. We are also
                  learner-focused, topics suggested by our audience are welcomed
                  and often featured in future lessons.
                </p>
                <p>
                  Lucid English IELTS is for you. Kindly subscribe to our{" "}
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-destructive font-medium"
                  >
                    YouTube
                  </a>{" "}
                  channel, like our videos, and follow our{" "}
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-destructive font-medium"
                  >
                    Facebook
                  </a>{" "}
                  and{" "}
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-destructive font-medium"
                  >
                    Instagram
                  </a>{" "}
                  page to stay updated with new content and live classes
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#fef6f0] via-[#fde2dd] to-[#fcd6d2] py-16 px-4 my-10">
          <div className="container grid md:grid-cols-3 gap-10 text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Rocket
                className="mx-auto text-4xl text-pink-500 mb-3"
                size={60}
              />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p>
                To make IELTS success simple and achievable for all learners.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Binoculars
                className="mx-auto text-4xl text-blue-500 mb-3"
                size={60}
              />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p>To be Africa’s most trusted IELTS preparation hub.</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Brain
                className="mx-auto text-4xl text-green-500 mb-3"
                size={60}
              />
              <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
              <p>
                Personalized feedback, real-life test simulations, and
                expert-led lessons.
              </p>
            </motion.div>
          </div>
        </section>

        <motion.section
          className="space-y-12 scroll-mt-24 my-10 scroll-smooth"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.h1
            className="text-4xl font-bold text-center text-primary"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About IELTS
          </motion.h1>
          <div className="container grid md:grid-cols-2 gap-10 mt-5">
            {ieltsTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white/60 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/30"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-xl font-semibold">{type.title}</h2>
                <p className="mt-2 text-gray-700">{type.description}</p>
                <p className="mt-2 font-medium text-destructive">
                  Typical cost: {type.cost}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="bg-yellow-50 p-6 rounded-lg shadow-md scroll-mt-24 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="container ">
            <div className="">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <TriangleAlertIcon className="inline text-yellow-600" />
                Disclaimer
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                Lucid English IELTS is not an official IELTS test centre,
                affiliated institution, or examination body. We do not conduct
                the IELTS exam, nor do we represent the British Council, IDP, or
                Cambridge English. Our role is purely educational. We offer
                preparatory training, expert guidance, and learning resources to
                help candidates perform at their best during the IELTS test.
                <br />
                <br />
                All IELTS exam registrations must be made directly through
                authorized test providers in your region. Test fees, locations,
                and dates are determined solely by these providers and may vary
                depending on your country, test centre, and currency
                fluctuations.
                <br />
                <br />
                While we aim to keep all information up-to-date and accurate, we
                encourage all students to verify test-related details directly
                from official sources. Lucid English IELTS is committed to
                transparency and integrity in helping you prepare confidently
                and effectively for your exam.
              </p>
            </div>
          </div>
        </motion.section>

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
