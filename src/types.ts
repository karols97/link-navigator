export type LinkType = {
  id: string;
  name: string;
  url: string;
  sublinks: LinkType[];
};
