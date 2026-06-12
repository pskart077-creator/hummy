import Image from "next/image";
import Link from "next/link";

export function HomeCtaBanner() {
  return (
    <section className="home-cta-banner" aria-label="Escolha seu Hummy favorito">
      <div className="home-cta-banner__inner">
        <Link className="home-cta-banner__link" href="/produtos">
          <Image
            alt="Escolha seu Hummy favorito. Confira nossas formulas e encontre o produto ideal para voce."
            className="home-cta-banner__image"
            height={724}
            src="/assets/cta/cta.png"
            width={2172}
          />
        </Link>
      </div>
    </section>
  );
}
