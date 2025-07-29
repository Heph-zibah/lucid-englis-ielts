"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SquareMenu } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/lib/data";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((prev) => !prev);
  };

  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openNav]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="relative">
      <div>
        <div className="z-20 fixed top-0 left-0 right-0 shadow-lg bg-white">
          <div className="px-5 md:px-10 lg:px-0 py-5 lg:max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex flex-col cursor-pointer">
              <Image
                src="/images/logo-no-bg.png"
                alt="Logo"
                width={100}
                height={100}
                className="h-auto w-auto"
              />
            </div>
            <nav className="lg:flex gap-20 font-medium hidden text-[#003366]">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="flex gap-20 font-medium"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
            <div className="lg:hidden cursor-pointer p-1" onClick={toggleNav}>
              <SquareMenu
                color="#003366"
                size={30}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        {openNav && (
          <div className="fixed top-10 left-0 w-full h-full bg-white z-50">
            <nav className="flex flex-col gap-10 font-medium text-[#003366] items-center pt-10 h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setOpenNav(false)}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
