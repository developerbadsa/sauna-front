
import {useState} from 'react';
import type {Product} from '../product-types';
import ProductReviewsSection from './ProductReviewsSection';

type Props = {
   product: Product;
};

const TABS = [
   {id: 'description', label: 'Description' as const},
   {id: 'additional', label: 'Additional Information' as const},
   {id: 'review', label: 'Review' as const},
];

type TabId = (typeof TABS)[number]['id'];

export default function ProductTabsSection({product}: Props) {
   const [activeTab, setActiveTab] = useState<TabId>('description');

   const descriptionSection = product.detailSections.find(
      section => section.id === 'description'
   );
   const featuresSection = product.detailSections.find(
      section => section.id === 'features'
   );
   const specsSection = product.detailSections.find(
      section => section.id === 'specifications'
   );
   const materialsSection = product.detailSections.find(
      section => section.id === 'materials'
   );

   return (
      <section className='mt-14'>
         {/* Tabs header */}
         <div className=''>
            <div className='flex items-center justify-center gap-0 text-xs font-semibold uppercase tracking-[0.05em]'>
               {TABS.map((tab, idx) => {
                  const isFirst = idx === 0;
                  const isLast = idx === TABS.length - 1;
                  const active = tab.id === activeTab;
                  return (
                     <button
                        key={tab.id}
                        type='button'
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                       relative pb-1 px-6 border-b-2 border-b-[#090909] transition-colors duration-150 text-[24px] font-bold leading-15 uppercase
                       ${
                          active
                             ? 'text-[#f48a1c] border-b-[#EA7F15]'
                             : 'text-[#090909] '
                       }
               
                       ${
                          isFirst
                             ? `before:absolute before:left-2.5 before:top-[64.3px] before:h-[8px] before:w-[6px]
                              before:-translate-x-3 before:-translate-y-1/2 before:rounded-full
                              ${
                                 active
                                    ? 'before:bg-[#D47318]'
                                    : 'before:bg-[#090909]'
                              }`
                             : ''
                       }
               
                       ${
                          isLast
                             ? `after:absolute after:right-2.5 after:top-[64.3px] after:h-[8px] after:w-[6px] after:translate-x-3 after:-translate-y-1/2 after:rounded-full  ${
                                  active
                                     ? 'after:bg-[#D47318]'
                                     : 'after:bg-[#090909]'
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

         {/* Tab content */}
         <div className='mt-10'>
            {activeTab === 'description' && (
               <div className='max-w-3xl text-sm leading-relaxed text-neutral-700'>
                  {descriptionSection?.body && (
                     <p className='mb-6'>{descriptionSection.body}</p>
                  )}

                  {featuresSection?.items && (
                     <div className='mt-4'>
                        <h3 className='mb-2 text-sm font-semibold text-neutral-900'>
                           Key features
                        </h3>
                        <ul className='ml-4 list-disc space-y-1'>
                           {featuresSection.items.map(item => (
                              <li key={item}>{item}</li>
                           ))}
                        </ul>
                     </div>
                  )}
               </div>
            )}

            {activeTab === 'additional' && (
               <div className='grid gap-10 text-sm text-neutral-700 md:grid-cols-2'>
                  {specsSection?.items && (
                     <div>
                        <h3 className='mb-3 text-sm font-semibold text-neutral-900'>
                           Specifications
                        </h3>
                        <ul className='ml-4 list-disc space-y-1'>
                           {specsSection.items.map(item => (
                              <li key={item}>{item}</li>
                           ))}
                        </ul>
                     </div>
                  )}

                  {materialsSection?.items && (
                     <div>
                        <h3 className='mb-3 text-sm font-semibold text-neutral-900'>
                           Materials
                        </h3>
                        <ul className='ml-4 list-disc space-y-1'>
                           {materialsSection.items.map(item => (
                              <li key={item}>{item}</li>
                           ))}
                        </ul>
                     </div>
                  )}
               </div>
            )}

            {activeTab === 'review' && (
               <ProductReviewsSection product={product} />
            )}
         </div>
      </section>
   );
}
