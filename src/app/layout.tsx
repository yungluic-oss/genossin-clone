import type { Metadata } from "next";
import { DM_Sans, Figtree } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://starsolutions.ch"),
  title: "Star Solutions — Schweizer AI-Automatisierung",
  description:
    "Ein Schweizer Studio für AI-Automatisierung. Wir konzipieren, entwickeln und integrieren massgeschneiderte AI-Workflows, damit Ihr Team schneller arbeitet.",
  openGraph: {
    title: "Star Solutions — Schweizer AI-Automatisierung",
    description:
      "Ein Schweizer Studio für AI-Automatisierung. Massgeschneiderte AI-Workflows für moderne Unternehmen.",
    type: "website",
    locale: "de_CH",
    siteName: "Star Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Star Solutions — Schweizer AI-Automatisierung",
    description:
      "Massgeschneiderte AI-Workflows für moderne Schweizer Unternehmen.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de-CH"
      className={`${dmSans.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
