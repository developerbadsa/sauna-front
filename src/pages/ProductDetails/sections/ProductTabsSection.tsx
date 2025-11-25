// src/pages/products/ProductDetails/sections/ProductTabsSection.tsx
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
      section => section.id === 'description',
   );
   const featuresSection = product.detailSections.find(
      section => section.id === 'features',
   );
   const specsSection = product.detailSections.find(
      section => section.id === 'specifications',
   );
   const materialsSection = product.detailSections.find(
      section => section.id === 'materials',
   );

   return (
      <section className='mt-14'>
         {/* Tabs header */}
         <div className='border-b border-neutral-200'>
            <div className='flex items-center justify-center gap-10 text-xs font-semibold uppercase tracking-[0.25em]'>
               {TABS.map(tab => {
                  const isActive = tab.id === activeTab;
                  return (
                     <button
                        key={tab.id}
                        type='button'
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative pb-4 pt-2 transition ${
                           isActive
                              ? 'text-orange-500'
                              : 'text-neutral-500 hover:text-neutral-800'
                        }`}
                     >
                        {tab.label}
                        {isActive && (
                           <span className='absolute inset-x-0 bottom-0 mx-auto block h-[2px] max-w-[90px] rounded-full bg-orange-500' />
                        )}
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
