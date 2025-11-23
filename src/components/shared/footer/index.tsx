
import forestBg from '@/assets/footerbg.png';
import saunaLogo from '@/assets/suana.png';
import {ArrowBtn} from './../../../assets/icons/svg/arrowbtn';
import {FooterSocialSection} from './FooterSocialSection';

export type FooterLinkGroup = {
   title: string;
   links: {label: string; href: string}[];
};

export default function Footer() {
   function FooterLinks({group}: {group: FooterLinkGroup}) {
      return (
         <div className=' w-full'>
            <p className='text-[22px] font-semibold tracking-[0.04em] text-[#fff] uppercase'>
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

                     <div className='w-full md:max-w-[270px]'>
                        <p className='text-[22px] font-semibold tracking-[0.14em] text-[#fff] uppercase'>
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
                              className='flex  items-center justify-center rounded-full bg-[#F28A1F] shadow-[0_8px_18px_rgba(0,0,0,0.6)]'>
                              <svg
                                 xmlns='http://www.w3.org/2000/svg'
                                 width='23'
                                 height='23'
                                 viewBox='0 0 23 23'
                                 fill='none'>
                                 <g clip-path='url(#clip0_360_34675)'>
                                    <path
                                       d='M11.3544 22.7059C5.13148 22.7244 0.0146142 17.6377 3.4388e-05 11.4177C-0.0152082 5.11609 5.0387 0.0234375 11.3306 -0.000409473C17.5747 -0.023594 22.6876 5.07171 22.6989 11.3296C22.7108 17.604 17.6423 22.6867 11.3544 22.7052V22.7059ZM17.3852 10.3949C17.3554 10.434 17.3249 10.4737 17.2951 10.5128C17.197 10.5128 17.0989 10.5128 17.0001 10.5128C12.7786 10.5128 8.55708 10.5128 4.33555 10.5128C4.23416 10.5128 4.13276 10.5108 4.03136 10.5154C3.66157 10.532 3.36069 10.7791 3.28779 11.1235C3.20694 11.5058 3.36931 11.8813 3.71988 12.0264C3.88424 12.0946 4.0804 12.1079 4.26199 12.1079C8.52593 12.1119 12.7892 12.1112 17.0532 12.1112H17.3441L17.4183 12.2205C17.3368 12.2655 17.24 12.2954 17.1764 12.3583C15.7165 13.8116 14.2605 15.2683 12.8038 16.7243C12.3081 17.2198 11.813 17.7146 11.3166 18.2101C11.084 18.4419 11.0284 18.7261 11.1158 19.0268C11.2053 19.3362 11.4353 19.521 11.7487 19.5793C12.0808 19.6409 12.3286 19.4793 12.5546 19.2527C14.5885 17.2158 16.6257 15.1822 18.6596 13.1459C18.7842 13.0207 18.9048 12.8882 19.0082 12.7458C19.7252 11.7509 19.5973 10.4651 18.6828 9.54832C16.6376 7.4988 14.5878 5.45392 12.54 3.40706C12.4864 3.3534 12.4333 3.29776 12.3724 3.25338C12.1046 3.05664 11.8163 3.01756 11.5175 3.17256C11.2318 3.32094 11.0873 3.55875 11.0814 3.88665C11.0761 4.17546 11.2265 4.37485 11.418 4.56496C13.3247 6.46676 15.228 8.3712 17.136 10.271C17.1983 10.3326 17.3004 10.3545 17.3839 10.3942L17.3852 10.3949Z'
                                       fill='#EA7F15'
                                    />
                                    <path
                                       d='M17.385 10.3946C17.3015 10.3542 17.1988 10.333 17.1372 10.2714C15.2292 8.37158 13.3259 6.46647 11.4192 4.56534C11.2284 4.37456 11.0779 4.17584 11.0826 3.88703C11.0885 3.55913 11.233 3.32132 11.5186 3.17294C11.8175 3.01794 12.1058 3.05702 12.3735 3.25376C12.4345 3.29814 12.4875 3.35444 12.5412 3.40744C14.589 5.45364 16.6388 7.49852 18.684 9.5487C19.5985 10.4655 19.7264 11.7512 19.0094 12.7462C18.9066 12.8893 18.786 13.0217 18.6608 13.1463C16.6262 15.1825 14.589 17.2162 12.5558 19.2531C12.3298 19.4796 12.0819 19.6413 11.7499 19.5797C11.4358 19.5214 11.2065 19.3366 11.117 19.0272C11.0302 18.7265 11.0859 18.4423 11.3178 18.2104C11.8135 17.7156 12.3093 17.2201 12.805 16.7246C14.2616 15.2687 15.7176 13.812 17.1776 12.3587C17.2412 12.2957 17.338 12.2659 17.4195 12.2209L17.3453 12.1116H17.0543C12.7904 12.1116 8.52712 12.1122 4.26317 12.1083C4.08159 12.1083 3.88542 12.095 3.72107 12.0268C3.37049 11.8817 3.20812 11.5061 3.28897 11.1239C3.36187 10.7795 3.66275 10.5324 4.03254 10.5158C4.13394 10.5112 4.23534 10.5132 4.33673 10.5132C8.55826 10.5132 12.7798 10.5132 17.0013 10.5132C17.0994 10.5132 17.1975 10.5132 17.2962 10.5132C17.3261 10.4741 17.3565 10.4343 17.3864 10.3953L17.385 10.3946Z'
                                       fill='white'
                                    />
                                 </g>
                                 <defs>
                                    <clipPath id='clip0_360_34675'>
                                       <rect
                                          width='22.6988'
                                          height='22.7063'
                                          fill='white'
                                       />
                                    </clipPath>
                                 </defs>
                              </svg>
                           </button>
                        </form>
                     </div>
                  </div>
               </div>

               <div className=' flex w-full justify-between -mt-12'>
                  {/* social medias */}
                  <FooterSocialSection />

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
