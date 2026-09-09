import localFont from "next/font/local";
import { Google_Sans } from "next/font/google";
import ScrollToTop from "../components/ScrollToTop";
import "./globals.css";

const scoutieSans = localFont({
  src: [
    {
      path: "./fonts/scoutie/ScoutieSans-Variable.woff2",
      style: "normal",
    },
    {
      path: "./fonts/scoutie/ScoutieSans-Italic-Variable.woff2",
      style: "italic",
    },
  ],
  variable: "--font-scoutie",
  display: "swap",
  weight: "200 800",
});

const googleSans = Google_Sans({
  subsets: ["latin"],
  variable: "--font-google-sans",
  display: "swap",
});

export const metadata = {
  title: "Book Virtual Assistant | Elite Virtual Professionals",
  description:
    "Hire elite virtual professionals that scale your business. Trusted by 300+ companies worldwide with 98% client satisfaction.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${scoutieSans.variable} ${googleSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-body text-foreground">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

