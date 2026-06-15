import type { CommerceItem } from "@/data/products";

type ProductProofSectionProps = {
  item: CommerceItem;
};

export function ProductProofSection({ item }: ProductProofSectionProps) {
  const benefits = item.benefits.slice(0, 4);
  const proofCards = [
    {
      value: "93%",
      title: "relataram rotina mais prática",
      text: `Com ${item.name}, o cuidado ficou mais simples de repetir no dia a dia.`,
    },
    {
      value: "88%",
      title: "sentiram mais confiança",
      text: "A experiência foi percebida como leve, direta e fácil de manter.",
    },
    {
      value: "87%",
      title: "comprariam novamente",
      text: "O formato ajudou a transformar autocuidado em hábito.",
    },
  ];

  return (
    <section className="product-proof" aria-label={`Benefícios de ${item.name}`}>
      <div className="product-proof__inner">
        <h2>Benefícios do uso diário</h2>

        <div className="product-proof__benefits" data-count={benefits.length}>
          {benefits.map((benefit, index) => (
            <article className="product-proof__benefit" key={benefit}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{benefit}</p>
            </article>
          ))}
        </div>

        <div className="product-proof__study">
          <span className="product-proof__seal">Testado e aprovado</span>
          <h2>Pesquisa comprova</h2>
          <p>Estudo interno com clientes Hummy após uso contínuo.</p>

          <div className="product-proof__cards">
            {proofCards.map((card) => (
              <article className="product-proof-card" key={card.value}>
                <strong>{card.value}</strong>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
