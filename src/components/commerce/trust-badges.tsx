const badges = [
  "Compra segura",
  "Envio rápido",
  "Atendimento pelo WhatsApp",
  "Garantia de satisfação",
];

export function TrustBadges() {
  return (
    <div className="trust-badges">
      {badges.map((badge) => (
        <span className="trust-badges__item" key={badge}>
          {badge}
        </span>
      ))}
    </div>
  );
}
