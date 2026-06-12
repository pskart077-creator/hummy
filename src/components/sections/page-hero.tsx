type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ description, eyebrow, title }: PageHeroProps) {
  return (
    <section className="page-hero">
      {eyebrow && <span>{eyebrow}</span>}
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
