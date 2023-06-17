import { items } from "@/data/menu";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo_thinkcar_gray.png";
import facebook from "@/images/logo--facebook.svg";
import instagram from "@/images/logo--instagram.svg";

export default function Footer() {
  return (
    <div className="bg-black text-[#B7B7B7]">
      <div className="container mx-auto pt-14">
        <ul className="flex justify-between items-center mb-14">
          <li>
            <Link href="/">
              <Image src={logo} alt="ThinkCar logo" placeholder="blur" />
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">Category</Link>
          </li>
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:underline">{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="mb-2">
          <span className="text-white">E-mail:</span> support@thinkcar.com
        </div>
        <div className="mb-7">
          <span className="text-white">Service center:</span> +1 555-123-4567
        </div>
        <div className="flex justify-between items-center mb-14">
          <div className="flex items-center">
            <Image src={facebook} alt="facebook" height={30} width={30} className="mr-4" />
            <Image src={instagram} alt="instagram" height={30} width={30} />
          </div>
          <div className="flex items-center">
            <button className="bg-[#B7B7B7] hover:bg-[#e7e7e7] text-black font-semibold px-4 py-1 rounded-s-[5px]">
              Subscribe
            </button>
            <input
              placeholder="Please enter your E-mail"
              className="px-4 py-1 outline-none w-96 rounded-e-[5px] text-white bg-black ring-1 ring-[#B7B7B7] ring-inset"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
