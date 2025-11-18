import React, {useEffect, useState} from 'react';
import {ArrowRight, Facebook, Instagram, Youtube, Linkedin} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import forestBg from './../../../../assets/Mask group (9).png';
import SectionTitle from './../../../../components/shared/sectionTitle';

type Review = {
   id: string;
   name: string;
   role: string;
   text: string;
   initials: string;
   featured?: boolean;
   avatar: string;
};

const REVIEWS: Review[] = [
   {
      id: 'jack',
      name: 'Jack Hamilton',
      role: 'Homeowner, Toronto',
      text: 'From the first consultation to the final installation, the team was professional, patient, and incredibly detail-oriented. Our sauna has become the favourite room in our home.',
      initials: 'JH',
      avatar:
         'https://i.ibb.co.com/6RLqnCXf/Gemini-Generated-Image-wa8lspwa8lspwa8l-1.png',
   },
   {
      id: 'ann',
      name: 'Ann Martin',
      role: 'Interior Designer',
      text: 'They understood exactly what my client needed. Beautiful finishes, clean lines, and a truly relaxing experience. I recommend them on every spa project now.',
      initials: 'AM',
      avatar:
         'https://i.ibb.co.com/6RLqnCXf/Gemini-Generated-Image-wa8lspwa8lspwa8l-1.png',
   },
   {
      id: 'john',
      name: 'John Doe',
      role: 'Cottage Owner',
      text: 'Installation was fast and seamless. The crew respected our space and left everything spotless. The cedar smells amazing and the heat is perfectly even.',
      initials: 'J',
      featured: true,
      avatar:
         'https://i.ibb.co.com/6RLqnCXf/Gemini-Generated-Image-wa8lspwa8lspwa8l-1.png',
   },
   {
      id: 'diana',
      name: 'Diana Collins',
      role: 'Wellness Coach',
      text: 'My clients are obsessed with the new sauna. It quickly became the centerpiece of my studio and an essential part of our recovery routine.',
      initials: 'DC',
      avatar:
         'https://i.ibb.co.com/6RLqnCXf/Gemini-Generated-Image-wa8lspwa8lspwa8l-1.png',
   },
   {
      id: 'lucas-1',
      name: 'Lucas Grande',
      role: 'Developer, Vancouver',
      text: 'I wanted a modern look that still felt warm and timeless. They delivered on every detail and stayed on budget the entire way.',
      initials: 'LG',
      avatar:
         'https://i.ibb.co.com/6RLqnCXf/Gemini-Generated-Image-wa8lspwa8lspwa8l-1.png',
   },
   {
      id: 'lucas-2',
      name: 'Lucas Grande',
      role: 'Developer, Vancouver',
      text: 'I wanted a modern look that still felt warm and timeless. They delivered on every detail and stayed on budget the entire way.',
      initials: 'LG',
      avatar:
         'https://i.ibb.co.com/6RLqnCXf/Gemini-Generated-Image-wa8lspwa8lspwa8l-1.png',
   },
];

type FooterLinkGroup = {
   title: string;
   links: {label: string; href: string}[];
};

const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
   {
      title: 'ABOUT',
      links: [
         {label: 'About Us', href: '#'},
         {label: 'Our Process', href: '#'},
         {label: 'Projects', href: '#'},
         {label: 'Contact', href: '#'},
      ],
   },
   {
      title: 'MY ACCOUNT',
      links: [
         {label: 'Dashboard', href: '#'},
         {label: 'Orders', href: '#'},
         {label: 'Wishlist', href: '#'},
         {label: 'Support', href: '#'},
      ],
   },
];

const PAYMENT_METHODS = ['Visa', 'MasterCard', 'Amex', 'PayPal'];

export default function OurReviewSection() {
   const [selectedIndex, setSelectedIndex] = useState(0);

   const [emblaRef, emblaApi] = useEmblaCarousel(
      {
         loop: true,
         align: 'center',
         skipSnaps: false,
      },
      [
         Autoplay({
            delay: 4000,
            stopOnInteraction: false,
         }),
      ]
   );

   useEffect(() => {
      if (!emblaApi) return;

      const onSelect = () => {
         setSelectedIndex(emblaApi.selectedScrollSnap());
      };

      onSelect();
      emblaApi.on('select', onSelect);

      return () => {
         emblaApi.off('select', onSelect);
      };
   }, [emblaApi]);

   return (
      <section className='relative w-full bg-[#403D39] py-12 sd:py-16'>
         <div className='mx-auto'>
            {/* TOP: REVIEWS PANEL */}
            <div className='z-0 px-6 sd:px-12 pt-12 pb-24 sauna-container bg-white rounded-t-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.75)]'>
               <div className='text-center'>
                  <SectionTitle title='Our Reviews' />

                  <div className='relative mt-6 inline-block'>
                     {/* big faded quote mark */}
                     <span className='pointer-events-none absolute -top-0 left-0 -translate-x-1/2 text-[90px] sd:text-[110px] leading-none text-[#F3EEE8] select-none'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           width='148'
                           height='118'
                           viewBox='0 0 148 118'
                           fill='none'>
                           <g clipPath='url(#clip0_1_42816)'>
                              <rect width='148' height='117.587' fill='white' />
                              <path
                                 d='M0 117.587V57.3955L35.2421 0H67.0532L38.8426 53.7527H67.0532V117.587H0ZM81.1586 117.587V57.3955L116.994 0H148L120.425 53.7527H148V117.587H81.1586Z'
                                 fill='#EFEFEF'
                              />
                           </g>
                           <defs>
                              <clipPath id='clip0_1_42816'>
                                 <rect
                                    width='148'
                                    height='117.587'
                                    fill='white'
                                 />
                              </clipPath>
                           </defs>
                        </svg>
                     </span>

                     {/* center label like mock */}
                     <div className='relative z-10 flex items-center gap-4 px-5 py-2'>
                        <span className='h-[1px] w-10' />
                        <span className='text-[12px] sd:text-[33px] leading-20 font-semibold tracking-[0.05em] uppercase text-[#000]'>
                           What our clients say!
                        </span>
                        <span className='h-[1px] w-10' />
                     </div>

                     {/* small orange line under text (with grey line behind via CSS) */}
                     <div className='relative z-10 border-custom mx-auto h-[2px] w-[87%] -mt-[6px] bg-[#E57B15]' />
                  </div>
               </div>

               {/* review cards slider */}
               {/* <div className="mt-10 -mx-4 sd:-mx-8 h-[300px] relative">
            <div className="overflow-hidden px-4 sd:px-8">
              <div
                ref={emblaRef}
                className="embla__viewport overflow-hidden "
              >
                <div className="embla__container flex z-99">
                  {REVIEWS.map((review, index) => (
                    <div
                      key={review.id}
                      className="
                        embla__slide
                        flex-[0_0_100%] sm:flex-[0_0_auto]
                        flex justify-center
                      "
                    >
                      <ReviewCard
                        review={review}
                        isActive={index === selectedIndex}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
               {/* FULL-WIDTH REVIEW CARDS SLIDER */}
               <div className='mt-6'>
                  <div className='relative left-1/2 w-screen -translate-x-1/2 '>
                     <div className='overflow-hidden px-4 sd:px-10'>
                        <div
                           ref={emblaRef}
                           className='overflow-hidden h-[600px]'>
                           <div className='flex items-end'>
                              {REVIEWS.map((review, index) => (
                                 <div
                                    key={review.id}
                                    className='
          flex justify-center
          flex-[0_0_85%] sm:flex-[0_0_10%]
          px-2 items-center justify-center h-[500px]
        '>
                                    <ReviewCard
                                       review={review}
                                       isActive={index === selectedIndex}
                                    />
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* BOTTOM: ORANGE HERO + DARK FOOTER */}
            <div className='relative z-10 sauna-your-sauna-gradient rounded-t-[32px]'>
               {/* hero image + CTA */}
               <div className='relative mx-auto h-[375px] overflow-hidden sauna-container'>
                  <img
                     src={forestBg}
                     alt='Sauna in landscaped garden'
                     className='block w-full h-full object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/5' />

                  <div className='absolute inset-0 flex flex-col items-center justify-center px-6 text-center'>
                     <p className='text-[12px] sd:text-[13px] font-semibold tracking-[0.35em] text-white/80 uppercase'>
                        Want a sauna for your home?
                     </p>
                     <h3 className='mt-3 max-w-[520px] text-[22px] sd:text-[26px] font-bold uppercase tracking-[0.18em] text-white'>
                        Contact us for a free consultation!
                     </h3>

                     <div className='mt-7 flex flex-wrap items-center justify-center gap-4'>
                        <button className='inline-flex items-center gap-3 rounded-full bg-[#403D39] px-6 sd:px-7 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F4F1EA] shadow-[0_12px_30px_rgba(0,0,0,0.55)]'>
                           <span>Contact us</span>
                           <span className='flex h-6 w-6 items-center justify-center rounded-full bg-[#F28A1F]'>
                              <ArrowRight className='h-3 w-3 text-white' />
                           </span>
                        </button>
                     </div>
                  </div>
               </div>

               {/* dark footer panel */}
               <div className='relative mx-auto sauna-container -mt-10 rounded-b-[32px] bg-[#3D3A37] px-6 sd:px-10 py-8 sd:py-9 shadow-[0_24px_60px_rgba(0,0,0,0.75)] border border-white/5'>
                  <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between'>
                     {/* brand + socials */}
                     <div className='max-w-[260px]'>
                        <div className='text-[22px] sd:text-[24px] font-extrabold tracking-[0.45em] uppercase text-white'>
                           Sauna
                        </div>
                        <p className='mt-3 text-[12px] leading-relaxed text-[#E4DFD8]'>
                           Bespoke indoor and outdoor saunas that blend
                           Scandinavian tradition with modern craftsmanship and
                           technology.
                        </p>

                        <p className='mt-6 text-[11px] font-semibold tracking-[0.24em] text-[#F4EDE6] uppercase'>
                           Follow us on social
                        </p>
                        <div className='mt-3 flex items-center gap-3'>
                           <SocialIcon label='Facebook'>
                              <Facebook className='h-3.5 w-3.5' />
                           </SocialIcon>
                           <SocialIcon label='Instagram'>
                              <Instagram className='h-3.5 w-3.5' />
                           </SocialIcon>
                           <SocialIcon label='YouTube'>
                              <Youtube className='h-3.5 w-3.5' />
                           </SocialIcon>
                           <SocialIcon label='LinkedIn'>
                              <Linkedin className='h-3.5 w-3.5' />
                           </SocialIcon>
                        </div>
                     </div>

                     {/* links + newsletter */}
                     <div className='flex flex-1 flex-col gap-8 md:flex-row md:gap-10'>
                        <div className='flex flex-1 gap-10'>
                           {FOOTER_LINK_GROUPS.map(group => (
                              <FooterLinks key={group.title} group={group} />
                           ))}
                        </div>

                        <div className='w-full md:max-w-[260px]'>
                           <p className='text-[11px] font-semibold tracking-[0.24em] text-[#F4EDE6] uppercase'>
                              Get update
                           </p>
                           <p className='mt-2 text-[12px] leading-relaxed text-[#E4DFD8]'>
                              Be the first to know about new models, seasonal
                              offers, and sauna care tips.
                           </p>

                           <form
                              onSubmit={e => e.preventDefault()}
                              className='mt-4 flex items-center gap-2 rounded-full bg-[#45413E] px-3 py-1.5'>
                              <input
                                 type='email'
                                 placeholder='Enter your email'
                                 className='w-full bg-transparent text-[12px] text-[#F4EDE6] placeholder:text-[#A19992] outline-none border-none'
                              />
                              <button
                                 type='submit'
                                 className='flex h-7 w-7 items-center justify-center rounded-full bg-[#F28A1F] shadow-[0_8px_18px_rgba(0,0,0,0.6)]'>
                                 <ArrowRight className='h-3.5 w-3.5 text-white' />
                              </button>
                           </form>
                        </div>
                     </div>

                     {/* payments */}
                     <div className='w-full lg:w-[220px]'>
                        <p className='text-[11px] font-semibold tracking-[0.24em] text-[#F4EDE6] uppercase'>
                           Accepted payment methods
                        </p>
                        <div className='mt-3 flex flex-wrap gap-2'>
                           {PAYMENT_METHODS.map(method => (
                              <div
                                 key={method}
                                 className='rounded-full bg-[#45413E] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F4EDE6]'>
                                 {method}
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* copyright */}
               <p className='mt-7 text-center text-[10px] sd:text-[11px] font-medium tracking-[0.28em] uppercase text-white/85'>
                  © Copyright Reserved by Sauna.com
               </p>
            </div>
         </div>
      </section>
   );
}

function ReviewCard({review, isActive}: {review: Review; isActive: boolean}) {
   const avatarBase =
      'flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#F28A1F] text-[13px] font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.5)] border-[3px]';
   const avatarBorder = isActive ? ' border-[#1C85FF]' : ' border-[#F4F1EA]';

   return (
      <article
         className={
            `relative snap-center flex-shrink-0
         rounded-[50px] bg-white px-5 pt-10 pb-12 border border-[#F1EAE1]
         flex flex-col items-center text-center origin-bottom
         transition-all duration-500
         ease-[cubic-bezier(0.22,0.61,0.36,1)] justify-around
        ` +
            (isActive
               ? ' w-[280px] h-[430px] shadow-[0_26px_55px_rgba(0,0,0,0.3)] z-10'
               : ' w-[230px] h-[380px] opacity-80 shadow-[0_18px_45px_rgba(0,0,0,0.12)]')
         }>
         <div
            className={`${avatarBase} ${avatarBorder} ${
               isActive && 'scale-[1.2]'
            }`}>
            {review.avatar ? (
               <img
                  className='h-full w-full rounded-full object-cover'
                  src={review.avatar}
                  alt={review.name}
               />
            ) : (
               <span>{review.initials}</span>
            )}
         </div>

         <div>
            <h4 className='mb-16 text-[18px] uppercase font-semibold text-[#3A332D] z-1 '>
               {review.name}
            </h4>

            <div
               className={`mt-4 text-[11px] w-[200px] leading-relaxed text-[#5D5147] relative  ${
                  isActive ? 'scale-[1.3]' : ''
               } `}>
               <span className="absolute -top-8 -z-2 left-0 opacity-65">
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     width='69'
                     height='55'
                     viewBox='0 0 69 55'
                     fill='none'>
                     <g clip-path='url(#clip0_1_41936)'>
                        <path
                           d='M0 54.9056V26.8001L16.2304 0H30.8807L17.8886 25.0991H30.8807V54.9056H0ZM37.3768 54.9056V26.8001L53.8804 0H68.16L55.4605 25.0991H68.16V54.9056H37.3768Z'
                           fill='#EDEDED'
                        />
                     </g>
                     <defs>
                        <clipPath id='clip0_1_41936'>
                           <rect width='68.16' height='54.9056' fill='white' />
                        </clipPath>
                     </defs>
                  </svg>
               </span>

             <p className="z-1 text-[#3B3B3B] my-4"> {review.text} </p> 

               <span className="absolute -bottom-8 -z-2 right-0 opacity-65">
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     width='69'
                     height='55'
                     viewBox='0 0 69 55'
                     fill='none'>
                     <g clip-path='url(#clip0_1_41939)'>
                        <path
                           d='M68.16 6.0415e-06L68.16 28.1055L51.9296 54.9056L37.2793 54.9056L50.2714 29.8065L37.2793 29.8065L37.2793 3.30432e-06L68.16 6.0415e-06ZM30.7832 2.72853e-06L30.7832 28.1055L14.2797 54.9056L2.28882e-05 54.9056L12.6996 29.8065L2.50524e-05 29.8065L2.76224e-05 0L30.7832 2.72853e-06Z'
                           fill='#EDEDED'
                        />
                     </g>
                     <defs>
                        <clipPath id='clip0_1_41939'>
                           <rect
                              width='68.16'
                              height='54.9056'
                              fill='white'
                              transform='translate(68.16 54.9056) rotate(-180)'
                           />
                        </clipPath>
                     </defs>
                  </svg>
               </span>
            </div>
         </div>
      </article>
   );
}

function FooterLinks({group}: {group: FooterLinkGroup}) {
   return (
      <div>
         <p className='text-[11px] font-semibold tracking-[0.24em] text-[#F4EDE6] uppercase'>
            {group.title}
         </p>
         <ul className='mt-3 space-y-1.5'>
            {group.links.map(link => (
               <li key={link.label}>
                  <a
                     href={link.href}
                     className='text-[12px] text-[#E4DFD8] hover:text-white transition-colors'>
                     {link.label}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
}

function SocialIcon({
   children,
   label,
}: {
   children: React.ReactNode;
   label: string;
}) {
   return (
      <button
         type='button'
         aria-label={label}
         className='flex h-8 w-8 items-center justify-center rounded-full bg-[#45413E] text-white/90 shadow-[0_10px_24px_rgba(0,0,0,0.6)]'>
         {children}
      </button>
   );
}
