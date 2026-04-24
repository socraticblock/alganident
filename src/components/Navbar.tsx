"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/LanguageContext";

import Image from "next/image";

export function Navbar() {
  const { t, language, setLanguage } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t.nav.home, href: "#" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.specialists, href: "#specialists" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        isScrolled ? "py-4 glass shadow-md" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow flex items-center justify-center p-1">
            <Image
              src="/alganident-logo.png"
              alt="Algani Dent Logo"
              width={56}
              height={56}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl md:text-2xl font-display font-black text-blue-600 tracking-tight">
            ალგანი დენტი
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Language Toggle */}
          <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200">
            <button
              onClick={() => setLanguage("ka")}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-bold transition-all",
                language === "ka" ? "bg-white text-blue-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
              )}
            >
              GE
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-bold transition-all",
                language === "en" ? "bg-white text-blue-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
              )}
            >
              EN
            </button>
          </div>

          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
            {t.nav.book}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === "ka" ? "en" : "ka")}
            className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-full text-blue-600"
          >
            <Globe size={20} />
          </button>
          <button
            className="text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white absolute top-full left-0 right-0 border-b border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-center font-semibold shadow-lg shadow-blue-600/20">
                {t.nav.book}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
