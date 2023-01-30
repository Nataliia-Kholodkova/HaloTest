import clsx from "clsx";
import { useState, useCallback, useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "../Button";

import { SliderItem } from "./SliderItem";

import style from "./Slider.module.scss";

const sliderItems = [
  {
    title: "Save watter",
    text: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
    image: "/assets/images/img-main.png",
  },

  {
    title: "Plant trees",
    text: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
    image: "/assets/images/slide-2.png",
  },
  {
    title: "Save energy",
    text: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
    image: "/assets/images/slide-3.png",
  },

  {
    title: "Avoid plastic",
    text: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
    image: "/assets/images/slide-4.png",
  },
  {
    title: "Choose organic",
    text: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
    image: "/assets/images/slide-5.png",
  },
];

interface ItemI {
  title: string;
  text: string;
  image: string;
}

export const NatureSlider = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const ref = useRef<Slider>(null);
  const settings = {
    className: clsx(style.slider, "slider variable-width center"),
    arrows: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 4.2,
    speed: 500,
    slidesToScroll: 1,
    cssEase: "linear",
    dots: false,
    variableWidth: true,
    beforeChange: (current: number, next: number): void => {
      setCurrSlide(next);
      setOpacity(0.1);
      setTimeout(() => setOpacity(1), 500);
    },
  };

  const getScale = useCallback(
    (i: number): boolean => {
      if (currSlide === 0) {
        if (i === sliderItems.length - 1 || i === 1) {
          return true;
        }
      }
      if (currSlide === sliderItems.length - 1) {
        if (i === 0 || i === currSlide - 1) {
          return true;
        }
      }
      if (i === currSlide - 1 || i === currSlide + 1) {
        return true;
      }
      return false;
    },
    [currSlide]
  );

  console.log(opacity);
  return (
    <section className={style.section}>
      <Slider {...settings} ref={ref}>
        {sliderItems.map((item: ItemI, i: number) => (
          <SliderItem
            title={item.title}
            text={item.text}
            image={item.image}
            isActive={currSlide === i}
            key={i.toString()}
            isScaled={getScale(i)}
            opacity={opacity}
          />
        ))}
      </Slider>
      <div className={style.pages}>
        <Button
          className={style.button}
          onClick={() => ref?.current?.slickPrev()}
        >
          &lt;
        </Button>
        <p className={clsx("bodyText", style["pages-text"])}>
          <span className={style["pages-text__current"]}>{currSlide + 1}</span>
          {`
          / ${sliderItems.length}`}
        </p>
        <Button
          onClick={() => ref?.current?.slickNext()}
          className={style.button}
        >
          &gt;
        </Button>
      </div>
    </section>
  );
};
