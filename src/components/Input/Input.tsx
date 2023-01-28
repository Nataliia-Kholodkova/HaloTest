import clsx from 'clsx'


import style from './Input.module.scss'

interface InputPropsI {
    type: string;
    icon?: React.ReactNode;
    placeholder?: string;
    value: string;
    setValue: (arg: string) => void;
    inputClassName?: string;
    labelClassName?: string;
    children?: React.ReactNode;
}

export const Input: React.FC<InputPropsI> = ({ children, type, icon, placeholder, value, setValue, inputClassName, labelClassName }) => {
  return (
    <label className={clsx(style.label, labelClassName)}>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={clsx(style.input, inputClassName)}
      />
      {icon && icon}
      {children}
    </label>
  );
};
