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
    featured: true, 
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
      className={`group flex h-[250px] w-[97%] flex-col justify-between
        rounded-[26px] bg-[#D9D9D9] px-6 pb-6 pt-5 text-left
        shadow-[0_16px_32px_rgba(0,0,0,0.35)]
        transition-transform duration-200 ease-out
        hover:shadow-[0_24px_48px_rgba(0,0,0,0.45)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#403D39] overflow-visible hover:bg-[#FFFDF6] origin-bottom  hover:scale-y-[1.13] hover:z-10 hover:rounded-[29px]
      `}
    >
      {/* right orange glow bar for featured card */}


      {/* image */}
      <div className="relative  flex min-h-[140px] items-end justify-center">
        <img
          src={image}
          alt={title}
          className="object-cover overflow-hidden h-auto w-[260px] transition-transform duration-200 group-hover:scale-105 z-10 absolute -top-25"
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

    </button>
  );
}

export default function ProductCategorySection() {
  return (
    <section className="relative w-full py-4  -mt-2 ">
      <div className="mx-auto w-full max-w-[85%] px-4">
        {/* top title bar */}
        <div className="mb-44 pb-0 ">
          <h2 className="text-center text-[44px] leading-30 font-medium uppercase tracking-[20px] text-[#e1ddd8] font-naville bg-linear-to-r from-[#D9D9D9]  to-[#999999] bg-clip-text text-transparent w-full">
            Product Category
          </h2>
        </div>

        {/* grid – 1col mobile, 2col small, 3col from 1080px (sld) */}
        <div className="grid gap-6 sm:grid-cols-3 gap-y-32 z-0">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
