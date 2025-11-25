import {useState} from 'react';
import type {Product} from '../product-types';

type Props = {
   product: Product;
};

const RatingStars = ({value}: {value: number}) => {
   const rounded = Math.round(value);
   return (
      <div className='flex items-center gap-[2px] text-[#F8991E]'>
         {Array.from({length: 5}).map((_, index) => {
            const filled = index < rounded;
            return (
               <span
                  className={`h-[14px] w-[14px] ${
                     filled ? 'fill-[#F8991E] text-[#F8991E]' : 'text-[#D5D5D8]'
                  }`}>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     width='17'
                     height='16'
                     viewBox='0 0 17 16'
                     fill='none'>
                     <path
                        d='M8.08398 0L9.99235 5.87336L16.168 5.87336L11.1718 9.50329L13.0802 15.3766L8.08398 11.7467L3.08781 15.3766L4.99618 9.50329L3.8147e-06 5.87336L6.17562 5.87336L8.08398 0Z'
                        fill='#F8991E'
                        fill-opacity='0.98'
                     />
                  </svg>
               </span>
            );
         })}
      </div>
   );
};

const STAR_RANGE = [5, 4, 3, 2, 1];

export default function ProductReviewsSection({product}: Props) {
   const totalReviews = product.reviews.length;
   const average = totalReviews ? product.rating : 0;

   // build distribution
   const counts: Record<number, number> = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
   product.reviews.forEach(review => {
      const key = Math.min(5, Math.max(1, Math.round(review.rating)));
      counts[key] = (counts[key] || 0) + 1;
   });

   const getPercent = (stars: number) => {
      if (!totalReviews) return 0;
      return (counts[stars] / totalReviews) * 100;
   };

   // show-more behaviour
   const [visibleCount, setVisibleCount] = useState(3);
   const visibleReviews = product.reviews.slice(0, visibleCount);

   return (
      <section className='space-y-10'>

         {/* summary + distribution block */}
         <div className='pt-6 flex flex-col gap-8 md:flex-row md:items-start md:justify-between'>
            {/* left: rating summary */}
            <div className='space-y-3'>
               <p className='text-[28px] font-semibold text-[#403D39]'>
                  {average.toFixed(2)}{' '}
                  <span className='text-[15px] font-normal text-[#403D39]'>
                     out of 5
                  </span>
               </p>

               <RatingStars value={average} />

               <p className='text-xs text-[#403D39]'>(Lorem ipsum)</p>
            </div>

            {/* right: 5–1 star bar chart */}
            <div className='flex-1 max-w-xl space-y-1 text-[11px] text-[#403D39]'>
               {STAR_RANGE.map(star => {
                  const percent = getPercent(star);
                  return (
                     <div key={star} className='flex items-center gap-3'>
                        <span className=' text-right flex justify-center items-center text-[20px] gap-1'>
                           {star}
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='17'
                              height='16'
                              viewBox='0 0 17 16'
                              fill='none'>
                              <path
                                 d='M8.08398 0L9.99235 5.87336L16.168 5.87336L11.1718 9.50329L13.0802 15.3766L8.08398 11.7467L3.08781 15.3766L4.99618 9.50329L3.8147e-06 5.87336L6.17562 5.87336L8.08398 0Z'
                                 fill='#F8991E'
                                 fill-opacity='0.98'
                              />
                           </svg>
                        </span>
                        <div className='relative h-[14px] flex-1 overflow-hidden rounded-full bg-[#E0E0E3]'>
                           <div
                              className='absolute inset-y-0 left-0 rounded-full bg-[#F8991E] '
                              style={{width: `${percent}% `}}
                           />
                        </div>
                        <span className='w-10 text-right text-[14px] text-[#403D39]'>
                           {percent.toFixed(1)}%
                        </span>
                     </div>
                  );
               })}
            </div>
         </div>

         {/* review list header */}
         <div className='flex items-center gap-2 text-sm font-semibold text-[#403D39]'>
            <span className='flex items-center gap-[3px]'>
               {/* same little sparkle icon  */}
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='9'
                  height='9'
                  viewBox='0 0 9 9'
                  fill='none'>
                  <path
                     d='M4.44539 0L5.74045 3.15032L8.89078 4.44539L5.74045 5.74045L4.44539 8.89078L3.15032 5.74045L0 4.44539L3.15032 3.15032L4.44539 0Z'
                     fill='#222222'
                  />
               </svg>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'>
                  <path
                     d='M7.38496 0L9.5364 5.23351L14.7699 7.38496L9.5364 9.5364L7.38496 14.7699L5.23351 9.5364L0 7.38496L5.23351 5.23351L7.38496 0Z'
                     fill='#222222'
                  />
               </svg>
            </span>
            <span className="text-[15px]">Review list</span>
         </div>

         {/* reviews list */}
         <div className='space-y-6'>
            {visibleReviews.map(review => (
               <article
                  key={review.id}
                  className='border-b border-[#E4E4E7] pb-6 last:border-none'>
                  {/* top row: avatar + name + date + stars + badge */}
                  <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
                     <div className='flex items-center gap-3'>
                        {/* avatar circle (placeholder initial) */}
                        <div className='flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#E4E4E7] font-semibold text-[#403D39]'>
                           <img src="https://i.ibb.co.com/8DTJxSPN/Rectangle-3.png" alt="" />
                        </div>
                        <div className='flex flex-wrap items-center gap-2 text-[11px] text-[#403D39]'>
                           <span className='font-semibold text-[13px] '>
                              {review.author}
                           </span>
                           <span className='text-[#B0B0B5]'>|</span>
                           <span>{review.date}</span>
                           <span className='flex items-center gap-1'>
                              <span>
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='17'
                                    height='16'
                                    viewBox='0 0 17 16'
                                    fill='none'>
                                    <path
                                       d='M8.08398 0L9.99235 5.87336L16.168 5.87336L11.1718 9.50329L13.0802 15.3766L8.08398 11.7467L3.08781 15.3766L4.99618 9.50329L3.8147e-06 5.87336L6.17562 5.87336L8.08398 0Z'
                                       fill='#F8991E'
                                       fill-opacity='0.98'
                                    />
                                 </svg>
                              </span>
                              <span className='text-[11px] font-semibold'>
                                 {review.rating.toFixed(1)}
                              </span>
                           </span>
                           <span className='rounded-full bg-[#E4F7EC] px-2 py-[2px] text-[9px] font-semibold text-[#2EAD5C]'>
                              Verified
                           </span>
                        </div>
                     </div>
                  </div>

                  {/* review text */}
                  <p className='mt-2 text-[11px] leading-relaxed text-[#403D39]'>
                     {review.text}
                  </p>

                  {/* images row like design (reuse main product images) */}
                  <div className='mt-3 flex gap-3'>
                     {product.images.slice(0, 3).map(image => (
                        <div
                           key={image.id}
                           className='h-[72px] w-[72px] overflow-hidden rounded-[16px] bg-[#F1F1F3]'>
                           <img
                              src={image.src}
                              alt={image.alt}
                              className='h-full w-full object-cover'
                           />
                        </div>
                     ))}
                  </div>
               </article>
            ))}
         </div>

         {/* show more link */}
         {visibleCount < totalReviews && (
            <div className='flex justify-end'>
               <button
                  type='button'
                  onClick={() =>
                     setVisibleCount(c => Math.min(totalReviews, c + 3))
                  }
                  className='text-[10px] font-semibold uppercase tracking-[0.26em] text-[#8F8F94] hover:text-[#403D39]'>
                  Show more
               </button>
            </div>
         )}
      </section>
   );
}
