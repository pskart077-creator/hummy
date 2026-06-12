import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/components/pages/blog/blog-posts";

export function HomeBlogPosts() {
  return (
    <section className="home-blog-posts" id="blog" aria-label="Blog da Hummy">
      <div className="home-blog-posts__inner">
        <h2>Blog da Hummy</h2>

        <div className="home-blog-posts__grid">
          {blogPosts.slice(0, 3).map((post) => (
            <article className="home-blog-card" key={post.slug}>
              <Link className="home-blog-card__image-link" href={`/blog/${post.slug}`}>
                <Image
                  alt={post.imageAlt}
                  className="home-blog-card__image"
                  height={360}
                  src={post.image}
                  width={560}
                />
              </Link>

              <div className="home-blog-card__content">
                <span className="home-blog-card__category">{post.category}</span>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>

                <div className="home-blog-card__date">Data: {post.date}</div>

                <Link className="home-blog-card__button" href={`/blog/${post.slug}`}>
                  Ver detalhes
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
