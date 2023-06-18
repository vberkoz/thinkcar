import "../styles/globals.css";
import Footer from "./Footer";
import Header from "./Header";

import { IBM_Plex_Sans } from "next/font/google";
const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "ThinkCar | Distribution company of products for car diagnostics",
  description: "Distribution company of products for car diagnostics",
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${sans.variable}`}>
      <body className="flex flex-col h-full bg-[#EFEFEF]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
