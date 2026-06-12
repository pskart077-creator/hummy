import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/ui/brand-logo";

const productLinks = [
  { href: "/produtos", label: "Hair Care" },
  { href: "/categoria/cabelo-pele", label: "Cabelo & Pele" },
  { href: "/categoria/metabolismo", label: "Metabolismo" },
  { href: "/categoria/sono-imunidade", label: "Sono & Imunidade" },
];

const partnerLinks = [
  { href: "/seja-influencer", label: "Seja Uma Influencer" },
  { href: "/seja-revendedor", label: "Seja Um Revendedor" },
];

const infoLinks = [
  { href: "/perguntas-frequentes", label: "Perguntas Frequentes" },
  { href: "/politica-de-privacidade", label: "Políticas De Privacidade" },
  { href: "/termos-de-uso", label: "Termos E Condições" },
  { href: "/garantia", label: "Garantia Hummy" },
  { href: "/regulamento", label: "Regulamento: Cartela Premiada" },
];

const payments = [
  { src: "/assets/payments/pix.svg", alt: "Pix" },
  { src: "/assets/payments/visa.svg", alt: "Visa" },
  { src: "/assets/payments/mastercard.svg", alt: "Mastercard" },
  { src: "/assets/payments/elo.svg", alt: "Elo" },
  { src: "/assets/payments/apple-pay.svg", alt: "Apple Pay" },
];

export function SiteFooter() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}`;

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <BrandLogo />

            <div className="site-footer__socials" aria-label="Redes sociais">
              <a
                className="site-footer__social"
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                className="site-footer__social"
                href={siteConfig.contact.tiktok || "#"}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>

              <a
                className="site-footer__social"
                href={siteConfig.contact.youtube || "#"}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="site-footer__column">
            <h2 className="site-footer__title">PRODUTOS</h2>

            <nav className="site-footer__nav">
              {productLinks.map((item) => (
                <Link className="site-footer__link" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer__column">
            <h2 className="site-footer__title">FAÇA PARTE</h2>

            <nav className="site-footer__nav">
              {partnerLinks.map((item) => (
                <Link className="site-footer__link" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer__column">
            <h2 className="site-footer__title">INFORMAÇÃO</h2>

            <nav className="site-footer__nav">
              {infoLinks.map((item) => (
                <Link className="site-footer__link" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer__column">
            <h2 className="site-footer__title">SUPORTE</h2>

            <div className="site-footer__nav">
              <p className="site-footer__text">
                SAC: {siteConfig.contact.phone} - Seg À Sex
              </p>

              <p className="site-footer__text">(08:00 Às 17:00)</p>

              <a
                className="site-footer__link"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: {siteConfig.contact.whatsappLabel}
              </a>

              <a className="site-footer__link" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © 2026 Hummy - Todos Os Direitos Reservados.{" "}
            <Link href="/termos-de-uso">Termos e Condições</Link>{" "}
            <span>|</span>{" "}
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
          </p>

          <div className="site-footer__payments" aria-label="Formas de pagamento">
            {payments.map((payment) => (
              <span className="site-footer__payment" key={payment.alt}>
                <Image
                  src={payment.src}
                  alt={payment.alt}
                  width={52}
                  height={32}
                />
              </span>
            ))}
          </div>

          <div className="site-footer__agency">
            <Image
              src="/assets/footer/alfinet.svg"
              alt="Alfinet"
              width={76}
              height={24}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}