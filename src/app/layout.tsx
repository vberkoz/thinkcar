import "../styles/globals.css";
import Footer from "./Footer";
import Header from "./Header";

export const metadata = {
  title: "TinckCar | Дистриб'юторська компанія продукції для діагностики авто",
  description: "Дистриб'юторська компанія продукції для діагностики авто",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col h-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
