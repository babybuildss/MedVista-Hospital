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
  title: "MedVista Premier | World-Class Healthcare, Reimagined",
  description:
    "MedVista Premier Hospital — Where Compassion Meets Innovation. Offering world-class healthcare with 500+ beds, 200+ doctors, and 50+ specialities. Experience premium medical excellence.",
  keywords: [
    "hospital",
    "healthcare",
    "premium hospital",
    "medical excellence",
    "cardiac sciences",
    "neuro sciences",
    "oncology",
    "emergency care",
  ],
  authors: [{ name: "MedVista Premier" }],
  openGraph: {
    title: "MedVista Premier | World-Class Healthcare, Reimagined",
    description:
      "Where Compassion Meets Innovation. Premium healthcare with cutting-edge technology.",
    type: "website",
    siteName: "MedVista Premier",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-foreground overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
