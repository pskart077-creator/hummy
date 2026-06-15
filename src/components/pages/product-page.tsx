import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/commerce/product-details";
import { ProductGallery } from "@/components/commerce/product-gallery";
import { ProductProofSection } from "@/components/commerce/product-proof-section";
import { ProductReviews } from "@/components/commerce/product-reviews";
import { getItemBySlug, shopItems } from "@/data/products";

export type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return shopItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getItemBySlug(slug);

  if (!item) {
    return {};
  }

  return {
    title: item.name,
    description: item.shortDescription,
    openGraph: {
      title: `${item.name} | Hummy Original`,
      description: item.shortDescription,
      images: item.images,
    },
  };
}

export async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const item = getItemBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <nav className="product-breadcrumb" aria-label="Caminho do produto">
        <div className="product-breadcrumb__inner">
          <Link href="/">Início</Link>
          <span aria-hidden="true">&gt;</span>
          <Link href="/produtos">Produtos</Link>
          <span aria-hidden="true">&gt;</span>
          <strong>{item.name}</strong>
        </div>
      </nav>
      <section className="product-page">
        <ProductGallery item={item} />
        <ProductDetails item={item} />
      </section>
      <ProductProofSection item={item} />
      <ProductReviews item={item} />
    </main>
  );
}
