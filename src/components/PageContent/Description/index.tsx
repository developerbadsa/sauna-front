import type {ReactNode} from 'react';

type DescriptionProps = {
   children: ReactNode;
};

export default function Description({children}: DescriptionProps) {
   return (
      <div className='mt-8 space-y-4 text-sm md:text-[15px] leading-5.5 text-[#403D39] font-semibold text-center md:text-center'>
         {children}
      </div>
   );
}
