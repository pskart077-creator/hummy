"use client";

import Image from "next/image";
import Link from "next/link";
import { useCommerce } from "@/components/providers/commerce-provider";
import { CloseIcon } from "@/components/ui/icons";
import { formatCurrency } from "@/lib/format";
import { buildCartWhatsAppMessage, buildCheckoutUrl } from "@/lib/whatsapp";

export function CartDrawer() {
  const {
    cartItems,
    closeCart,
    isCartOpen,
    removeFromCart,
    subtotal,
    updateQuantity,
  } = useCommerce();
  const checkoutUrl = buildCheckoutUrl(buildCartWhatsAppMessage(cartItems));

  return (
    <div
      aria-hidden={!isCartOpen}
      className={isCartOpen ? "cart-drawer cart-drawer--open" : "cart-drawer"}
    >
      <button
        aria-label="Fechar carrinho"
        className="cart-drawer__backdrop"
        type="button"
        onClick={closeCart}
      />
      <aside className="cart-drawer__panel">
        <div className="cart-drawer__header">
          <div>
            <span>Carrinho</span>
            <h2>Seu pedido Hummy</h2>
          </div>
          <button
            aria-label="Fechar carrinho"
            className="cart-drawer__close"
            type="button"
            onClick={closeCart}
          >
            <CloseIcon />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-drawer__empty">
            <p>Seu carrinho está vazio.</p>
            <Link href="/produtos" onClick={closeCart}>
              Ver produtos
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-drawer__items">
              {cartItems.map((line) => (
                <article className="cart-line" key={line.item.id}>
                  <Image
                    alt={line.item.name}
                    className="cart-line__image"
                    height={84}
                    src={line.item.images[0]}
                    width={84}
                  />
                  <div className="cart-line__content">
                    <h3>{line.item.name}</h3>
                    <span>{formatCurrency(line.item.price)}</span>
                    <div className="cart-line__controls">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(line.item.id, line.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <strong>{line.quantity}</strong>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(line.item.id, line.quantity + 1)
                        }
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

            <div className="cart-drawer__footer">
              <div className="cart-drawer__subtotal">
                <span>Subtotal</span>
                <strong>{formatCurrency(subtotal)}</strong>
              </div>
              <a className="cart-drawer__checkout" href={checkoutUrl}>
                Finalizar pelo WhatsApp
              </a>
              <Link
                className="cart-drawer__cart-page"
                href="/carrinho"
                onClick={closeCart}
              >
                Ver carrinho completo
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
