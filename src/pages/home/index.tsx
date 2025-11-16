import {HeroSection} from './sections/heroSection';
import ProductCategorySection from './sections/productCategorySection/index';
import ShopConfidenceSection from './sections/shopConfidenceSection/index';

const Home = () => {
   return (
      <>
         <HeroSection />
         <ProductCategorySection />
         <ShopConfidenceSection/>
      </>
   );
};

export default Home;
