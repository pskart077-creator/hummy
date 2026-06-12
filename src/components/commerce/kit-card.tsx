"use client";

import Image from "next/image";
import Link from "next/link";
import { useCommerce } from "@/components/providers/commerce-provider";
import type { CommerceItem } from "@/data/products";
import { formatCurrency } from "@/lib/format";

type KitCardProps = {
  kit: CommerceItem;
};

export function KitCard({ kit }: KitCardProps) {
  const { addToCart } = useCommerce();

  return (
    <article className="kit-card">
      <Image
        alt={kit.name}
        className="kit-card__image"
        height={480}
        src={kit.images[0]}
        width={480}
      />
      <div className="kit-card__content">
        <span className="kit-card__quantity">{kit.quantity}</span>
        <h3 className="kit-card__title">{kit.name}</h3>
        <p className="kit-card__description">{kit.shortDescription}</p>
        <div className="kit-card__prices">
          <span>{formatCurrency(kit.oldPrice)}</span>
          <strong>{formatCurrency(kit.price)}</strong>
          <em>{kit.savings}</em>
          <small>{kit.installments}</small>
        </div>
        <div className="kit-card__actions">
          <button type="button" onClick={() => addToCart(kit)}>
            Comprar kit
          </button>
          <Link href={`/produtos/${kit.slug}`}>Ver detalhes</Link>
        </div>
      </div>
    </article>
  );
}
