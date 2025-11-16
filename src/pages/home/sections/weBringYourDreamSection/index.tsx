import dreamPoster from './../../../../assets/Generated Image November 11, 2025 - 3_31PM (1) 1.png'; // change path/name to your image
import SectionTitle from './../../../../components/shared/sectionTitle';

type WeBringYourDreamSectionProps = {
   onPlay?: () => void;
};

export default function WeBringYourDreamSection({
   onPlay,
}: WeBringYourDreamSectionProps) {
   return (
      <section className='relative w-full bg-[#403D39] py-12 sd:py-16'>
         <div className='mx-auto w-full sauna-container px-4'>
            {/* Title */}
            <SectionTitle title=' We Bring Your Dream' />

            {/* Video card */}
            <div className='mt-8 flex justify-center sd:mt-10'>
               <button
                  type='button'
                  onClick={onPlay}
                  className='
              group relative w-full max-w-[980px]
              rounded-[32px] border-[3px] border-[#f48a1c]
              overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f48a1c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#403D39]
            '
                  aria-label='Play sauna introduction video'>
                  <div className='relative aspect-[16/9]'>
                     {/* background image */}
                     <img
                        src={dreamPoster}
                        alt='Modern indoor sauna space'
                        className='
                  absolute inset-0 h-full w-full object-cover
                  transition-transform duration-300
                  group-hover:scale-[1.03]
                '
                     />

                     {/* subtle gradient overlay */}
                     <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.25)_100%)]' />

                     {/* play button */}
                     <div className='absolute inset-0 flex items-center justify-center'>
                        <div
                           className='
                    flex h-16 w-16 items-center justify-center rounded-full
                    bg-[#f48a1c]
                    shadow-[0_15px_35px_rgba(0,0,0,0.65)]
                    transition-transform duration-200
                    group-hover:scale-110 group-active:scale-95
                  '>
                           {/* triangle */}
                           <span
                              aria-hidden='true'
                              className='ml-[2px] inline-block border-y-[8px] border-l-[14px] border-y-transparent border-l-white'
                           />
                        </div>
                     </div>
                  </div>
               </button>
            </div>
         </div>
      </section>
   );
}
