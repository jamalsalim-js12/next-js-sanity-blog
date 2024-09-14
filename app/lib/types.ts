/* eslint-disable @typescript-eslint/no-explicit-any */

export type SimpleBlogCard = {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
};

export type FullBlog = {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
};
