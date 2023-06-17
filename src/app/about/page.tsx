import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TinckCar | Про нас",
};

export default function About() {
  return (
    <main className="flex-1">
      <div className="container mx-auto">Про компанію</div>
    </main>
  );
}
