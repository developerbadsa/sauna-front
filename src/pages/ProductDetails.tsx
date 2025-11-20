import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import {
   MAIN_PRODUCT,
   MATCHING_PRODUCTS,
} from './ProductDetails/product-data.ts';
import ProductHero from './ProductDetails/sections/ProductHero';
import MatchingProductsRow from './ProductDetails/sections/MatchingProductsRow';
import ProductDetailsAccordion from './ProductDetails/sections/ProductDetailsAccordion';
// import ProductReviewsSection from './ProductDetails/sections/ProductReviewsSection';

const ProductDetails = () => {
   const product = MAIN_PRODUCT;

   return (
      <div className=' bg-[#FFFDF6] text-neutral-900 relative pt-24 '>
         <div className='sauna-container bg-white shadow-lg p-6  rounded-[22px]'>
            <div className="h-[70px] flex flex-col justify-center bg-[#FFFDF6] rounded-[22px] p-4">
               <Header />
            </div>
         </div>


         <main className='min-h-screen sauna-container px-4 pb-16 pt-16'>
            <ProductHero product={product} />

            <div className='mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)]'>
               {/* <ProductReviewsSection product={product} /> */}

               <div></div>

               <div className='space-y-8 -mt-[100%]'>
                  <MatchingProductsRow products={MATCHING_PRODUCTS} />
                  <ProductDetailsAccordion sections={product.detailSections} />
               </div>
            </div>
         </main>
         <Footer />
      </div>
   );
};

export default ProductDetails;
