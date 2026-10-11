
/*
 * Root layout:
 * - Loads the portfolio fonts.
 * - Defines the shared HTML document.
 * - Sets the default page title and SEO description.
 * - Imports global styles.
 */

import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Walter Onchieku | Software Developer & AI Engineering",
  description:
    "Software developer building practical backend services, full-stack applications, and AI-powered solutions.",
  openGraph: {
    title: "Walter Onchieku | Software Developer",
    description:
      "Explore my software engineering, backend development, and AI projects.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
