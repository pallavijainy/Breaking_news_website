"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: "Home", href: "/" },
    { key: "Politics", href: "/politics" },
    { key: "Sports", href: "/sports" },
    { key: "Trending", href: "/business" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b-4 border-red-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Hindustan Pragati Samachar"
              width={60}
              height={60}
              className="rounded-md"
            />
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-red-600">
                AAJ KA SAMAACHAR
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your Daily Dose of News
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors"
              >
                {item.key}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.key}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
