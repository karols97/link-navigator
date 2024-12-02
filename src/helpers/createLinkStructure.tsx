import { FlattenedLink, LinkType } from "@/types";

const assignSublink = (
  structuredLink: LinkType,
  flattenedLink: FlattenedLink,
  sublink: LinkType
) => {
  if (structuredLink.id === flattenedLink.parentId) {
    structuredLink.sublinks.push(sublink);
  } else if (structuredLink.sublinks.length > 0) {
    structuredLink.sublinks.map((singleSublink) => {
      if (singleSublink.id === flattenedLink.parentId) {
        singleSublink.sublinks.push(sublink);
      } else if (singleSublink.sublinks.length > 0) {
        assignSublink(singleSublink, flattenedLink, sublink);
      }
    });
  }
};

export const createLinkStructure = (flattenedLinks: FlattenedLink[]) => {
  const linksStructured: LinkType[] = [];
  flattenedLinks.map((singleFlattenedLink) => {
    if (singleFlattenedLink.depth === 0) {
      const link: LinkType = {
        id: singleFlattenedLink.id,
        name: singleFlattenedLink.name,
        url: singleFlattenedLink.url,
        sublinks: [],
      };
      linksStructured.push(link);
    } else {
      const sublink: LinkType = {
        id: singleFlattenedLink.id,
        name: singleFlattenedLink.name,
        url: singleFlattenedLink.url,
        sublinks: [],
      };
      linksStructured.map((singleLinkStructured) => {
        assignSublink(singleLinkStructured, singleFlattenedLink, sublink);
      });
    }
  });
  return linksStructured;
};
