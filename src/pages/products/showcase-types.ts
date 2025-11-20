
export type GridMode = 2 | 3 | 4 | 6;

export type ShowcaseProduct = {
  id: string;
  name: string;
  slug: string;
  productType: string;
  woodType: string;
  brand: string;
  heatingType: string;
  seatingCapacity: string;
  price: number;
  currency: "CAD";
  badge?: string;
  extendedInfo?: string;
  rating?: number;
  reviewsCount?: number;
  thumbnailUrl: string;
};

export type SortId = "featured" | "alphabetical-asc";

export type FiltersState = {
  productTypes: string[];
  woodTypes: string[];
  brands: string[];
  heatingTypes: string[];
  seatingCapacities: string[];
};

export type FilterOption = {
  value: string;
  label: string;
  count: number;
};
