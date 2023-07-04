import Link from "next/link";
import Image from "next/image";

type Props = {
  section: {
    id: string;
    caption: (string[] | string)[];
    data: {
      title: string;
      image: string;
      content: (string[] | string)[];
      link: string;
      href: string;
    }[];
  };
};

/*

import bulb from "@/public/home/bulb.svg";
{
  id: "SectionCTTTx2",
  caption: ["SectionCTTTx2"],
  data: [
    {
      title: "",
      image: "",
      content: [],
      link: "",
      href: "#",
    },
    {
      title: "",
      image: "",
      content: [],
      link: "",
      href: "#",
    },
    {
      title: "",
      image: "",
      content: [],
      link: "",
      href: "#",
    },
    {
      title: "",
      image: "",
      content: [],
      link: "",
      href: "#",
    },
    {
      title: "",
      image: "",
      content: [],
      link: "",
      href: "#",
    },
    {
      title: "",
      image: "",
      content: [],
      link: "",
      href: "#",
    },
  ],
},
*/

export default function SectionCTTTx2({ section }: Props) {
  return (
    <div
      className="
        py-4 xl:pr-[127px]
        bg-gray-100
      "
    >
      <div className="xl:flex px-3 py-8">
        <div className="min-w-[258px] mb-10 font-bold">
          {section.caption.map((item, pKey) => {
            if (Array.isArray(item)) {
              return (
                <ul key={pKey} className="font-normal text-gray-600">
                  {item.map((li, lKey) => (
                    <li key={lKey}>{li}</li>
                  ))}
                </ul>
              );
            } else {
              return (
                <div
                  key={pKey}
                  className={`${pKey !== 0 && "font-normal text-gray-600"}`}
                >
                  {item}
                </div>
              );
            }
          })}
        </div>

        <div className="grow grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          <Item data={section.data[0]} />
          <Item data={section.data[1]} />
          <div className="col-span-2 hidden border-t border-gray-300 md:block lg:hidden"></div>
          <Item data={section.data[2]} />
          {/* <div className="hidden xl:block"></div> */}
          <div className="col-span-3 hidden border-t border-gray-300 lg:block"></div>
          {/* <div className="hidden xl:block"></div> */}
          <Item data={section.data[3]} />
          <div className="col-span-2 hidden border-t border-gray-300 md:block lg:hidden"></div>
          <Item data={section.data[4]} />
          <Item data={section.data[5]} />
        </div>
      </div>
    </div>
  );
}

type ItemProps = {
  data: {
    title: string;
    image: string;
    content: (string[] | string)[];
    link: string;
    href: string;
  };
};

const Item = ({ data }: ItemProps) => (
  <div className="flex flex-col text-gray-600">
    <div className="h-20 text-3xl font-light text-gray-900">{data.title}</div>

    <div className="grid grid-cols-1 gap-4">
      <div className="flex h-32 flex-col">
        <div className="mt-auto fill-gray-900">
          <Image src={data.image} alt={data.title} width={200} height={200} />
        </div>
      </div>

      {data.content.map((item, pKey) => {
        if (Array.isArray(item)) {
          return (
            <ul key={pKey}>
              {item.map((li, lKey) => (
                <li key={lKey}>{li}</li>
              ))}
            </ul>
          );
        } else {
          return <div key={pKey}>{item}</div>;
        }
      })}
    </div>

    <div className="grow pb-4"></div>

    {data.link && (
      <Link
        href={data.href}
        className="
        flex w-fit cursor-pointer hover:underline
        text-red-800
        outline-none focus:ring-2 ring-red-800
        "
      >
        <span className="mr-4 leading-[1.2rem]">{data.link}</span>
        {data.href.toLowerCase().includes("http") ? (
          <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
            <path d="M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z"></path>
            <path d="M20 2L20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2z"></path>
            <title>Launch</title>
          </svg>
        ) : (
          <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
            <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
          </svg>
        )}
      </Link>
    )}
  </div>
);
