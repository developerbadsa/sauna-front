import SectionBar from './../../components/SectionBar/index';
import {SaunaHero} from './../../components/hero/SaunaHero';
import {PhoneIcon} from '@/components/ui/icons/akar-icons-phone';
import {EnvelopeIcon} from '@/components/ui/icons/akar-icons-envelope.tsx';
import {ClockIcon} from '@/components/ui/icons/akar-icons-clock.tsx';
import SectionTitle from './../../components/shared/SectionTitle';
import Heading from './../../components/PageContent/Heading/index';
import Description from './../../components/PageContent/Description/index';
import Footer from '@/components/shared/footer';

export default function TermsAndConditon() {
   const contactItems = [
      {
         name: 'Phone',
         value: '+1 (555) 123-4567',
         icon: <PhoneIcon size={22} />,
      },
      {
         name: 'Email',
         value: 'rahim@gmail.com',
         icon: <EnvelopeIcon size={22} />,
      },
      {
         name: 'Opening Time',
         value: '09:00 am - 19:00pm',
         icon: <ClockIcon size={22} />,
      },
   ];
   return (
      <div className='sauna-bg h-full'>
         <SaunaHero
            title='ALL SAUNA'
            taglineLines={[
               'All indoor & outdoor models Compare sizes, woods & heaters',
            ]}
            ctaLabel='Shop all saunas'
            // optional: tweak image position per page if needed
            heroImage={{
               src: 'https://i.ibb.co.com/s9vMfBJD/baral-3-1.png',
               alt: 'All sauna models',
               wrapperClassName: 'w-[45%] scale-[1.2] right-20 absolute',
            }}
            iconElemets={
               <div className='px-4 pb-4 pt-3 flex flex-col justify-start items-start gap-4 mb-32'>
                  {contactItems.map(item => (
                     <div
                        key={item.name}
                        className='flex items-center gap-2 mb-2 nav-info-item last:mb-0 cursor-pointer justify-end'>
                        <div className='rounded-full bg-[#403D39] w-9 h-9 flex justify-center items-center text-[#fff] hover:bg-[#EA7F15] nav-info-item-icon'>
                           {item.icon}
                        </div>
                        <div className='flex flex-col gap-0 ml-1'>
                           <p className='text-[12px] text-[#403D39] font-bold'>
                              {item.name}
                           </p>
                           <p className='text-[12px] font-semibold text-[#2f241c]'>
                              {item.value}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            }
            boxoutlined={false}
         />
         <SectionBar>
            <SectionTitle
               title='Terms & Conditions'
               style='tracking-[32px]  font-light !leading-20'
            />
         </SectionBar>

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

         <Footer />
      </div>
   );
}
