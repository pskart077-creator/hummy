import type { Metadata } from "next";
import { ProductGrid } from "@/components/commerce/product-grid";
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
      />
      <section className="products-section products-section--page">
        <ProductGrid items={shopItems} />
      </section>
    </main>
  );
}
