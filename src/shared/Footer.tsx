import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks, footerLinks } from "@/lib/data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100  text-sm text-gray-800 border-t">
      <div className="container mx-auto py-10 px-4 grid gap-10 md:grid-cols-4">
        {/* Logo and tagline */}
        <div>
          <Image
            src="/images/logo-no-bg.png"
            alt="Logo"
            width={120}
            height={120}
            className="h-auto w-auto mb-2"
          />
          <p className="text-gray-600 font-medium">
            Empowering English learners for global success.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-800">Quick Links</h4>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="hover:text-red-500 transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-800">Contact</h4>
          <p>Email: support@lucidenglish.com</p>
          <p>Phone: +234-123-456-7890</p>
        </div>

        {/* Newsletter */}
        {/* <div>
          <h4 className="font-semibold mb-3 text-gray-800">Newsletter</h4>
          <p className="mb-2 text-gray-600">Get IELTS tips and updates.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="border rounded-md px-3 py-2 w-full"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Subscribe
            </button>
          </form>
        </div> */}
      </div>

      <div className="border-t border-gray-200 py-4 flex flex-col md:flex-row justify-between items-center container mx-auto px-4 gap-4">
        <p className="text-gray-600 font-medium">
          © Lucid English IELTS {year}. All rights reserved.
        </p>

        <div className="flex gap-3">
          {socialLinks.map(({ name, href, icon: Icon, classes }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
              className={`rounded-full p-2 text-white flex items-center justify-center ${classes}`}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
