import React from "react";
import { Button } from "./Button";
import { LinkType } from "@/types";
import { List } from "./List";
import { AddLinkForm } from "./AddLinkForm";

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
  return (
    <div className="bg-background-secondary rounded-lg">
      <div className="flex flex-col w-full border border-border-primary bg-background-primary rounded-lg">
        <List links={links} />
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
