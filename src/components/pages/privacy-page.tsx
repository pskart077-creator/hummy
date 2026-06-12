import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Entenda como a Hummy Original pode tratar informações de contato e compra.",
};

export function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Políticas"
        title="Política de privacidade"
        description="Informações essenciais sobre dados, atendimento e comunicações."
      />
      <section className="legal-content">
        <h2>Coleta de informações</h2>
        <p>
          Podemos coletar dados fornecidos voluntariamente em formulários,
          conversas de atendimento, pedidos e contatos comerciais.
        </p>

        <h2>Uso das informações</h2>
        <p>
          As informações podem ser usadas para atendimento, processamento de
          pedidos, envio de atualizações e melhoria da experiência de compra.
        </p>

        <h2>Compartilhamento</h2>
        <p>
          Dados podem ser compartilhados com serviços necessários para operação,
          como atendimento, entrega, pagamento e hospedagem, sempre dentro do
          necessário para executar a compra ou suporte.
        </p>

        <h2>Contato</h2>
        <p>
          Para solicitar revisão, atualização ou exclusão de dados, fale com o
          atendimento oficial da Hummy Original.
        </p>
      </section>
    </main>
  );
}
