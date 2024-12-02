export type LinkType = {
  id: string;
  name: string;
  url: string;
  sublinks: LinkType[];
};

export type FlattenedLink = {
  id: string;
  parentId: string | null;
  depth: number;
  name: string;
  url: string;
};
