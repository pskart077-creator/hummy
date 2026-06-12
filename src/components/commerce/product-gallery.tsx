import Image from "next/image";
import type { CommerceItem } from "@/data/products";

type ProductGalleryProps = {
  item: CommerceItem;
};

export function ProductGallery({ item }: ProductGalleryProps) {
  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <Image
          alt={item.name}
          className="product-gallery__image"
          height={760}
          priority
          src={item.images[0]}
          width={760}
        />
      </div>
      <div className="product-gallery__thumbs">
        {item.images.map((image) => (
          <Image
            alt={item.name}
            className="product-gallery__thumb"
            height={120}
            key={image}
            src={image}
            width={120}
          />
        ))}
      </div>
    </div>
  );
}
