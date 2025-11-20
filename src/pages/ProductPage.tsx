
import {SaunaHero} from './../components/hero/SaunaHero';
import {PhoneIcon} from '../components/ui/icons/akar-icons-phone';
import {EnvelopeIcon} from '../components/ui/icons/akar-icons-envelope.tsx';
import {ClockIcon} from '../components/ui/icons/akar-icons-clock.tsx';
import ProductShowcase from './products/index';

export default function ProductPage() {
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
      <div className='bg-[#403D39]'>
         <SaunaHero
         
            title='ALL SAUNA'
            taglineLines={[
               'All indoor & outdoor models Compare sizes, woods & heaters',
            ]}
            ctaLabel='Shop all saunas'
            // optional: tweak image position per page if needed
            heroImage={{
               src: 'https://i.ibb.co.com/6cyGccyd/suasdasdna-1.png',
               alt: 'All sauna models',
               wrapperClassName: 'w-[45%] ',
            }}
            iconElemets={
               <div className='px-4 pb-4 pt-3 flex  justify-start items-end gap-4 mb-32'>
                  {contactItems.map(item => (
                     <div
                        key={item.name}
                        className='flex items-center gap-2 mb-2 nav-info-item last:mb-0 cursor-pointer justify-end'>
                        <div className='rounded-full bg-[#403D39] w-9 h-9 flex justify-center items-center text-[#fff] hover:bg-[#EA7F15] nav-info-item-icon'>
                           {item.icon}
                        </div>
                        <div className="flex flex-col gap-0 ml-1">
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

         <ProductShowcase/>
      </div>
   );
}
