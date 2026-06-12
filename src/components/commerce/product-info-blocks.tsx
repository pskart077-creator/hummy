import type { CommerceItem } from "@/data/products";
import type { FaqItem } from "@/components/sections/faq";
import { FAQ } from "@/components/sections/faq";

type ProductInfoBlocksProps = {
  item: CommerceItem;
};

export function ProductInfoBlocks({ item }: ProductInfoBlocksProps) {
  const productFaq: FaqItem[] = [
    {
      question: "Como devo consumir?",
      answer: item.usage,
    },
    {
      question: "Quantas unidades vêm no pote?",
      answer: item.quantity,
    },
    {
      question: "Esse produto substitui acompanhamento médico?",
      answer:
        "Não. Este produto não substitui acompanhamento médico. Consulte um profissional de saúde em caso de dúvidas.",
    },
  ];

  return (
    <section className="product-info">
      <article className="product-info__block">
        <h2>Descrição</h2>
        <p>{item.description}</p>
      </article>

      <article className="product-info__block">
        <h2>Benefícios</h2>
        <ul>
          {item.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </article>

      <article className="product-info__block">
        <h2>Modo de uso</h2>
        <p>{item.usage}</p>
      </article>

      <article className="product-info__block">
        <h2>Ingredientes</h2>
        <ul>
          {item.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </article>

      <article className="product-info__block product-info__block--notice">
        <h2>Informações importantes</h2>
        <p>{item.importantInfo}</p>
      </article>

      <FAQ items={productFaq} title={`FAQ do ${item.name}`} />
    </section>
  );
}
