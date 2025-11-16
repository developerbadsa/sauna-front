
export const MAIN_TABS = [
  { id: "SAUNAS", label: "Saunas" },
  { id: "HOT_TUBS", label: "Hot Tubs" },
  { id: "COLD_PLUNGE", label: "Cold Plunge" },
  { id: "ACCESSORIES", label: "Accessories" },
  { id: "HEATER", label: "Heater" },
] as const;

export type MainCategoryId = (typeof MAIN_TABS)[number]["id"];

export const SUB_TABS = [
  { id: "INDOOR", label: "Indoor" },
  { id: "OUTDOOR", label: "Outdoor" },
  { id: "BARREL", label: "Barrel" },
  { id: "INFRARED", label: "Infrared" },
] as const;

export type SubCategoryId = (typeof SUB_TABS)[number]["id"];

export type Product = {
  id: string;
  name: string;
  seller: string;
  rating: number;        // 0..5
  reviewsCount: number;
  image: string;         // URL or /assets path
  category: MainCategoryId;
  type: SubCategoryId;
  featured?: boolean;
};

// NOTE: use real image paths or URLs here.
// For local files, put them in /public/assets and use "/assets/xxx.png".
export const PRODUCTS: Product[] = [
  // SAUNAS — OUTDOOR
  {
    id: "urban-haven-1",
    name: "Urban Haven Sauna",
    seller: "Edward Luka",
    rating: 4.9,
    reviewsCount: 29,
    image: "/assets/gallery-urban-haven-1.png",
    category: "SAUNAS",
    type: "OUTDOOR",
  },
  {
    id: "barrel-bliss-1",
    name: "Barrel Bliss Sauna",
    seller: "Liam O'Connor",
    rating: 5,
    reviewsCount: 500,
    image: "/assets/gallery-barrel-bliss-1.png",
    category: "SAUNAS",
    type: "OUTDOOR",
  },
  {
    id: "nordic-cube-1",
    name: "Nordic Cube Sauna",
    seller: "Noah Tremblay",
    rating: 4.8,
    reviewsCount: 440,
    image: "/assets/gallery-nordic-cube-1.png",
    category: "SAUNAS",
    type: "OUTDOOR",
  },
  {
    id: "zen-retreat",
    name: "Zen Retreat Sauna",
    seller: "Oliver Chen",
    rating: 4.9,
    reviewsCount: 208,
    image: "/assets/gallery-zen-retreat.png",
    category: "SAUNAS",
    type: "OUTDOOR",
    featured: true,
  },
  {
    id: "urban-haven-2",
    name: "Urban Haven Sauna",
    seller: "Grace Belleveau",
    rating: 4.9,
    reviewsCount: 39,
    image: "/assets/gallery-urban-haven-2.png",
    category: "SAUNAS",
    type: "OUTDOOR",
  },
  {
    id: "barrel-bliss-2",
    name: "Barrel Bliss Sauna",
    seller: "Isabella Roy",
    rating: 4.8,
    reviewsCount: 70,
    image: "/assets/gallery-barrel-bliss-2.png",
    category: "SAUNAS",
    type: "OUTDOOR",
  },
  {
    id: "nordic-cube-2",
    name: "Nordic Cube Sauna",
    seller: "Ava MacLeod",
    rating: 4.9,
    reviewsCount: 180,
    image: "/assets/gallery-nordic-cube-2.png",
    category: "SAUNAS",
    type: "OUTDOOR",
  },
  {
    id: "nordic-cube-3",
    name: "Nordic Cube Sauna",
    seller: "Aiden Foster",
    rating: 4.8,
    reviewsCount: 110,
    image: "/assets/gallery-nordic-cube-3.png",
    category: "SAUNAS",
    type: "OUTDOOR",
  },

  // SAUNAS — INDOOR
  {
    id: "urban-haven-indoor-1",
    name: "Urban Haven Indoor",
    seller: "Mila Laurent",
    rating: 4.9,
    reviewsCount: 95,
    image: "/assets/gallery-urban-haven-indoor-1.png",
    category: "SAUNAS",
    type: "INDOOR",
  },
  {
    id: "compact-city-indoor",
    name: "Compact City Sauna",
    seller: "Jonas Meyer",
    rating: 4.8,
    reviewsCount: 62,
    image: "/assets/gallery-compact-city-indoor.png",
    category: "SAUNAS",
    type: "INDOOR",
  },
  {
    id: "studio-glow-indoor",
    name: "Studio Glow Sauna",
    seller: "Hanna Novak",
    rating: 4.7,
    reviewsCount: 44,
    image: "/assets/gallery-studio-glow-indoor.png",
    category: "SAUNAS",
    type: "INDOOR",
  },

  // SAUNAS — BARREL
  {
    id: "forest-barrel-1",
    name: "Forest Barrel Sauna",
    seller: "Elias Kaarle",
    rating: 4.9,
    reviewsCount: 154,
    image: "/assets/gallery-forest-barrel-1.png",
    category: "SAUNAS",
    type: "BARREL",
  },
  {
    id: "harbor-barrel-2",
    name: "Harbor Barrel Sauna",
    seller: "Oona Saar",
    rating: 4.8,
    reviewsCount: 121,
    image: "/assets/gallery-harbor-barrel-2.png",
    category: "SAUNAS",
    type: "BARREL",
  },

  // SAUNAS — INFRARED
  {
    id: "zen-infrared-1",
    name: "Zen Infrared Sauna",
    seller: "Aria Collins",
    rating: 5,
    reviewsCount: 210,
    image: "/assets/gallery-zen-infrared-1.png",
    category: "SAUNAS",
    type: "INFRARED",
  },
  {
    id: "city-glow-infrared",
    name: "City Glow Infrared",
    seller: "Victor Ruiz",
    rating: 4.8,
    reviewsCount: 132,
    image: "/assets/gallery-city-glow-infrared.png",
    category: "SAUNAS",
    type: "INFRARED",
  },

  // HOT TUBS — OUTDOOR
  {
    id: "hot-tub-1",
    name: "Aurora Hot Tub",
    seller: "Emma Wright",
    rating: 4.9,
    reviewsCount: 85,
    image: "/assets/gallery-hot-tub-1.png",
    category: "HOT_TUBS",
    type: "OUTDOOR",
  },
  {
    id: "hot-tub-2",
    name: "Cedar Crest Tub",
    seller: "Logan Perez",
    rating: 4.8,
    reviewsCount: 64,
    image: "/assets/gallery-hot-tub-2.png",
    category: "HOT_TUBS",
    type: "OUTDOOR",
  },

  // HOT TUBS — INDOOR
  {
    id: "hot-tub-indoor-1",
    name: "Spa Loft Tub",
    seller: "Ella Nguyen",
    rating: 4.7,
    reviewsCount: 41,
    image: "/assets/gallery-hot-tub-indoor-1.png",
    category: "HOT_TUBS",
    type: "INDOOR",
  },

  // COLD PLUNGE — OUTDOOR
  {
    id: "cold-plunge-1",
    name: "Glacier Cold Plunge",
    seller: "Mason Hart",
    rating: 4.7,
    reviewsCount: 60,
    image: "/assets/gallery-cold-plunge-1.png",
    category: "COLD_PLUNGE",
    type: "OUTDOOR",
  },
  {
    id: "cold-plunge-2",
    name: "Nordic Ice Plunge",
    seller: "Lara Jensen",
    rating: 4.8,
    reviewsCount: 48,
    image: "/assets/gallery-cold-plunge-2.png",
    category: "COLD_PLUNGE",
    type: "BARREL",
  },

  // COLD PLUNGE — INDOOR
  {
    id: "cold-plunge-indoor-1",
    name: "Studio Chill Plunge",
    seller: "Ryan Cole",
    rating: 4.6,
    reviewsCount: 27,
    image: "/assets/gallery-cold-plunge-indoor-1.png",
    category: "COLD_PLUNGE",
    type: "INDOOR",
  },

  // ACCESSORIES
  {
    id: "accessories-kit-1",
    name: "Oak Sauna Accessory Kit",
    seller: "Nora Fields",
    rating: 4.8,
    reviewsCount: 95,
    image: "/assets/gallery-accessories-kit-1.png",
    category: "ACCESSORIES",
    type: "INDOOR",
  },
  {
    id: "accessories-aroma-1",
    name: "Nordic Aroma Set",
    seller: "Felix Braun",
    rating: 4.7,
    reviewsCount: 72,
    image: "/assets/gallery-accessories-aroma-1.png",
    category: "ACCESSORIES",
    type: "OUTDOOR",
  },

  // HEATER
  {
    id: "heater-1",
    name: "Nordic Stone Heater",
    seller: "Sophia Marin",
    rating: 4.8,
    reviewsCount: 120,
    image: "/assets/gallery-heater-1.png",
    category: "HEATER",
    type: "INDOOR",
  },
  {
    id: "heater-2",
    name: "Cedar Glow Heater",
    seller: "Jakob Stein",
    rating: 4.9,
    reviewsCount: 88,
    image: "/assets/gallery-heater-2.png",
    category: "HEATER",
    type: "OUTDOOR",
  },
  {
    id: "heater-3",
    name: "Infra Heat Pro",
    seller: "Mia Carlson",
    rating: 4.8,
    reviewsCount: 134,
    image: "/assets/gallery-heater-infra-1.png",
    category: "HEATER",
    type: "INFRARED",
  },
];
