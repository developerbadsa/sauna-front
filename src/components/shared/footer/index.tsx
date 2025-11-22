import React from 'react';
import {ArrowRight} from 'lucide-react';
import forestBg from '@/assets/footerbg.png';
import saunaLogo from '@/assets/suana.png';
import {ArrowBtn} from './../../../assets/icons/svg/arrowbtn';
import { FooterSocialSection } from './FooterSocialSection';

export type FooterLinkGroup = {
   title: string;
   links: {label: string; href: string}[];
};

export default function Footer() {
   function FooterLinks({group}: {group: FooterLinkGroup}) {
      return (
         <div className=' w-full'>
            <p className='text-[22px] font-semibold tracking-[0.24em] text-[#F4EDE6] uppercase'>
               {group.title}
            </p>
            <ul className='mt-3 space-y-[2px]'>
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


   const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
      {
         title: 'ABOUT',
         links: [
            {label: 'contact', href: '/contact'},
            {label: 'Frequently Asked Questions', href: '/faq'},
            {label: 'About Us', href: '/about'},
            {label: 'Shipping & Returns', href: '/cancellation-policy'},
            {label: 'Payment methods', href: '/payment-methods'},
            {label: 'imprint', href: '#'},
            {label: 'Terms and Conditions', href: '/terms-and-condition'},
            {label: 'Privacy Policy', href: '/terms-and-condition'},
         ],
      },
      {
         title: 'MY ACCOUNT',
         links: [
            {label: 'Register', href: '#'},
            {label: 'My order', href: '#'},
         ],
      },
   ];



   // const PAYMENT_METHODS = ['Visa', 'MasterCard', 'Amex', 'PayPal'];

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
               <div className='absolute inset-0 ' />

               <div className='absolute inset-0 flex flex-col items-center justify-center px-6 text-center'>
                  <h3 className='mt-3 max-w-[720px] text-[36px] font-bold uppercase tracking-[0.07em] text-white'>
                     WANT A SAUNA FOR YOUR HOME? CONTACT US FOR A FREE
                     CONSULTATION!
                  </h3>

                  <div className='mt-7 flex flex-wrap items-center justify-center gap-4'>
                     <button className='inline-flex items-center rounded-full bg-[#403D39]  px-3 pl-7 py-1 text-[15px] font-bold uppercase tracking-[0.2em] text-[#F4F1EA]  shadow-[0_12px_30px_rgba(0,0,0,0.55)] gap-9'>
                        <span>Contact us</span>
                        <ArrowBtn className=' text-white' />
                     </button>
                  </div>
               </div>
            </div>

            {/* dark footer panel */}
            <div className='relative mx-auto sauna-container h-[440px] -mt-10 rounded-b-[32px] sauna-bg px-6 sd:px-10 py-8 sd:py-9 shadow-[0_24px_60px_rgba(0,0,0,0.15)] border border-white/5 flex flex-col justify-between'>
               <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between'>
                  {/* brand + socials */}
                  <div className='max-w-[360px]'>
                     <div className='text-[22px] sd:text-[24px] font-extrabold tracking-[0.45em] uppercase text-white'>
                        <img src={saunaLogo} alt='' />
                     </div>
                     <p className='mt-3 text-[12px] leading-relaxed text-[#E4DFD8]'>
                        Engear blends style and function to create thoughtful
                        essentials for everyday life. make it more short
                     </p>
                  </div>

                  {/* links + newsletter */}
                  <div className='flex flex-1 flex flex-col gap-8 md:flex-row md:gap-10'>
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
               </div>

               <div className=' flex w-full justify-between -mt-12'>
                  {/* social medias */}
                   <FooterSocialSection/>

                  {/* payments */}
                  <div className='flex justify-end flex-col'>
                     <p className='text-[22px] font-semibold tracking-[0.24em] text-[#fff] uppercase'>
                        Accepted payment methods
                     </p>
                     <div className='mt-3 flex flex-wrap gap-2'>
                        {/* {PAYMENT_METHODS.map(method => (
                           <div
                              key={method}
                              className='rounded-full bg-[#45413E] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F4EDE6]'>
                              {method}
                           </div>
                        ))} */}
                        <img
                           src='https://i.ibb.co.com/LDHrhSzz/Group-364.png'
                           alt=''
                        />
                     </div>
                  </div>
               </div>
            </div>

            {/* copyright */}
            <p className='mt-7 text-center text-[12px] font-medium tracking-[0.28em] uppercase text-white pb-12'>
               © Copyright Reserved by Suana.Com
            </p>
         </div>
      </div>
   );
}
