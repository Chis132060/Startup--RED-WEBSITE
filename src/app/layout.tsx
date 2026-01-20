import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RED - Reach, Educate, Deliver | HIV Care Platform",
  description: "RED is a compassionate healthcare platform focused on Reach, Education, and Delivery for individuals living with HIV. Gamified learning, secure tracking, and community support.",
  keywords: "HIV care, healthcare, education, medication tracking, community support, HIPAA compliant",
  openGraph: {
    title: "RED - Compassionate HIV Care Platform",
    description: "Reaching people. Educating minds. Delivering care.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
