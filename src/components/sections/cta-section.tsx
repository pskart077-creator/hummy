import Link from "next/link";
import { siteConfig } from "@/config/site";

export function CTASection() {
  return (
    <section className="cta-section">
      <div>
        <span>Hummy Original</span>
        <h2>Sua rotina pode ser mais leve, intensa e confiante.</h2>
      </div>
      <div className="cta-section__actions">
        <Link className="button button--light" href="/produtos">
          Comprar agora
        </Link>
        <a
          className="button button--ghost-light"
          href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
