"use client";

import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import Image from "next/image";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-24 pb-12">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="relative w-20 h-20 overflow-hidden rounded-2xl bg-white p-2">
                <Image
                  src="/alganident-logo.png"
                  alt="Algani Dent Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h2 className="text-4xl font-display font-black text-white mb-2">{t.footer.contact_title}</h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                {t.footer.contact_subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold">{t.footer.address_label}</h3>
                  <p>{t.footer.address_value}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold">{t.footer.phone_label}</h3>
                  <p>+995 574 42 48 38</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold">{t.footer.mail_label}</h3>
                  <p>alganident@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700/50">
            <form className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-400">{t.footer.form_name}</label>
                  <input
                    type="text"
                    className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white"
                    placeholder={t.footer.form_placeholder_name}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-400">{t.footer.form_email}</label>
                  <input
                    type="email"
                    className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-400">{t.footer.form_message}</label>
                <textarea
                  className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 h-32 focus:outline-none focus:border-blue-500 transition-colors resize-none text-white"
                  placeholder={t.footer.form_placeholder_msg}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all active:scale-95"
              >
                {t.footer.form_submit}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
