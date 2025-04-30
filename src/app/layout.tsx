import PhoneNumber from "@/components/phone/PhoneNumber";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IDF Environnement - Isolation, ITE, ITI, PAC sur toute la France",
  description: "IDF Environnement vous accompagne dans votre projet d'isolation, ITE, ITI, PAC sur toute la France",
  icons: {
    icon: [
      { url: "icon.png", type: "image/png" }
    ],
    apple: "icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PhoneNumber />
        {children}
      </body>
    </html>
  );
}
