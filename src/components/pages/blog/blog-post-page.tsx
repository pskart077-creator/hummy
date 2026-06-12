import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/components/pages/blog/blog-posts";

export type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateBlogStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateBlogMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Blog Hummy Original`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article className="blog-post-page">
        <header className="blog-post-page__header">
          <Link className="blog-post-page__back" href="/#blog">
            Voltar para o blog
          </Link>
          <span>{post.category}</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="blog-post-page__meta">
            <strong>{post.date}</strong>
            <small>{post.readTime} de leitura</small>
          </div>
        </header>

        <Image
          alt={post.imageAlt}
          className="blog-post-page__image"
          height={620}
          priority
          src={post.image}
          width={1100}
        />

        <div className="blog-post-page__content">
          {post.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
