import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/hospital/Navbar";
import Footer from "@/components/hospital/Footer";
import SmoothScroll from "@/components/hospital/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedVista Premier | Where Care Becomes Craft",
  description:
    "MedVista Premier Hospital — Where Care Becomes Craft. A world-class healthcare institution combining clinical excellence with the art of healing. 500+ beds, 200+ physicians, 50+ specialities.",
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
    title: "MedVista Premier | Where Care Becomes Craft",
    description:
      "A world-class healthcare institution combining clinical excellence with the art of healing.",
    type: "website",
    siteName: "MedVista Premier",
  },
  icons: {
    icon: "/favicon.png",
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
        className={`${playfair.variable} ${dmSans.variable} antialiased bg-ivory text-charcoal overflow-x-hidden`}
      >
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
