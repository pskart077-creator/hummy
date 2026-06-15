import Image from "next/image";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  imageAlt?: string;
  imageDesktop?: string;
  imageMobile?: string;
  imageTablet?: string;
};

const defaultHeroImages = {
  desktop: "/assets/hero/hero-desktop.jpeg",
  tablet: "/assets/hero/hero-tablet.jpeg",
  mobile: "/assets/hero/hero-mobile.jpeg",
};

export function PageHero({
  description,
  eyebrow,
  imageAlt = "Hummy Original",
  imageDesktop = defaultHeroImages.desktop,
  imageMobile = defaultHeroImages.mobile,
  imageTablet = defaultHeroImages.tablet,
  title,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <picture className="page-hero__picture">
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(max-width: 1024px)" srcSet={imageTablet} />
        <Image
          alt={imageAlt}
          className="page-hero__image"
          height={900}
          priority
          src={imageDesktop}
          width={1600}
        />
      </picture>

      <div className="page-hero__shade" />

      <div className="page-hero__content">
        {eyebrow && <span>{eyebrow}</span>}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
