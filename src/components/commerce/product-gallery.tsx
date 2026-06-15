"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { CommerceItem } from "@/data/products";

type ProductGalleryProps = {
  item: CommerceItem;
};

const fallbackGalleryImages: Record<string, string[]> = {
  "para-ela": [
    "/assets/products/6-libido-fem-img.png",
    "/assets/products/3-libido-fem-img.png",
    "/assets/categories/libido-fem.png",
  ],
  "para-ele": [
    "/assets/products/6-tadala-img.png",
    "/assets/products/3-tadala-img.png",
    "/assets/categories/tadala.png",
  ],
  vitalidade: [
    "/assets/products/6-maca-img.png",
    "/assets/products/3-maca-img.png",
    "/assets/categories/maca.png",
  ],
  kits: [
    "/assets/products/3-todos-img.png",
    "/assets/categories/kits.png",
    "/assets/icon-img/todos-img.png",
  ],
};

export function ProductGallery({ item }: ProductGalleryProps) {
  const galleryImages = useMemo(
    () =>
      Array.from(
        new Set([
          item.images[0],
          ...item.images,
          ...(fallbackGalleryImages[item.categorySlug] || []),
        ]),
      ),
    [item.categorySlug, item.images],
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = galleryImages[activeImageIndex] || item.images[0];

  useEffect(() => {
    setActiveImageIndex(0);
  }, [item.slug]);

  function showPreviousImage() {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1,
    );
  }

  function showNextImage() {
    setActiveImageIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1,
    );
  }

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <span className="product-gallery__badge">Original</span>
        <Image
          alt={item.name}
          className="product-gallery__image"
          height={760}
          priority
          src={activeImage}
          width={760}
        />
      </div>

      <div className="product-gallery__thumbs">
        <button
          className="product-gallery__arrow"
          type="button"
          aria-label="Imagem anterior"
          onClick={showPreviousImage}
        >
          &lt;
        </button>
        {galleryImages.map((image, index) => (
          <button
            className={`product-gallery__thumb-button${
              activeImageIndex === index ? " is-active" : ""
            }`}
            key={image}
            type="button"
            aria-label={`Ver imagem ${index + 1} de ${item.name}`}
            aria-pressed={activeImageIndex === index}
            onClick={() => setActiveImageIndex(index)}
          >
            <Image
              alt={item.name}
              className="product-gallery__thumb"
              height={120}
              src={image}
              width={120}
            />
          </button>
        ))}
        <button
          className="product-gallery__arrow"
          type="button"
          aria-label="Próxima imagem"
          onClick={showNextImage}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
