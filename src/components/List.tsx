import { LinkType } from "@/types";
import React, { useState } from "react";
import { AddLinkForm } from "./AddLinkForm";
import Link from "./Link";

type ListProps = {
  links: LinkType[];
  level?: number;
};

export const List = ({ links, level = 0 }: ListProps) => {
  const [isFormVisible, setIsFormVisible] = useState<string>("");
  const [isInEditMode, setIsInEditMode] = useState<LinkType | null>();
  const linksLength = links.length;

  return (
    <div className="bg-background-secondary rounded-lg">
      {links.map((singleLink, index) => {
        return (
          <div key={singleLink.id}>
            {isInEditMode?.id === singleLink.id ? (
              <div className="">
                <AddLinkForm
                  level={level}
                  setIsFormVisible={() => null}
                  setIsGeneralFormVisible={() => null}
                  setIsInEditMode={setIsInEditMode}
                  editModeOf={isInEditMode}
                  className={`border-0 border-b border-border-secondary rounded-none
                    ${level !== 0 && index === linksLength - 1 && "rounded-bl-lg"} 
                    ${level === 0 && index === 0 && "rounded-t-lg border-b"}
                    ${level !== 0 && "border-l"}
                    ${level === 0 && index !== 0 && "border-t -mt-[0.1rem]"}
                    ${level !== 0 && singleLink.sublinks.length > 0 && "rounded-bl-lg"}
                    ${
                      level !== 0 &&
                      index > 0 &&
                      (links[index - 1].sublinks.length > 0 ||
                        isFormVisible === links[index - 1].id) &&
                      "-mt-[0.1rem] border-t rounded-tl-lg"
                    }
                    ${level !== 0 && isFormVisible === singleLink.id && "rounded-bl-lg"}
                    `}
                />
              </div>
            ) : (
              <Link
                key={singleLink.id}
                link={singleLink}
                level={level}
                setIsFormVisible={setIsFormVisible}
                setIsInEditMode={setIsInEditMode}
                className={`border-border-secondary
                    ${level !== 0 && index === linksLength - 1 && "rounded-bl-lg"} 
                    ${level === 0 && index === 0 && "rounded-t-lg"}
                    ${level !== 0 && "border-l"}
                    ${level === 0 && index !== 0 && "border-t -mt-[0.1rem]"}
                    ${level !== 0 && singleLink.sublinks.length > 0 && "rounded-bl-lg"}
                    ${
                      level !== 0 &&
                      index > 0 &&
                      (links[index - 1].sublinks.length > 0 ||
                        isFormVisible === links[index - 1].id) &&
                      "-mt-[0.1rem] border-t rounded-tl-lg"
                    }
                    ${level !== 0 && isFormVisible === singleLink.id && "rounded-bl-lg"}
                  `}
              />
            )}
            {singleLink.sublinks.length > 0 && (
              <div className="">
                <div className="ml-16">
                  <List links={singleLink.sublinks} level={level + 1} />
                </div>
              </div>
            )}
            {isFormVisible === singleLink.id && (
              <div className="py-4 px-6 pl-16 bg-background-secondary">
                <AddLinkForm
                  key={singleLink.id}
                  setIsFormVisible={setIsFormVisible}
                  sublinkOf={singleLink}
                  setIsGeneralFormVisible={() => null}
                  setIsInEditMode={() => null}
                />
              </div>
            )}
          </div>
        );
      })}
      {/* </DndContext> */}
    </div>
  );
};
