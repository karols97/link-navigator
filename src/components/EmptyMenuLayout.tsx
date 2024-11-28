import React from "react";
import { GoPlusCircle } from "react-icons/go";
import { Button } from "./Button";

const EmptyMenuLayout = () => {
  return (
    <div className="flex flex-col w-full border border-border-secondary bg-background-secondary rounded-lg items-center gap-8 px-4 py-6">
      <div className="flex flex-col gap-1 items-center">
        <p className="text-base font-semibold text-text-primary">Menu jest puste</p>
        <p className="text-text-tertiary">W tym menu nie ma jeszcze żadnych linków.</p>
      </div>
      <Button color="fullPurple">
        <GoPlusCircle size={20} /> Dodaj pozycję menu
      </Button>
    </div>
  );
};

export default EmptyMenuLayout;
