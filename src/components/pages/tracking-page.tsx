import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Rastrear pedido",
  description: "Acompanhe o status do seu pedido Hummy Original.",
};

export function TrackingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pedido"
        title="Rastrear pedido"
        description="Acompanhe sua entrega pelo rastreador oficial."
        imageAlt="Kit Hummy Original"
        imageDesktop="/assets/social/story-kit.jpg"
        imageTablet="/assets/social/story-kit.jpg"
        imageMobile="/assets/social/story-kit.jpg"
      />
      <section className="simple-page">
        <a
          className="button button--primary"
          href="https://rastreia.me/"
          rel="noreferrer"
          target="_blank"
        >
          Abrir rastreador
        </a>
        <p>
          Caso ainda não tenha recebido o código, fale com nosso atendimento pelo
          WhatsApp informado no rodapé.
        </p>
      </section>
    </main>
  );
}
