const benefits = [
  "Mais disposição",
  "Mais confiança",
  "Rotina prática",
  "Produto fácil de consumir",
  "Compra segura",
  "Envio rápido",
];

export function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="section-heading">
        <span>Benefícios</span>
        <h2>Autocuidado sem complicar o seu ritmo.</h2>
      </div>
      <div className="benefits-section__grid">
        {benefits.map((benefit) => (
          <article className="benefit-card" key={benefit}>
            <h3>{benefit}</h3>
            <p>
              Uma experiência pensada para deixar sua rotina mais simples,
              direta e desejável.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
