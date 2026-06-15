import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
  category: string;
  readTime: string;
  content: ReactNode;
};
