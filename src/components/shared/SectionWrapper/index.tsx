import type {ReactNode} from 'react';
import bgPattern from '@/assets/Clip path group.png';

type SectionWrapperProps = {
   children: ReactNode;
};

export default function SectionWrapper({children}: SectionWrapperProps) {
   return (
      <section className='relative '>
         {/* <img className="absolute" src='https://i.ibb.co.com/8gnk7fkh/Rectangle-301.png' alt='' /> */}

         {/* background pattern */}
         <div
            className='pointer-events-none absolute left-0 right-0 bottom-0 z-0 w-[50%] h-[35%] opacity-6 origin-bottom'
            style={{
               backgroundImage: `url(${bgPattern})`,
               backgroundSize: '',
               backgroundPosition: 'left',
            }}
         />

         {children}

         <img
            className='pointer-events-none absolute left-0 right-0 bottom-0 opacity-60 z-0 h-[60%] w-full'
            src='https://i.ibb.co.com/Kpg4z2kG/Vector-6.png'
            alt=''
         />
      </section>
   );
}
