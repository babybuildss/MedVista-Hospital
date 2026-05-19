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
  title: "MedVista Premier — World-Class Healthcare, Reimagined",
  description:
    "MedVista Premier is a luxury multi-speciality healthcare institution offering world-class medical excellence, compassionate patient care, and cutting-edge technology. Experience healthcare at its finest.",
  keywords: [
    "hospital",
    "healthcare",
    "multi-speciality",
    "premium hospital",
    "cardiology",
    "neurology",
    "oncology",
    "orthopaedics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
