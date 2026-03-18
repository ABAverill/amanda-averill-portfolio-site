import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amanda Averill | Executive Recruiter | Life Sciences & Packaging",
  description:
    "Amanda Averill is an executive recruiter specializing in life sciences and packaging industries, connecting top-tier talent with leading organizations.",
  openGraph: {
    title: "Amanda Averill | Executive Recruiter",
    description:
      "Executive recruiter specializing in life sciences and packaging, building leadership teams that drive innovation and growth.",
    url: "https://amanda-averill.com",
    siteName: "Amanda Averill",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanda Averill | Executive Recruiter",
    description:
      "Executive recruiter specializing in life sciences and packaging industries.",
  },
  metadataBase: new URL("https://amanda-averill.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} font-sans`}
    >
      <body className="min-h-screen bg-[#FAFAF8] text-[#1A1A2E]">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
