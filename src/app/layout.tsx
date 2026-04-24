import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "ალგანი დენტი | Algani Dent - პროფესიონალური სტომატოლოგია",
  description: "სამედიცინო სასწავლო სტომატოლოგიური კლინიკა. 25 წლიანი გამოცდილება სტომატოლოგიაში. გთავაზობთ ყველა სახის სტომატოლოგიურ მომსახურებას.",
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
