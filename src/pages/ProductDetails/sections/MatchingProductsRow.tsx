import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { MatchingProduct } from '../product-types';

type Props = {
  products: MatchingProduct[];
};

export default function MatchingProductsRow({ products }: Props) {
  if (!products.length) return null;

  return (
    <section className='rounded-3xl border border-orange-100 bg-white/90 p-5 shadow-sm'>
      <div className='mb-4 flex items-center justify-between gap-4'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.16em] text-orange-500'>
            Bundle &amp; Save
          </p>
          <h2 className='text-sm font-semibold text-neutral-900 lg:text-base'>
            Order a matching product now!
          </h2>
        </div>
        <div className='hidden items-center gap-2 text-neutral-400 sm:flex'>
          <button
            type='button'
            className='inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-xs hover:border-neutral-300 hover:text-neutral-700'
          >
            <ChevronLeft className='h-4 w-4' />
          </button>
          <button
            type='button'
            className='inline-flex h-8 w-8 items_center justify-center rounded-full border border-neutral-200 bg-white text-xs hover:border-neutral-300 hover:text-neutral-700'
          >
            <ChevronRight className='h-4 w-4' />
          </button>
        </div>
      </div>

      <div className='flex gap-4 overflow-x-auto pb-1'>
        {products.map((product) => (
          <article
            key={product.id}
            className='min-w-[160px] max-w-[190px] flex-1 rounded-2xl border border-neutral-100 bg-neutral-50/60 p-3 text-xs text-neutral-800 transition hover:border-orange-200 hover:bg-white'
          >
            <div className='mb-2 overflow-hidden rounded-xl bg-neutral-100'>
              <div className='aspect-[4/3] w-full'>
                <img
                  src={product.image.src}
                  alt={product.image.alt}
                  className='h-full w-full object-cover'
                />
              </div>
            </div>
            <h3 className='line-clamp-2 text-[13px] font-semibold'>{product.name}</h3>
            {product.tagline && (
              <p className='mt-1 line-clamp-2 text-[11px] text-neutral-500'>
                {product.tagline}
              </p>
            )}
            <p className='mt-2 text-[12px] font-semibold text-neutral-900'>
              {product.currency === 'CAD' ? 'CA$' : '$'}
              {product.price.toLocaleString('en-US')}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
