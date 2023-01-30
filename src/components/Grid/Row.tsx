import clsx from "clsx";

import { forwardRef, MutableRefObject } from "react";
import style from "./Grid.module.scss";

interface RowPropsI {
  className?: string;
  children: React.ReactNode;
  ref?: MutableRefObject<HTMLDivElement>;
}

export const Row = forwardRef<HTMLDivElement, RowPropsI>(
  ({ children, className = "" }, ref) => (
    <div className={clsx(style.row, className)} ref={ref}>
      {children}
    </div>
  )
);

Row.displayName = 'Row';
