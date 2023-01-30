import clsx from "clsx";

import Button from "@/components/Button";

import style from "./Accordion.module.scss";

interface AccordionItemI {
  title: string;
  text: string;
  isOpened: boolean;
  setOpened: (value: number) => void;
  currNumber: number;
}

export const AccordionItem: React.FC<AccordionItemI> = ({
  title,
  text,
  isOpened,
  currNumber,
  setOpened,
}) => {
  return (
    <div className={style.accordionItem}>
      <div className={style["accordionItem-title"]}>
        <h3 className="bodyTitle__small">{title}</h3>
        <Button onClick={() => setOpened(currNumber)} isPink className={style["button"]}>
          {isOpened ? "-" : "+"}
        </Button>
      </div>
      <div
        className={clsx(
          style["accordionItem-text"],
          isOpened
            ? style["accordionItem-text__opened"]
            : style["accordionItem-text__closed"]
        )}
      >
        <p className="bodyText__small">{text}</p>
      </div>
    </div>
  );
};
