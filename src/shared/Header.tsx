"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SquareMenu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setOpenNav((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = openNav ? "hidden" : "";
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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative">
      <div>
        <div
          className={`z-20 fixed top-0 left-0 right-0 transition-all duration-300 backdrop-blur-md backdrop-saturate-150 ${
            scrolled
              ? "bg-white/90 shadow-md"
              : "bg-white/10 border-b border-white/20"
          }`}
        >
          <div className="px-5 md:px-10 lg:px-0 py-4 lg:max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex flex-col cursor-pointer">
              <Link href="/">
                <Image
                  src="/images/logo-no-bg.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="h-auto w-auto"
                />
              </Link>
            </div>
            <nav className="lg:flex gap-20 font-medium hidden text-[#003366]">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "font-bold text-red-500 border-b-2 border-b-red-400"
                      : "font-medium"
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
            <Link
              href="https://wa.me/2348139745464"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold hidden lg:block"
            >
              Get Started Now
            </Link>
            <button
              type="button"
              onClick={toggleNav}
              className="lg:hidden p-1"
              aria-label="Toggle navigation"
            >
              <SquareMenu color="#003366" size={30} />
            </button>
          </div>
        </div>

        {openNav && (
          <div className="fixed top-16 left-0 w-full h-full bg-white z-50">
            <nav className="flex flex-col gap-10 font-medium text-[#003366] items-center pt-10 h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setOpenNav(false)}
                  className={`${
                    pathname === link.href
                      ? "font-bold text-red-500"
                      : "font-medium"
                  }`}
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
