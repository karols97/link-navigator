"use client";
import { Link } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface LinksState {
  links: Link[];
}

const initialState: LinksState = {
  links: [],
};

const counterSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    addLink: (state, action) => {
      state.links.push(action.payload);
    },
    removeLink: (state, action) => {
      state.links.filter((singleLink) => singleLink.id !== action.payload);
    },
    //TODO: implement edit
  },
});

export const { addLink, removeLink } = counterSlice.actions;

export default counterSlice.reducer;
