export type ProductImage = {
  id: string;
  src: string;
  alt: string;
};

export type ProductDetailSectionId =
   | 'description'
   | 'features'
   | 'specifications'
   | 'materials'
   | 'consultation';

export type ProductDetailSection = {
  id: ProductDetailSectionId;
  title: string;
  body?: string;
  items?: string[];
};

export type ReviewTag = {
  id: string;
  label: string;
};

export type Review = {
  id: string;
  author: string;
  rating: number; // 0–5
  date: string;   // display string
  text: string;
  badges?: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  currency: 'USD' | 'CAD';
  inStock: number;
  stockMessage: string;
  shippingBadge: string;
  rating: number;
  reviewCount: number;
  images: ProductImage [];
  detailSections: ProductDetailSection[];
  reviewTags: ReviewTag[];
  reviews: Review[];
};

export type MatchingProduct = {
  id: string;
  name: string;
  price: number;
  currency: 'USD' | 'CAD';
  image: ProductImage;
  tagline?: string;
};
