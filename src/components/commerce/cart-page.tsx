"use client";

import Image from "next/image";
import Link from "next/link";
import { useCommerce } from "@/components/providers/commerce-provider";
import { formatCurrency } from "@/lib/format";
import { buildCartWhatsAppMessage, buildCheckoutUrl } from "@/lib/whatsapp";

export function CartPage() {
  const { cartItems, removeFromCart, subtotal, updateQuantity } = useCommerce();
  const checkoutUrl = buildCheckoutUrl(buildCartWhatsAppMessage(cartItems));

  if (cartItems.length === 0) {
    return (
      <section className="cart-page cart-page--empty">
        <h1>Seu carrinho está vazio</h1>
        <p>Escolha seu Hummy e volte aqui para finalizar pelo WhatsApp.</p>
        <Link className="button button--primary" href="/produtos">
          Ver produtos
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-page__header">
        <span>Carrinho visual</span>
        <h1>Revise seu pedido</h1>
        <p>
          O pagamento ainda não é processado aqui. O botão final monta uma
          mensagem com os produtos escolhidos para o WhatsApp.
        </p>
      </div>

      <div className="cart-page__layout">
        <div className="cart-page__items">
          {cartItems.map((line) => (
            <article className="cart-page-line" key={line.item.id}>
              <Image
                alt={line.item.name}
                className="cart-page-line__image"
                height={120}
                src={line.item.images[0]}
                width={120}
              />
              <div className="cart-page-line__content">
                <h2>{line.item.name}</h2>
                <p>{line.item.shortDescription}</p>
                <strong>{formatCurrency(line.item.price)}</strong>
                <div className="cart-page-line__controls">
                  <button
                    type="button"
                    onClick={() => updateQuantity(line.item.id, line.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{line.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(line.item.id, line.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFromCart(line.item.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <span>Resumo</span>
          <div className="cart-summary__row">
            <span>Subtotal</span>
            <strong>{formatCurrency(subtotal)}</strong>
          </div>
          <a className="cart-summary__checkout" href={checkoutUrl}>
            Finalizar compra
          </a>
        </aside>
      </div>
    </section>
  );
}
