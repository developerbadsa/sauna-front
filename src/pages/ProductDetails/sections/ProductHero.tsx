import { useState } from 'react';
import { Star } from 'lucide-react';
import type { Product } from '../product-types';
import { Button } from '../../../components/ui/button';

type Props = {
  product: Product;
};

const formatPrice = (price: number, currency: Product['currency']) => {
  const symbol = currency === 'CAD' ? 'CA$' : '$';
  return `${symbol}${price.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
};

export default function ProductHero({ product }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = product.images[activeIndex] ?? product.images[0];

  return (
    <section className='grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start'>
      {/* Left: gallery */}
      <div>
        <div className='overflow-hidden rounded-[32px] bg-neutral-100 shadow-sm'>
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
                      ? 'border-orange-500 shadow-sm'
                      : 'border-transparent hover:border-neutral-300'
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
      <div className='space-y-5 rounded-[32px] bg-white/80 p-6 shadow-sm backdrop-blur-sm lg:p-8'>
        <div className='space-y-2'>
          <p className='text-xs font-semibold uppercase tracking-[0.14em] text-orange-500'>
            Outdoor Barrel Sauna
          </p>
          <h1 className='text-2xl font-semibold leading-tight text-neutral-900 lg:text-3xl'>
            {product.name}
          </h1>

          <div className='flex flex-wrap items-center gap-3 text-sm'>
            <span className='font-medium text-emerald-600'>In Stock</span>
            <span className='text-xs text-neutral-500'>{product.stockMessage}</span>
          </div>

          <div className='flex flex-wrap items-end justify_between gap-4 pt-1'>
            <div>
              <div className='flex items-baseline gap-1'>
                <span className='text-3xl font-semibold text-neutral-900'>
                  {formatPrice(product.price, product.currency)}
                </span>
                <span className='text-sm uppercase text-neutral-500'>
                  {product.currency.toLowerCase()}
                </span>
              </div>
              <div className='mt-1 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700'>
                <span className='inline-block h-1.5 w-1.5 rounded-full bg-emerald-500' />
                {product.shippingBadge}
              </div>
            </div>

            <div className='flex items-center gap-2 text-sm'>
              <div className='flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1'>
                <Star className='h-4 w-4 fill-orange-400 text-orange-400' />
                <span className='font-semibold'>{product.rating.toFixed(1)}</span>
                <span className='text-xs text-neutral-500'>/ 5</span>
              </div>
              <span className='text-xs text-neutral-500'>
                ({product.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>

        <Button
          type='button'
          className='h-12 w-full rounded-full text-sm font-semibold uppercase tracking-[0.16em]'
        >
          Add to Cart
        </Button>

        <div className='space-y-1 text-xs text-neutral-500'>
          <p>Secure checkout • Designed for Canadian climate • 10-year structural warranty</p>
        </div>
      </div>
    </section>
  );
}
