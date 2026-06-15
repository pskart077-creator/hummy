"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type CommerceContextValue = {
  isSearchOpen: boolean;
  isMobileMenuOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
};

const CommerceContext = createContext<CommerceContextValue | null>(null);

type CommerceProviderProps = {
  children: ReactNode;
};

export function CommerceProvider({ children }: CommerceProviderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const value = useMemo<CommerceContextValue>(
    () => ({
      isSearchOpen,
      isMobileMenuOpen,
      openSearch: () => setIsSearchOpen(true),
      closeSearch: () => setIsSearchOpen(false),
      openMobileMenu: () => setIsMobileMenuOpen(true),
      closeMobileMenu: () => setIsMobileMenuOpen(false),
    }),
    [isMobileMenuOpen, isSearchOpen],
  );

  return (
    <CommerceContext.Provider value={value}>
      {children}
    </CommerceContext.Provider>
  );
}

export function useCommerce() {
  const context = useContext(CommerceContext);

  if (!context) {
    throw new Error("useCommerce must be used inside CommerceProvider");
  }

  return context;
}
