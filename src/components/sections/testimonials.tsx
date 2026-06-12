const testimonials = [
  {
    name: "Marina S.",
    product: "Hummy Libido Fem",
    comment:
      "Gostei da proposta. É simples de incluir na rotina e a compra foi muito tranquila.",
  },
  {
    name: "Rafael M.",
    product: "Hummy Tadala",
    comment:
      "O atendimento pelo WhatsApp foi rápido e o produto chegou bem embalado.",
  },
  {
    name: "Bianca R.",
    product: "Hummy Maca",
    comment:
      "Comprei para testar e achei a experiência premium, direta e sem enrolação.",
  },
];

export function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-heading">
        <span>Prova social</span>
        <h2>Quem compra Hummy sente a experiência desde o primeiro contato.</h2>
      </div>
      <div className="testimonials-section__grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <div className="testimonial-card__stars" aria-label="5 estrelas">
              ★★★★★
            </div>
            <p>{testimonial.comment}</p>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.product}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
