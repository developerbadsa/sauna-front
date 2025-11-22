import type { ReactNode} from "react"

type propsType ={
   children: ReactNode
}

export default function SectionBar({children}:propsType) {
   return (
      <div className='w-full sauna-your-sauna-gradient rounded-[17px] '>
         <div className='flex flex-col gap-3 bg-[#403D39] sauna-container md:flex-row md:items-center md:justify-between py-10 px-5 '>
            {children}
         </div>
      </div>
   );
}
