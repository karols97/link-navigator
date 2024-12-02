import { FlattenedLink, LinkType } from "@/types";
import { createLinkStructure } from "./createLinkStructure";

export const reorderLinks = (
  flattenedLinks: FlattenedLink[],
  activeId: string,
  overId: string
): LinkType[] => {
  const activeIndex = flattenedLinks.findIndex((link) => link.id === activeId);
  const overIndex = flattenedLinks.findIndex((link) => link.id === overId);

  if (activeIndex === -1 || overIndex === -1) return createLinkStructure(flattenedLinks);

  const activeLink = flattenedLinks[activeIndex];
  const overLink = flattenedLinks[overIndex];

  //wyciąganie w góre
  if (activeLink.id === overLink.id && activeLink.depth > 0) {
    activeLink.depth -= 1;
    if (activeLink.depth === 0) {
      activeLink.parentId = null;
    } else if (activeLink.depth === flattenedLinks[activeIndex - 1].depth) {
      activeLink.parentId = flattenedLinks[activeIndex - 1].parentId;
    }
  }

  //przesuwanie na tym samym poziomie
  if (activeLink.depth === overLink.depth && activeLink.id !== overLink.id) {
    const [movedLink] = flattenedLinks.splice(activeIndex, 1);
    flattenedLinks.splice(overIndex, 0, movedLink);
  }

  // Promote, demote, or reorder based on positions
  if (overLink.depth < activeLink.depth) {
    // Promote to parent level
    activeLink.parentId = overLink.parentId;
    activeLink.depth = overLink.depth;
  } else if (overLink.depth > activeLink.depth) {
    // Demote as child of overLink
    activeLink.parentId = overLink.id;
    activeLink.depth = overLink.depth + 1;
  } else {
    // Same level reorder
    activeLink.parentId = overLink.parentId;
  }

  return createLinkStructure(flattenedLinks);
};
