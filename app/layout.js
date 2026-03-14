import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-body',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-heading',
});

export const metadata = {
  title: "Zikr Travel | Biro Umroh & Haji Plus Resmi dan Terpercaya",
  description: "Menapak jejak suci dengan khidmat dan amanah bersama Zikr Travel. Tersedia paket Umroh Reguler, Plus, dan VIP dengan fasilitas hotel bintang 5 dan pembimbing berpengalaman.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
