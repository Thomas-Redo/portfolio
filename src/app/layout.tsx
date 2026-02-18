import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { ContactForm } from "@/components/sections/contact-form";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thomas Hart — Software Engineer",
  description:
    "Full-stack software engineer building SaaS products, ecommerce platforms, data tools, and AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} bg-neutral-950 font-sans text-neutral-100 antialiased`}
      >
        <Header />
        <main>{children}</main>
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
