"use client";
import React from "react";
import { Button } from "./Button";
import Image from "next/image";
import { LinkType } from "@/types";
import { removeLink } from "@/state/links/linksSlice";
import { useDispatch } from "react-redux";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type LinkProps = {
  link: LinkType;
  setIsFormVisible: (arg: string) => void;
  setIsInEditMode: (arg: LinkType | null) => void;
  className?: string;
};

const Link = ({ link, setIsFormVisible, setIsInEditMode, className }: LinkProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: link.id,
  });
  const dispatch = useDispatch();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: "grab",
    border: isDragging ? "2px dashed #9747FF" : "",
    borderRadius: isDragging ? "8px" : "",
  };
  return (
    <div className="flex flex-col" ref={setNodeRef} {...attributes} {...listeners}>
      <div
        style={style}
        className={`flex flex-row w-full items-center gap-1 justify-between px-6 py-4 border-b bg-background-primary ${className}`}>
        <div className="flex flex-row items-center">
          <div className="h-8 px-2 py-2 border-0">
            <Image
              alt="drag and drop icon"
              src={"/icons/DragAndDrop.svg"}
              width={20}
              height={20}></Image>
          </div>
          <div className="flex flex-col gap-1.5">
            <h1 className="text-sm font-semibold text-text-primary">{link.name}</h1>
            <h2 className="text-sm text-text-tertiary">{link.url}</h2>
          </div>
        </div>
        <div className="flex flex-row" onPointerDown={(e) => e.stopPropagation()} ref={null}>
          <Button className="rounded-r-none" onClick={() => dispatch(removeLink(link.id))}>
            Usuń
          </Button>
          <Button
            className="rounded-none border-x-0"
            onClick={() => {
              setIsFormVisible("");
              setIsInEditMode(link);
            }}>
            Edytuj
          </Button>
          <Button
            className="rounded-l-none"
            onClick={() => {
              setIsInEditMode(null);
              setIsFormVisible(link.id);
            }}>
            Dodaj pozycję menu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Link;
