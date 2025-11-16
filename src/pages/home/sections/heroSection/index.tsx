import bgPattern from './../../../../assets/Group 1000006184.png';
import barrelImg from './../../../../assets/sone4  1.png';
import {PhoneIcon} from './../../../../components/ui/icons/akar-icons-phone';
import {ClockIcon} from './../../../../components/ui/icons/akar-icons-clock';
import {EnvelopeIcon} from './../../../../components/ui/icons/akar-icons-envelope';

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
                     <header className='grid grid-cols-[auto_1fr_auto] items-center'>
                        {/* logo */}
                        <div className='flex items-center'>
                           <div className='flex h-10 w-10 items-center justify-center rounded-full '>
                              <span className='text-3xl font-extrabold leading-none text-[#f7901e]'>
                                 {/* S */}
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='26'
                                    height='29'
                                    viewBox='0 0 26 29'
                                    fill='none'>
                                    <path
                                       d='M-7.07722e-06 19.1268H7.56359C7.56359 21.2652 8.87039 23.2848 12.9096 23.2848C15.9588 23.2848 17.1072 21.7008 17.1072 20.394C17.1072 16.038 0.593993 19.8 0.593993 9.30601C0.593993 3.16801 5.97959 6.28395e-06 12.7116 6.28395e-06C20.988 6.28395e-06 24.948 3.56401 25.1856 10.1376H17.622C17.622 7.9992 16.7508 5.66281 12.7116 5.66281C9.62279 5.66281 8.15759 7.0488 8.15759 8.3556C8.15759 13.86 25.4628 9.90001 25.4628 19.8396C25.4628 26.532 19.6416 28.9872 12.9096 28.9872C4.67279 28.9872 -7.07722e-06 25.938 -7.07722e-06 19.1268Z'
                                       fill='#EA7F15'
                                    />
                                 </svg>
                              </span>
                           </div>
                        </div>

                        {/* center nav links */}
                        <nav className='flex justify-center gap-10 text-[13px] font-medium uppercase tracking-[0.16em] text-[#2f241c]'>
                           <button className='transition-colors uppercase hover:text-black'>
                              Product
                           </button>
                           <button className='transition-colors uppercase hover:text-black'>
                              Reviews
                           </button>
                           <button className='transition-colors uppercase hover:text-black'>
                              Contacts
                           </button>
                        </nav>

                        {/* cart button */}
                        <button className='ml-auto inline-flex items-center gap-3 rounded-full bg-[#151515] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.45)]'>
                           <span>Cart</span>
                           <span className='flex h-7 w-7 items-center justify-center rounded-full bg-[#f7901e]'>
                              {/* <ArrowIcon className='h-3 w-3 text-white' />
                               */}

                              <svg
                                 xmlns='http://www.w3.org/2000/svg'
                                 width='51'
                                 height='51'
                                 viewBox='0 0 51 51'
                                 fill='none'>
                                 <g clip-path='url(#clip0_1_42167)'>
                                    <path
                                       d='M34.708 40.9855C26.0889 46.2033 14.7431 43.4112 9.53082 34.7887C4.24966 26.0537 7.01127 14.7676 15.7216 9.48496C24.3663 4.24308 35.7138 7.05045 40.9529 15.7281C46.2068 24.4281 43.4167 35.7127 34.7075 40.9846L34.708 40.9855ZM32.7998 18.864C32.791 18.9431 32.7819 19.0237 32.7731 19.1029C32.637 19.1847 32.5009 19.2665 32.3639 19.3489C26.5064 22.8711 20.6488 26.3932 14.7912 29.9154C14.6506 30 14.5082 30.0818 14.3714 30.1728C13.8721 30.5044 13.6609 31.0984 13.8472 31.6374C14.0541 32.2354 14.5929 32.6213 15.2004 32.5302C15.4854 32.4878 15.7687 32.3425 16.0206 32.191C21.9404 28.639 27.8553 25.0811 33.7717 21.5236L34.1754 21.2808L34.3696 21.3706C34.2941 21.5012 34.1847 21.6233 34.149 21.7637C33.3363 24.9993 32.532 28.2362 31.7261 31.4727C31.4519 32.5741 31.178 33.6741 30.9029 34.776C30.7736 35.292 30.9336 35.7329 31.306 36.0774C31.6884 36.4322 32.1617 36.4969 32.6453 36.3163C33.1574 36.1248 33.3664 35.6936 33.4909 35.1905C34.6128 30.666 35.742 26.1432 36.8644 21.6196C36.9328 21.3419 36.9895 21.0573 37.0141 20.7733C37.1786 18.7939 35.9279 17.1158 33.8936 16.6061C29.3451 15.4674 24.794 14.3389 20.2441 13.2061C20.1248 13.1764 20.0048 13.1433 19.8831 13.1326C19.3474 13.0829 18.9148 13.2692 18.6295 13.7337C18.357 14.178 18.355 14.6287 18.6204 15.0888C18.8542 15.4942 19.2293 15.6454 19.6538 15.7495C23.8868 16.7988 28.1174 17.8545 32.3506 18.8999C32.4885 18.9335 32.6483 18.8787 32.7974 18.8642L32.7998 18.864Z'
                                       fill='#EA7F15'
                                    />
                                    <path
                                       d='M32.7992 18.8631C32.6496 18.8767 32.4894 18.9329 32.3524 18.8988C28.1192 17.8534 23.8881 16.7968 19.6556 15.7485C19.2315 15.6429 18.8569 15.4925 18.6223 15.0877C18.3568 14.6276 18.3588 14.1769 18.6313 13.7326C18.9166 13.2681 19.3492 13.0818 19.885 13.1315C20.0066 13.1423 20.1272 13.1762 20.2459 13.205C24.7953 14.3369 29.3464 15.4654 33.8954 16.6051C35.9297 17.1147 37.1804 18.7928 37.0159 20.7723C36.9928 21.0566 36.9361 21.3411 36.8662 21.6185C35.7429 26.1427 34.6137 30.6655 33.4927 35.1895C33.3683 35.6925 33.1593 36.1237 32.6471 36.3152C32.1626 36.4963 31.6902 36.4311 31.3078 36.0763C30.9363 35.7313 30.7764 35.2903 30.9047 34.775C31.1795 33.6745 31.4537 32.573 31.728 31.4716C32.5338 28.2351 33.3382 24.9982 34.1508 21.7626C34.1866 21.6222 34.2959 21.5001 34.3714 21.3695L34.1772 21.2797L33.7735 21.5225C27.8571 25.08 21.9422 28.6379 16.0225 32.1899C15.7705 32.3415 15.4872 32.4867 15.2022 32.5291C14.5947 32.6203 14.0559 32.2343 13.8491 31.6363C13.6627 31.0973 13.8739 30.5033 14.3732 30.1718C14.51 30.0807 14.6524 29.9989 14.7931 29.9143C20.6506 26.3921 26.5082 22.87 32.3658 19.3478C32.5019 19.266 32.6379 19.1842 32.775 19.1018C32.7837 19.0226 32.7928 18.942 32.8016 18.8629L32.7992 18.8631Z'
                                       fill='white'
                                    />
                                 </g>
                                 <defs>
                                    <clipPath id='clip0_1_42167'>
                                       <rect
                                          width='36.751'
                                          height='36.78'
                                          fill='white'
                                          transform='translate(0 18.9384) rotate(-31.0185)'
                                       />
                                    </clipPath>
                                 </defs>
                              </svg>
                           </span>
                        </button>
                     </header>

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
                        <div className='pointer-events-none absolute left-[54%] w-[600px] sd:w-[750px] bottom-[-34%] sd:bottom-[-60%] z-10  -translate-x-1/2'>
                           <img
                              src={barrelImg}
                              alt='Wooden barrel sauna'
                              className='block w-full  select-none'
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
