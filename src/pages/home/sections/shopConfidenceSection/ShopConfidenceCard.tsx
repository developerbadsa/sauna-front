
 type ConfidenceItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

type CardProps = {
  item: ConfidenceItem;
};

export default function ShopConfidenceCard({ item }: CardProps) {
  const { title, description, icon } = item;

  return (
    <div
      className="
        group flex h-full flex-col items-center text-center
        px-4 py-6
        transition-transform duration-200 ease-out
        hover:-translate-y-1
      "
    >
      <div className="mb-5 flex  max-w-[200px] items-center justify-center">
        <img
          src={icon}
          alt={title}
          className="
            block h-full w-full object-contain
            transition-transform duration-200
            group-hover:scale-105
          "
        />
      </div>

      <h3 className="mb-2 text-[25px] font-bold text-[#f5f1ea] leading-12">
        {title}
      </h3>

      <p className="max-w-[260px] text-[16px] leading-relaxed text-[#9C9C9C]">
        {description}
      </p>
    </div>
  );
}