import Link from "next/link";

export function HomeCtaBanner() {
  return (
    <section className="home-cta-banner" aria-label="Escolha seu Hummy favorito">
      <div className="home-cta-banner__inner">
        <Link className="home-cta-banner__link" href="/produtos">
          <picture className="home-cta-banner__picture">
            <source
              media="(max-width: 640px)"
              srcSet="/assets/cta/cta-phone.png"
            />
            <img
        alt="Escolha seu Hummy favorito. Confira nossas fórmulas e encontre o produto ideal para você."
              className="home-cta-banner__image"
              height={724}
              src="/assets/cta/cta.png"
              width={2172}
            />
          </picture>
        </Link>
      </div>
    </section>
  );
}
