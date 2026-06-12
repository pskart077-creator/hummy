import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/commerce/product-grid";
import { PageHero } from "@/components/sections/page-hero";
import {
  categories,
  getCategoryBySlug,
  getItemsByCategory,
} from "@/data/products";

export type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  return {
    title: category.title,
    description: category.description,
  };
}

export async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const items = getItemsByCategory(slug);

  return (
    <main>
      <PageHero
        eyebrow="Categoria"
        title={category.title}
        description={category.description}
      />
      <section className="products-section products-section--page">
        <ProductGrid items={items} />
      </section>
    </main>
  );
}
