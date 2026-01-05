import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samson Ajayi | Fullstack Developer & Designer",
  description:
    "Computer Science student and digital creator building beautiful, functional web experiences.",
  keywords: [
    "web developer",
    "UI/UX designer",
    "fullstack developer",
    "portfolio",
  ],
  authors: [{ name: "Samson Ajayi" }],
  creator: "Samson Ajayi",
  openGraph: {
    type: "website",
    title: "Samson Ajayi | Portfolio",
    description: "Fullstack Developer & UI/UX Designer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans">{children}</body>
    </html>
  );
}
