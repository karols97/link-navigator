import { Button } from "@/components/Button";
import React from "react";
import { GoPlusCircle } from "react-icons/go";

const LinkNavigator = () => {
  return (
    <div className="">
      <Button>Anuluj</Button>
      <Button color="lightPurple">Dodaj</Button>
      <Button color="fullPurple">
        <GoPlusCircle size={20} /> Dodaj pozycję menu
      </Button>
    </div>
  );
};

export default LinkNavigator;
