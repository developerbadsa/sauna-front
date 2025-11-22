import supportIcon from './../../../../assets/icons/Bento_Grid (1).svg';
import styleIcon from './../../../../assets/icons/Group 52 (1).svg';
import warrantyIcon from './../../../../assets/icons/Group 59.png';
import SectionTitle from '../../../../components/shared/SectionTitle';
import ShopConfidenceCard from './ShopConfidenceCard';
import bgPattern from './../../../../assets/Clip path group.png';

export type ConfidenceItem = {
   id: string;
   title: string;
   description: string;
   icon: string;
};

const items: ConfidenceItem[] = [
   {
      id: 'support',
      title: 'Full Customer Support',
      description:
         "We ensure your project's smooth success with manuals, videos, and dedicated support.",
      icon: supportIcon,
   },
   {
      id: 'style',
      title: 'A Style For Every Space',
      description:
         'A variety of designs, perfect for any setting—from city backyards to cozy cabins.',
      icon: styleIcon,
   },
   {
      id: 'warranty',
      title: 'Warranty Guarantee',
      description:
         'Stress-free purchases with a warranty included on all our saunas.',
      icon: warrantyIcon,
   },
];

export default function ShopConfidenceSection() {
   return (
      <section
         className='
        relative w-full   -mt-32
      '>

         {/* background pattern */}
         <div
            className='pointer-events-none absolute inset-0 opacity-60 z-0 top-10 h-[80%] origin-top scale-y-[1.1]'
            style={{
               backgroundImage: `url(${bgPattern})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
            }}
         />
         <div className='relative bg-linear-to-l from-[#403d39] to-[#403d39ef] pt-40 z-0'>
            <div className='relative z-10 mx-auto max-w-[85%] px-4 '>
               {/* title */}
               <div className='mb-10'>
                  <SectionTitle title='  Shop Confidence' />
               </div>

               {/* cards */}
               <div className='grid gap-10 sm:grid-cols-3 justify-between  w-full'>
                  {items.map(item => (
                     <ShopConfidenceCard key={item.id} item={item} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
