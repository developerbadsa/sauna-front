import Heading from './../../../components/PageContent/Heading';
import Description from './../../../components/PageContent/Description/index';

export default function WellbeingSection() {
   return (
      <section className=''>
         <div className='sauna-container px-6 py-16  text-center bg-white'>
            <Heading heading='INVEST IN YOUR WELLBEING WITH A STYLISH BARREL OR OUTDOOR SAUNA' />

            <p className='mt-4 text-sm md:text-base font-semibold text-[#555]'>
               Got questions? We&apos;ve got answers! Give us a call at{' '}
               <span>877-446-3565</span>.
            </p>

            <Description>
               <p>
                  Indulge in safe, simple, and profound relaxation without
                  leaving the comfort of your home. Say goodbye to crowded
                  communal saunas and enjoy spa-quality heat therapy in your own
                  backyard. With our gym-quality home saunas, you can experience
                  the luxury of a private spa at a fraction of the cost of a
                  family vacation.
               </p>

               <p>
                  Our outdoor saunas are not only an affordable luxury,
                  they&apos;re also designed for your convenience. They&apos;re
                  easy to set up, simple to maintain, and heat up quickly,
                  making them a smart and economical choice for any home.
               </p>

               <p>
                  We take pride in offering the best value barrel saunas on the
                  market. We use only the highest quality Canadian clear western
                  red cedar, renowned for its beauty, durability, and aromatic
                  properties. Our saunas are meticulously designed to last
                  longer and perform better than many other options available.
               </p>

               <p>
                  Our collection also features stunning thermowood and Nordic
                  spruce models, sourced directly from Scandinavia. With elegant
                  design and expert craftsmanship, our saunas elevate any
                  backyard or cabin setting and are built to last a lifetime.
               </p>

               <p>
                  Whether you prefer a traditional wood-burning experience or
                  modern electric convenience, we have the perfect sauna for
                  you. Choose from our off-grid wood-burning models for an
                  authentic rustic feel, or opt for our user-friendly electric
                  saunas available across the lineup. Create lasting memories
                  and a true wellness ritual with a sauna from our exclusive
                  collection.
               </p>
            </Description>
         </div>
      </section>
   );
}
