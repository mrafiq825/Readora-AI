"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-(--bg-primary) border-t border-gray-200 mt-20">
      <div className="wrapper py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex gap-0.5 items-center mb-3">
              <Image
                src="/assets/logo.png"
                alt="Readora"
                width={42}
                height={26}
              />
              <span className="logo-text">Readora</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Your AI-powered voice companion for documents.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-800 text-sm"
              >
                Home
              </Link>
              <Link
                href="/books/new"
                className="text-gray-600 hover:text-gray-800 text-sm"
              >
                Upload Document
              </Link>
              <Link
                href="/subscriptions"
                className="text-gray-600 hover:text-gray-800 text-sm"
              >
                Pricing
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
                Terms of Service
              </a>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-800 text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            &copy; {currentYear} Readora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
