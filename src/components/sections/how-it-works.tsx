const steps = [
  {
    title: "Escolha seu Hummy",
    text: "Encontre o produto ou kit que combina melhor com o seu momento.",
  },
  {
    title: "Receba em casa",
    text: "Finalize pelo WhatsApp ou checkout externo e acompanhe o envio.",
  },
  {
    title: "Inclua na sua rotina",
    text: "Use de forma prática, seguindo as orientações do rótulo.",
  },
  {
    title: "Sinta a diferença no seu dia",
    text: "Crie um ritual simples de vitalidade, disposição e confiança.",
  },
];

export function HowItWorks() {
  return (
    <section className="how-section">
      <div className="section-heading">
        <span>Como funciona</span>
        <h2>Quatro passos para começar.</h2>
      </div>
      <div className="how-section__grid">
        {steps.map((step, index) => (
          <article className="how-card" key={step.title}>
            <span>{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
