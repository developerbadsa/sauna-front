import type { Product } from "./productGalleryData.ts";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { image, name, seller, reviewsCount } = product;

  const fullStars = 5;

  return (
    <button
      type="button"
      className={`
        group relative flex h-[240px]  min-w-[250px] max-w-[450px] flex-col justify-between
        rounded-[26px] bg-[#f5f3f0]
        px-6 pt-6 pb-5
        shadow-[0_16px_32px_rgba(0,0,0,0.35)]
        transform-gpu origin-bottom
        transition-transform transition-shadow duration-200 ease-out
        hover:scale-y-[1.03] hover:shadow-[0_24px_48px_rgba(0,0,0,0.45)]
        hover:bg-[#fffdf6]
        text-left
      `}
    >


      {/* image */}
      <div className="relative mb-5 flex min-h-[130px] items-end justify-center">
        <img
          src={image}
          alt={name}
          className=" absolute -top-3
            block max-h-[150px] w-full max-w-[230px] object-contain
            transition-transform duration-200
            origin-bottom
            group-hover:-translate-y-[6px] group-hover:scale-[1.2]
          "
        />
      </div>

      {/* text block */}
      <div className="space-y-0">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#2b241e]">
          {name}
        </p>
        <p className="text-[11px] text-[#8b7f73]">{seller}</p>

        <div className="mt-1 flex items-center gap-1 text-[10px]">
          <span className="flex items-center gap-[2px] text-[#2ea34f]">
            {Array.from({ length: fullStars }).map((_, idx) => (
              <span key={idx}>★</span>
            ))}
          </span>
          <span className="ml-1 text-[#8b7f73]">({reviewsCount})</span>
        </div>
      </div>
    </button>
  );
}
