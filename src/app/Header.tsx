import { items } from "@/data/menu";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container mx-auto">
      <ul className="flex justify-between">
        <li><Link href="/">THINKCAR</Link></li>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
        <li><Link href="#">UA</Link></li>
        <li><Link href="#">Передзвонити Вам?</Link></li>
      </ul>
    </div>
  );
}
