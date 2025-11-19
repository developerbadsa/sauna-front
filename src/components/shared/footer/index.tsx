import React from 'react';
import {ArrowRight, Facebook, Instagram, Youtube, Linkedin} from 'lucide-react';
import forestBg from './../../../assets/Mask group (9).png';

export type FooterLinkGroup = {
   title: string;
   links: {label: string; href: string}[];
};

export default function Footer() {
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

   return (
      <div>
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
   );
}
