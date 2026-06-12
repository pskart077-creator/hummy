import type { Metadata } from "next";
import { HomeCategoryShowcase } from "@/components/pages/home/home-category-showcase";
import { HomeBlogPosts } from "@/components/pages/home/home-blog-posts";
import { HomeOfferShelf } from "@/components/pages/home/home-offer-shelf";
import { HomeVideoStories } from "@/components/pages/home/home-video-stories";
import { HeroImageBanner } from "@/components/sections/hero";

export const metadata: Metadata = {
  title: "Hummy Original | Desejo, energia e vitalidade",
  description:
    "Conheca Hummy Original, produtos para vitalidade, disposicao, confianca e bem-estar em uma rotina simples.",
};

export function HomePage() {
  return (
    <main>
      <HeroImageBanner
        href="/produtos/hummy-libido-fem"
        desktopSrc="/assets/hero/hero-desktop.jpeg"
        tabletSrc="/assets/hero/hero-tablet.jpeg"
        mobileSrc="/assets/hero/hero-mobile.jpeg"
        alt="Comprar Hummy Libido Fem"
      />

      <HomeOfferShelf />
      <HomeCategoryShowcase />
      <HomeVideoStories />
      <HomeBlogPosts />
    </main>
  );
}
