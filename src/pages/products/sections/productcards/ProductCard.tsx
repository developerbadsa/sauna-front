// products/sections/showcase/productcards/ProductCard.tsx
import {Star} from 'lucide-react';
import {Card, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import cn from '@/helper/cn';
import type {ShowcaseProduct} from '../showcase-types';

type ProductCardProps = {
   product: ShowcaseProduct;
};

export default function ProductCard({product}: ProductCardProps) {
   const {
      name,
      price,
      currency,
      badge,
      extendedInfo,
      rating = 0,
      reviewsCount = 0,
      thumbnailUrl,
   } = product;

   return (
      <Card className='group flex flex-col overflow-hidden border-0 bg-[#f5f3f0] shadow-none transition-all hover:-translate-y-[2px] hover:shadow-md'>
         {/* top badge */}
         {badge && (
            <div className='bg-[#555] px-3 py-1 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white'>
               {badge}
            </div>
         )}

         <CardContent className='flex flex-1 flex-col px-4 pb-4 pt-3'>
            {/* image */}
            <div className='mb-3 flex items-center justify-center'>
               <div className='relative inline-flex w-[200px] h-[200px] items-center justify-center overflow-hidden  bg-white shadow-md'>
                  <img
                     src={thumbnailUrl}
                     alt={name}
                     className='h-full w-full object-cover'
                  />
               </div>
            </div>

            {/* name */}
            <div className='mb-1 min-h-[40px] text-sm font-semibold text-[#222]'>
               {name}
            </div>

            {/* price */}
            <div className='mb-1 text-sm font-semibold text-[#222]'>
               {price.toLocaleString('en-CA', {
                  style: 'currency',
                  currency,
                  maximumFractionDigits: 0,
               })}
            </div>
            <div className='mb-2 text-[11px] uppercase tracking-[0.16em] text-gray-500'>
               Estimated value
            </div>

            {/* small info */}
            {extendedInfo && (
               <Badge
                  variant='outline'
                  className='mb-3 w-fit border-gray-300 bg-white px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-gray-700'>
                  {extendedInfo}
               </Badge>
            )}

            {/* rating */}
            <div className='mt-auto flex items-center gap-1 text-[11px] text-gray-600'>
               <div className='flex items-center gap-[2px]'>
                  {Array.from({length: 5}).map((_, idx) => {
                     const filled = idx < Math.round(rating);
                     return (
                        <Star
                           key={idx}
                           className={cn(
                              'h-3 w-3',
                              filled
                                 ? 'fill-[#FF8A00] text-[#FF8A00]'
                                 : 'text-gray-300'
                           )}
                        />
                     );
                  })}
               </div>
               <span className='ml-1'>
                  {rating.toFixed(1)} ({reviewsCount})
               </span>
            </div>
         </CardContent>
      </Card>
   );
}
