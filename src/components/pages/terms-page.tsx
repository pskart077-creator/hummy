import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Termos de uso",
  description:
    "Condições gerais de navegação, compra e atendimento da Hummy Original.",
};

export function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Políticas"
        title="Termos de uso"
        description="Condições gerais para usar o site e comprar produtos Hummy Original."
      />
      <section className="legal-content">
        <h2>Uso do site</h2>
        <p>
          Ao navegar no site, você concorda em utilizar as informações de forma
          responsável e respeitar os canais oficiais de compra e atendimento.
        </p>

        <h2>Produtos e informações</h2>
        <p>
          As informações apresentadas têm finalidade comercial e informativa. Os
          produtos não substituem acompanhamento médico.
        </p>

        <h2>Compra e pagamento</h2>
        <p>
          O site está preparado para integração futura com checkout. Neste
          momento, a finalização pode ser direcionada ao WhatsApp ou link externo
          configurável.
        </p>

        <h2>Alterações</h2>
        <p>
          A Hummy Original pode atualizar estes termos para refletir melhorias,
          mudanças operacionais ou exigências legais.
        </p>
      </section>
    </main>
  );
}
