import { siteConfig } from "@/config/site";

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
  return `Olá, quero ver o preço do produto ${productName} da Hummy Original. Pode me ajudar?`;
}
