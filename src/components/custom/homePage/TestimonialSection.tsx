"use client"

import React from 'react'
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from 'next/image';
import { testimonials } from '@/lib/data';
const TestimonialSection = () => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
      {
        loop: true,
        mode: "free-snap",
        slides: { perView: 2, spacing: 20 },
        breakpoints: {
          "(max-width: 500px)": {
            slides: { perView: 1, spacing: 20 },
          },
          "(min-width: 1024px)": {
            slides: { perView: 3, spacing: 20 },
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
    <section className="py-16 bg-gray-50 text-center ">
      <h2 className="text-3xl font-bold mb-10">What Our Students Say</h2>
      <div ref={sliderRef} className="keen-slider container">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="keen-slider__slide p-6 border rounded shadow-sm bg-white"
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <p className="italic">&ldquo;{testimonial.quote}&rdquo;</p>
            <h4 className="mt-4 font-semibold">– {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection