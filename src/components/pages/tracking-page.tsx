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
        description="Informe seu codigo de rastreio ou numero do pedido para acompanhar a entrega."
        imageAlt="Kit Hummy Original"
        imageDesktop="/assets/social/story-kit.jpg"
        imageTablet="/assets/social/story-kit.jpg"
        imageMobile="/assets/social/story-kit.jpg"
      />
      <section className="simple-page">
        <form className="tracking-form">
          <label>
            Codigo de rastreio ou pedido
            <input placeholder="Ex: HUMMY12345" type="text" />
          </label>
          <button type="submit">Consultar pedido</button>
        </form>
        <p>
          Caso ainda nao tenha recebido o codigo, fale com nosso atendimento pelo
          WhatsApp informado no rodape.
        </p>
      </section>
    </main>
  );
}
