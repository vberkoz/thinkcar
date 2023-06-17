import { items } from "@/data/menu";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo_thinkcar.png";
import category from "@/images/category.svg";
import search from "@/images/search.svg";
import scales from "@/images/scales.svg";
import favorite from "@/images/favorite.svg";
import cart from "@/images/shopping--cart.svg";

export default function Header() {
  return (
    <div className="container mx-auto">
      <ul className="flex justify-between items-center py-5">
        <li>
          <Link href="/">
            <Image src={logo} alt="ThinkCar logo" placeholder="blur" />
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:underline">
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="#"
            className="bg-[#A33945] hover:bg-[#b13e4b] text-white px-5 py-2 rounded-[5px]"
          >
            Call you back?
          </Link>
        </li>
      </ul>
      <div className="flex justify-between items-center">
        <Link href="#" className="flex items-center hover:underline">
          <Image src={category} alt="category" className="mr-3" />
          Catalog
        </Link>
        <div className="flex items-center">
          <div className="p-[10px] bg-white rounded-s-[5px]">
            <Image src={search} alt="search" height={20} width={20} />
          </div>
          <input
            placeholder="I'm looking for..."
            className="px-0 py-2 outline-none w-96"
          />
          <button className="bg-[#A33945] hover:bg-[#b13e4b] text-white px-5 py-2 rounded-e-[5px]">
            Search
          </button>
        </div>
        <div className="flex items-center">
          <Link href="#">
            <Image
              src={scales}
              alt="scales"
              height={25}
              width={25}
              className="mr-5"
            />
          </Link>
          <Link href="#">
            <Image
              src={favorite}
              alt="favorite"
              height={25}
              width={25}
              className="mr-5"
            />
          </Link>
          <Link href="#">
            <Image
              src={cart}
              alt="cart"
              height={25}
              width={25}
              className="mr-5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
