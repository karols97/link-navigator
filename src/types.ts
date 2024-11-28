export type Link = {
  id: string;
  name: string;
  url: string;
  sublinks: Link[];
};
