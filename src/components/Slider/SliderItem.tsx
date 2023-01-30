import clsx from "clsx";

import style from "./Slider.module.scss";

interface SliderItemPropsI {
  title: string;
  text: string;
  image: string;
  isActive: boolean;
  isScaled: boolean;
}

export const SliderItem: React.FC<SliderItemPropsI> = ({
  isActive,
  image,
  title,
  text,
  isScaled,
}) => (
  <div
    className={clsx(style.sliderItem, isActive && style["sliderItem__active"])}
  >
    <img
      src={image}
      alt={title}
      style={{ ...(isScaled ? { transform: "scale(1.3)" } : "") }}
    />
    <h2 className={clsx(style.title, "bodyTitle__small")}>{title}</h2>
    {isActive && <p className={clsx("bodyText__small", style.text)}>{text}</p>}
  </div>
);
