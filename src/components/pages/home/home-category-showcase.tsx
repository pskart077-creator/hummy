import Image from "next/image";
import Link from "next/link";

const homeCategoryShowcaseItems = [
  {
    title: "LIBIDO FEM",
    href: "/produtos/hummy-libido-fem",
    image: "/assets/products/3-libido-fem-img.png",
    imageAlt: "Hummy Libido Fem",
    tone: "pink",
  },
  {
    title: "MACA",
    href: "/produtos/hummy-maca",
    image: "/assets/products/3-maca-img.png",
    imageAlt: "Hummy Maca",
    tone: "green",
  },
  {
    title: "TADALA",
    href: "/produtos/hummy-tadala",
    image: "/assets/products/3-tadala-img.png",
    imageAlt: "Hummy Tadala",
    tone: "blue",
  },
  {
    title: "KITS",
    href: "/categoria/kits",
    image: "/assets/products/3-todos-img.png",
    imageAlt: "Kit Hummy Completo",
    tone: "cream",
  },
];

export function HomeCategoryShowcase() {
  return (
    <section className="home-category-showcase" aria-label="Categorias Hummy">
      <div className="home-category-showcase__inner">
        {homeCategoryShowcaseItems.map((item) => (
          <article
            className={`home-category-showcase__item home-category-showcase__item--${item.tone}`}
            key={item.title}
          >
            <Link className="home-category-showcase__card" href={item.href}>
              <h2>{item.title}</h2>
              <Image
                alt={item.imageAlt}
                className="home-category-showcase__image"
                height={1086}
                src={item.image}
                width={1448}
              />
            </Link>

            <Link className="home-category-showcase__button" href={item.href}>
              Ver Mais
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
