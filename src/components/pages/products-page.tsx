import type { Metadata } from "next";
import { CatalogSection } from "@/components/commerce/catalog-section";
import { PageHero } from "@/components/sections/page-hero";
import { shopItems } from "@/data/products";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Veja todos os produtos e kits Hummy Original para vitalidade, disposição, confiança e bem-estar.",
};

export function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Produtos"
        title="Todos os Hummys"
        description="Produtos e kits pensados para uma rotina mais leve, prática e confiante."
        imageAlt="Linha de produtos Hummy Original"
        imageDesktop="/assets/products/3-todos-img.png"
        imageTablet="/assets/products/3-todos-img.png"
        imageMobile="/assets/products/3-todos-img.png"
      />
      <CatalogSection
        eyebrow="Loja Hummy"
        title="Produtos Hummy Original"
        items={shopItems}
      />
    </main>
  );
}
