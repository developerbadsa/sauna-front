export type GridMode = 2 | 3 | 4 | 6;

export type GridToggleProps = {
   value: string;
   current: GridMode;
};


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
  currency: 'CAD';
  badge?: string;
  extendedInfo?: string;
  rating?: number;
  reviewsCount?: number;
  thumbnailUrl: string;
};