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
    question: "Quantas unidades vem no pote?",
    answer: "Os produtos principais vêm com 30 unidades.",
  },
  {
    question: "A Hummy faz promessas de resultado?",
    answer:
      "Não. A comunicação da Hummy é focada em bem-estar, vitalidade, disposição e rotina, sem promessas médicas.",
  },
  {
    question: "Posso consultar pelo WhatsApp?",
    answer:
      "Sim. Você pode escolher o produto no site e consultar o preço direto pelo WhatsApp oficial da Hummy.",
  },
  {
    question: "Tem frete grátis?",
    answer:
      "As condições de envio podem mudar por campanha. Consulte o atendimento oficial para confirmar a condição atual.",
  },
  {
    question: "Como acompanho meu pedido?",
    answer:
      "Use o link Rastrear Pedido ou fale com nosso atendimento com o número do pedido.",
  },
  {
    question: "Os produtos Hummy são medicamentos?",
    answer:
      "Não. Eles são produtos de bem-estar e não substituem acompanhamento médico ou orientação profissional.",
  },
  {
    question: "Posso combinar mais de um Hummy?",
    answer:
      "A combinação depende da sua rotina e das orientações do rótulo. Em caso de dúvida, fale com um profissional de saúde.",
  },
  {
    question: "Quem não deve consumir?",
    answer:
      "Gestantes, lactantes, pessoas com condições pré-existentes ou em uso de medicamentos devem consultar um profissional de saúde antes do consumo.",
  },
  {
    question: "Como funciona a consulta de preço?",
    answer:
      "Você abre o produto desejado e toca em Ver preço para falar com o WhatsApp oficial da Hummy.",
  },
  {
    question: "Qual é o canal oficial da Hummy?",
    answer:
      "O domínio oficial é hummy.com.br e o atendimento principal acontece pelo WhatsApp informado no site.",
  },
];

export function FAQPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Perguntas frequentes"
        description="Tudo que você precisa saber antes de escolher seu Hummy."
        imageAlt="Atendimento Hummy no WhatsApp"
        imageDesktop="/assets/cta/cta.png"
        imageTablet="/assets/cta/cta.png"
        imageMobile="/assets/cta/cta-phone.png"
      />
      <FAQ items={faqItems} title="Perguntas frequentes" />
    </main>
  );
}
