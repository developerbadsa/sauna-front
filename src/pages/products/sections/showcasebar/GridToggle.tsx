import {ToggleGroupItem} from '@/components/ui/toggle-group';

import cn from '@/helper/cn';
// import {GridMode} from "./../../index"

import type {GridMode, GridToggleProps} from '../../showcase-types.ts';



export default function GridToggle({value, current}: GridToggleProps) {
   const numeric = Number(value) as GridMode;
   const active = current === numeric;

   return (
      <ToggleGroupItem
         value={value}
         aria-label={`${value} column grid`}
         className={cn(
            'flex  items-center justify-center rounded-full border text-[30px] font-semibold bg-transparent border-[#E4E4E4]',
            active
               ? 'border-[#f37021] bg-transparent'
               : 'border-transparent bg-transparent'
         )}>
         {/* simple mini grid icon */}
         <div
            className={cn(
               'grid gap-[2px]',
               numeric === 2 && 'grid-cols-2',
               numeric === 3 && 'grid-cols-3',
               numeric === 4 && 'grid-cols-4',
               numeric === 6 && 'grid-cols-6'
            )}>
            {Array.from({length: numeric === 6 ? 6 : numeric}).map((_, idx) => (
               <span
                  key={idx}
                  className='h-[32px] w-[16px] rounded-[0px] bg-[#E4E4E4]'
               />
            ))}
         </div>
      </ToggleGroupItem>
   );
}