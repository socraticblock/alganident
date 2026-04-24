"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 section-padding grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold w-fit shadow-sm">
            <Sparkles size={16} />
            <span>{t.hero.experience}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 leading-[1.1] tracking-tight">
            {t.hero.title_part1} <br />
            <span className="text-blue-600">{t.hero.title_accent}</span> {t.hero.title_part2}
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/25 active:scale-95 group">
              {t.hero.cta_primary}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all active:scale-95">
              {t.hero.cta_secondary}
            </button>
          </div>
        </motion.div>

        {/* Right Column */}
        <div className="relative flex justify-center items-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0],
              borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "50% 50% 20% 80% / 25% 80% 20% 75%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-600 to-blue-400 shadow-2xl shadow-blue-900/20"
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-premium border border-slate-100 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <span className="font-bold">25+</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{t.hero.floating_badge}</p>
                <p className="text-xs text-slate-500">{t.hero.floating_subtitle}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
