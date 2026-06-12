"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useCommerce } from "@/components/providers/commerce-provider";
import { CloseIcon, SearchIcon } from "@/components/ui/icons";
import { shopItems } from "@/data/products";
import { formatCurrency } from "@/lib/format";

export function SearchModal() {
  const [query, setQuery] = useState("");
  const { closeSearch, isSearchOpen } = useCommerce();

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return shopItems;
    }

    return shopItems.filter((item) =>
      [
        item.name,
        item.category,
        item.shortDescription,
        item.description,
        item.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  return (
    <div
      aria-hidden={!isSearchOpen}
      className={isSearchOpen ? "search-modal search-modal--open" : "search-modal"}
    >
      <button
        aria-label="Fechar busca"
        className="search-modal__backdrop"
        type="button"
        onClick={closeSearch}
      />
      <section className="search-modal__panel">
        <div className="search-modal__header">
          <div>
            <span>Busca rápida</span>
            <h2>Encontre seu Hummy</h2>
          </div>
          <button
            aria-label="Fechar busca"
            className="search-modal__close"
            type="button"
            onClick={closeSearch}
          >
            <CloseIcon />
          </button>
        </div>

        <label className="search-modal__field">
          <SearchIcon />
          <input
            autoComplete="off"
            placeholder="Busque por nome, categoria ou benefício"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <div className="search-modal__results">
          {results.map((item) => (
            <Link
              className="search-result"
              href={`/produtos/${item.slug}`}
              key={item.id}
              onClick={closeSearch}
            >
              <Image
                alt={item.name}
                className="search-result__image"
                height={72}
                src={item.images[0]}
                width={72}
              />
              <div>
                <strong>{item.name}</strong>
                <span>{item.category}</span>
              </div>
              <em>{formatCurrency(item.price)}</em>
            </Link>
          ))}
          {results.length === 0 && (
            <p className="search-modal__empty">Nenhum produto encontrado.</p>
          )}
        </div>
      </section>
    </div>
  );
}
