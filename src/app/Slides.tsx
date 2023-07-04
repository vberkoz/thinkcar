"use client"
import { useState } from "react";
import Slide from "./Slide";

type Props = {
  data: {
    image: string;
    title: string;
    description: string;
    button: string;
    href: string;
  }[];
};

export default function Slides({ data }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = data;

  const onShow = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      {slides.map((item, key) => (
        <Slide
          key={key}
          item={item}
          k={key}
          isActive={activeIndex === key}
          length={slides.length}
          onShow={onShow}
        />
      ))}
    </>
  );
};
