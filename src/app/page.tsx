import slideThinktoolMaster2 from "@/images/slide-thinktool-master-2.webp";
import slideThinktoolX10 from "@/images/slide-thinktool-x10.webp";
import slideThinktoolSe from "@/images/slide-thinktool-se.webp";
import slideTpms from "@/images/slide-tpms.webp";
import Slides from "./Slides";

import cardImg1 from "@/images/thinktool-master-2.webp";
import cardImg2 from "@/images/thinktool-master-x.webp";
import cardImg3 from "@/images/thinktool.webp";
import cardImg4 from "@/images/thinkcar-adas.webp";
import cardImg5 from "@/images/thinkcar-prog.webp";
import cardImg6 from "@/images/thinktool-lite.webp";

import thinkcarTWand900 from "@/images/thinkcarTWand900.webp";
import thinkcarTWand100 from "@/images/thinkcarTWand100.webp";
import thinktoolX10 from "@/images/thinktoolX10.webp";
import thinktoolSE from "@/images/thinktoolSE.webp";
import thinkcarTWand200 from "@/images/thinkcarTWand200.webp";
import thinkcarProg from "@/images/thinkcarProg.webp";
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
        "Programming + Advanced coding + Technical support + Bidirectional control.",
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
};

const topProducts = {
  id: "SectionCTTTx2",
  caption: ["Top products"],
  data: [
    {
      title: "THINKCAR T-Wand 900",
      image: thinkcarTWand900.src,
      content: [
        "Complete vehicle diagnostics with intelligent TPMS sensor activation, programming, and relearning function.",
      ],
      link: "Learn more",
      href: "/",
    },
    {
      title: "THINKCAR T-Wand 100",
      image: thinkcarTWand100.src,
      content: [
        "Full activation of TPMS sensor, programming function, and relearning.",
      ],
      link: "Learn more",
      href: "/",
    },
    {
      title: "THINKTOOL X10",
      image: thinktoolX10.src,
      content: [
        "Remote video diagnostics tool.",
      ],
      link: "Learn more",
      href: "/",
    },
    {
      title: "THINKTOOL SE",
      image: thinktoolSE.src,
      content: [
        "The latest 8-inch professional diagnostic tool with the latest Android 10 operating system.",
      ],
      link: "Learn more",
      href: "/",
    },
    {
      title: "THINKCAR T-Wand 200",
      image: thinkcarTWand200.src,
      content: [
        "Integrated activation function, programming, and sensor TPMS relearning.",
      ],
      link: "Learn more",
      href: "/",
    },
    {
      title: "THINKCAR PROG",
      image: thinkcarProg.src,
      content: [
        "Supports transmission programming for restoring old data or replacing the old transmission for recording new data.",
      ],
      link: "Learn more",
      href: "/",
    },
  ],
};

export default function Home() {
  return (
    <main className="flex-1">
      <Slides data={slides} />
      <SectionCTTTx2 section={novelty} />
      <SectionCTTTx2 section={topProducts} />
    </main>
  );
}
