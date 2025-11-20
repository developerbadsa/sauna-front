import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import {
   MAIN_PRODUCT,
   MATCHING_PRODUCTS,
} from './ProductDetails/product-data.ts';
import ProductHero from './ProductDetails/sections/ProductHero';
import MatchingProductsRow from './ProductDetails/sections/MatchingProductsRow';
import ProductDetailsAccordion from './ProductDetails/sections/ProductDetailsAccordion';
import ProductReviewsSection from './ProductDetails/sections/ProductReviewsSection';

const ProductDetails = () => {
   const product = MAIN_PRODUCT;

   return (
      <div className=' bg-[#FFFDF6] text-neutral-900 relative pt-24 '>
         <div className='sauna-container bg-white shadow-lg p-6  rounded-[22px]'>
            <div className="h-[70px] flex flex-col justify-center bg-[#FFFDF6] rounded-[22px] p-4">
               <Header />
            </div>
         </div>

         <Footer />
      </div>
   );
};

export default ProductDetails;
