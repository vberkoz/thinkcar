"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { items } from "@/data/menu";

export default function Menu() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [searchOpened, setSearchOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const toggleSearch = () => {
    setSearchOpened(!searchOpened);
  };

  const pathname = usePathname();

  return (
    <div
      style={{ zIndex: 2001 }}
      className="sticky top-0 flex justify-between bg-gray-100 text-gray-900 border-b-2 border-gray-200"
    >
      <div
        onClick={toggleMenu}
        className={`${
          menuOpened ? "block" : "hidden"
        } absolute top-0 left-0 z-0 h-[100vh] w-[100vw] bg-gray-900/50`}
      ></div>

      <div className="flex">
        <div className="z-10 float-left xl:hidden">
          <div
            onClick={toggleMenu}
            className="p-3 z-10 cursor-pointer bg-gray-100"
          >
            <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
              <path d="M2 14.8H18V16H2zM2 11.2H18V12.399999999999999H2zM2 7.6H18V8.799999999999999H2zM2 4H18V5.2H2z"></path>
            </svg>
          </div>

          <div
            className={`${
              menuOpened ? "block" : "hidden"
            } absolute h-auto w-full sm:w-80 bg-gray-100`}
          >
            <div className="relative h-full w-full overflow-auto overscroll-contain">
              <div className="relative flex h-[80vh] flex-col">
                {items.map((item) => {
                  const isActive = pathname.startsWith(`/${item.href}`);
                  return (
                    <div key={item.href} className="flex flex-col">
                      <Link
                        href={`/${item.href}`}
                        className={`${isActive && "bg-gray-200"} grow p-3`}
                        onClick={toggleMenu}
                      >
                        {item.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="my-3 border-r-2 xl:hidden border-gray-200"></div>

        <Link
          href="/"
          className={`${searchOpened ? "hidden xl:flex" : "flex"} py-2 px-3 hover:bg-gray-200 outline-none focus:ring-2 ring-inset ring-red-800 fill-red-800`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 70.67 8.88"
            width={234}
            height={32}
            className="hidden sm:block"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className="sm:hidden"
          >
            <path d="M27,8.2L17,2.3C16.7,2.1,16.4,2,16,2s-0.7,0.1-1,0.3L5,8.2c-0.6,0.4-1,1-1,1.7v12.2c0,0.7,0.4,1.4,1,1.7l10,5.9 c0.3,0.2,0.7,0.3,1,0.3s0.7-0.1,1-0.3l10-5.9c0.6-0.4,1-1,1-1.7V9.9C28,9.2,27.6,8.5,27,8.2z M26,22.1L16,28L6,22.1V9.9L16,4l10,5.9 V22.1z"></path>
          </svg>
        </Link>

        <div className="hidden xl:flex">
          <div className="my-3 border-r border-gray-200"></div>

          <div className={`float-left ${searchOpened ? "hidden" : "flex"}`}>
            {items.map((item) => {
              const isActive = pathname.startsWith(`/${item.href}`);
              return (
                <div key={item.href} className="flex flex-col">
                  <Link
                    href={`/${item.href}`}
                    className={`${
                      isActive && "bg-gray-200"
                    } flex cursor-pointer p-3 hover:bg-gray-200 outline-none focus:ring-2 ring-inset ring-red-800`}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`${
          searchOpened ? "block" : "hidden"
        } flex outline-none ring-2 ring-inset ring-red-800 border-0 grow`}
      >
        <input
          type="text"
          placeholder="I'm looking for..."
          className="ml-[2px] my-[2px] py-[10px] px-[14px] bg-gray-200 outline-none grow"
        />
        <button
          className="cursor-pointer my-[2px] p-3 bg-gray-200 hover:bg-gray-100 outline-none"
          onClick={toggleSearch}
        >
          <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
            <path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z" />
          </svg>
        </button>
        <button
          className="cursor-pointer my-[2px] mr-[2px] p-3 bg-gray-200 hover:bg-gray-100 outline-none"
          onClick={toggleSearch}
        >
          <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
            <path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path>
          </svg>
        </button>
      </div>

      <div className="flex">
        <button
          className={`${
            searchOpened ? "hidden" : "block"
          } cursor-pointer p-3 hover:bg-gray-200 outline-none focus:ring-2 ring-inset ring-red-800`}
          onClick={toggleSearch}
        >
          <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
            <path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z" />
          </svg>
        </button>
        {/* <button className="cursor-pointer p-3 hover:bg-gray-200 outline-none focus:ring-2 ring-inset ring-red-800">
          <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
            <path d="M20,16a5,5,0,0,0,10,0,1,1,0,0,0-.1055-.4473L25.896,7.5562a.8913.8913,0,0,0-.0454-.0816A1,1,0,0,0,25,7H18.8218A3.0155,3.0155,0,0,0,17,5.1841V2H15V5.1841A3.0155,3.0155,0,0,0,13.1782,7H7a1,1,0,0,0-.8945.5527l-4,8A1,1,0,0,0,2,16a5,5,0,0,0,10,0,1,1,0,0,0-.1055-.4473L8.6182,9h4.56A3.0147,3.0147,0,0,0,15,10.8154V28H6v2H26V28H17V10.8159A3.0155,3.0155,0,0,0,18.8218,9h4.56l-3.2763,6.5527A1,1,0,0,0,20,16ZM7,19a2.9958,2.9958,0,0,1-2.8152-2h5.63A2.9956,2.9956,0,0,1,7,19Zm2.3821-4H4.6179L7,10.2363ZM16,9a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,16,9Zm9,10a2.9958,2.9958,0,0,1-2.8152-2h5.63A2.9956,2.9956,0,0,1,25,19Zm0-8.7637L27.3821,15H22.6179Z" />
          </svg>
        </button> */}
        <button className="cursor-pointer p-3 hover:bg-gray-200 outline-none focus:ring-2 ring-inset ring-red-800">
          <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
            <path d="M22.45,6a5.47,5.47,0,0,1,3.91,1.64,5.7,5.7,0,0,1,0,8L16,26.13,5.64,15.64a5.7,5.7,0,0,1,0-8,5.48,5.48,0,0,1,7.82,0L16,10.24l2.53-2.58A5.44,5.44,0,0,1,22.45,6m0-2a7.47,7.47,0,0,0-5.34,2.24L16,7.36,14.89,6.24a7.49,7.49,0,0,0-10.68,0,7.72,7.72,0,0,0,0,10.82L16,29,27.79,17.06a7.72,7.72,0,0,0,0-10.82A7.49,7.49,0,0,0,22.45,4Z" />
          </svg>
        </button>
        <button className="cursor-pointer p-3 hover:bg-gray-200 outline-none focus:ring-2 ring-inset ring-red-800">
          <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
            <circle cx="10" cy="28" r="2" />
            <circle cx="24" cy="28" r="2" />
            <path d="M28,7H5.82L5,2.8A1,1,0,0,0,4,2H0V4H3.18L7,23.2A1,1,0,0,0,8,24H26V22H8.82L8,18H26a1,1,0,0,0,1-.78l2-9A1,1,0,0,0,28,7Zm-2.8,9H7.62L6.22,9H26.75Z" />
          </svg>
        </button>
        <button className="cursor-pointer p-3 hover:bg-gray-200 outline-none focus:ring-2 ring-inset ring-red-800">
          <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
            <path d="M14 4H18V8H14zM4 4H8V8H4zM24 4H28V8H24zM14 14H18V18H14zM4 14H8V18H4zM24 14H28V18H24zM14 24H18V28H14zM4 24H8V28H4zM24 24H28V28H24z"></path>
          </svg>
        </button>
        <Link
          href="#"
          className="text-gray-100 bg-red-800 hover:bg-red-700 p-[9px] outline-none focus:ring-[1px] ring-inset ring-gray-100 border-[3px] border-red-800 hover:border-red-700 hidden sm:block"
        >
          Call you back?
        </Link>
      </div>
    </div>
  );
}
