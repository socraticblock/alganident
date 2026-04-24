"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Baby, 
  Scissors, 
  Settings, 
  Grid, 
  Activity, 
  Syringe, 
  Sparkles, 
  Heart 
} from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export function ServicesGrid() {
  const { t } = useTranslation();

  const services = [
    { name: t.services.items.therapy, icon: Stethoscope },
    { name: t.services.items.pediatric, icon: Baby },
    { name: t.services.items.surgery, icon: Scissors },
    { name: t.services.items.orthopedics, icon: Settings },
    { name: t.services.items.orthodontics, icon: Grid },
    { name: t.services.items.gnathology, icon: Activity },
    { name: t.services.items.implantology, icon: Syringe },
    { name: t.services.items.aesthetic, icon: Sparkles },
    { name: t.services.items.periodontics, icon: Heart },
  ];

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-black text-slate-900 mb-4">{t.services.title}</h2>
          <p className="text-slate-600">{t.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-premium border border-white hover:border-blue-100 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {t.services.desc}
              </p>
              <div className="h-1 w-12 bg-blue-100 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
