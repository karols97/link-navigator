"use client";

import React, { ReactNode } from "react";

export type ButtonType = {
  gray: "bg-transparent border border-border-secondary text-text-secondary";
  lightPurple: "bg-transparent border border-purple-secondary text-text-purple";
  fullPuple: "bg-purple-primary border border-purple-primary text-white";
};

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void);
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  key?: string;
  color?: "gray" | "lightPurple" | "fullPurple";
};

export const Button = ({
  className,
  children,
  onClick,
  type = "button",
  disabled,
  color = "gray",
}: ButtonProps) => {
  const colors: Record<"gray" | "lightPurple" | "fullPurple", string> = {
    gray: "bg-white border border-border-secondary text-text-secondary hover:bg-border-secondary",
    lightPurple:
      "bg-white border border-purple-secondary text-text-purple hover:bg-purple-secondary",
    fullPurple:
      "bg-purple-primary border border-purple-primary text-white hover:bg-violet-700 hover:border-violet-700",
  };

  return (
    <button
      onClick={onClick}
      className={`flex flex-row border items-center justify-center gap-2 rounded-lg px-[14px] py-[10px] text-sm font-semibold
        ${disabled ? "cursor-not-allowed bg-opacity-50" : ""}
        ${colors[color]} 
        ${className}`}
      type={type}
      disabled={disabled}>
      {children}
    </button>
  );
};
