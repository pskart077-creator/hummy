import type { Metadata } from "next";
import { CartPage } from "@/components/commerce/cart-page";

export const metadata: Metadata = {
  title: "Carrinho",
  description: "Revise seus produtos Hummy Original e finalize pelo WhatsApp.",
};

export function CartRoutePage() {
  return <CartPage />;
}
