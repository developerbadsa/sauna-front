import {useMemo, useState} from "react";
import cn from "@/helper/cn";
import {Button} from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {Checkbox} from "@/components/ui/checkbox";
import {ToggleGroup} from "@/components/ui/toggle-group";

import GridToggle from "./sections/showcasebar/GridToggle";
import ProductCard from "./sections/productcards/ProductCard";

import {
  applyFilters,
  applySort,
  buildFilterOptions,
  gridClass,
} from "./sections/showcase/showcase-utils.ts";
import {ALL_PRODUCTS} from "./sections/showcase/showcase-data.ts";
import type {
  GridMode,
  ShowcaseProduct,
  SortId,
  FiltersState,
  FilterOption,
} from "./showcase-types.ts";


export default function ProductShowcase() {
  const [sort, setSort] = useState<SortId>("featured");
  const [gridMode, setGridMode] = useState<GridMode>(3);
  const [visibleCount, setVisibleCount] = useState(12);

  const [filters, setFilters] = useState<FiltersState>({
    productTypes: [],
    woodTypes: [],
    brands: [],
    heatingTypes: [],
    seatingCapacities: [],
  });

  const filtered = useMemo(
    () => applySort(applyFilters(ALL_PRODUCTS, filters), sort),
    [filters, sort],
  );

  const visibleProducts: ShowcaseProduct[] = filtered.slice(0, visibleCount);
  const showingCount = Math.min(visibleCount, filtered.length);

  const productTypeOptions = useMemo(
    () => buildFilterOptions(ALL_PRODUCTS, "productType"),
    [],
  );
  const woodTypeOptions = useMemo(
    () => buildFilterOptions(ALL_PRODUCTS, "woodType"),
    [],
  );
  const brandOptions = useMemo(
    () => buildFilterOptions(ALL_PRODUCTS, "brand"),
    [],
  );
  const heatingOptions = useMemo(
    () => buildFilterOptions(ALL_PRODUCTS, "heatingType"),
    [],
  );
  const seatingOptions = useMemo(
    () => buildFilterOptions(ALL_PRODUCTS, "seatingCapacity"),
    [],
  );

  const clearAll = () =>
    setFilters({
      productTypes: [],
      woodTypes: [],
      brands: [],
      heatingTypes: [],
      seatingCapacities: [],
    });

  const toggleFilter = (key: keyof FiltersState, value: string) => {
    setFilters(prev => {
      const currentList = prev[key];
      const exists = currentList.includes(value);
      const nextList = exists
        ? currentList.filter(v => v !== value)
        : [...currentList, value];
      return {...prev, [key]: nextList};
    });
  };

  return (
    <div className="min-h-screen w-full pb-10">
      <div className="mx-auto rounded-b-[24px] shadow-lg">
        {/* showcase bar */}
        <div className="w-full sauna-your-sauna-gradient rounded-[17px] ">
          <div className="flex flex-col gap-3 bg-[#403D39] sauna-container md:flex-row md:items-center md:justify-between py-10 px-5 ">
            <div className="flex items-centern gap-3">
              <span className="text-[15px] font-semibold uppercase tracking-[0.16em] text-[#EEEEEE]">
                Showcase
              </span>
            </div>

            <div className="w-[450px] flex justify-center">
              <ToggleGroup
                type="single"
                value={String(gridMode)}
                onValueChange={val => {
                  if (!val) return;
                  setGridMode(Number(val) as GridMode);
                }}
                className="flex gap-1 rounded-none p-1 w-full justify-between"
              >
                <GridToggle value="2" current={gridMode} />
                <GridToggle value="3" current={gridMode} />
                <GridToggle value="4" current={gridMode} />
                <GridToggle value="6" current={gridMode} />
              </ToggleGroup>
            </div>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              {/* <div className="hidden text-[11px] md:block">
                Showing {showingCount} of {filtered.length} items
              </div> */}
              <Select value={sort} onValueChange={val => setSort(val as SortId)}>
                <SelectTrigger className="h-9 w-[210px] rounded-full border border-[#f37021]/70 bg-[#f37021] text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                  <SelectValue placeholder="Featured" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="alphabetical-asc">
                    Alphabetically, A–Z
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* breadcrumb */}
        <Breadcrumb className="mb-3 sauna-container bg-white px-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>All Sauna</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* header row */}
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between sauna-container bg-white px-6">
          <div>
            <h1 className="text-2xl font-semibold tracking-[0.26em] text-[#333]">
              ALL SAUNA
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {filtered.length} Products
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Sort By
            </span>
            <Select value={sort} onValueChange={val => setSort(val as SortId)}>
              <SelectTrigger className="h-9 w-[190px] rounded-full border border-gray-300 bg-white text-xs font-medium">
                <SelectValue placeholder="Featured" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="alphabetical-asc">
                  Alphabetically, A–Z
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* body layout */}
        <div className="grid gap-8 md:grid-cols-[260px_minmax(0,1fr)] sauna-container bg-white px-6">
          {/* left sidebar filters */}
          <aside className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#555]">
                  Filters
                </div>
                <div className="text-[11px] text-muted-foreground">
                  {filtered.length} products
                </div>
              </div>
              <button
                type="button"
                onClick={clearAll}
                className="text-[11px] font-medium text-[#f37021] underline-offset-2 hover:underline"
              >
                Clear All
              </button>
            </div>

            <Accordion
              type="multiple"
              defaultValue={[
                "product-type",
                "wood-type",
                "brand",
                "heating-type",
                "seating-capacity",
              ]}
              className="space-y-1"
            >
              <FilterSection
                id="product-type"
                title="Product Type"
                options={productTypeOptions}
                selected={filters.productTypes}
                onToggle={v => toggleFilter("productTypes", v)}
              />

              <FilterSection
                id="wood-type"
                title="Wood Type"
                options={woodTypeOptions}
                selected={filters.woodTypes}
                onToggle={v => toggleFilter("woodTypes", v)}
              />

              <FilterSection
                id="brand"
                title="Brand"
                options={brandOptions}
                selected={filters.brands}
                onToggle={v => toggleFilter("brands", v)}
              />

              <FilterSection
                id="heating-type"
                title="Heating Type"
                options={heatingOptions}
                selected={filters.heatingTypes}
                onToggle={v => toggleFilter("heatingTypes", v)}
              />

              <FilterSection
                id="seating-capacity"
                title="Seating Capacity"
                options={seatingOptions}
                selected={filters.seatingCapacities}
                onToggle={v => toggleFilter("seatingCapacities", v)}
              />
            </Accordion>
          </aside>

          {/* right: showcase + grid */}
          <section className="space-y-4">
            {/* products grid */}
            <div className={cn("grid gap-5", gridClass(gridMode))}>
              {visibleProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}

              {visibleProducts.length === 0 && (
                <div className="col-span-full rounded-lg border border-dashed border-gray-200 p-8 text-center text-sm text-muted-foreground">
                  No products match your filters.
                </div>
              )}
            </div>

            {/* footer: load more */}
            <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-4 text-center text-[11px] text-muted-foreground md:flex-row">
              <div>
                Showing {showingCount} of {filtered.length} items
              </div>
              {showingCount < filtered.length && (
                <Button
                  size="sm"
                  className="rounded-full bg-[#f37021] px-6 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#d65e14]"
                  onClick={() => setVisibleCount(prev => prev + 6)}
                >
                  Load More
                </Button>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* filter section component                                            */
/* ------------------------------------------------------------------ */

type FilterSectionProps = {
  id: string;
  title: string;
  options: FilterOption[];
  selected: string[];
  onToggle: (value: string) => void;
};

function FilterSection({
  id,
  title,
  options,
  selected,
  onToggle,
}: FilterSectionProps) {
  return (
    <AccordionItem value={id} className="border-b border-gray-200">
      <AccordionTrigger className="py-3 text-left text-sm font-semibold text-[#333] hover:no-underline">
        {title}
      </AccordionTrigger>
      <AccordionContent className="pb-3">
        <div className="space-y-2">
          {options.map(opt => {
            const checked = selected.includes(opt.value);
            const checkboxId = `${id}-${opt.value}`;

            return (
              <label
                key={opt.value}
                htmlFor={checkboxId}
                className="flex cursor-pointer items-center justify-between gap-3 text-[12px] text-[#555]"
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={checkboxId}
                    checked={checked}
                    onCheckedChange={() => onToggle(opt.value)}
                  />
                  <span>{opt.label}</span>
                </div>
                <span className="text-[11px] text-gray-400">
                  ({opt.count})
                </span>
              </label>
            );
          })}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
