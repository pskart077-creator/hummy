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
      <div className="faq-section__heading">
        <h2>{title}</h2>
        <span aria-hidden="true">~~~</span>
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
