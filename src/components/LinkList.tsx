import React from "react";
import { Button } from "./Button";
import { LinkType } from "@/types";
import { List } from "./List";
import { AddLinkForm } from "./AddLinkForm";
import { closestCorners, DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { flattenLinks } from "@/helpers/flattenLinks";
import { reorderLinks } from "@/helpers/reorderLinks";
import { useDispatch } from "react-redux";
import { updateLinks } from "@/state/links/linksSlice";

type LinkListProps = {
  links: LinkType[];
  setIsGeneralFormVisible: (arg: boolean) => void;
  isGeneralFormVisible: boolean;
};

export const LinkList = ({
  links,
  setIsGeneralFormVisible,
  isGeneralFormVisible,
}: LinkListProps) => {
  const dispatch = useDispatch();
  const flattenedLinks = flattenLinks(links, null, 0);
  console.log(flattenedLinks);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const updatedLinks = reorderLinks(flattenedLinks, active.id as string, over.id as string);
    dispatch(updateLinks(updatedLinks));

    console.log("active", active);
    console.log("over:", over);
  };
  return (
    <div className="bg-background-secondary rounded-lg">
      <div className="flex flex-col w-full border border-border-primary bg-background-primary rounded-lg">
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
          <SortableContext items={flattenedLinks}>
            <List links={links} level={0} />
          </SortableContext>
        </DndContext>

        {isGeneralFormVisible && (
          <div className="py-4 px-6 bg-background-secondary">
            <AddLinkForm
              level={0}
              setIsFormVisible={() => null}
              setIsGeneralFormVisible={setIsGeneralFormVisible}
              setIsInEditMode={() => null}
            />
          </div>
        )}
        <footer className="py-5 px-6 border-t -mt-[0.05rem]">
          <Button onClick={() => setIsGeneralFormVisible(true)}>Dodaj pozycję menu</Button>
        </footer>
      </div>
    </div>
  );
};
