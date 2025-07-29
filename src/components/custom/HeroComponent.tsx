import React from 'react'
import { Button } from "@/components/ui/button";
import HomePageForm from "@/components/custom/HomePageForm";
const HeroComponent = () => {
  return (
    <section className='bg-[url("/images/img-1.png")] bg-cover bg-center h-screen relative w-full  bg-black/50 z-0 mt-[5.5rem]'>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
      <div className="flex  items-center justify-center h-full text-white z-10 relative container">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className=" text-center lg:text-start ">
            <h1 className="text-2xl font-bold md:text-7xl">
              <span className="text-[#E30613]"> Master</span> the IELTS Exam
              with Confidence
            </h1>
            <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-lg">
              Learn how to listen, read, speak, and write like a pro — all from
              the comfort of your home.
            </p>
            <div className=" mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 ">
              <Button
                size="lg"
                className=" bg-[#E30613] text-white hover:bg-[#E30613]/90 w-full sm:w-auto"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                className=" bg-white text-black hover:bg-gray-200 w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
          <HomePageForm/>
        </div>
      </div>
    </section>
  );
}

export default HeroComponent