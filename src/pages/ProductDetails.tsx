// src/pages/products/ProductDetails.tsx
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import {MAIN_PRODUCT} from './ProductDetails/product-data';
import ProductHero from './ProductDetails/sections/ProductHero';
import ProductTabsSection from './ProductDetails/sections/ProductTabsSection';

const ProductDetails = () => {
   const product = MAIN_PRODUCT;

   return (
      <div className='relative bg-[#FFFDF6] text-neutral-900 pt-24'>
         {/* Header card */}
         <div className='sauna-container rounded-[22px] bg-white p-6 shadow-lg'>
            <div className='flex h-[70px] flex-col justify-center rounded-[22px] bg-[#FFFDF6] px-4'>
               <Header />
            </div>
         </div>

         <main className='sauna-container min-h-screen px-4 pb-16 pt-10'>
            {/* Breadcrumbs */}
            <div className='mb-6 text-xs text-neutral-400'>
               <button className='cursor-pointer hover:text-neutral-700'>Home</button>
               <span className='mx-1'>/</span>
               <button className='cursor-pointer hover:text-neutral-700'>Shop</button>
               <span className='mx-1'>/</span>
               <span className='font-medium text-neutral-700'>Product detail</span>
            </div>

            {/* Top hero section (gallery + summary) */}
            <ProductHero product={product} />

            {/* Tabs: Description / Additional Information / Review */}
            <ProductTabsSection product={product} />
         </main>

         <Footer />
      </div>
   );
};

export default ProductDetails;
