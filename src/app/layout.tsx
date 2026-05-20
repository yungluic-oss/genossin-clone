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
  title: "Star Solutions — Schweizer Software- & App-Studio",
  description:
    "Star Solutions ist ein Schweizer Software-Studio für Web-Apps, Mobile-Apps und AI-Integration. Wir bauen Produkte, die schnell auf dem Markt sind und nach Jahren noch wartbar bleiben.",
  keywords: [
    "Software-Studio Schweiz",
    "App-Entwicklung Zürich",
    "Web-App Entwicklung",
    "Custom Software",
    "AI Integration",
    "Next.js Agentur",
    "SaaS Schweiz",
  ],
  openGraph: {
    title: "Star Solutions — Schweizer Software- & App-Studio",
    description:
      "Web-Apps, Mobile-Apps und AI-Integration aus der Schweiz. Vom MVP zum produktiven Produkt.",
    type: "website",
    locale: "de_CH",
    siteName: "Star Solutions",
    url: "https://starsolutions.ch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Star Solutions — Schweizer Software- & App-Studio",
    description:
      "Web-Apps, Mobile-Apps und AI-Integration aus der Schweiz. Vom MVP zum produktiven Produkt.",
  },
  icons: {
    icon: [
      { url: "/assets/GV95TgfnpG2cJiybCbMmvBVKg4.png", media: "(prefers-color-scheme: light)" },
      { url: "/assets/p7Lbvw5FtXUZVmWWgjuqwPnlASA.png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/assets/p7Lbvw5FtXUZVmWWgjuqwPnlASA.png",
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
      <body className="min-h-full bg-[var(--color-paper)] text-[var(--color-ink)]">{children}</body>
    </html>
  );
}
