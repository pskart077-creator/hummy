import { autocuidadoEConfiancaPost } from "./autocuidado-e-confianca";
import { comoEscolherSeuHummyPost } from "./como-escolher-seu-hummy";
import { energiaSemComplicarPost } from "./energia-sem-complicar";
import type { BlogPost } from "./types";

export type { BlogPost };

export const blogPosts: BlogPost[] = [
  comoEscolherSeuHummyPost,
  energiaSemComplicarPost,
  autocuidadoEConfiancaPost,
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
