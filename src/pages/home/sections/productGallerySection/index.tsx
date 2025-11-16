import {useMemo, useState} from 'react';
import {
   MAIN_TABS,
   SUB_TABS,
   PRODUCTS,
   type MainCategoryId,
   type SubCategoryId,
} from './productGalleryData';
import {ProductCard} from './ProductCard';
import SectionTitle from './../../../../components/shared/sectionTitle';

export default function ProductGallerySection() {
   const [mainTab, setMainTab] = useState<MainCategoryId>('SAUNAS');
   const [subTab, setSubTab] = useState<SubCategoryId>('OUTDOOR');

   const visibleProducts = useMemo(
      () => PRODUCTS.filter(p => p.category === mainTab && p.type === subTab),
      [mainTab, subTab]
   );

   return (
      <section className='relative w-full  py-12 sd:py-16'>
         {/* dotted bg overlay (optional, same style as other sections) */}
         <div
            className='
          pointer-events-none absolute inset-0 opacity-40
          bg-[radial-gradient(circle,_rgba(255,255,255,0.07)_1px,_transparent_1px)]
          bg-[size:18px_18px]
        '
         />

         <div className='relative z-10 mx-auto w-full max-w-[1180px] sd:max-w-[1300px] bd:max-w-[1500px] px-4'>
            {/* title */}
            <div className='mb-8 sd:mb-10'>
               <SectionTitle title=' Product Gallery' />
            </div>

            {/* main tabs */}
            <div className='mb-4'>
               <div className='flex flex-wrap items-center justify-center gap-0 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#f0e9df]'>
                  {MAIN_TABS.map((tab, idx) => {
                     const isFirst = idx === 0;
                     const isLast = idx === MAIN_TABS.length - 1;

                     console.log(idx);
                     const active = tab.id === mainTab;
                     return (
                        <button
                           key={tab.id}
                           type='button'
                           onClick={() => setMainTab(tab.id)}
                           className={`
        relative pb-1 px-6 border-b-2 transition-colors duration-150
        ${
           active
              ? 'text-[#f48a1c] border-[#D47318]'
              : 'text-[#f0e9df] border-[#fff] hover:text-[#ffffff]'
        }

        ${
           isFirst
              ? `before:absolute before:left-0 before:top-[26px] before:h-[6px] before:w-[6px]
               before:-translate-x-3 before:-translate-y-1/2 before:rounded-full
               ${active ? 'before:bg-[#D47318]' : 'before:bg-white'}`
              : ''
        }

        ${
           isLast
              ? `after:absolute after:right-0 after:top-[26px] after:h-[6px] after:w-[6px] after:translate-x-3 after:-translate-y-1/2 after:rounded-full  ${
                   active ? 'after:bg-[#D47318]' : 'after:bg-white'
                }`
              : ''
        }
      `}>
                           {tab.label}
                        </button>
                     );
                  })}
               </div>

            </div>

            {/* sub tabs */}
            <div className='mb-8 flex flex-wrap items-center justify-center gap-3'>
               {SUB_TABS.map(tab => {
                  const active = tab.id === subTab;
                  return (
                     <button
                        key={tab.id}
                        type='button'
                        onClick={() => setSubTab(tab.id)}
                        className={`
                  rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.22em]
                  transition-colors duration-150
                  ${
                     active
                        ? 'border-[#f48a1c] bg-[#f48a1c] text-white'
                        : 'border-[#8a837b] text-[#f0e9df] hover:border-[#f48a1c] hover:text-white'
                  }
                `}>
                        {tab.label}
                     </button>
                  );
               })}
            </div>

            {/* grid */}
            {visibleProducts.length === 0 ? (
               <div className='py-10 text-center text-[13px] text-[#e1ddd8]'>
                  No products for this filter yet.
               </div>
            ) : (
               <div className='grid gap-6 sm:grid-cols-2 sld:grid-cols-3 sd:grid-cols-4'>
                  {visibleProducts.map(product => (
                     <ProductCard key={product.id} product={product} />
                  ))}
               </div>
            )}
         </div>
      </section>
   );
}
