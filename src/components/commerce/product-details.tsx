"use client";

import { useState } from "react";
import { useCommerce } from "@/components/providers/commerce-provider";
import type { CommerceItem } from "@/data/products";
import { formatCurrency } from "@/lib/format";
import { buildCheckoutUrl, buildProductWhatsAppMessage } from "@/lib/whatsapp";
import { TrustBadges } from "./trust-badges";

type ProductDetailsProps = {
  item: CommerceItem;
};

export function ProductDetails({ item }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isWishlisted, toggleWishlist } = useCommerce();
  const checkoutUrl = buildCheckoutUrl(buildProductWhatsAppMessage(item.name));

  return (
    <div className="product-details">
      <span className="product-details__category">{item.category}</span>
      <h1 className="product-details__title">{item.name}</h1>
      <p className="product-details__summary">{item.shortDescription}</p>

      <div className="product-details__prices">
        <span>{formatCurrency(item.oldPrice)}</span>
        <strong>{formatCurrency(item.price)}</strong>
        <small>{item.installments}</small>
      </div>

      <div className="quantity-control">
        <span>Quantidade</span>
        <div className="quantity-control__buttons">
          <button
            aria-label="Diminuir quantidade"
            type="button"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
          >
            -
          </button>
          <strong>{quantity}</strong>
          <button
            aria-label="Aumentar quantidade"
            type="button"
            onClick={() => setQuantity((current) => current + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="product-details__actions">
        <a className="product-details__buy" href={checkoutUrl}>
          Comprar agora
        </a>
        <button
          className="product-details__cart"
          type="button"
          onClick={() => addToCart(item, quantity)}
        >
          Adicionar ao carrinho
        </button>
        <button
          className="product-details__wishlist"
          type="button"
          onClick={() => toggleWishlist(item.id)}
        >
          {isWishlisted(item.id)
            ? "Remover da lista de desejos"
            : "Adicionar à lista de desejos"}
        </button>
      </div>

      <TrustBadges />
    </div>
  );
}
