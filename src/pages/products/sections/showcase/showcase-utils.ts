// products/sections/showcase/showcase-utils.ts

import type {
  ShowcaseProduct,
  FiltersState,
  FilterOption,
  SortId,
  GridMode,
} from "./../../showcase-types.ts";

export function buildFilterOptions(
  products: ShowcaseProduct[],
  key: keyof ShowcaseProduct
): FilterOption[] {
  const map = new Map<string, number>();

  products.forEach(p => {
    const raw = p[key];
    if (typeof raw !== "string") return;
    const label = raw;
    map.set(label, (map.get(label) ?? 0) + 1);
  });

  return Array.from(map.entries())
    .map(([label, count]) => ({
      value: label,
      label,
      count,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export function applyFilters(
  products: ShowcaseProduct[],
  filters: FiltersState
): ShowcaseProduct[] {
  return products.filter(p => {
    if (
      filters.productTypes.length > 0 &&
      !filters.productTypes.includes(p.productType)
    ) {
      return false;
    }
    if (
      filters.woodTypes.length > 0 &&
      !filters.woodTypes.includes(p.woodType)
    ) {
      return false;
    }
    if (filters.brands.length > 0 && !filters.brands.includes(p.brand)) {
      return false;
    }
    if (
      filters.heatingTypes.length > 0 &&
      !filters.heatingTypes.includes(p.heatingType)
    ) {
      return false;
    }
    if (
      filters.seatingCapacities.length > 0 &&
      !filters.seatingCapacities.includes(p.seatingCapacity)
    ) {
      return false;
    }
    return true;
  });
}

export function applySort(
  products: ShowcaseProduct[],
  sort: SortId
): ShowcaseProduct[] {
  const cloned = [...products];
  if (sort === "alphabetical-asc") {
    cloned.sort((a, b) => a.name.localeCompare(b.name));
  }
  // "featured" = original order
  return cloned;
}

export function gridClass(mode: GridMode): string {
  switch (mode) {
    case 2:
      return "grid-cols-1 md:grid-cols-2";
    case 3:
      return "grid-cols-1 md:grid-cols-3";
    case 4:
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
    case 6:
      return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6";
    default:
      return "grid-cols-1 md:grid-cols-3";
  }
}
