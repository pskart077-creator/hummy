"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CommerceItem } from "@/data/products";

export type CartLine = {
  item: CommerceItem;
  quantity: number;
};

type CommerceContextValue = {
  cartItems: CartLine[];
  cartCount: number;
  subtotal: number;
  isCartOpen: boolean;
  isSearchOpen: boolean;
  isMobileMenuOpen: boolean;
  wishlistIds: string[];
  addToCart: (item: CommerceItem, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
};

const CommerceContext = createContext<CommerceContextValue | null>(null);

type CommerceProviderProps = {
  children: ReactNode;
};

export function CommerceProvider({ children }: CommerceProviderProps) {
  const [cartItems, setCartItems] = useState<CartLine[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedCart = window.localStorage.getItem("hummy-cart");
    const storedWishlist = window.localStorage.getItem("hummy-wishlist");

    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }

    if (storedWishlist) {
      setWishlistIds(JSON.parse(storedWishlist));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("hummy-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.localStorage.setItem("hummy-wishlist", JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  const addToCart = (item: CommerceItem, quantity = 1) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((line) => line.item.id === item.id);

      if (!existingItem) {
        return [...currentItems, { item, quantity }];
      }

      return currentItems.map((line) =>
        line.item.id === item.id
          ? { ...line, quantity: line.quantity + quantity }
          : line,
      );
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems((currentItems) =>
      currentItems.filter((line) => line.item.id !== id),
    );
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((line) =>
        line.item.id === id ? { ...line, quantity } : line,
      ),
    );
  };

  const clearCart = () => setCartItems([]);

  const toggleWishlist = (id: string) => {
    setWishlistIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((currentId) => currentId !== id)
        : [...currentIds, id],
    );
  };

  const value = useMemo<CommerceContextValue>(() => {
    const cartCount = cartItems.reduce((total, line) => total + line.quantity, 0);
    const subtotal = cartItems.reduce(
      (total, line) => total + line.item.price * line.quantity,
      0,
    );

    return {
      cartItems,
      cartCount,
      subtotal,
      isCartOpen,
      isSearchOpen,
      isMobileMenuOpen,
      wishlistIds,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      openSearch: () => setIsSearchOpen(true),
      closeSearch: () => setIsSearchOpen(false),
      openMobileMenu: () => setIsMobileMenuOpen(true),
      closeMobileMenu: () => setIsMobileMenuOpen(false),
      toggleWishlist,
      isWishlisted: (id: string) => wishlistIds.includes(id),
    };
  }, [cartItems, isCartOpen, isMobileMenuOpen, isSearchOpen, wishlistIds]);

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
