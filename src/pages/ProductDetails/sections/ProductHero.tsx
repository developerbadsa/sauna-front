import {useState} from 'react';
import {ChevronDown, Minus, Plus, Facebook, Instagram, Twitter} from 'lucide-react';
import type {Product} from '../product-types';
import {Button} from '../../../components/ui/button';

type Props = {
  product: Product;
};

const formatPrice = (price: number) =>
  price.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

const CAPACITY_OPTIONS = ['2–4 persons', '4–6 persons', '6–8 persons'] as const;

export default function ProductHero({product}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [capacityOpen, setCapacityOpen] = useState(false);
  const [selectedCapacity, setSelectedCapacity] =
    useState<(typeof CAPACITY_OPTIONS)[number] | null>(null);
  const [quantity, setQuantity] = useState(1);

  const activeImage = product.images[activeIndex] ?? product.images[0];

  const handleQtyChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  return (
    <section className='grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start'>
      {/* Left: gallery */}
      <div>
        <div className='overflow-hidden rounded-[26px] bg-neutral-100 shadow-[0_18px_40px_rgba(15,23,42,0.18)]'>
          <div className='aspect-[4/3] w-full'>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className='h-full w-full object-cover'
            />
          </div>
        </div>

        {product.images.length > 1 && (
          <div className='mt-4 flex gap-4'>
            {product.images.map((img, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={img.id}
                  type='button'
                  onClick={() => setActiveIndex(index)}
                  className={`relative aspect-[4/3] w-24 overflow-hidden rounded-2xl border transition ${
                    isActive
                      ? 'border-[#F68B1F] shadow-md'
                      : 'border-[#e2e2e5] hover:border-neutral-400'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className='h-full w-full object-cover'
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Right: info */}
      <div className='space-y-6 lg:pl-4'>
        <div className='space-y-3'>
          <h1 className='text-2xl font-semibold uppercase leading-8 tracking-[0.08em] text-[#403D39] lg:text-[30px]'>
            {product.name}
          </h1>

          {/* stock line */}
          <p className='text-xs'>
            <span className='font-semibold text-[#2EAD5C] underline underline-offset-2'>
              In Stock
            </span>
            <span className='ml-1 text-neutral-500'>
              , Only {product.inStock} Left in stock!
            </span>
          </p>

          {/* price + short text */}
          <div className='mt-2 space-y-2'>
            <div className='flex items-baseline gap-1'>
              <span className='text-[32px] font-semibold text-[#F68B1F]'>
                ${formatPrice(product.price)}
              </span>
              <span className='text-sm uppercase text-neutral-500'>
                {product.currency.toLowerCase()}
              </span>
            </div>
            <p className='max-w-md text-sm text-neutral-500'>
              Lorem ipsum dolor sit amet, consectetur. Duis volutpat, sit
              imperdiet donec. At elit.
            </p>
          </div>

          {/* Product capacity + controls */}
          <div className='mt-4 space-y-2'>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500'>
              Product Capacity
            </p>

            <div className='flex flex-wrap items-center gap-3'>
              {/* Capacity "select" */}
              <div className='relative w-full max-w-[220px]'>
                <button
                  type='button'
                  onClick={() => setCapacityOpen(open => !open)}
                  className='flex h-11 w-full items-center justify-between rounded-[999px] border border-neutral-300 bg-white px-4 text-sm text-neutral-700 shadow-sm hover:border-neutral-500'
                >
                  <span>
                    {selectedCapacity ? selectedCapacity : 'Product Capacity'}
                  </span>
                  <ChevronDown className='h-4 w-4 text-neutral-400' />
                </button>
                {capacityOpen && (
                  <div className='absolute z-10 mt-1 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white text-sm shadow-lg'>
                    {CAPACITY_OPTIONS.map(option => (
                      <button
                        key={option}
                        type='button'
                        onClick={() => {
                          setSelectedCapacity(option);
                          setCapacityOpen(false);
                        }}
                        className='flex w-full items-center px-4 py-2 text-left text-neutral-700 hover:bg-neutral-50'
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quantity control */}
              <div className='flex h-11 items-center rounded-[999px] border border-neutral-300 bg-white px-3 text-sm shadow-sm'>
                <button
                  type='button'
                  onClick={() => handleQtyChange(-1)}
                  className='p-1 text-neutral-500 hover:text-neutral-800'
                  aria-label='Decrease quantity'
                >
                  <Minus className='h-4 w-4' />
                </button>
                <span className='mx-3 w-4 text-center font-medium'>
                  {quantity}
                </span>
                <button
                  type='button'
                  onClick={() => handleQtyChange(1)}
                  className='p-1 text-neutral-500 hover:text-neutral-800'
                  aria-label='Increase quantity'
                >
                  <Plus className='h-4 w-4' />
                </button>
              </div>

              {/* Call-to-action buttons */}
              <Button
                type='button'
                className='h-11 rounded-[999px] bg-[#F68B1F] px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#f47a00]'
              >
                Add to Cart
              </Button>

              <Button
                type='button'
                className='h-11 rounded-[999px] bg-black px-7 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-neutral-900'
              >
                Buy Now
              </Button>
            </div>
          </div>

          {/* meta info */}
          <div className='mt-5 space-y-1 text-xs text-neutral-500'>
            <p>
              <span className='font-semibold text-neutral-700'>SKU:</span>{' '}
              xcsadsdasw
            </p>
            <p>
              <span className='font-semibold text-neutral-700'>Tags:</span>{' '}
              xcsadsdasw
            </p>
            <p className='flex items-center gap-2'>
              <span className='font-semibold text-neutral-700'>Share:</span>
              <button
                type='button'
                className='flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 text-[11px] text-neutral-700 hover:border-neutral-500'
              >
                <Facebook className='h-3.5 w-3.5' />
              </button>
              <button
                type='button'
                className='flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 text-[11px] text-neutral-700 hover:border-neutral-500'
              >
                <Instagram className='h-3.5 w-3.5' />
              </button>
              <button
                type='button'
                className='flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 text-[11px] text-neutral-700 hover:border-neutral-500'
              >
                <Twitter className='h-3.5 w-3.5' />
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
