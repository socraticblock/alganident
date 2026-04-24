"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

const specialists = [
  "ილია სირბილაშვილი",
  "მარიამ რცხილაძე",
  "მარიკა კაპანაძე",
  "ქეთი მელქაძე",
  "სალომე სისაური",
  "გია ჯანაშვილი",
  "ქეთი ჩიქოვანი",
];

export function Specialists() {
  const { t } = useTranslation();

  return (
    <section id="specialists" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-black text-slate-900 mb-4">{t.specialists.title}</h2>
          <p className="text-slate-600">{t.specialists.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-blue-50/30 transition-all group"
            >
              <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-display font-black mb-6 shadow-xl shadow-blue-600/20 group-hover:scale-110 transition-transform">
                {name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>
              <p className="text-blue-600 text-sm font-medium mb-4">{t.specialists.role}</p>
              <div className="flex gap-2">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="w-8 h-1 bg-blue-100 rounded-full" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
