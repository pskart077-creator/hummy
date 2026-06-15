import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/ui/brand-logo";

const productLinks = [
  { href: "/produtos", label: "Todos os produtos" },
  { href: "/produtos/hummy-libido-fem", label: "Hummy Libido Fem" },
  { href: "/produtos/hummy-maca", label: "Hummy Maçã" },
  { href: "/produtos/hummy-tadala", label: "Hummy Tadala" },
  { href: "/produtos/kit-hummy-completo", label: "Kit Hummy Completo" },
];

const categoryLinks = [
  { href: "/categoria/para-ela", label: "Para Ela" },
  { href: "/categoria/para-ele", label: "Para Ele" },
  { href: "/categoria/vitalidade", label: "Vitalidade" },
  { href: "/categoria/kits", label: "Kits" },
];

const helpLinks = [
  { href: "/blog/como-escolher-seu-hummy", label: "Blog da Hummy" },
  { href: "/perguntas-frequentes", label: "Perguntas frequentes" },
  { href: "/rastrear-pedido", label: "Rastrear pedido" },
  { href: "/contato", label: "Contato" },
];

const payments = [
  { src: "/assets/footer/Pix_(Brazil)_logo.svg", alt: "Pix" },
  { src: "/assets/footer/Visa_Inc._logo_(2021–present).svg", alt: "Visa" },
  { src: "/assets/footer/Mastercard_2019_logo.svg", alt: "Mastercard" },
  { src: "/assets/footer/Elo_card_association_logo_-_black_text.svg", alt: "Elo" },
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
                aria-label="Instagram"
                className="site-footer__social"
                href={siteConfig.contact.instagram}
                rel="noreferrer"
                target="_blank"
              >
                <FaInstagram />
              </a>

              <a
                aria-label="TikTok"
                className="site-footer__social"
                href={siteConfig.contact.tiktok}
                rel="noreferrer"
                target="_blank"
              >
                <FaTiktok />
              </a>

              <a
                aria-label="YouTube"
                className="site-footer__social"
                href={siteConfig.contact.youtube}
                rel="noreferrer"
                target="_blank"
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
            <h2 className="site-footer__title">CATEGORIAS</h2>

            <nav className="site-footer__nav">
              {categoryLinks.map((item) => (
                <Link className="site-footer__link" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer__column">
            <h2 className="site-footer__title">AJUDA</h2>

            <nav className="site-footer__nav">
              {helpLinks.map((item) => (
                <Link className="site-footer__link" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer__column">
            <h2 className="site-footer__title">SUPORTE</h2>

            <div className="site-footer__nav">
              <p className="site-footer__text">SAC: {siteConfig.contact.phone}</p>
              <p className="site-footer__text">Segunda a sexta, 08:00 às 17:00</p>

              <a
                className="site-footer__link"
                href={whatsappUrl}
                rel="noreferrer"
                target="_blank"
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
            © 2026 Hummy Original - Todos os direitos reservados.{" "}
            <Link href="/termos-de-uso">Termos de Uso</Link>{" "}
            <span>|</span>{" "}
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
          </p>

          <div className="site-footer__payments" aria-label="Formas de pagamento">
            {payments.map((payment) => (
              <span className="site-footer__payment" key={payment.alt}>
                <Image
                  alt={payment.alt}
                  height={32}
                  src={payment.src}
                  width={52}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
