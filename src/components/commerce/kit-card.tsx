import Image from "next/image";
import Link from "next/link";
import type { CommerceItem } from "@/data/products";

type KitCardProps = {
  kit: CommerceItem;
};

export function KitCard({ kit }: KitCardProps) {
  return (
    <article className="kit-card">
      <Image
        alt={kit.name}
        className="kit-card__image"
        height={480}
        src={kit.images[0]}
        width={480}
      />
      <div className="kit-card__content">
        <span className="kit-card__quantity">{kit.quantity}</span>
        <h3 className="kit-card__title">{kit.name}</h3>
        <p className="kit-card__description">{kit.shortDescription}</p>
        <div className="kit-card__actions">
          <Link href={`/produtos/${kit.slug}`}>Ver preço</Link>
          <Link href={`/produtos/${kit.slug}`}>Ver detalhes</Link>
        </div>
      </div>
    </article>
  );
}
