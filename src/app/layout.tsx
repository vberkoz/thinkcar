import "../styles/globals.css";
import Footer from "./Footer";

import { IBM_Plex_Sans } from "next/font/google";
import Menu from "./Menu";
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
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GTM_ID = 'G-PG1S2YZ8KQ';

  return (
    <html lang="en" className={`${sans.variable}`}>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTM_ID}');
            `,
          }}
        />
      </head>
      <body className="bg-zinc-100 flex flex-col justify-between h-screen">
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
