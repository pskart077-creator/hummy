"use client";

import Link from "next/link";
import { navLinks } from "@/config/site";
import { useCommerce } from "@/components/providers/commerce-provider";
import { BrandLogo } from "@/components/ui/brand-logo";
import { CloseIcon } from "@/components/ui/icons";

export function MobileMenu() {
  const { closeMobileMenu, isMobileMenuOpen } = useCommerce();

  return (
    <div
      aria-hidden={!isMobileMenuOpen}
      className={
        isMobileMenuOpen
          ? "mobile-menu mobile-menu--open"
          : "mobile-menu"
      }
    >
      <button
        aria-label="Fechar menu"
        className="mobile-menu__backdrop"
        type="button"
        onClick={closeMobileMenu}
      />
      <aside className="mobile-menu__panel">
        <div className="mobile-menu__header">
          <BrandLogo />
          <button
            aria-label="Fechar menu"
            className="mobile-menu__close"
            type="button"
            onClick={closeMobileMenu}
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="mobile-menu__nav">
          {navLinks.map((item) => (
            <Link
              className="mobile-menu__link"
              href={item.href}
              key={item.href}
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}
