import clsx from "clsx";

import style from './Grid.module.scss';

type ElementT =
  | "div"
  | "nav"
  | "section"
  | "article"
  | "aside"
  | "figure"
  | "footer"
  | "header";

interface ContainerPropsI {
  element?: ElementT;
  className?: string;
  children?: React.ReactNode;
}
export const Container: React.FC<ContainerPropsI> = ({
  children,
  element,
  className,
}) => {
  const Component = element || "section";

  return (
    <Component className={clsx(style.container, { [className as any]: className })}>
      {children}
    </Component>
  );
};
