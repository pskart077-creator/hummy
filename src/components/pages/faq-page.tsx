import type { Metadata } from "next";
import { FAQ, type FaqItem } from "@/components/sections/faq";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Tire duvidas sobre compra, entrega, consumo e atendimento da Hummy Original.",
};

const faqItems: FaqItem[] = [
  {
    question: "Como devo consumir os produtos?",
    answer:
      "Siga sempre as orientacoes do rotulo do produto. Em caso de duvidas, consulte um profissional de saude.",
  },
  {
    question: "Quantas unidades vem no pote?",
    answer: "Os produtos principais vem com 30 unidades.",
  },
  {
    question: "A Hummy faz promessas de resultado?",
    answer:
      "Nao. A comunicacao da Hummy e focada em bem-estar, vitalidade, disposicao e rotina, sem promessas medicas.",
  },
  {
    question: "Posso consultar pelo WhatsApp?",
    answer:
      "Sim. Voce pode escolher o produto no site e consultar o preco direto pelo WhatsApp oficial da Hummy.",
  },
  {
    question: "Tem frete gratis?",
    answer:
      "As condicoes de envio podem mudar por campanha. Consulte o atendimento oficial para confirmar a condicao atual.",
  },
  {
    question: "Como acompanho meu pedido?",
    answer:
      "Use a pagina Rastrear Pedido ou fale com nosso atendimento com o numero do pedido.",
  },
  {
    question: "Os produtos Hummy sao medicamentos?",
    answer:
      "Nao. Eles sao produtos de bem-estar e nao substituem acompanhamento medico ou orientacao profissional.",
  },
  {
    question: "Posso combinar mais de um Hummy?",
    answer:
      "A combinacao depende da sua rotina e das orientacoes do rotulo. Em caso de duvida, fale com um profissional de saude.",
  },
  {
    question: "Quem nao deve consumir?",
    answer:
      "Gestantes, lactantes, pessoas com condicoes pre-existentes ou em uso de medicamentos devem consultar um profissional de saude antes do consumo.",
  },
  {
    question: "Como funciona a consulta de preco?",
    answer:
      "Voce abre o produto desejado e toca em Ver preco para falar com o WhatsApp oficial da Hummy.",
  },
  {
    question: "Qual e o canal oficial da Hummy?",
    answer:
      "O dominio oficial e hummy.com.br e o atendimento principal acontece pelo WhatsApp informado no site.",
  },
];

export function FAQPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Perguntas frequentes"
        description="Tudo que voce precisa saber antes de escolher seu Hummy."
        imageAlt="Atendimento Hummy no WhatsApp"
        imageDesktop="/assets/cta/cta.png"
        imageTablet="/assets/cta/cta.png"
        imageMobile="/assets/cta/cta-phone.png"
      />
      <FAQ items={faqItems} title="Perguntas frequentes" />
    </main>
  );
}
