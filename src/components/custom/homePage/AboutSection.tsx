import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white text-black">
      <div className="container max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            About <span className="text-[#E30613]">Us</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed max-w-xl">
            We&#39;re not just another test prep platform. At Lucid English
            IELTS, we combine expert guidance, practical strategies, and a deep
            understanding of the IELTS exam to help students around the world
            succeed.
          </p>
          <p className="mt-4 text-base text-gray-600">
            Join thousands of students who have boosted their band scores with
            our support. Learn more about our story, mission, and the team
            behind the scenes.
          </p>
          <Link href="/about">
            <Button
              variant="destructive"
              className="mt-6 px-8 text-white hover:bg-[#c1000f]"
            >
              Learn More
            </Button>
          </Link>
        </div>

        <div className="w-full h-64 md:h-96 bg-gray-100 rounded-xl shadow-lg overflow-hidden">
          <Image
            src="/images/img-1.png"
            alt="About Preview"
            width={500}
            height={500}
            priority
            className="w-auto h-auto object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
