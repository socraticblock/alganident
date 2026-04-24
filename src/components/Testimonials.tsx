"use client";

import React from "react";
import { Star } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

const reviews = [
  { text: "I thought it was a highly professional service...", author: "S Toogood" },
  { text: "პროფესიონალები, სისუფთავე, სერვისი საუკეთესო...", author: "Sopho Sologashvili" },
  { text: "Best dental clinic in Georgia. Perfect location...", author: "SG GEO ROBLOX" },
  { text: "Отличная клиника. Лечил зубы у Кэти...", author: "Pavel Ivin" },
  // Duplicate for seamless loop
  { text: "I thought it was a highly professional service...", author: "S Toogood" },
  { text: "პროფესიონალები, სისუფთავე, სერვისი საუკეთესო...", author: "Sopho Sologashvili" },
  { text: "Best dental clinic in Georgia. Perfect location...", author: "SG GEO ROBLOX" },
  { text: "Отличная клиника. Лечил зубы у Кэти...", author: "Pavel Ivin" },
];

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom mb-12 px-6">
        <h2 className="text-4xl font-display font-black text-slate-900 text-center">{t.testimonials.title}</h2>
      </div>

      <div className="relative flex">
        <div className="animate-marquee flex gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="w-[350px] md:w-[450px] flex-shrink-0 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-premium"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {review.author.charAt(0)}
                </div>
                <span className="font-bold text-slate-900">{review.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
