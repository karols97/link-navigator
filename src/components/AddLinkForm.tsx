import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Input } from "./Input";
import Image from "next/image";
import { Button } from "./Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "@/types";
import { addLink } from "@/state/links/linksSlice";

type InputData = {
  name: "string";
  link: "string";
};

const AddLinkForm = () => {
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const dispatch = useDispatch();

  const { handleSubmit, register } = useForm<InputData>();

  const onSubmit = (data: InputData) => {
    const newLink: Link = {
      id: self.crypto.randomUUID(),
      name: data.name,
      url: data.link,
      sublinks: [],
    };
    dispatch(addLink(newLink));
    console.log(newLink);
  };

  return (
    <form
      className="flex flex-col border border-border-primary bg-background-primary p-5 gap-5 rounded-lg"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-full gap-2">
          <Input
            {...register("name")}
            id="nazwa"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="np. Promocje"
            label="Nazwa"></Input>
          <Input
            {...register("link")}
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
        <Button color="lightPurple" type="submit">
          Dodaj
        </Button>
      </div>
    </form>
  );
};

export default AddLinkForm;
