"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type HomeVideoStory = {
  id: string;
  poster: string;
  video: string;
  handle: string;
  product: string;
  productImage: string;
};

const homeVideoStories: HomeVideoStory[] = [
  {
    id: "libido-fem",
    poster: "/assets/social/story-libido-fem.jpg",
    video: "/assets/social/videos/libido-fem.mp4",
    handle: "@hummyoriginal",
    product: "Hummy Libido Fem - 30 unidades",
    productImage: "/assets/products/hummy-libido-fem.png",
  },
  {
    id: "maca",
    poster: "/assets/social/story-maca.jpg",
    video: "/assets/social/videos/maca.mp4",
    handle: "@hummyrotina",
    product: "Hummy Maca - 30 unidades",
    productImage: "/assets/products/hummy-maca.png",
  },
  {
    id: "tadala",
    poster: "/assets/social/story-tadala.jpg",
    video: "/assets/social/videos/tadala.mp4",
    handle: "@hummyvitalidade",
    product: "Hummy Tadala - 30 unidades",
    productImage: "/assets/products/hummy-tadala.png",
  },
  {
    id: "kit",
    poster: "/assets/social/story-kit.jpg",
    video: "/assets/social/videos/kit-completo.mp4",
    handle: "@hummykits",
    product: "Kit Hummy Completo",
    productImage: "/assets/products/kit-completo.png",
  },
];

export function HomeVideoStories() {
  const [activeStory, setActiveStory] = useState<HomeVideoStory | null>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setVideoError(false);
  }, [activeStory]);

  return (
    <section className="home-video-stories" aria-label="Videos Hummy">
      <div className="home-video-stories__inner">
        {homeVideoStories.map((story) => (
          <article className="home-video-story" key={story.id}>
            <button
              className="home-video-story__poster-button"
              type="button"
              onClick={() => setActiveStory(story)}
            >
              <Image
                alt={`Abrir video de ${story.product}`}
                className="home-video-story__poster"
                height={720}
                src={story.poster}
                width={405}
              />
              <span className="home-video-story__play">Play</span>
            </button>

            <div className="home-video-story__meta">
              <Image
                alt={story.product}
                className="home-video-story__product"
                height={44}
                src={story.productImage}
                width={44}
              />
              <div>
                <strong>{story.handle}</strong>
                <span>{story.product}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeStory ? (
        <div
          aria-modal="true"
          className="home-video-modal"
          role="dialog"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="home-video-modal__panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Fechar video"
              className="home-video-modal__close"
              type="button"
              onClick={() => setActiveStory(null)}
            >
              x
            </button>

            {videoError ? (
              <div className="home-video-modal__fallback">
                <Image
                  alt={activeStory.product}
                  className="home-video-modal__fallback-image"
                  height={720}
                  src={activeStory.poster}
                  width={405}
                />
                <p>Coloque o video em {activeStory.video}</p>
              </div>
            ) : (
              <video
                autoPlay
                className="home-video-modal__video"
                controls
                key={activeStory.id}
                playsInline
                poster={activeStory.poster}
                onError={() => setVideoError(true)}
              >
                <source src={activeStory.video} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}
