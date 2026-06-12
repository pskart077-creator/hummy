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
        description="Informe seu código de rastreio ou número do pedido para acompanhar a entrega."
      />
      <section className="simple-page">
        <form className="tracking-form">
          <label>
            Código de rastreio ou pedido
            <input placeholder="Ex: HUMMY12345" type="text" />
          </label>
          <button type="submit">Consultar pedido</button>
        </form>
        <p>
          Caso ainda não tenha recebido o código, fale com nosso atendimento pelo
          WhatsApp informado no rodapé.
        </p>
      </section>
    </main>
  );
}
