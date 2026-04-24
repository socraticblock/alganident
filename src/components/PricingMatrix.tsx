"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Tag } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export function PricingMatrix() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const pricingData = [
    {
      category: t.pricing.categories.therapy,
      items: [
        { name: t.pricing.items.caries, price: "130₾ - 180₾" },
        { name: t.pricing.items.pulpitis, price: "150₾ - 350₾" },
        { name: t.pricing.items.restoration, price: "30₾" },
      ],
    },
    {
      category: t.pricing.categories.pediatric,
      items: [
        { name: t.pricing.items.child_caries, price: "60₾ - 80₾" },
        { name: t.pricing.items.child_cleaning, price: "80₾ - 120₾" },
        { name: t.pricing.items.child_extraction, price: "30₾ - 60₾" },
      ],
    },
    {
      category: t.pricing.categories.surgery,
      items: [
        { name: t.pricing.items.extraction, price: "80₾ - 150₾" },
        { name: t.pricing.items.wisdom_tooth, price: "150₾ - 400₾" },
      ],
    },
    {
      category: t.pricing.categories.prosthetics,
      items: [
        { name: t.pricing.items.zirconium, price: "250₾ - 700₾" },
        { name: t.pricing.items.metal_ceramic, price: "180₾ - 250₾" },
      ],
    },
    {
      category: t.pricing.categories.orthodontics,
      items: [
        { name: t.pricing.items.braces, price: "From 350₾" },
        { name: t.pricing.items.aligners, price: "From 4500₾" },
      ],
    },
    {
      category: t.pricing.categories.aesthetics,
      items: [
        { name: t.pricing.items.whitening, price: "300₾ - 350₾" },
        { name: t.pricing.items.veneers, price: "350₾ - 700₾" },
        { name: t.pricing.items.jewelry, price: "From 150₾" },
      ],
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-black text-slate-900 mb-4">{t.pricing.title}</h2>
          <p className="text-slate-600">{t.pricing.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {pricingData.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Tag size={20} />
                  </div>
                  <span className="text-xl font-bold text-slate-900">{item.category}</span>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === i ? 180 : 0 }}
                  className="text-slate-400"
                >
                  <ChevronDown />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 flex flex-col gap-4 border-t border-slate-50 pt-6">
                      {item.items.map((subItem, j) => (
                        <div key={j} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                          <span className="text-slate-600 font-medium">{subItem.name}</span>
                          <span className="text-blue-600 font-black">{subItem.price}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
