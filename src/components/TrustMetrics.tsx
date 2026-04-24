"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Users } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export function TrustMetrics() {
  const { t } = useTranslation();

  const metrics = [
    { icon: Shield, title: t.about.metric_safety, desc: t.about.metric_safety_desc },
    { icon: Award, title: t.about.metric_exp, desc: t.about.metric_exp_desc },
    { icon: Users, title: t.about.metric_qual, desc: t.about.metric_qual_desc },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6">
              {t.about.title} <br />
              <span className="text-blue-600">{t.about.title_accent}</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {t.about.narrative}
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {metrics.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-slate-50 rounded-2xl border border-slate-100"
                >
                  <item.icon className="text-blue-600 mb-3" size={24} />
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-blue-600 rounded-[2rem] overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-blue-400 flex items-center justify-center p-12 text-center text-white">
                <span className="text-2xl font-display font-medium opacity-50">IMAGE PLACEHOLDER</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
