import type { Metadata } from "next";
import { Noto_Sans, Poppins } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Muktir Siksha College Of Education & Pharmacy | Diploma in Pharmacy (D.Pharm)",
  description:
    "Muktir Siksha College Of Education & Pharmacy, Gobardanga, North 24 Parganas — offering the Diploma in Pharmacy (D.Pharm) with quality education, hands-on training and expert guidance.",
  keywords: [
    "Muktir Siksha College Of Education and Pharmacy",
    "Diploma in Pharmacy Gobardanga",
    "D.Pharm course West Bengal",
    "Pharmacy college North 24 Parganas",
    "Muktir Shiksha",
  ],
  icons: {
    icon: "/seo/favicon.png",
    shortcut: "/seo/favicon.png",
    apple: "/seo/apple-touch-icon.png",
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
      className={`${notoSans.variable} ${poppins.variable} antialiased`}
    >
      <body className="index-main">{children}</body>
    </html>
  );
}
