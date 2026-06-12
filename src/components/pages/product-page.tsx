import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/commerce/product-details";
import { ProductGallery } from "@/components/commerce/product-gallery";
import { ProductInfoBlocks } from "@/components/commerce/product-info-blocks";
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
      <section className="product-page">
        <ProductGallery item={item} />
        <ProductDetails item={item} />
      </section>
      <ProductInfoBlocks item={item} />
    </main>
  );
}
