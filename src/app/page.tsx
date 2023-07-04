import slideThinktoolMaster2 from "@/images/slide-thinktool-master-2.webp";
import slideThinktoolX10 from "@/images/slide-thinktool-x10.webp";
import slideThinktoolSe from "@/images/slide-thinktool-se.webp";
import slideTpms from "@/images/slide-tpms.webp";
import Slides from "./Slides";

import cardImg1 from "@/images/thinktool-master-2.webp"
import cardImg2 from "@/images/thinktool-master-x.webp"
import cardImg3 from "@/images/thinktool.webp"
import cardImg4 from "@/images/thinkcar-adas.webp"
import cardImg5 from "@/images/thinkcar-prog.webp"
import cardImg6 from "@/images/thinktool-lite.webp"
import SectionCTTTx2 from "./SectionCTTTx2";

const slides = [
  {
    image: slideThinktoolMaster2.src,
    title: "THINKTOOL MASTER 2",
    description:
      "Updated version of ThinkTool Master: Online Programming + Advanced Diagnostics + OE-level Coverage.",
    button: "VO Solutions",
    href: "/",
  },
  {
    image: slideThinktoolX10.src,
    title: "THINKTOOL X10",
    description:
      "Change the way you diagnose. See, hear. The first real-time remote diagnostic service!",
    button: "VO Solutions",
    href: "/",
  },
  {
    image: slideThinktoolSe.src,
    title: "THINKTOOL SE",
    description: "8-inch classic diagnostic pad.",
    button: "VO Solutions",
    href: "/",
  },
  {
    image: slideTpms.src,
    title: "Intellectual TPMS service tool with",
    description:
      "Full TPMS sensor activation, programming, and relearning function.",
    button: "VO Solutions",
    href: "/",
  },
];

const novelty = {
  id: "SectionCTTTx2",
  caption: ["New releases"],
  data: [
    {
      title: "THINKTOOL MASTER / Master 2",
      image: cardImg1.src,
      content: [
        'Programming + Advanced coding + Technical support + Bidirectional control.',
      ],
      link: "Learn more",
      href: "/",
    },
    {
      title: "THINKTOOL MASTER X",
      image: cardImg2.src,
      content: [
        "Diagnostic of passenger and commercial vehicles + Programming + Technical servicing + Bi-directional control.",
      ],
      link: "Learn more",
      href: "/",
    },
    {
      title: "THINKTOOL",
      image: cardImg3.src,
      content: [
        "Diagnostic at OE level + Module Design + Technical Servicing + Bi-Directional Control",
      ],
      link: "Learn more",
      href: "/",
    },
    {
      title: "THINKCAR ADAS",
      image: cardImg4.src,
      content: [
        "Simpler and more accurate intelligent ADAS calibration method!",
      ],
      link: "Learn more",
      href: "/",
    },
    {
      title: "THINKCAR PROG",
      image: cardImg5.src,
      content: [
        "Correspondence of keys and programming + reading and writing EEPROM/MCU",
      ],
      link: "Learn more",
      href: "/",
    },
    {
      title: "THINKTOOL LITE",
      image: cardImg6.src,
      content: [
        "Extended coding + technical maintenance + bidirectional control.",
      ],
      link: "Learn more",
      href: "/",
    },
  ],
}

export default function Home() {
  return (
    <main className="flex-1">
      <Slides data={slides} />
      <SectionCTTTx2 section={novelty} />
    </main>
  );
}
