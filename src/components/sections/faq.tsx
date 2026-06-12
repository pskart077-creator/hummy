export type FaqItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FaqItem[];
  title?: string;
};

export function FAQ({ items, title = "Perguntas frequentes" }: FAQProps) {
  return (
    <section className="faq-section">
      <div className="section-heading">
        <span>FAQ</span>
        <h2>{title}</h2>
      </div>
      <div className="faq-section__list">
        {items.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
