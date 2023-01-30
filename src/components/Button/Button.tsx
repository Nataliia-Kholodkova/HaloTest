import clsx from "clsx";

import style from "./Button.module.scss";

interface ButtonPropsI {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick: (arg: any | undefined) => void;
  children?: string | React.ReactNode;
  isWhite?: boolean;
  isPink?: boolean;
}

export const Button: React.FC<ButtonPropsI> = ({
  children,
  type = "button",
  onClick,
  className = "",
  isWhite = false,
  isPink = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={clsx(
      style.button,
      isWhite ? style["button-white"] : "",
      isPink ? style["button-pink"] : "",
      className
    )}
  >
    {children}
  </button>
);
