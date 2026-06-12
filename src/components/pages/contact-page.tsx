import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Hummy Original por WhatsApp, e-mail ou Instagram.",
};

export function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Atendimento"
        title="Fale com a Hummy"
        description="Dúvidas sobre produto, pedido, entrega ou escolha do melhor Hummy para sua rotina."
      />
      <section className="contact-grid">
        <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}>
          <span>WhatsApp</span>
          <strong>{siteConfig.contact.whatsappLabel}</strong>
          <p>Atendimento rápido para compra, pedido e suporte.</p>
        </a>
        <a href={`mailto:${siteConfig.contact.email}`}>
          <span>E-mail</span>
          <strong>{siteConfig.contact.email}</strong>
          <p>Use para dúvidas institucionais e parcerias.</p>
        </a>
        <a href={siteConfig.contact.instagram}>
          <span>Instagram</span>
          <strong>@hummyoriginal</strong>
          <p>Acompanhe novidades, campanhas e conteúdo da marca.</p>
        </a>
      </section>
    </main>
  );
}
