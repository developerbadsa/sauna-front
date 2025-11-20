import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import type { MatchingProduct } from '../product-types';

type Props = {
  products: MatchingProduct[];
};

const formatPrice = (price: number, currency: MatchingProduct['currency']) => {
  const symbol = currency === 'CAD' ? 'CA$' : '$';
  return `${symbol}${price.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
};

export default function MatchingProductsRow({ products }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  if (!products?.length) return null;

  const scrollByCard = (direction: 'prev' | 'next') => {
    if (!trackRef.current) return;
    const cardWidth = 220; // approximate width of one card
    const amount = direction === 'next' ? cardWidth : -cardWidth;

    trackRef.current.scrollBy({
      left: amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className='mt-4'>
      <h2 className='text-sm font-semibold text-neutral-900 lg:text-base'>
        Order a matching product now!
      </h2>

      <div className='relative mt-3 flex items-center'>
        {/* Grey rounded frame */}
        <div className='w-full rounded-[24px] border border-neutral-200 bg-[#f3f3f5] px-3 py-3'>
          <div
            ref={trackRef}
            className='flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
          >
            {products.map((product) => (
              <article
                key={product.id}
                className='min-w-[90px] max-w-[170px]'
              >
                <div className='relative flex items-center justify-center rounded-[18px] bg-white px-3 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.16)]'>
                  {/* Product image */}
                  <div className='aspect-[4/3] w-full'>
                    <img
                      src={product.image.src}
                      alt={product.image.alt}
                      className='h-full w-full object-contain rounded-[18px]'
                    />
                  </div>

                  {/* Price pill top-left */}
                  <div className='absolute left-3 top-3 rounded-full bg-neutral-900/90 px-2 py-[2px] text-[11px] font-semibold text-white'>
                    {formatPrice(product.price, product.currency)}
                  </div>

                  {/* Plus button bottom-right */}
                  <button
                    type='button'
                    className='absolute bottom-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-white'
                    aria-label='Add matching product'
                  >
                    <Plus className='h-3 w-3' />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Orange arrows outside the frame */}
        <button
          type='button'
          onClick={() => scrollByCard('prev')}
          className='absolute left-[-24px] top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f68b1f] text-white shadow-[0_10px_25px_rgba(246,139,31,0.45)] hover:bg-[#f47a00]'
          aria-label='Previous matching product'
        >
          <ChevronLeft className='h-4 w-4' />
        </button>

        <button
          type='button'
          onClick={() => scrollByCard('next')}
          className='absolute right-[-24px] top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f68b1f] text-white shadow-[0_10px_25px_rgba(246,139,31,0.45)] hover:bg-[#f47a00]'
          aria-label='Next matching product'
        >
          <ChevronRight className='h-4 w-4' />
        </button>
      </div>
    </section>
  );
}
