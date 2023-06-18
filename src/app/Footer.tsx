import { items } from "@/data/menu";
import Link from "next/link";
import Image from "next/image";
import facebook from "@/images/logo--facebook.svg";
import instagram from "@/images/logo--instagram.svg";

export default function Footer() {
  return (
    <div className="bg-black text-zinc-400">
      <div className="container mx-auto pt-14">
        <ul className="flex justify-between items-center mb-14">
          <li>
            <Link href="/" className="fill-zinc-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 70.67 8.88"
                width={234}
                height={32}
              >
                <path d="M0,.15H8.07V2.27h-2.71v6.47H2.71V2.27H0V.15Z" />
                <path d="M9.28,.15h2.65V3.15h2.9V.15h2.67V8.74h-2.67v-3.47h-2.9v3.47h-2.65V.15Z" />
                <path d="M19.37,.15h2.66V8.74h-2.66V.15Z" />
                <path d="M23.95,.15h2.48l3.23,4.75V.15h2.5V8.74h-2.5l-3.22-4.72v4.72h-2.5V.15Z" />
                <path d="M33.94,.15h2.65V3.39L39.38,.15h3.53l-3.13,3.24,3.28,5.35h-3.27l-1.81-3.53-1.37,1.44v2.1h-2.65V.15Z" />
                <path d="M49.24,5.22l2.33,.7c-.16,.65-.4,1.2-.74,1.63s-.75,.77-1.25,.99-1.13,.33-1.9,.33c-.93,0-1.7-.14-2.29-.41-.59-.27-1.1-.75-1.53-1.43s-.64-1.56-.64-2.62c0-1.42,.38-2.51,1.13-3.28,.76-.76,1.83-1.14,3.21-1.14,1.08,0,1.93,.22,2.55,.66s1.08,1.11,1.38,2.02l-2.34,.52c-.08-.26-.17-.45-.26-.57-.15-.2-.33-.36-.54-.47s-.46-.16-.72-.16c-.6,0-1.06,.24-1.38,.73-.24,.36-.36,.92-.36,1.69,0,.95,.14,1.6,.43,1.96s.7,.53,1.22,.53,.89-.14,1.15-.43,.45-.7,.57-1.24Z" />
                <path d="M58.13,7.32h-3.01l-.42,1.42h-2.71L55.22,.15h2.9l3.23,8.59h-2.78l-.43-1.42Zm-.55-1.86l-.95-3.09-.94,3.09h1.89Z" />
                <path d="M62.22,8.74V.15h4.42c.82,0,1.45,.07,1.88,.21s.78,.4,1.05,.78,.4,.84,.4,1.39c0,.48-.1,.89-.3,1.23-.2,.35-.48,.63-.84,.84-.23,.14-.54,.25-.93,.34,.32,.11,.55,.21,.69,.32,.1,.07,.24,.22,.42,.45,.19,.23,.31,.41,.37,.53l1.29,2.49h-3l-1.42-2.62c-.18-.34-.34-.56-.48-.66-.19-.13-.41-.2-.65-.2h-.23v3.49h-2.67Zm2.67-5.11h1.12c.12,0,.36-.04,.7-.12,.18-.04,.32-.12,.43-.27s.17-.31,.17-.5c0-.28-.09-.49-.26-.64s-.51-.22-.99-.22h-1.17v1.75Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Category
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:underline">
                {item.title}
              </Link>
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
            <Image
              src={facebook}
              alt="facebook"
              height={30}
              width={30}
              className="mr-4"
            />
            <Image src={instagram} alt="instagram" height={30} width={30} />
          </div>
          <div className="flex items-center">
            <button className="bg-zinc-400 hover:bg-zinc-300 text-black font-semibold px-5 py-2 rounded-s-[5px]">
              Subscribe
            </button>
            <input
              placeholder="Please enter your E-mail"
              className="px-5 py-2 outline-none w-96 rounded-e-[5px] text-white bg-black ring-1 ring-zinc-400 ring-inset"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
