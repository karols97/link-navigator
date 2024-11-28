import React from "react";
import { Button } from "./Button";
import Link from "./Link";

const LinkList = () => {
  const links = [1, 2, 3];
  return (
    <div className="flex flex-col w-full border border-border-primary rounded-lg divide-y">
      <div className="divide-y">
        {links.map((singleLink) => {
          return <Link key={singleLink} />;
        })}
      </div>
      <footer className="py-5 px-6">
        <Button>Dodaj pozycję menu</Button>
      </footer>
    </div>
  );
};

export default LinkList;
