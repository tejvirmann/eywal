import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AdminBadge from "@/components/AdminBadge";
import { isAdminMode } from "@/lib/admin";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eywal Research Group",
  description:
    "Studying consciousness and intelligence as properties of living systems — from single cells to collectives.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const adminMode = await isAdminMode();

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col"
        style={{ background: "var(--warm)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        {adminMode && <AdminBadge />}
      </body>
    </html>
  );
}
