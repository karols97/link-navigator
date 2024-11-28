import React from "react";
import { Button } from "./Button";
import Link from "./Link";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

const LinkList = () => {
  const links = useSelector((state: RootState) => state.links.links);
  return (
    <div className="flex flex-col w-full border border-border-primary rounded-lg divide-y">
      <div className="divide-y">
        {links.map((singleLink) => {
          return <Link key={singleLink.id} name={singleLink.name} url={singleLink.url} />;
        })}
      </div>
      <footer className="py-5 px-6">
        <Button>Dodaj pozycję menu</Button>
      </footer>
    </div>
  );
};

export default LinkList;
