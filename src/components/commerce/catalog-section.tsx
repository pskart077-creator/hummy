"use client";

import { useMemo, useState } from "react";
import type { CommerceItem, ProductType } from "@/data/products";
import { ProductGrid } from "@/components/commerce/product-grid";

type CatalogSectionProps = {
  eyebrow?: string;
  items: CommerceItem[];
  showCategoryFilter?: boolean;
  title: string;
};

type AvailabilityFilter = "in-stock" | "promo";
type SortValue = "featured" | "name-asc" | "name-desc";
type ViewMode = "2" | "3" | "4" | "list";

const categoryFilters: Array<{ label: string; value: ProductType }> = [
  { label: "Produtos", value: "product" },
  { label: "Kits", value: "kit" },
];

const availabilityFilters: Array<{ label: string; value: AvailabilityFilter }> = [
  { label: "Em estoque", value: "in-stock" },
  { label: "Ofertas", value: "promo" },
];

const viewModes: Array<{ label: string; value: ViewMode }> = [
  { label: "2 colunas", value: "2" },
  { label: "3 colunas", value: "3" },
  { label: "4 colunas", value: "4" },
  { label: "Lista", value: "list" },
];

function toggleValue<T extends string>(values: T[], value: T) {
  return values.includes(value)
    ? values.filter((current) => current !== value)
    : [...values, value];
}

function matchesAvailabilityFilter(
  item: CommerceItem,
  activeAvailability: AvailabilityFilter[],
) {
  if (activeAvailability.length === 0) {
    return true;
  }

  return activeAvailability.some((availability) => {
    if (availability === "in-stock") {
      return true;
    }

    return item.oldPrice > item.price;
  });
}

export function CatalogSection({
  eyebrow,
  items,
  showCategoryFilter = true,
  title,
}: CatalogSectionProps) {
  const [activeTypes, setActiveTypes] = useState<ProductType[]>([]);
  const [activeAvailability, setActiveAvailability] = useState<
    AvailabilityFilter[]
  >([]);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [sortBy, setSortBy] = useState<SortValue>("featured");
  const [viewMode, setViewMode] = useState<ViewMode>("4");

  const filteredItems = useMemo(() => {
    const filtered = items.filter((item) => {
      const typeMatches =
        activeTypes.length === 0 || activeTypes.includes(item.type);

      return (
        typeMatches && matchesAvailabilityFilter(item, activeAvailability)
      );
    });

    if (sortBy === "name-asc") {
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "name-desc") {
      return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
    }

    return filtered;
  }, [activeAvailability, activeTypes, items, sortBy]);

  const visibleItems = filteredItems.slice(0, itemsPerPage);
  const hiddenItemsCount = Math.max(filteredItems.length - visibleItems.length, 0);

  return (
    <section className="catalog-section">
      <aside className="catalog-filters" aria-label="Filtros do catálogo">
        {showCategoryFilter && (
          <details className="catalog-filter-group" open>
            <summary>Categoria</summary>

            <div className="catalog-filter-group__options">
              {categoryFilters.map((option) => (
                <label className="catalog-filter-option" key={option.value}>
                  <input
                    checked={activeTypes.includes(option.value)}
                    name="catalog-category"
                    type="checkbox"
                    onChange={() =>
                      setActiveTypes((current) =>
                        toggleValue(current, option.value),
                      )
                    }
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </details>
        )}

        <details className="catalog-filter-group">
          <summary>Disponibilidade</summary>

          <div className="catalog-filter-group__options">
            {availabilityFilters.map((option) => (
              <label className="catalog-filter-option" key={option.value}>
                <input
                  checked={activeAvailability.includes(option.value)}
                  name="catalog-availability"
                  type="checkbox"
                  onChange={() =>
                    setActiveAvailability((current) =>
                      toggleValue(current, option.value),
                    )
                  }
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </details>
      </aside>

      <div className="catalog-content" data-view={viewMode}>
        <div className="catalog-heading">
          {eyebrow && <span>{eyebrow}</span>}
          <h2>{title}</h2>
        </div>

        <div className="catalog-toolbar" aria-label="Controles do catálogo">
          <div className="catalog-view">
            <span>Ver como</span>
            <div className="catalog-view__buttons">
              {viewModes.map((mode) => (
                <button
                  className={
                    viewMode === mode.value
                      ? "catalog-view__button is-active"
                      : "catalog-view__button"
                  }
                  key={mode.value}
                  type="button"
                  aria-label={mode.label}
                  onClick={() => setViewMode(mode.value)}
                >
                  <i />
                </button>
              ))}
            </div>
          </div>

          <div className="catalog-sort">
            <label>
              Itens por página
              <select
                value={itemsPerPage}
                onChange={(event) => setItemsPerPage(Number(event.target.value))}
              >
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="20">20</option>
              </select>
            </label>

            <label>
              Ordenar por
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value as SortValue)}
              >
                <option value="featured">Em destaque</option>
                <option value="name-asc">Nome A-Z</option>
                <option value="name-desc">Nome Z-A</option>
              </select>
            </label>
          </div>
        </div>

        {visibleItems.length > 0 ? (
          <ProductGrid items={visibleItems} />
        ) : (
          <div className="catalog-empty">
            <h3>Nenhum produto encontrado</h3>
            <p>Limpe algum filtro para ver mais opções da Hummy.</p>
          </div>
        )}

        {hiddenItemsCount > 0 && (
          <p className="catalog-count">
            Mostrando {visibleItems.length} de {filteredItems.length} itens.
          </p>
        )}
      </div>
    </section>
  );
}
