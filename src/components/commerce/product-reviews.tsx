"use client";

import { useState } from "react";
import Image from "next/image";
import type { CommerceItem } from "@/data/products";

type ProductReview = {
  author: string;
  text: string;
  mediaAlt: string;
  mediaSrc: string;
  mediaType?: "image" | "video";
};

type ProductReviewsProps = {
  item: CommerceItem;
};

const initialVisibleReviews = 3;

const productReviewsBySlug: Record<string, ProductReview[]> = {
  "hummy-libido-fem": [
    {
      author: "Mariana M.",
      text: "Estou amando. Minha rotina ficou mais leve e senti mais confiança no dia a dia.",
      mediaAlt: "Hummy Libido Fem recebido",
      mediaSrc: "/assets/products/3-libido-fem-img.png",
    },
    {
      author: "Flávia N.",
      text: "Perfeito. Uso com frequência e gostei muito da experiência.",
      mediaAlt: "Produto Hummy Libido Fem",
      mediaSrc: "/assets/social/story-libido-fem.jpg",
      mediaType: "video",
    },
    {
      author: "Ilda Silva D.",
      text: "Amei muito. Chegou direitinho e vou continuar usando.",
      mediaAlt: "Potes de Libido Fem",
      mediaSrc: "/assets/products/6-libido-fem-img.png",
      mediaType: "video",
    },
    {
      author: "Camila R.",
      text: "Gostei do atendimento e achei super prático para manter a rotina.",
      mediaAlt: "Hummy Libido Fem",
      mediaSrc: "/assets/categories/libido-fem.png",
    },
  ],
  "hummy-maca": [
    {
      author: "Larissa P.",
      text: "A Maca virou meu cuidado do dia. Gostei do sabor e da praticidade.",
      mediaAlt: "Hummy Maca recebido",
      mediaSrc: "/assets/products/3-maca-img.png",
    },
    {
      author: "Bianca S.",
      text: "Chegou rápido e veio tudo certinho. Vou comprar novamente.",
      mediaAlt: "Potes Hummy Maca",
      mediaSrc: "/assets/products/6-maca-img.png",
      mediaType: "video",
    },
    {
      author: "Renata C.",
      text: "Boa escolha para incluir na rotina sem complicar.",
      mediaAlt: "Hummy Maca",
      mediaSrc: "/assets/social/story-maca.jpg",
    },
    {
      author: "Jaque L.",
      text: "Gostei muito. Já entrou no meu estoque de autocuidado.",
      mediaAlt: "Categoria Maca",
      mediaSrc: "/assets/categories/maca.png",
    },
  ],
  "hummy-tadala": [
    {
      author: "Andressa V.",
      text: "Comprei para conhecer e achei a experiência bem prática.",
      mediaAlt: "Hummy Tadala recebido",
      mediaSrc: "/assets/products/3-tadala-img.png",
    },
    {
      author: "Paula R.",
      text: "Entrega rápida, embalagem bonita e atendimento muito bom.",
      mediaAlt: "Potes Hummy Tadala",
      mediaSrc: "/assets/products/6-tadala-img.png",
      mediaType: "video",
    },
    {
      author: "Duda S.",
      text: "Gostei da proposta. Direto ao ponto e fácil de usar.",
      mediaAlt: "Hummy Tadala",
      mediaSrc: "/assets/social/story-tadala.jpg",
    },
    {
      author: "Marcela T.",
      text: "Veio tudo certo. Recomendo para quem quer praticidade.",
      mediaAlt: "Categoria Tadala",
      mediaSrc: "/assets/categories/tadala.png",
    },
  ],
};

const defaultReviews: ProductReview[] = [
  {
    author: "Mariana M.",
    text: "Estou amando, chegou certinho e a rotina ficou mais prática.",
    mediaAlt: "Kit Hummy Original",
    mediaSrc: "/assets/products/3-todos-img.png",
  },
  {
    author: "Flávia N.",
    text: "Perfeito. Já uso e gostei bastante da experiência.",
    mediaAlt: "Produtos Hummy",
    mediaSrc: "/assets/categories/kits.png",
    mediaType: "video",
  },
  {
    author: "Ilda Silva D.",
    text: "Amei muito. Vou continuar usando e compraria de novo.",
    mediaAlt: "Hummy Original",
    mediaSrc: "/assets/social/story-kit.jpg",
    mediaType: "video",
  },
  {
    author: "Emily F.",
    text: "Uma delícia. Acabou de chegar e já entrou no meu dia a dia.",
    mediaAlt: "Kit Hummy Completo",
    mediaSrc: "/assets/icon-img/todos-img.png",
  },
];

export function ProductReviews({ item }: ProductReviewsProps) {
  const [expanded, setExpanded] = useState(false);
  const [selectedReview, setSelectedReview] = useState<ProductReview | null>(null);
  const reviews = productReviewsBySlug[item.slug] || defaultReviews;
  const visibleReviews = expanded ? reviews : reviews.slice(0, initialVisibleReviews);
  const hasMoreReviews = reviews.length > initialVisibleReviews;

  return (
    <section className="product-reviews" aria-label={`Depoimentos de ${item.name}`}>
      <div className="product-reviews__inner">
        <h2>Quem comprou, recomenda</h2>

        <div className="product-reviews__top">
          <div className="product-reviews__score">
            <span aria-label="5 estrelas">★★★★★</span>
            <strong>5.0</strong>
          </div>
        </div>

        <div className="product-reviews__list">
          {visibleReviews.map((review) => (
            <article className="product-review-card" key={review.author}>
              <div className="product-review-card__content">
                <h3>
                  {review.author}
                  <span aria-label="Compra verificada" />
                </h3>
                <div className="product-review-card__stars" aria-label="5 estrelas">
                  ★★★★★
                </div>
                <p>{review.text}</p>
              </div>

              <button
                className="product-review-card__media"
                type="button"
                aria-label={`Abrir imagem do depoimento de ${review.author}`}
                onClick={() => setSelectedReview(review)}
              >
                <Image
                  alt={review.mediaAlt}
                  height={180}
                  src={review.mediaSrc}
                  width={180}
                />
                {review.mediaType === "video" && (
                  <span className="product-review-card__play" aria-hidden="true" />
                )}
              </button>
            </article>
          ))}
        </div>

        {hasMoreReviews && !expanded && (
          <button
            className="product-reviews__more"
            type="button"
            onClick={() => setExpanded(true)}
          >
            Mais avaliações
          </button>
        )}
      </div>

      {selectedReview && (
        <div
          className="home-review-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem do depoimento de ${selectedReview.author}`}
        >
          <button
            className="home-review-lightbox__backdrop"
            type="button"
            aria-label="Fechar imagem"
            onClick={() => setSelectedReview(null)}
          />

          <div className="home-review-lightbox__panel">
            <button
              className="home-review-lightbox__close"
              type="button"
              onClick={() => setSelectedReview(null)}
            >
              Fechar
            </button>

            <Image
              alt={selectedReview.mediaAlt}
              className="home-review-lightbox__image"
              height={900}
              src={selectedReview.mediaSrc}
              width={900}
            />

            <div className="home-review-lightbox__caption">
              <strong>{selectedReview.author}</strong>
              <span>{selectedReview.text}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
