import style from "./Grid.module.scss";

interface ColPropsI {
  sm?: number;
  md?: number;
  lg?: number;
  className?: string;
  children: React.ReactNode;
}

interface ColGenPropsI {
  sm?: number;
  md?: number;
  lg?: number;
  className?: string;
}

const generateClasses = ({ sm, md, lg, className }: ColGenPropsI): string => {
  const classes = [];

  if (className) classes.push(className);
  if (sm || sm === 0) classes.push(style[`col-sm-${sm}`]);
  if (md || md === 0) classes.push(style[`col-md-${md}`]);
  if (lg || lg === 0) classes.push(style[`col-lg-${lg}`]);

  return classes.join(" ");
};

export const Col: React.FC<ColPropsI> = ({
  children,
  sm,
  md,
  lg,
  className = "",
}) => {
  const classes = generateClasses({ sm, md, lg, className });

  return (
    <div className={`${style.col} ${classes}`}>
      {children}
    </div>
  );
};
