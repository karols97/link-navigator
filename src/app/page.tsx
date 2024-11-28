"use client";
import EmptyMenuLayout from "@/components/EmptyMenuLayout";
import AddLinkForm from "@/components/AddLinkForm";
import LinkList from "@/components/LinkList";

const LinkNavigator = () => {
  return (
    <div className="flex flex-col gap-6">
      <EmptyMenuLayout />
      <AddLinkForm />
      <LinkList />
    </div>
  );
};

export default LinkNavigator;
