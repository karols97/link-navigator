"use client";
import { LinkType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface LinksState {
  links: LinkType[];
}

const initialState: LinksState = {
  links: [],
};

const addNestedSublink = (links: LinkType[], linkId: string, newSublink: LinkType): LinkType[] => {
  return links.map((singleLink) => {
    if (singleLink.id === linkId) {
      return { ...singleLink, sublinks: [...singleLink.sublinks, newSublink] } as LinkType;
    } else if (singleLink.sublinks.length > 0) {
      return {
        ...singleLink,
        sublinks: addNestedSublink(singleLink.sublinks, linkId, newSublink),
      } as LinkType;
    }
    return singleLink as LinkType;
  });
};

const removeNestedLink = (links: LinkType[], linkId: string): LinkType[] => {
  return links
    .map((singleLink) => {
      if (singleLink.id === linkId) {
        return null;
      } else if (singleLink.sublinks.length > 0) {
        return {
          ...singleLink,
          sublinks: removeNestedLink(singleLink.sublinks, linkId),
        };
      }
      return singleLink;
    })
    .filter((singleLink) => singleLink !== null);
};

const editNestedLink = (
  links: LinkType[],
  linkId: string,
  linkName: string,
  linkUrl: string
): LinkType[] => {
  return links.map((singleLink) => {
    if (singleLink.id === linkId) {
      return { ...singleLink, name: linkName, url: linkUrl } as LinkType;
    } else if (singleLink.sublinks.length > 0) {
      return {
        ...singleLink,
        sublinks: editNestedLink(singleLink.sublinks, linkId, linkName, linkUrl),
      };
    }
    return singleLink;
  });
};

const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    addLink: (state, action) => {
      state.links.push(action.payload);
    },
    removeLink: (state, action) => {
      state.links = removeNestedLink(state.links, action.payload);
    },
    addSublink: (state, action) => {
      state.links = addNestedSublink(state.links, action.payload[0], action.payload[1]);
    },
    editLink: (state, action) => {
      state.links = editNestedLink(
        state.links,
        action.payload[0],
        action.payload[1],
        action.payload[2]
      );
    },
  },
});

export const { addLink, removeLink, addSublink, editLink } = linksSlice.actions;

export default linksSlice.reducer;
