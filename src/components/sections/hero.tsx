import Link from "next/link";

type HeroImageBannerProps = {
  href: string;
  desktopSrc: string;
  tabletSrc: string;
  mobileSrc: string;
  alt: string;
};

export function HeroImageBanner({
  href,
  desktopSrc,
  tabletSrc,
  mobileSrc,
  alt,
}: HeroImageBannerProps) {
  return (
    <section className="hero-image-banner">
      <Link className="hero-image-banner__link" href={href} aria-label={alt}>
        <picture className="hero-image-banner__picture">
          <source media="(max-width: 640px)" srcSet={mobileSrc} />
          <source media="(max-width: 1024px)" srcSet={tabletSrc} />
          <img className="hero-image-banner__image" src={desktopSrc} alt={alt} />
        </picture>
      </Link>
    </section>
  );
}