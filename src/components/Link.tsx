"use client";
import React from "react";
import { Button } from "./Button";
import Image from "next/image";

type LinkProps = {
  name: string;
  url: string;
};

const Link = ({ name, url }: LinkProps) => {
  return (
    <div className="flex flex-row w-full items-center gap-1 justify-between px-6 py-4">
      <div className="flex flex-row items-center">
        <Button className="h-8 px-2 py-2 border-0">
          <Image alt="bin icon" src={"/icons/DragAndDrop.svg"} width={20} height={20}></Image>
        </Button>
        <div className="flex flex-col gap-1.5">
          <h1 className="text-sm font-semibold text-text-primary">{name}</h1>
          <h2 className="text-sm text-text-tertiary">{url}</h2>
        </div>
      </div>

      <div className="flex flex-row">
        <Button className="rounded-r-none">Usuń</Button>
        <Button className="rounded-none border-x-0">Edytuj</Button>
        <Button className="rounded-l-none">Dodaj pozycję menu</Button>
      </div>
    </div>
  );
};

export default Link;
