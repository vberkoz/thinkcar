import { items } from "@/data/menu";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="container mx-auto">
      <ul className="flex justify-between">
        <li><Link href="/">THINKCAR</Link></li>
        <li><Link href="#">Каталог</Link></li>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
