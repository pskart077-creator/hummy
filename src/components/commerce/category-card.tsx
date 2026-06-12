import Link from "next/link";
import type { CategorySlug } from "@/data/products";

type CategoryCardProps = {
  href: string;
  title: string;
  description: string;
  slug: CategorySlug;
};

export function CategoryCard({
  description,
  href,
  slug,
  title,
}: CategoryCardProps) {
  return (
    <Link className={`category-card category-card--${slug}`} href={href}>
      <span className="category-card__label">Categoria</span>
      <h3 className="category-card__title">{title}</h3>
      <p className="category-card__description">{description}</p>
    </Link>
  );
}
