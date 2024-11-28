"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import React, { useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

const LinkNavigator = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="">
      <Button>Anuluj</Button>
      <Button color="lightPurple">Dodaj</Button>
      <Button color="fullPurple">
        <GoPlusCircle size={20} /> Dodaj pozycję menu
      </Button>
      <Input
        id="nazwa"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="np. Promocje"
        label="Nazwa">
        <CiSearch></CiSearch>
      </Input>
    </div>
  );
};

export default LinkNavigator;
