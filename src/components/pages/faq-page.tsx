import type { Metadata } from "next";
import { FAQ, type FaqItem } from "@/components/sections/faq";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Tire dúvidas sobre compra, entrega, consumo e atendimento da Hummy Original.",
};

const faqItems: FaqItem[] = [
  {
    question: "Como devo consumir os produtos?",
    answer:
      "Siga sempre as orientações do rótulo do produto. Em caso de dúvidas, consulte um profissional de saúde.",
  },
  {
    question: "Quantas unidades vêm no pote?",
    answer: "Os produtos principais vêm com 30 unidades.",
  },
  {
    question: "A Hummy faz promessas de resultado?",
    answer:
      "Não. A comunicação da Hummy é focada em bem-estar, vitalidade, disposição e rotina, sem promessas médicas.",
  },
  {
    question: "Posso comprar pelo WhatsApp?",
    answer:
      "Sim. Você pode montar seu carrinho e finalizar com uma mensagem automática pelo WhatsApp.",
  },
  {
    question: "Tem frete grátis?",
    answer:
      "Campanhas de frete grátis podem estar disponíveis, como frete grátis acima de R$199 por tempo limitado.",
  },
  {
    question: "Como acompanho meu pedido?",
    answer:
      "Use a página Rastrear Pedido ou fale com nosso atendimento com o número do pedido.",
  },
];

export function FAQPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Perguntas frequentes"
        description="Tudo que você precisa saber antes de escolher seu Hummy."
      />
      <FAQ items={faqItems} title="Dúvidas principais" />
    </main>
  );
}
