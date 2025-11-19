import bgPattern from './../../../../assets/Group 1000006184.png';
import barrelImg from './../../../../assets/sone4  1.png';
import {PhoneIcon} from './../../../../components/ui/icons/akar-icons-phone';
import {ClockIcon} from './../../../../components/ui/icons/akar-icons-clock';
import {EnvelopeIcon} from './../../../../components/ui/icons/akar-icons-envelope';
import Header from './../../../../components/shared/header/index';

function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg viewBox='0 0 16 16' aria-hidden='true' {...props}>
         <path
            d='M5 3.5a.75.75 0 0 1 1.06 0L11 8l-4.94 4.5A.75.75 0 0 1 5 11.44L8.38 8 5 4.56A.75.75 0 0 1 5 3.5Z'
            fill='currentColor'
         />
      </svg>
   );
}

export function HeroSection() {
   const navInfoItems = [
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
      <section className='relative flex h-[950px]  overflow-hidden '>
         {/* background pattern */}
         <div
            className='pointer-events-none absolute inset-0 opacity-60 z-0'
            style={{
               backgroundImage: `url(${bgPattern})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
            }}
         />

         <div className='bg-linear-to-t from-[#403d39d7] to-[#00000000] h-full w-full flex items-start justify-center inset-1 z-10'>
            {/* main card wrapper */}
            <div className='relative z-10  w-full px-4 mx-auto flex justify-center'>
               {/* <div className='relative overflow-visible rounded-[46px] bg-[#403D39] border border-[#8e8e8e] p-[40px]  shadow-[0_32px_80px_rgba(0,0,0,0.65)] mt-8 w-[1037px] h-[640px] sd:w-[1280px]  sd:h-[730px]'> */}

               <div className='relative overflow-visible rounded-[46px] bg-[#403D39] border border-[#8e8e8e] p-[40px]   mt-28  h-[640px]   sd:h-[730px] w-[85%]'>
                  <div className='relative overflow-visible rounded-[40px] bg-[#fbf2e5] px-6 pt-8 h-full flex flex-col justify-between'>
                     {/* top nav */}
                     <Header />

                     {/* heading */}
                     <div className='mb-0 mt-10 text-center mr-20'>
                        <h2 className='text-[18px] md:text-[20px] font-semibold leading-0 uppercase text-[#2f241c]'>
                           Ready to heat up your home?
                        </h2>
                        <h1 className='text-[22px] md:text-[96px] font-semibold uppercase tracking-[0.01em] text-[#2f241c] leading-30'>
                           Sauna
                        </h1>
                     </div>

                     {/* bottom content region */}
                     <div className='relative mt-10 flex items-end justify-end gap-6 pb-10'>
                        {/* left copy + explore button */}
                        <div className='relative z-20 max-w-[220px] text-[11px] leading-relaxed uppercase tracking-[0.16em] text-[#736355] py-10 '>
                           <p>Ready to install saunas</p>
                           <p>Sauna barrels for your home</p>

                           <button className='mt-3 inline-flex items-center gap-3 rounded-full bg-[#151515] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.45)]'>
                              <span>Explore</span>
                              <span className='flex h-6 w-6 items-center justify-center rounded-full bg-[#f7901e]'>
                                 <ArrowIcon className='h-3 w-3 text-white' />
                              </span>
                           </button>
                        </div>

                        {/* center sauna image */}
                        <div className=' absolute left-[54%] w-[600px] sd:w-[750px] bottom-[-34%] sd:bottom-[-60%] z-10  -translate-x-1/2 '>
                           <img
                              src={barrelImg}
                              alt='Wooden barrel sauna'
                              className='block w-full   hover:scale-[1.02] transition-transform duration-300 ease-out'
                           />
                        </div>

                        {/* right product catalog card */}
                        <div className='relative z-20 flex flex-1 justify-end overflow-hidden'>
                           <div className='max-w-[210px] px-4 pb-4 a pt-3 flex flex-col justify-end items-end gap-2 mb-32 '>
                              {/* <img
                                    src={barrelImg}
                                    alt='Sauna product catalog'
                                    className='block w-full'
                                 /> */}
                              {navInfoItems.map(item => {
                                 return (
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
                                 );
                              })}
                           </div>
                        </div>
                     </div>
                     {/* bottom content region end */}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
