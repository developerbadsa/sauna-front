
// import {HeroSection} from './home/sections/heroSection';
import ProductCategorySection from './home/sections/productCategorySection';
import ShopConfidenceSection from './home/sections/shopConfidenceSection';
import YourSaunaSection from './home/sections/yourSaunaSection';
import ProductGallerySection from './home/sections/productGallerySection';
import WeBringYourDreamSection from './home/sections/weBringYourDreamSection';
import WorkProcessesSection from './home/sections/WorkProcessesSection';
import ContactSection from './home/sections/ContactSection';
import WellnessInsightsSection from './home/sections/WellnessInsightsSection';
import OurReviewSection from './home/sections/ourReviewsSection';
import { SaunaHero } from './../components/hero/SaunaHero';

export default function HomePage() {
   return (
      <>
         {/* <HeroSection /> */}
         <SaunaHero/>
         <ProductCategorySection />
         <ShopConfidenceSection />
         <YourSaunaSection />
         <ProductGallerySection />
         <WeBringYourDreamSection />
         <WorkProcessesSection />
         <ContactSection />
         <WellnessInsightsSection />
         <OurReviewSection />
      </>
   );
}