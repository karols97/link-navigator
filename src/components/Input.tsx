import React, { HTMLInputTypeAttribute, forwardRef } from "react";
import { IconType } from "react-icons";

type InputProps = {
  label?: string;
  id: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  icon?: IconType;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      id,
      placeholder,
      type,
      value,
      onChange,
      className,
      icon: Icon,
      ...inputProps
    }: InputProps,
    ref
  ) => {
    Input.displayName = "Input";

    return (
      <div className="flex flex-col w-full">
        <label className="text-sm text-text-secondary pb-2 font-medium" htmlFor={id}>
          {label}
        </label>
        <div className="relative">
          <div className="absolute px-3.5 h-full w-full flex items-center justify-between text-text-placeholder pointer-events-none">
            {Icon && <Icon size={20}></Icon>}
          </div>
          <input
            ref={ref}
            id={id}
            placeholder={placeholder}
            className={`
              flex flex-col w-full items-center font-normal h-10 text-base text-text-placeholder border border-border-primary hover:border-gray-400 py-2 px-3.5 ${
                Icon ? "pl-10" : ""
              } rounded-lg active:border focus:ring-0 focus:outline-0 focus:border-gray-400 ${className}`}
            type={type}
            value={value}
            onChange={onChange}
            {...inputProps}></input>
        </div>
      </div>
    );
  }
);
