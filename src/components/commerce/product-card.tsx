"use client";

import Image from "next/image";
import Link from "next/link";
import { useCommerce } from "@/components/providers/commerce-provider";
import { HeartIcon } from "@/components/ui/icons";
import type { CommerceItem } from "@/data/products";
import { formatCurrency, formatDiscount } from "@/lib/format";

type ProductCardProps = {
  item: CommerceItem;
};

export function ProductCard({ item }: ProductCardProps) {
  const { addToCart, isWishlisted, toggleWishlist } = useCommerce();
  const discount = formatDiscount(item.oldPrice, item.price);
  const wishlisted = isWishlisted(item.id);

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

      <button
        aria-label={
          wishlisted
            ? `Remover ${item.name} da lista de desejos`
            : `Adicionar ${item.name} à lista de desejos`
        }
        className={
          wishlisted
            ? "product-card__wishlist product-card__wishlist--active"
            : "product-card__wishlist"
        }
        type="button"
        onClick={() => toggleWishlist(item.id)}
      >
        <HeartIcon />
      </button>

      <div className="product-card__content">
        <div>
          <span className="product-card__category">{item.category}</span>
          <h3 className="product-card__title">
            <Link href={`/produtos/${item.slug}`}>{item.name}</Link>
          </h3>
          <p className="product-card__description">{item.shortDescription}</p>
        </div>

        <div className="product-card__price-row">
          <div>
            <span className="product-card__old-price">
              {formatCurrency(item.oldPrice)}
            </span>
            <strong className="product-card__price">
              {formatCurrency(item.price)}
            </strong>
            <span className="product-card__installments">
              {item.installments}
            </span>
          </div>
          <span className="product-card__discount">{discount}% OFF</span>
        </div>

        <button
          className="product-card__button"
          type="button"
          onClick={() => addToCart(item)}
        >
          Adicionar
        </button>
      </div>
    </article>
  );
}
