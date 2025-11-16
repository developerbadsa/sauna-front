import {HeroSection} from './sections/heroSection';
import ProductCategorySection from './sections/productCategorySection/index';
import ShopConfidenceSection from './sections/shopConfidenceSection/index';
import YourSaunaSection from './sections/yourSaunaSection/index';
import ProductGallerySection from './sections/productGallerySection/index';

const Home = () => {
   return (
      <>
         <HeroSection />
         <ProductCategorySection />
         <ShopConfidenceSection/>
         <YourSaunaSection/>
         <ProductGallerySection />
      </>
   );
};

export default Home;
