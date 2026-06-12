"use client";

import { useEffect, useMemo, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCommerce } from "@/components/providers/commerce-provider";
import { CartIcon } from "@/components/ui/icons";
import { formatCurrency, formatDiscount } from "@/lib/format";

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
  price: number;
  oldPrice: number;
  installments: string;
  quantity: string;
  images: string[];
  tags: string[];
  savings?: string;
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
      "Compra pratica para experimentar a linha",
    ],
    usage: "Consuma conforme a orientacao do rotulo de cada produto.",
    ingredients: ["Ingredientes variam conforme os produtos do kit."],
    importantInfo:
      "Este produto nao substitui acompanhamento medico. Consulte um profissional de saude em caso de duvidas, uso de medicamentos, gestacao, lactacao ou condicoes pre-existentes.",
    price: 249.9,
    oldPrice: 389.7,
    installments: "ou ate 6x R$ 41,65",
    quantity: "3 unidades",
    images: ["/assets/products/kit-completo.png"],
    tags: ["kit", "completo", "mais vendido"],
    savings: "Economize R$139,80",
  },
  {
    id: "hummy-libido-fem",
    slug: "hummy-libido-fem",
    type: "product",
    name: "Hummy Libido Fem",
    category: "Para Ela",
    categorySlug: "para-ela",
    shortDescription: "Vitalidade, prazer e equilibrio para a rotina feminina.",
    description:
      "Hummy Libido Fem foi pensado para mulheres que querem incluir autocuidado, confianca e vitalidade em uma rotina simples.",
    benefits: [
      "Apoia uma rotina de autocuidado mais prazerosa",
      "Formato facil de consumir",
      "Ideal para mais confianca no dia a dia",
    ],
    usage: "Consuma conforme a orientacao do rotulo do produto.",
    ingredients: [
      "Blend de vitaminas e nutrientes",
      "Ativos de suporte a vitalidade",
      "Excipientes alimenticios",
    ],
    importantInfo:
      "Este produto nao substitui acompanhamento medico. Consulte um profissional de saude em caso de duvidas, uso de medicamentos, gestacao, lactacao ou condicoes pre-existentes.",
    price: 89.9,
    oldPrice: 119.9,
    installments: "ou ate 3x R$ 29,97",
    quantity: "30 unidades",
    images: ["/assets/products/hummy-libido-fem.png"],
    tags: ["feminino", "vitalidade", "bem-estar"],
  },
  {
    id: "hummy-maca",
    slug: "hummy-maca",
    type: "product",
    name: "Hummy Maca",
    category: "Vitalidade Diaria",
    categorySlug: "vitalidade",
    shortDescription: "Energia, disposicao e vitalidade para o dia a dia.",
    description:
      "Hummy Maca entra na rotina de quem quer mais disposicao e um cuidado diario simples.",
    benefits: [
      "Ajuda a criar uma rotina de vitalidade",
      "Pratico para o dia a dia",
      "Boa escolha para mais energia na rotina",
    ],
    usage: "Consuma conforme a orientacao do rotulo do produto.",
    ingredients: [
      "Maca peruana",
      "Blend de vitaminas",
      "Ativos de suporte a disposicao",
    ],
    importantInfo:
      "Este produto nao substitui acompanhamento medico. Consulte um profissional de saude em caso de duvidas, uso de medicamentos, gestacao, lactacao ou condicoes pre-existentes.",
    price: 79.9,
    oldPrice: 109.9,
    installments: "ou ate 3x R$ 26,63",
    quantity: "30 unidades",
    images: ["/assets/products/hummy-maca.png"],
    tags: ["maca", "energia", "disposicao"],
  },
  {
    id: "hummy-tadala",
    slug: "hummy-tadala",
    type: "product",
    name: "Hummy Tadala",
    category: "Para Ele",
    categorySlug: "para-ele",
    shortDescription: "Performance, confianca e intensidade para a rotina.",
    description:
      "Hummy Tadala foi criado para quem deseja uma rotina mais confiante, intensa e pratica.",
    benefits: [
      "Rotina pratica para momentos de mais confianca",
      "Experiencia premium",
      "Facil de incluir no dia a dia",
    ],
    usage: "Consuma conforme a orientacao do rotulo do produto.",
    ingredients: [
      "Blend de ativos de suporte a vitalidade",
      "Vitaminas selecionadas",
      "Excipientes alimenticios",
    ],
    importantInfo:
      "Este produto nao substitui acompanhamento medico. Consulte um profissional de saude em caso de duvidas, uso de medicamentos, gestacao, lactacao ou condicoes pre-existentes.",
    price: 99.9,
    oldPrice: 139.9,
    installments: "ou ate 3x R$ 33,30",
    quantity: "30 unidades",
    images: ["/assets/products/hummy-tadala.png"],
    tags: ["masculino", "performance", "confianca"],
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
  const { addToCart } = useCommerce();

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
          {filteredItems.map((item) => {
            const discount = formatDiscount(item.oldPrice, item.price);

            return (
              <article className="home-offer-card" key={item.id}>
                <div className="home-offer-card__media">
                  <span className="home-offer-card__discount">-{discount}%</span>

                  <Link href={`/produtos/${item.slug}`} aria-label={item.name}>
                    <Image
                      alt={item.name}
                      className="home-offer-card__image"
                      height={360}
                      src={item.images[0]}
                      width={420}
                    />
                  </Link>
                </div>

                <div className="home-offer-card__content">
                  <h3>
                    <Link href={`/produtos/${item.slug}`}>{item.name}</Link>
                  </h3>

                  <div className="home-offer-card__prices">
                    <span>De: {formatCurrency(item.oldPrice)}</span>
                    <strong>Por: {formatCurrency(item.price)}</strong>
                    <small>{item.installments}</small>
                  </div>

                  <button type="button" onClick={() => addToCart(item)}>
                    Comprar
                    <CartIcon />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
