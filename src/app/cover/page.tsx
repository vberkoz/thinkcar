import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ThinkCar | Покриття авто",
};

export default function Cover() {
  return (
    <main className="flex-1">
      <div className="container mx-auto">Покриття авто</div>
    </main>
  );
}
