import type {ReactNode, SVGProps} from 'react';
import bgPattern from '../../assets/Group 1000006184.png';
import barrelImg from '../../assets/sone4  1.png';
import Header from '../shared/header';
import {DEFAULT_HERO_CONTACT_ITEMS, type ContactItem} from './heroConfig';

function ArrowIcon(props: SVGProps<SVGSVGElement>) {
   return (
      <svg viewBox='0 0 16 16' aria-hidden='true' {...props}>
         <path
            d='M5 3.5a.75.75 0 0 1 1.06 0L11 8l-4.94 4.5A.75.75 0 0 1 5 11.44L8.38 8 5 4.56A.75.75 0 0 1 5 3.5Z'
            fill='currentColor'
         />
      </svg>
   );
}

type HeroImageConfig = {
   src: string;
   alt: string;
   wrapperClassName?: string;
   imgClassName?: string;
};

type SaunaHeroProps = {
   eyebrow?: string;
   title?: string;
   taglineLines?: string[];
   ctaLabel?: string;
   ctaIcon?: ReactNode;
   contactItems?: ContactItem[];
   heroImage?: HeroImageConfig;
   headingBlock?: boolean;
   showparagraphandexplore?: boolean;
   showcenterImg?: boolean;
   showinfocard?: boolean;
   reasonfor?: string;
   iconElemets?: ReactNode;
};

export function SaunaHero({
   eyebrow = 'Ready to heat up your home?',
   title = 'SAUNA',
   taglineLines = ['Ready to install saunas', 'Sauna barrels for your home'],
   ctaLabel = 'Explore',
   ctaIcon,
   contactItems = DEFAULT_HERO_CONTACT_ITEMS,
   heroImage,
   iconElemets,
  //  headingBlock = false,
  //  showparagraphandexplore = false,
  //  showcenterImg = false,
  //  showinfocard = true,
   reasonfor,
}: SaunaHeroProps) {
   const imageConfig: HeroImageConfig = {
      src: heroImage?.src ?? barrelImg,
      alt: heroImage?.alt ?? 'Wooden barrel sauna',
      wrapperClassName:
         heroImage?.wrapperClassName ??
         'absolute left-[54%] w-[600px] sd:w-[750px] bottom-[-34%] sd:bottom-[-60%] z-10 -translate-x-1/2',
      imgClassName:
         heroImage?.imgClassName ??
         'block w-full hover:scale-[1.02] transition-transform duration-300 ease-out',
   };

   return (
      <section className='relative flex h-[950px] overflow-hidden'>
         {/* background pattern – unchanged */}
         <div
            className='pointer-events-none absolute inset-0 opacity-60 z-0'
            style={{
               backgroundImage: `url(${bgPattern})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
            }}
         />

         <div className='bg-linear-to-t from-[#403d39d7] to-[#00000000] h-full w-full flex items-start justify-center inset-1 z-10'>
            {/* main card wrapper – unchanged */}
            <div className='relative z-10 w-full px-4 mx-auto flex justify-center'>
               <div className='relative overflow-visible rounded-[46px] bg-[#403D39] border border-[#8e8e8e] p-[40px] mt-28 h-[640px] sd:h-[730px] w-[85%]'>
                  <div className='relative overflow-visible rounded-[40px] bg-[#fbf2e5] px-6 pt-8 h-full flex flex-col justify-between'>
                     {/* top nav */}
                     <Header />

                     {reasonfor == 'homepage' ? (
                        <div>
                           {/* heading block */}
                           <div className='mb-0 mt-10 text-center mr-20'>
                              <h2 className='text-[18px] md:text-[20px] font-semibold leading-0 uppercase text-[#2f241c]'>
                                 {eyebrow}
                              </h2>
                              <h1 className='text-[22px] md:text-[96px] font-semibold uppercase tracking-[0.01em] text-[#2f241c] leading-30'>
                                 {title}
                              </h1>
                           </div>

                           {/* bottom content region */}
                           <div className='relative mt-10 flex items-end justify-end gap-6 pb-10'>
                              {/* left copy + explore button */}(
                              <div className='relative z-20 max-w-[220px] text-[11px] leading-relaxed uppercase tracking-[0.16em] text-[#736355] py-10'>
                                 {taglineLines.map(line => (
                                    <p key={line}>{line}</p>
                                 ))}

                                 <button className='mt-3 inline-flex items-center gap-3 rounded-full bg-[#151515] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.45)]'>
                                    <span>{ctaLabel}</span>
                                    <span className='flex h-6 w-6 items-center justify-center rounded-full bg-[#f7901e]'>
                                       {ctaIcon ?? (
                                          <ArrowIcon className='h-3 w-3 text-white' />
                                       )}
                                    </span>
                                 </button>
                              </div>
                              ){/* center sauna image */}(
                              <div className={imageConfig.wrapperClassName}>
                                 <img
                                    src={imageConfig.src}
                                    alt={imageConfig.alt}
                                    className={imageConfig.imgClassName}
                                 />
                              </div>
                              ){/* right contact info card */}
                              <div className='relative z-20 flex flex-1 justify-end overflow-hidden'>
                                 <div className='max-w-[210px] px-4 pb-4 pt-3 flex flex-col justify-end items-end gap-2 mb-32'>
                                    {contactItems.map(item => (
                                       <div
                                          key={item.name}
                                          className='flex items-center gap-2 mb-2 nav-info-item last:mb-0 cursor-pointer justify-end'>
                                          <div>
                                             <p className='text-[10px] text-right text-[#736355]'>
                                                {item.name}
                                             </p>
                                             <p className='text-[12px] font-semibold text-[#2f241c]'>
                                                {item.value}
                                             </p>
                                          </div>
                                          <div className='rounded-full bg-[#403D39] w-9 h-9 flex justify-center items-center text-[#fff] hover:bg-[#EA7F15] nav-info-item-icon'>
                                             {item.icon}
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                           {/* bottom content region end */}
                        </div>
                     ) : (

                        <div className="flex items-center justify-between">
                           <div className="ml-10">
                              {/* heading block */}
                              <div className='mb-0 mt-24 text-start mr-12 '>
                                 <h2 className='text-[18px] md:text-[20px] font-semibold leading-5 uppercase text-[#2f241c]'>
                                    {eyebrow}
                                 </h2>
                                 <h1 className='text-[22px] md:text-[96px] font-semibold uppercase tracking-[0.01em] text-[#2f241c] leading-30'>
                                    {title}
                                 </h1>
                              </div>

                              {/* right contact info card */}
                              <div className='relative z-20  overflow-hidden'>
                                {iconElemets}
                              </div>
                           </div>
                           <div className={imageConfig.wrapperClassName}>
                              <img
                                 src={imageConfig.src}
                                 alt={imageConfig.alt}
                                 className={imageConfig.imgClassName}
                              />
                           </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
