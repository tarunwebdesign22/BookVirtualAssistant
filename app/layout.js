import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Book Virtual Assistant | Elite Virtual Professionals",
  description:
    "Hire elite virtual professionals that scale your business. Trusted by 300+ companies worldwide with 98% client satisfaction.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full font-body text-foreground">{children}</body>
    </html>
  );
}
