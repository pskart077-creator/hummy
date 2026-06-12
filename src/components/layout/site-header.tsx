"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/site";
import { useCommerce } from "@/components/providers/commerce-provider";
import { BrandLogo } from "@/components/ui/brand-logo";
import { MenuIcon } from "@/components/ui/icons";

export function SiteHeader() {
  const pathname = usePathname();

  const { openMobileMenu } = useCommerce();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button
          aria-label="Abrir menu"
          className="site-header__icon-button site-header__menu-button"
          type="button"
          onClick={openMobileMenu}
        >
          <MenuIcon />
        </button>

        <BrandLogo className="site-header__logo" />

        <nav aria-label="Menu principal" className="site-header__nav">
          {navLinks.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                className={`site-header__link ${
                  isActive ? "is-active" : ""
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <Link className="site-header__buy-button" href="/produtos">
            Comprar agora
          </Link>
        </div>
      </div>
    </header>
  );
}
