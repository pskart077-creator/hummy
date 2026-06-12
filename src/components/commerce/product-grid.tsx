import type { CommerceItem } from "@/data/products";
import { ProductCard } from "./product-card";

type ProductGridProps = {
  items: CommerceItem[];
};

export function ProductGrid({ items }: ProductGridProps) {
  return (
    <div className="product-grid">
      {items.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
}
