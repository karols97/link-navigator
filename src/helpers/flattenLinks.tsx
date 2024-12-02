import { FlattenedLink, LinkType } from "@/types";

export function flattenLinks(
  links: LinkType[],
  parentId: string | null = null,
  depth: number
): FlattenedLink[] {
  return links.flatMap((link) => [
    { id: link.id, parentId, depth, name: link.name, url: link.url },
    ...flattenLinks(link.sublinks, link.id, depth + 1),
  ]);
}
