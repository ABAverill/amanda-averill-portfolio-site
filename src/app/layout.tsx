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
  icons: { icon: "/favicon.ico" },
  title: "Amanda Averill | Executive Recruiter | Packaging & Manufacturing",
  description:
    "Amanda Averill is an executive recruiter at Cover + Associates specializing in senior-level search across packaging, manufacturing, logistics, CPG, and life sciences.",
  openGraph: {
    title: "Amanda Averill | Executive Recruiter",
    description:
      "Executive recruiter specializing in packaging, manufacturing, logistics, CPG, and life sciences — placing senior leaders with Cover + Associates.",
    url: "https://amanda-averill.com",
    siteName: "Amanda Averill",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanda Averill | Talent Acquisition",
    description:
      "Talent acquisition professional specializing in life sciences and medical devices.",
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
