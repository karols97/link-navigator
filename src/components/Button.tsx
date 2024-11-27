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
    gray: "bg-transparent border border-border-secondary text-text-secondary",
    lightPurple: "bg-transparent border border-purple-secondary text-text-purple",
    fullPurple: "bg-purple-primary border border-purple-primary text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`flex flex-row border items-center justify-center gap-2 rounded-lg px-[14px] py-[10px] text-sm hover:bg-blend-darken
        ${disabled ? "cursor-not-allowed bg-opacity-50" : ""}
        ${colors[color]} 
        ${className}`}
      type={type}
      disabled={disabled}>
      {children}
    </button>
  );
};
