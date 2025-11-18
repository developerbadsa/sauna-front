import {HeroSection} from './sections/heroSection';
import ProductCategorySection from './sections/productCategorySection/index';
import ShopConfidenceSection from './sections/shopConfidenceSection/index';
import YourSaunaSection from './sections/yourSaunaSection/index';
import ProductGallerySection from './sections/productGallerySection/index';
import WeBringYourDreamSection from './sections/weBringYourDreamSection/index';
import WorkProcessesSection from './sections/WorkProcessesSection/index';
import ContactSection from './sections/ContactSection/index';
import WellnessInsightsSection from './sections/WellnessInsightsSection/index';
import OurReviewSection from './sections/ourReviewsSection/index';

const Home = () => {
   return (
      <>
         <HeroSection />
         <ProductCategorySection />
         <ShopConfidenceSection/>
         <YourSaunaSection/>
         <ProductGallerySection />
         <WeBringYourDreamSection/>
         <WorkProcessesSection/>
         <ContactSection/>
         <WellnessInsightsSection/>
         <OurReviewSection/>
      </>
   );
};

export default Home;
