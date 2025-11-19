
import { SaunaHero } from './../components/hero/SaunaHero';

export default function ProductPage() {
  return (
    <div>
        <SaunaHero
         title='ALL SAUNA'
         taglineLines={[
            'All indoor & outdoor models',
            'Compare sizes, woods & heaters',
         ]}
         ctaLabel='Shop all saunas'
         // optional: tweak image position per page if needed
         heroImage={{
            src: undefined as any, // use default barrel image
            alt: 'All sauna models',
            wrapperClassName:
               'absolute left-[54%] w-[600px] sd:w-[750px] bottom-[-34%] sd:bottom-[-60%] z-10 -translate-x-1/2',
         }}
      />


    </div>
  )
}
