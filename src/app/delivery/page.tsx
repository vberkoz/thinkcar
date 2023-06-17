import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ThinkCar | Доставка та оплата",
};

export default function Delivery() {
  return (
    <main className="flex-1">
      <div className="container mx-auto">Доставка та оплата</div>
    </main>
  );
}
