import { FlattenedLink, LinkType } from "@/types";
import { createLinkStructure } from "./createLinkStructure";
import { Active, Over } from "@dnd-kit/core";
import { Coordinates } from "@dnd-kit/utilities";

export const reorderLinks = (
  flattenedLinks: FlattenedLink[],
  active: Active,
  over: Over,
  delta: Coordinates
): LinkType[] => {
  const activeIndex = flattenedLinks.findIndex((link) => link.id === active.id);
  const overIndex = flattenedLinks.findIndex((link) => link.id === over.id);

  if (activeIndex === -1 || overIndex === -1) return createLinkStructure(flattenedLinks);

  const activeLink = flattenedLinks[activeIndex];
  const overLink = flattenedLinks[overIndex];

  //wyciąganie w góre
  if (activeLink.id === overLink.id && activeLink.depth > 0 && delta.x < -50) {
    activeLink.depth -= 1;
    if (activeLink.depth === 0) {
      activeLink.parentId = null;
    } else if (activeLink.depth === flattenedLinks[activeIndex - 1].depth) {
      activeLink.parentId = flattenedLinks[activeIndex - 1].parentId;
    }
  }

  //dodanie jako sublink
  if (activeLink.depth >= overLink.depth && delta.x > 50) {
    flattenedLinks.splice(activeIndex, 1);
    const newParentId =
      activeLink.id === overLink.id ? flattenedLinks[activeIndex - 1].id : overLink.id;
    const newSublink: FlattenedLink = {
      id: activeLink.id,
      name: activeLink.name,
      url: activeLink.url,
      parentId: newParentId,
      depth: overLink.depth + 1,
    };
    flattenedLinks.splice(overIndex, 0, newSublink);
  }

  //przesuwanie na tym samym poziomie
  if (activeLink.depth === overLink.depth && activeLink.id !== overLink.id) {
    const [movedLink] = flattenedLinks.splice(activeIndex, 1);
    flattenedLinks.splice(overIndex, 0, movedLink);
  }

  return createLinkStructure(flattenedLinks);
};
