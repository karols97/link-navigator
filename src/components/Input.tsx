import React, { HTMLInputTypeAttribute, ReactNode, forwardRef } from "react";

type InputProps = {
  label?: string;
  children?: ReactNode;
  id: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      children,
      id,
      placeholder,
      type,
      value,
      onChange,
      className,
      ...inputProps
    }: InputProps,
    ref
  ) => {
    Input.displayName = "Input";

    return (
      <div className="flex flex-col w-full">
        <label className="text-sm text-text-secondary py-2 font-medium" htmlFor={id}>
          {label}
        </label>
        <div className="relative flex flex-row">
          <div className="absolute px-3 h-full w-full flex items-center justify-between text-text-placeholder pointer-events-none">
            {children}
          </div>
          <input
            ref={ref}
            id={id}
            placeholder={placeholder}
            className={`
              w-full font-normal h-10 text-text-placeholder border border-border-primary hover:border-gray-400 py-1 pl-10 rounded-lg active:border focus:ring-0 focus:outline-0 focus:border-gray-400 ${className}`}
            type={type}
            value={value}
            onChange={onChange}
            {...inputProps}></input>
        </div>
      </div>
    );
  }
);
