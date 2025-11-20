// products/sections/showcase/sections/showcasebar/GridToggle.tsx
import {ToggleGroupItem} from "@/components/ui/toggle-group";
import cn from "@/helper/cn";
import type {GridMode} from "../../showcase-types";

type GridToggleProps = {
  value: string;
  current: GridMode;
};

export default function GridToggle({value, current}: GridToggleProps) {
  const numeric = Number(value) as GridMode;
  const active = current === numeric;

  return (
    <ToggleGroupItem
      value={value}
      aria-label={`${value} column grid`}
      className={cn(
        // base
        "flex items-center justify-center border text-[30px] font-semibold py-6 px-2 rounded-none",
        // default state
        "bg-transparent border-[#E4E4E4]",
        // override radix accent bg + border for active state
        "data-[state=on]:bg-transparent  data-[state=on]:border-[#f37021] hover:bg-transparent"
      )}
    >
      <div
        className={cn(
          "grid gap-[3px]",
          numeric === 2 && "grid-cols-2",
          numeric === 3 && "grid-cols-3",
          numeric === 4 && "grid-cols-4",
          numeric === 6 && "grid-cols-6"
        )}
      >
        {Array.from({length: numeric === 6 ? 6 : numeric}).map((_, idx) => (
          <span
            key={idx}
            className={cn(
              "h-[32px] w-[17px] rounded-[0px] bg-[#E4E4E4] transition-colors",
              active && "bg-[#f37021]" // inner bars color when current
            )}
          />
        ))}
      </div>
    </ToggleGroupItem>
  );
}
