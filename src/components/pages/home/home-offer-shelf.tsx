"use client";

import { useEffect, useMemo, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";

type HomeOfferItem = {
  id: string;
  slug: string;
  type: "product" | "kit";
  name: string;
  category: string;
  categorySlug: "para-ela" | "para-ele" | "vitalidade" | "kits";
  shortDescription: string;
  description: string;
  benefits: string[];
  usage: string;
  ingredients: string[];
  importantInfo: string;
  quantity: string;
  images: string[];
  tags: string[];
};

const offerTabs = [
  { label: "6.6 🔥", value: "todos" },
  { label: "Libido Fem", value: "para-ela" },
  { label: "Maca", value: "vitalidade" },
  { label: "Tadala", value: "para-ele" },
  { label: "Kits", value: "kits" },
] as const;

type OfferTabValue = (typeof offerTabs)[number]["value"];

const homeOfferItems: HomeOfferItem[] = [
  {
    id: "kit-hummy-completo",
    slug: "kit-hummy-completo",
    type: "kit",
    name: "Kit Hummy Completo",
    category: "Kits Hummy",
    categorySlug: "kits",
    shortDescription: "Libido Fem, Maca e Tadala em uma compra mais vantajosa.",
    description:
      "O kit comercial para quem quer conhecer a linha Hummy Original com mais economia.",
    benefits: [
      "Mais variedade na rotina",
      "Melhor custo por unidade",
      "Compra prática para experimentar a linha",
    ],
    usage: "Consuma conforme a orientação do rótulo de cada produto.",
    ingredients: ["Ingredientes variam conforme os produtos do kit."],
    importantInfo:
      "Este produto não substitui acompanhamento médico. Consulte um profissional de saúde em caso de dúvidas, uso de medicamentos, gestação, lactação ou condições pré-existentes.",
    quantity: "3 unidades",
    images: ["/assets/products/3-todos-img.png"],
    tags: ["kit", "completo", "mais vendido"],
  },
  {
    id: "hummy-libido-fem",
    slug: "hummy-libido-fem",
    type: "product",
    name: "Hummy Libido Fem",
    category: "Para Ela",
    categorySlug: "para-ela",
    shortDescription: "Vitalidade, prazer e equilíbrio para a rotina feminina.",
    description:
      "Hummy Libido Fem foi pensado para mulheres que querem incluir autocuidado, confiança e vitalidade em uma rotina simples.",
    benefits: [
      "Apoia uma rotina de autocuidado mais prazerosa",
      "Formato fácil de consumir",
      "Ideal para mais confiança no dia a dia",
    ],
    usage: "Consuma conforme a orientação do rótulo do produto.",
    ingredients: [
      "Blend de vitaminas e nutrientes",
      "Ativos de suporte à vitalidade",
      "Excipientes alimentícios",
    ],
    importantInfo:
      "Este produto não substitui acompanhamento médico. Consulte um profissional de saúde em caso de dúvidas, uso de medicamentos, gestação, lactação ou condições pré-existentes.",
    quantity: "30 unidades",
    images: ["/assets/products/6-libido-fem-img.png"],
    tags: ["feminino", "vitalidade", "bem-estar"],
  },
  {
    id: "hummy-maca",
    slug: "hummy-maca",
    type: "product",
    name: "Hummy Maca",
    category: "Vitalidade Diária",
    categorySlug: "vitalidade",
    shortDescription: "Energia, disposição e vitalidade para o dia a dia.",
    description:
      "Hummy Maca entra na rotina de quem quer mais disposição e um cuidado diário simples.",
    benefits: [
      "Ajuda a criar uma rotina de vitalidade",
      "Prático para o dia a dia",
      "Boa escolha para mais energia na rotina",
    ],
    usage: "Consuma conforme a orientação do rótulo do produto.",
    ingredients: [
      "Maca peruana",
      "Blend de vitaminas",
      "Ativos de suporte à disposição",
    ],
    importantInfo:
      "Este produto não substitui acompanhamento médico. Consulte um profissional de saúde em caso de dúvidas, uso de medicamentos, gestação, lactação ou condições pré-existentes.",
    quantity: "30 unidades",
    images: ["/assets/products/6-maca-img.png"],
    tags: ["maca", "energia", "disposição"],
  },
  {
    id: "hummy-tadala",
    slug: "hummy-tadala",
    type: "product",
    name: "Hummy Tadala",
    category: "Para Ele",
    categorySlug: "para-ele",
    shortDescription: "Performance, confiança e intensidade para a rotina.",
    description:
      "Hummy Tadala foi criado para quem deseja uma rotina mais confiante, intensa e prática.",
    benefits: [
      "Rotina prática para momentos de mais confiança",
      "Experiência premium",
      "Fácil de incluir no dia a dia",
    ],
    usage: "Consuma conforme a orientação do rótulo do produto.",
    ingredients: [
      "Blend de ativos de suporte à vitalidade",
      "Vitaminas selecionadas",
      "Excipientes alimentícios",
    ],
    importantInfo:
      "Este produto não substitui acompanhamento médico. Consulte um profissional de saúde em caso de dúvidas, uso de medicamentos, gestação, lactação ou condições pré-existentes.",
    quantity: "30 unidades",
    images: ["/assets/products/6-tadala-img.png"],
    tags: ["masculino", "performance", "confiança"],
  },
];

export function HomeOfferShelf() {
  const [activeTab, setActiveTab] = useState<OfferTabValue>("todos");
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({
    startX: 0,
    scrollLeft: 0,
  });
  const isDraggingRef = useRef(false);
  const shelfTrackRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(() => {
    if (activeTab === "todos") {
      return homeOfferItems;
    }

    return homeOfferItems.filter((item) => item.categorySlug === activeTab);
  }, [activeTab]);

  useEffect(() => {
    shelfTrackRef.current?.scrollTo({ left: 0 });
  }, [activeTab]);

  useEffect(() => {
    const shelfTrack = shelfTrackRef.current;

    if (!shelfTrack) {
      return;
    }

    const mobileMedia = window.matchMedia("(max-width: 640px)");
    let intervalId: number | undefined;

    const getCenteredCardIndex = (cards: HTMLElement[]) => {
      const trackCenter = shelfTrack.scrollLeft + shelfTrack.clientWidth / 2;

      return cards.reduce((closestIndex, card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const closestCard = cards[closestIndex];
        const closestCenter = closestCard.offsetLeft + closestCard.offsetWidth / 2;

        return Math.abs(cardCenter - trackCenter) <
          Math.abs(closestCenter - trackCenter)
          ? index
          : closestIndex;
      }, 0);
    };

    const centerCard = (card: HTMLElement) => {
      shelfTrack.scrollTo({
        behavior: "smooth",
        left: card.offsetLeft - (shelfTrack.clientWidth - card.offsetWidth) / 2,
      });
    };

    const startAutoplay = () => {
      window.clearInterval(intervalId);

      if (!mobileMedia.matches || filteredItems.length < 2) {
        return;
      }

      intervalId = window.setInterval(() => {
        if (isDraggingRef.current) {
          return;
        }

        const cards = Array.from(
          shelfTrack.querySelectorAll<HTMLElement>(".home-offer-card"),
        );

        if (cards.length < 2) {
          return;
        }

        const currentIndex = getCenteredCardIndex(cards);
        const nextIndex = (currentIndex + 1) % cards.length;
        centerCard(cards[nextIndex]);
      }, 2800);
    };

    startAutoplay();
    mobileMedia.addEventListener("change", startAutoplay);

    return () => {
      window.clearInterval(intervalId);
      mobileMedia.removeEventListener("change", startAutoplay);
    };
  }, [filteredItems.length]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!shelfTrackRef.current) {
      return;
    }

    if (shelfTrackRef.current.scrollWidth <= shelfTrackRef.current.clientWidth) {
      return;
    }

    isDraggingRef.current = true;
    setIsDragging(true);
    dragState.current = {
      startX: event.clientX,
      scrollLeft: shelfTrackRef.current.scrollLeft,
    };
    shelfTrackRef.current.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !shelfTrackRef.current) {
      return;
    }

    event.preventDefault();
    const movement = event.clientX - dragState.current.startX;
    shelfTrackRef.current.scrollLeft = dragState.current.scrollLeft - movement;
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    if (!shelfTrackRef.current) {
      return;
    }

    isDraggingRef.current = false;
    setIsDragging(false);

    if (shelfTrackRef.current.hasPointerCapture(event.pointerId)) {
      shelfTrackRef.current.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section className="home-offer-shelf" aria-label="Ofertas em destaque">
      <div className="home-offer-shelf__inner">
        <div className="home-offer-shelf__tabs" aria-label="Categorias em destaque">
          {offerTabs.map((tab) => (
            <button
              className={
                activeTab === tab.value
                  ? "home-offer-shelf__tab home-offer-shelf__tab--active"
                  : "home-offer-shelf__tab"
              }
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className={
            isDragging
              ? "home-offer-shelf__grid home-offer-shelf__grid--dragging"
              : "home-offer-shelf__grid"
          }
          ref={shelfTrackRef}
          onPointerCancel={stopDragging}
          onPointerDown={handlePointerDown}
          onPointerLeave={stopDragging}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
        >
          {filteredItems.map((item) => (
            <article className="home-offer-card" key={item.id}>
              <div className="home-offer-card__media">
                <Link href={`/produtos/${item.slug}`} aria-label={item.name}>
                  <Image
                    alt={item.name}
                    className="home-offer-card__image"
                    height={1086}
                    src={item.images[0]}
                    width={1448}
                  />
                </Link>
              </div>

              <div className="home-offer-card__content">
                <h3>
                  <Link href={`/produtos/${item.slug}`}>{item.name}</Link>
                </h3>

                <Link className="home-offer-card__button" href={`/produtos/${item.slug}`}>
                  Ver preço
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
