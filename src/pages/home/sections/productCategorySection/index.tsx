// src/pages/home/sections/productCategorySection/index.tsx

import allSaunasImg from "./../../../../assets/Infrared Saunas 1.png";
import infraredSaunasImg from "./../../../../assets/Infrared Saunas 1.png";
import hotTubsImg from "./../../../../assets/Infrared Saunas 1.png";
import coldPlungeImg from "./../../../../assets/Infrared Saunas 1.png";
import heaterImg from "./../../../../assets/Infrared Saunas 1.png";
import accessoriesImg from "./../../../../assets/Infrared Saunas 1.png";

type Category = {
  id: string;
  title: string;
  image: string;
  featured?: boolean;
};

const categories: Category[] = [
  { id: "all", title: "All saunas", image: allSaunasImg },
  {
    id: "infrared",
    title: "Infrared saunas",
    image: infraredSaunasImg,
    featured: true, // center highlighted card
  },
  { id: "hot-tubs", title: "Hot tubs", image: hotTubsImg },
  { id: "cold-plunge", title: "Cold plunge", image: coldPlungeImg },
  { id: "heater", title: "Sauna heater", image: heaterImg },
  { id: "accessories", title: "Sauna accessories", image: accessoriesImg },
];

type CategoryCardProps = { category: Category };

function CategoryCard({ category }: CategoryCardProps) {
  const { title, image, featured } = category;

  return (
    <button
      className={`group relative flex h-full w-full flex-col justify-between overflow-hidden
        rounded-[26px] bg-[#f5f3f0] px-6 pb-6 pt-5 text-left
        shadow-[0_16px_32px_rgba(0,0,0,0.35)]
        transition-transform duration-200 ease-out
        hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.45)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#403D39]
        ${featured ? "bg-gradient-to-b from-[#ffe4c2] via-[#fef5e8] to-[#f5f3f0]" : ""}
      `}
    >
      {/* right orange glow bar for featured card */}
      {featured && (
        <div className="pointer-events-none absolute inset-y-3 right-3 w-[7px] rounded-full bg-[#f48a1c] opacity-80" />
      )}

      {/* image */}
      <div className="relative z-10 mb-4 flex min-h-[140px] items-end justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-[160px] w-full max-w-[220px] object-contain"
        />
      </div>

      {/* text */}
      <div className="relative z-10 flex flex-col gap-1">
        <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#2b241e]">
          {title}
        </h3>
        <p className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-[#8b7f73]">
          <span className="transition-colors duration-200 group-hover:text-[#f48a1c]">
            Discover
          </span>
          <span className="mb-[1px] text-xs transition-transform duration-200 group-hover:translate-x-[2px] group-hover:text-[#f48a1c]">
            ›
          </span>
        </p>
      </div>

      {/* small round badge on featured card (like your Figma) */}
      {featured && (
        <div className="pointer-events-none absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#f48a1c] text-xs font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.4)]">
          J
        </div>
      )}
    </button>
  );
}

export default function ProductCategorySection() {
  return (
    <section className="relative w-full bg-[#403D39] py-10 sd:py-14 bd:py-16">
      <div className="mx-auto w-full max-w-[1180px] px-4">
        {/* top title bar */}
        <div className="mb-8 border-b border-[#5b554d] pb-4">
          <h2 className="text-center text-[13px] font-medium uppercase tracking-[0.3em] text-[#e1ddd8]">
            Product Category
          </h2>
        </div>

        {/* grid – 1col mobile, 2col small, 3col from 1080px (sld) */}
        <div className="grid gap-6 sm:grid-cols-2 sld:grid-cols-3">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
