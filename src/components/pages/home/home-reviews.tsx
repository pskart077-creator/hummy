"use client";

import { useState } from "react";
import Image from "next/image";

type HomeReview = {
  author: string;
  text: string;
  mediaAlt?: string;
  mediaSrc?: string;
  mediaType?: "image" | "video";
};

const initialVisibleReviews = 6;

const reviews: HomeReview[] = [
  {
    author: "Mariana M.",
    text: "Estou amando. Minha rotina ficou mais prática e já senti mais disposição no dia a dia.",
    mediaAlt: "Produtos Hummy recebidos",
    mediaSrc: "/assets/products/3-libido-fem-img.png",
  },
  {
    author: "Flavia N.",
    text: "Perfeito. Uso com frequência e gostei muito da experiência.",
    mediaAlt: "Kit Hummy Original",
    mediaSrc: "/assets/products/3-todos-img.png",
    mediaType: "video",
  },
  {
    author: "Ilda Silva D.",
    text: "Amei muito. Chegou direitinho e vou continuar usando.",
    mediaAlt: "Hummy Original sobre a mesa",
    mediaSrc: "/assets/social/story-libido-fem.jpg",
    mediaType: "video",
  },
  {
    author: "Emily F.",
    text: "Uma delícia. Acabou de chegar e já entrou na minha rotina.",
    mediaAlt: "Produtos Hummy em caixa",
    mediaSrc: "/assets/products/3-todos-img.png",
  },
  {
    author: "Adrieli L.",
    text: "Estoque renovado. Gostei bastante da compra e do atendimento.",
    mediaAlt: "Potes Hummy Original",
    mediaSrc: "/assets/products/6-libido-fem-img.png",
  },
  {
    author: "Camila R.",
    text: "Comprei o kit e achei super prático. As embalagens são lindas.",
    mediaAlt: "Kit Hummy Completo",
    mediaSrc: "/assets/products/3-todos-img.png",
  },
  {
    author: "Larissa P.",
    text: "Gostei do sabor e da praticidade para manter todo dia.",
    mediaAlt: "Hummy Maca",
    mediaSrc: "/assets/products/6-maca-img.png",
  },
  {
    author: "Bianca S.",
    text: "Chegou rápido e veio tudo certinho. Vou comprar novamente.",
    mediaAlt: "Hummy Tadala",
    mediaSrc: "/assets/products/6-tadala-img.png",
  },
];

export function HomeReviews() {
  const [expanded, setExpanded] = useState(false);
  const [selectedReview, setSelectedReview] = useState<HomeReview | null>(null);
  const visibleReviews = expanded ? reviews : reviews.slice(0, initialVisibleReviews);
  const hasMoreReviews = reviews.length > initialVisibleReviews;

  return (
    <section className="home-reviews" aria-label="Avaliações de clientes">
      <div className="home-reviews__inner">
        <div className="home-reviews__top">
          <div className="home-reviews__score">
            <span aria-label="5 estrelas">★★★★★</span>
            <strong>5.0</strong>
          </div>
        </div>

        <div className="home-reviews__list">
          {visibleReviews.map((review) => (
            <article className="home-review-card" key={review.author}>
              <div className="home-review-card__content">
                <h3>
                  {review.author}
                  <span aria-label="Compra verificada" />
                </h3>
                <div className="home-review-card__stars" aria-label="5 estrelas">
                  ★★★★★
                </div>
                <p>{review.text}</p>
              </div>

              {review.mediaSrc && (
                <button
                  className="home-review-card__media"
                  type="button"
                  aria-label={`Abrir imagem do depoimento de ${review.author}`}
                  onClick={() => setSelectedReview(review)}
                >
                  <Image
                    alt={review.mediaAlt || review.author}
                    height={180}
                    src={review.mediaSrc}
                    width={180}
                  />
                  {review.mediaType === "video" && (
                    <span className="home-review-card__play" aria-hidden="true" />
                  )}
                </button>
              )}
            </article>
          ))}
        </div>

        {hasMoreReviews && !expanded && (
          <button
            className="home-reviews__more"
            type="button"
            onClick={() => setExpanded(true)}
          >
            Mais avaliações
          </button>
        )}
      </div>

      {selectedReview?.mediaSrc && (
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
              alt={selectedReview.mediaAlt || selectedReview.author}
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
