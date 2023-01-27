import clsx from "clsx";

import style from "./Grid.module.scss";

interface RowPropsI {
  className?: string;
  children: React.ReactNode;
}

export const Row: React.FC<RowPropsI> = ({ children, className = "" }) => {
  return <div className={clsx(style.row, className)}>{children}</div>;
};
