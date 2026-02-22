import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elevation Blueprint: Sacrificial Conversations",
  description: "Comprehensive Strategic Blueprint for the YouTube Optimization and Audience Expansion of the Sacrificial Conversations Podcast.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-scroll">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased bg-black text-white selection:bg-red-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
