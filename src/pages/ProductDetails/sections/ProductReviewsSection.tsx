import {useMemo, useState} from 'react';
import {Star, ChevronDown} from 'lucide-react';
import type {Product} from '../product-types';
import OrangeBorder from './../../../components/OrangeBorder';

type Props = {
   product: Product;
};

const RatingStars = ({value}: {value: number}) => {
   const rounded = Math.round(value);
   return (
      <div className='flex items-center gap-0.5 text-orange-400'>
         {Array.from({length: 5}).map((_, index) => {
            const filled = index < rounded;
            return (
               <Star
                  key={index}
                  className={`h-4 w-4 ${
                     filled
                        ? 'fill-orange-400 text-orange-400'
                        : 'text-neutral-300'
                  }`}
               />
            );
         })}
      </div>
   );
};

const RATING_METRICS = [
   {id: 'item-avg', label: 'item average', value: '5.0'},
   {id: 'delivery', label: 'Delivery', value: '4.9'},
   {id: 'service', label: 'Customer service', value: '5.0'},
   {id: 'recommend', label: 'Buyers recommend', value: '99%'},
];

const ASPECT_FILTERS = [
   'Appearance (61)',
   'Quality (53)',
   'Delivery & Packaging (42)',
   'Seller service (17)',
];

type SortKey = 'suggested' | 'newest' | 'rating-desc' | 'rating-asc';

const SORT_OPTIONS: {value: SortKey; label: string}[] = [
   {value: 'suggested', label: 'Suggested'},
   {value: 'newest', label: 'Most recent'},
   {value: 'rating-desc', label: 'Highest rated'},
   {value: 'rating-asc', label: 'Lowest rated'},
];

const parseDate = (value: string) => {
   // supports “Nov 3, 2025” or “10 Nov,2025”
   const normalized = value
      .replace('|', '')
      .replace(/(\d{1,2}) (\w+),?(\d{4})/, '$1 $2 $3');
   const d = new Date(normalized);
   return isNaN(d.getTime()) ? 0 : d.getTime();
};

export default function ProductReviewsSection({product}: Props) {
   const hasReviews = product.reviews && product.reviews.length > 0;

   const average = hasReviews ? product.rating : 0;
   const reviewCount = hasReviews ? product.reviewCount : 0;

   const [activeFilter, setActiveFilter] = useState<string | null>(null);
   const [sortBy, setSortBy] = useState<SortKey>('suggested');

   const filteredReviews = useMemo(() => {
      if (!hasReviews) return [];
      if (!activeFilter) return product.reviews;

      return product.reviews.filter(review =>
         review.badges?.some(badge =>
            badge.toLowerCase().includes(activeFilter.toLowerCase())
         )
      );
   }, [product.reviews, activeFilter, hasReviews]);

   const sortedReviews = useMemo(() => {
      const copy = [...filteredReviews];
      switch (sortBy) {
         case 'newest':
            return copy.sort((a, b) => parseDate(b.date) - parseDate(a.date));
         case 'rating-desc':
            return copy.sort((a, b) => b.rating - a.rating);
         case 'rating-asc':
            return copy.sort((a, b) => a.rating - b.rating);
         default:
            return copy; // suggested
      }
   }, [filteredReviews, sortBy]);

   const handleTagClick = (label: string) => {
      setActiveFilter(current => (current === label ? null : label));
   };

   return (
      <section aria-labelledby='reviews-heading' className='space-y-6'>
         {/* top orange line */}
         <OrangeBorder style='w-full !h-[1px]' />

         {/* header block */}
         <div className='pt-6'>
            <h2
               id='reviews-heading'
               className='mb-4 text-[16px] font-bold uppercase tracking-[0.2em] text-[#403D39]'>
               Reviews
            </h2>

            <div className='flex flex-wrap items-center gap-6'>
               {/* big star + average */}
               <div className='flex items-center gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='41'
                        height='39'
                        viewBox='0 0 41 39'
                        fill='none'>
                        <path
                           d='M20.4478 0L25.2748 14.8561H40.8955L28.2581 24.0377L33.0851 38.8939L20.4478 29.7123L7.81037 38.8939L12.6374 24.0377L3.8147e-05 14.8561H15.6207L20.4478 0Z'
                           fill='#F8991E'
                           fill-opacity='0.98'
                        />
                     </svg>
                  </div>
                  <div>
                     <p className='text-xl font-semibold text-[#403D39]'>
                        {average.toFixed(1)} / 5
                     </p>
                     <p className='text-xs text-[#403D39]'>
                        item average · {reviewCount} reviews
                     </p>
                  </div>
               </div>

               {/* metrics row */}
               <div className='flex flex-wrap gap-3 text-xs text-neutral-800'>
                  {RATING_METRICS.map(metric => (
                     <div
                        key={metric.id}
                        className='inline-flex items-center  gap-2 rounded-full  bg-white px-3 py-1'>
                        <span className='relative flex h-8 w-8 items-center justify-center rounded-full border border-[#F89B22] text-[11px] font-semibold text-orange-600 '>
                           <span className='absolute right-[-1.3px] w-[98%] h-[98%] flex justify-center items-center bg-white rounded-full'>
                              {metric.value}
                           </span>
                        </span>
                        <span className='text-[11px] text-neutral-700'>
                           {metric.label}
                        </span>
                     </div>
                  ))}
               </div>
            </div>

            {/* AI summary + filters */}
            <div className='mt-6 space-y-2 text-[11px]'>
               <div className='flex flex-wrap items-center gap-2 text-neutral-700'>
                  <span>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        width='9'
                        height='9'
                        viewBox='0 0 9 9'
                        fill='none'>
                        <g id='Repeat group 2_inner' data-figma-trr='r1p110-0f'>
                           <path
                              d='M4.44539 0L5.74045 3.15032L8.89078 4.44539L5.74045 5.74045L4.44539 8.89078L3.15032 5.74045L0 4.44539L3.15032 3.15032L4.44539 0Z'
                              fill='#222222'
                           />
                        </g>
                     </svg>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'>
                        <g id='Repeat group 1_inner' data-figma-trr='r1p110-0f'>
                           <path
                              d='M7.38496 0L9.5364 5.23351L14.7699 7.38496L9.5364 9.5364L7.38496 14.7699L5.23351 9.5364L0 7.38496L5.23351 5.23351L7.38496 0Z'
                              fill='#222222'
                           />
                        </g>
                     </svg>
                  </span>
                  <span className='inline-flex items-center gap-1 font-semibold'>
                     Buyer highlights, summarised by AI
                  </span>
               </div>

               {/* highlight tags row */}
               <div className='flex flex-wrap items-center gap-2'>
                  {product.reviewTags.map((tag, index) => {
                     const isActive = activeFilter === tag.label;
                     return (
                        <div key={tag.id} className='flex items-center'>
                           <button
                              type='button'
                              onClick={() => handleTagClick(tag.label)}
                              className={`text-[11px] ${
                                 isActive
                                    ? 'font-semibold text-orange-600'
                                    : 'text-neutral-700'
                              } hover:text-orange-600`}>
                              {tag.label}
                           </button>
                           {index < product.reviewTags.length - 1 && (
                              <span className='mx-1 text-neutral-300'>|</span>
                           )}
                        </div>
                     );
                  })}
               </div>

               {/* aspect chips + sort */}
               <div className='mt-3 flex flex-wrap items-center justify-between gap-3'>
                  <div className='flex flex-wrap gap-2'>
                     {ASPECT_FILTERS.map(label => {
                        const isActive = activeFilter === label;
                        return (
                           <button
                              key={label}
                              type='button'
                              onClick={() => handleTagClick(label)}
                              className={`rounded-full border px-3 py-1 text-[11px] ${
                                 isActive
                                    ? 'border-orange-400 bg-orange-50 text-orange-700'
                                    : 'border-neutral-200 bg-white text-neutral-700 hover:border-orange-200'
                              }`}>
                              {label}
                           </button>
                        );
                     })}
                  </div>

                  <div className='flex items-center gap-3 text-xs text-neutral-600'>
                     <button
                        type='button'
                        className='inline-flex items-center gap-1 text-[11px] font-medium hover:text-orange-600'>
                        Description
                        <ChevronDown className='h-3.5 w-3.5' />
                     </button>

                     <div className='flex items-center gap-1 text-[11px]'>
                        <span className='text-neutral-500'>Sort by</span>
                        <select
                           value={sortBy}
                           onChange={e => setSortBy(e.target.value as SortKey)}
                           className='rounded-full border border-neutral-300 bg-white px-3 py-1 text-[11px] outline-none focus:border-orange-400'>
                           {SORT_OPTIONS.map(opt => (
                              <option key={opt.value} value={opt.value}>
                                 {opt.label}
                              </option>
                           ))}
                        </select>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* reviews list */}
         <div className='space-y-5'>
            {!hasReviews && (
               <p className='text-sm text-neutral-500'>
                  There are no reviews for this product yet.
               </p>
            )}

            {hasReviews &&
               sortedReviews.map((review, index) => (
                  <article
                     key={review.id}
                     className={`pb-5 ${
                        index < sortedReviews.length - 1
                           ? 'border-b border-neutral-200/70'
                           : ''
                     }`}>
                     <div className='mb-2 flex flex-wrap items-start justify-between gap-4'>
                        <div className='space-y-1'>
                           <div className='flex flex-wrap items-center gap-2'>
                              <RatingStars value={review.rating} />
                              <span className='text-xs font-semibold text-neutral-800'>
                                 {review.rating.toFixed(1)}
                              </span>
                              {index === 0 && (
                                 <span className='rounded-full bg-orange-50 px-2 py-[2px] text-[10px] font-semibold text-orange-600'>
                                    Top review
                                 </span>
                              )}
                           </div>
                        </div>

                        <div className='flex items-center gap-2 text-xs text-neutral-500'>
                           <span className='text-[13px]'>👤</span>
                           <span className='font-semibold text-neutral-800'>
                              {review.author}
                           </span>
                           <span className='text-neutral-300'>|</span>
                           <span>{review.date}</span>
                        </div>
                     </div>

                     <p className='text-sm leading-relaxed text-neutral-700'>
                        {review.text}
                     </p>

                     {review.badges && review.badges.length > 0 && (
                        <div className='mt-3 flex flex-wrap gap-1.5 text-[11px]'>
                           {review.badges.map(badge => (
                              <span
                                 key={badge}
                                 className='rounded-full bg-neutral-50 px-2.5 py-1 text-neutral-600'>
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
