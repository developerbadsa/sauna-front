import { Star } from 'lucide-react';
import type { Product } from '../product-types';

type Props = {
  product: Product;
};

const RatingStars = ({ value }: { value: number }) => {
  const rounded = Math.round(value);
  return (
    <div className='flex items-center gap-0.5'>
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index < rounded;
        return (
          <Star
            key={index}
            className={`h-4 w-4 ${
              filled ? 'fill-orange-400 text-orange-400' : 'text-neutral-300'
            }`}
          />
        );
      })}
    </div>
  );
};

export default function ProductReviewsSection({ product }: Props) {
  if (!product.reviews.length) return null;

  const average = product.rating;
  const reviewCount = product.reviewCount;

  return (
    <section aria-labelledby='reviews-heading' className='space-y-6'>
      <div className=' p-5 '>
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <div className='flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-orange-50'>
              <Star className='h-6 w-6 fill-orange-400 text-orange-400' />
            </div>
            <div>
              <p className='text-sm font-semibold text-neutral-900'>
                {average.toFixed(1)} / 5
              </p>
              <p className='text-xs text-neutral-500'>
                Item average · {reviewCount} reviews
              </p>
            </div>
          </div>

          <div className='flex flex-wrap gap-2 text-[11px] text-neutral-700'>
            <span className='rounded-full bg-neutral-50 px-3 py-1'>
              5.0 item average
            </span>
            <span className='rounded-full bg-neutral-50 px-3 py-1'>4.9 delivery</span>
            <span className='rounded-full bg-neutral-50 px-3 py-1'>
              4.9 customer service
            </span>
            <span className='rounded-full bg-neutral-50 px-3 py-1'>
              98% buyers recommend
            </span>
          </div>
        </div>

        <div className='mt-4 border-t border-neutral-100 pt-4'>
          <p className='mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-800'>
            Buyer highlights, summarized by AI
          </p>
          <div className='flex flex-wrap gap-2 text-[11px]'>
            {product.reviewTags.map((tag) => (
              <span
                key={tag.id}
                className='rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-neutral-700'
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className='space-y-4'>
        {product.reviews.map((review) => (
          <article
            key={review.id}
            className=' p-4 '
          >
            <div className='mb-2 flex flex-wrap items-center justify-between gap-2'>
              <div>
                <div className='flex items-center gap-2'>
                  <RatingStars value={review.rating} />
                  <span className='text-xs font-medium text-neutral-600'>
                    {review.rating.toFixed(1)}
                  </span>
                </div>
                <p className='mt-1 text-xs font-semibold text-neutral-900'>
                  {review.author}
                </p>
              </div>
              <p className='text-xs text-neutral-400'>{review.date}</p>
            </div>

            <p className='text-sm leading-relaxed text-neutral-700'>{review.text}</p>

            {review.badges && review.badges.length > 0 && (
              <div className='mt-3 flex flex-wrap gap-1.5 text-[11px]'>
                {review.badges.map((badge) => (
                  <span
                    key={badge}
                    className='rounded-full bg-neutral-50 px-2.5 py-1 text-neutral-600'
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
