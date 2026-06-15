import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogSection } from "@/components/commerce/catalog-section";
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

const categoryHeroImages = {
  "para-ela": {
    alt: "Hummy Libido Fem",
    desktop: "/assets/categories/libido-fem.png",
    tablet: "/assets/categories/libido-fem.png",
    mobile: "/assets/categories/libido-fem.png",
  },
  "para-ele": {
    alt: "Hummy Tadala",
    desktop: "/assets/categories/tadala.png",
    tablet: "/assets/categories/tadala.png",
    mobile: "/assets/categories/tadala.png",
  },
  vitalidade: {
    alt: "Hummy Maca",
    desktop: "/assets/categories/maca.png",
    tablet: "/assets/categories/maca.png",
    mobile: "/assets/categories/maca.png",
  },
  kits: {
    alt: "Kits Hummy Original",
    desktop: "/assets/categories/kits.png",
    tablet: "/assets/categories/kits.png",
    mobile: "/assets/categories/kits.png",
  },
};

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
  const heroImages =
    categoryHeroImages[slug as keyof typeof categoryHeroImages];

  return (
    <main>
      <PageHero
        eyebrow="Categoria"
        title={category.title}
        description={category.description}
        imageAlt={heroImages.alt}
        imageDesktop={heroImages.desktop}
        imageTablet={heroImages.tablet}
        imageMobile={heroImages.mobile}
      />
      <CatalogSection
        eyebrow="Categoria"
        title={category.title}
        items={items}
        showCategoryFilter={slug === "kits"}
      />
    </main>
  );
}
