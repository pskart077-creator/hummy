import Image from "next/image";
import Link from "next/link";
import type { CommerceItem } from "@/data/products";

type ProductCardProps = {
  item: CommerceItem;
};

export function ProductCard({ item }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link className="product-card__image-link" href={`/produtos/${item.slug}`}>
        <Image
          alt={item.name}
          className="product-card__image"
          height={520}
          src={item.images[0]}
          width={520}
        />
      </Link>

      <div className="product-card__content">
        <div>
          <span className="product-card__category">{item.category}</span>
          <h3 className="product-card__title">
            <Link href={`/produtos/${item.slug}`}>{item.name}</Link>
          </h3>
          <p className="product-card__description">{item.shortDescription}</p>
        </div>

        <Link className="product-card__button" href={`/produtos/${item.slug}`}>
          Ver preço
        </Link>
      </div>
    </article>
  );
}
