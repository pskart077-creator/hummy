import type { ReactNode } from "react";
import { CartDrawer } from "@/components/commerce/cart-drawer";
import { SearchModal } from "@/components/commerce/search-modal";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TopOfferBar } from "@/components/layout/top-offer-bar";
import { CommerceProvider } from "@/components/providers/commerce-provider";

type RootShellProps = {
  children: ReactNode;
};

export function RootShell({ children }: RootShellProps) {
  return (
    <CommerceProvider>
      <TopOfferBar />
      <SiteHeader />
      <MobileMenu />
      <div className="app-content">{children}</div>
      <SiteFooter />
      <CartDrawer />
      <SearchModal />
    </CommerceProvider>
  );
}
