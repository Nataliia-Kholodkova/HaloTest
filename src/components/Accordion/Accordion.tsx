import { useState } from "react";

import { AccordionItem } from "./AccordionItem";

interface AccItemI {
  title: string;
  text: string;
}

const accordionItems: AccItemI[] = [
  {
    title: "What can I do to protect our planet?",
    text: "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources",
  },
  {
    title: "How to save nature ecology?",
    text: "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources",
  },
  {
    title: "What is nature conservation?",
    text: "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources",
  },
];

export const Accordion = () => {
  const [openedItem, setOpenedItem] = useState(0);

  return (
    <>
      {accordionItems.map((accordionItem: AccItemI, i: number) => (
        <AccordionItem
          text={accordionItem.text}
          title={accordionItem.title}
          currNumber={i}
          setOpened={setOpenedItem}
          isOpened={i === openedItem}
          key={i.toString()}
        />
      ))}
    </>
  );
};
