import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/components/pages/blog/posts";

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

  const currentIndex = blogPosts.findIndex((item) => item.slug === post.slug);
  const previousPost =
    blogPosts[(currentIndex - 1 + blogPosts.length) % blogPosts.length];
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

  return (
    <main>
      <article className="blog-post-page">
        <div className="blog-post-page__inner">
          <header className="blog-post-page__header">
            <span>{post.category}</span>
            <h1>{post.title}</h1>
          </header>

          <div className="blog-post-page__content">{post.content}</div>

          <nav className="blog-post-page__pagination" aria-label="Navegacao do blog">
            <Link href={`/blog/${previousPost.slug}`}>Artigo anterior</Link>
            <Link href={`/blog/${nextPost.slug}`}>Artigo seguinte</Link>
          </nav>
        </div>
      </article>
    </main>
  );
}
