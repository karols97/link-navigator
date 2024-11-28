import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
// import Icon from "/icons/Icon.svg";
import { Input } from "./Input";
import Image from "next/image";
import { Button } from "./Button";

const AddLinkForm = () => {
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");
  return (
    <div className="flex flex-col border border-border-primary bg-background-primary p-5 gap-5 rounded-lg">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-full gap-2">
          <Input
            id="nazwa"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="np. Promocje"
            label="Nazwa"></Input>
          <Input
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Wklej lub wyszukaj"
            label="Link"
            icon={CiSearch}></Input>
        </div>
        <Button
          className="h-8 px-2 py-2 border-0"
          onClick={() => {
            setName("");
            setLink("");
          }}>
          <Image alt="bin icon" src={"/icons/Bin.svg"} width={20} height={20}></Image>
        </Button>
      </div>
      <div className="flex flex-row gap-2">
        <Button>Anuluj</Button>
        <Button color="lightPurple">Dodaj</Button>
      </div>
    </div>
  );
};

export default AddLinkForm;
