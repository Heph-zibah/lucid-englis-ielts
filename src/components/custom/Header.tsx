import React from "react";
import Image from "next/image";
import {SquareMenu} from 'lucide-react'
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <header className="relative pointer-events-auto">
      <div className='bg-[url("/images/img-1.png")] bg-cover bg-center h-screen relative w-full  bg-black/50 z-0'>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

        {/* Glassmorphism navbar */}
        <div className="z-20 fixed top-0 left-0 right-0 shadow-lg">
          <div className="px-5 md:px-10 lg:px-0 py-5 lg:max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex flex-col  text-white text-xl md:text-2xl font-bold uppercase cursor-pointer">
              <p className="  flex items-center ">
                {/* backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md"> */}
                Lucid
                <Image
                  src="/images/white-logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-auto w-auto"
                />
              </p>
              <span className=" ">
                English <span className="text-[#E30613]">IELTS</span>
              </span>
            </div>
            <nav>
              <ul className="hidden lg:flex gap-20 font-medium text-white ">
                <li>Home</li>
                <li>About</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </nav>
            <div className="lg:hidden cursor-pointer p-1">
              <SquareMenu color="#fff" size={30} className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="flex  items-center justify-center h-full text-white z-10 relative px-5 md:px-10 lg:px-0 py-5 lg:max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between ">
            <div className=" text-center lg:text-start ">
              <h1 className="text-2xl font-bold md:text-7xl">
                <span className="text-[#E30613]"> Master</span> the IELTS Exam with Confidence
              </h1>
              <p className="mt-4 max-w-xl mx-auto text-lg">
                Learn how to listen, read, speak, and write like a pro — all
                from the comfort of your home.
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
            <div className=" text-center ">
              <h1 className="text-2xl font-bold md:text-7xl">
                Master the IELTS Exam with Confidence
              </h1>
              <p className="mt-4 max-w-2xl text-lg">
                Learn how to listen, read, speak, and write like a pro — all
                from the comfort of your home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
