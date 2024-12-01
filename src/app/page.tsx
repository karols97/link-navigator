"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { useState } from "react";
import { EmptyMenuLayout } from "@/components/EmptyMenuLayout";
import { AddLinkForm } from "@/components/AddLinkForm";
import { LinkList } from "@/components/LinkList";

const LinkNavigator = () => {
  const [isGeneralFormVisible, setIsGeneralFormVisible] = useState(false);
  const links = useSelector((state: RootState) => state.links.links);
  const numberOfLinks = links.length;

  return (
    <div className="flex flex-col gap-6">
      {numberOfLinks === 0 && <EmptyMenuLayout setIsGeneralFormVisible={setIsGeneralFormVisible} />}
      {numberOfLinks === 0 && isGeneralFormVisible && (
        <AddLinkForm
          setIsGeneralFormVisible={setIsGeneralFormVisible}
          setIsFormVisible={() => null}
          setIsInEditMode={() => null}
          level={0}
        />
      )}
      {numberOfLinks !== 0 && (
        <LinkList
          links={links}
          setIsGeneralFormVisible={setIsGeneralFormVisible}
          isGeneralFormVisible={isGeneralFormVisible}
        />
      )}
    </div>
  );
};

export default LinkNavigator;
