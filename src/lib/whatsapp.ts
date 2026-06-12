import { siteConfig } from "@/config/site";
import type { CartLine } from "@/components/providers/commerce-provider";

export function buildWhatsAppUrl(message: string) {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodedMessage}`;
}

export function buildCheckoutUrl(message: string) {
  if (siteConfig.checkout.externalCheckoutUrl) {
    return siteConfig.checkout.externalCheckoutUrl;
  }

  return buildWhatsAppUrl(message);
}

export function buildProductWhatsAppMessage(productName: string) {
  return `Olá, quero comprar o produto ${productName} da Hummy Original. Pode me ajudar?`;
}

export function buildCartWhatsAppMessage(items: CartLine[]) {
  const lines = items.map(
    (line) =>
      `- ${line.quantity}x ${line.item.name} (${line.item.installments})`,
  );

  return [
    "Olá, quero finalizar meu pedido Hummy Original:",
    ...lines,
    "",
    "Pode me enviar o link de pagamento e o prazo de entrega?",
  ].join("\n");
}
