import {PhoneIcon} from '@/components/ui/icons/akar-icons-phone';
import {EnvelopeIcon} from '@/components/ui/icons/akar-icons-envelope.tsx';
import {ClockIcon} from '@/components/ui/icons/akar-icons-clock.tsx';
import Footer from '@/components/shared/footer';
import {SaunaHero} from '@/components/hero/SaunaHero';
import SectionBar from '@/components/SectionBar/index';
import SectionTitle from '@/components/shared/SectionTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import Information from './Sections/Information';
import {WellnessTabs} from './Sections/WellnessTabs';

export default function AboutUs() {
   const contactItems = [
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

   const taglineLines = [
      'All indoor & outdoor models Compare sizes, woods & heaters',
   ];

   return (
      <div className='min-h-screen sauna-bg pb-16'>
         <SaunaHero
            // mainheight={1000}
            HeadingFullContainer={true}
            title='CONTACT US'
            taglineLines={[
               'All indoor & outdoor models Compare sizes, woods & heaters',
            ]}
            // optional: tweak image position per page if needed
            heroImage={{
               src: 'https://i.ibb.co.com/hxDQDNP8/04-snodciagsdaw-1.png',
               alt: 'All sauna models',
               wrapperClassName: 'w-[65%] scale-[1.4] right-20 top-46 absolute',
            }}
            iconElemets={
               <div className='px-4 pb-2 pt-3 flex flex-col justify-start items-start gap-4 '>
                  {contactItems.map(item => (
                     <div
                        key={item.name}
                        className='flex items-center gap-2 mb-1 nav-info-item last:mb-0 cursor-pointer justify-end'>
                        <div className='rounded-full bg-[#403D39] w-9 h-9 flex justify-center items-center text-[#fff] hover:bg-[#EA7F15] nav-info-item-icon'>
                           {item.icon}
                        </div>
                        <div className='flex flex-col gap-0 ml-1'>
                           <p className='text-[12px] text-[#403D39] font-bold'>
                              {item.name}
                           </p>
                           <p className='text-[12px] font-semibold text-[#2f241c]'>
                              {item.value}
                           </p>
                        </div>
                     </div>
                  ))}

                  <div className='relative z-20 max-w-[250px] text-[11px] leading-relaxed uppercase tracking-[0.16em] text-[#736355] py-10  '>
                     {taglineLines.map(line => (
                        <p key={line}>{line}</p>
                     ))}

                     <button className='mt-3 inline-flex items-center gap-3 rounded-full bg-[#151515] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.45)]'>
                        <span>Explore</span>
                        <span className='flex h-6 w-6 items-center justify-center rounded-full bg-[#f7901e]'>
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='35'
                              height='35'
                              viewBox='0 0 35 35'
                              fill='none'>
                              <g clip-path='url(#clip0_203_84770)'>
                                 <path
                                    d='M23.7277 28.0192C17.8354 31.5862 10.079 29.6775 6.5157 23.7828C2.90531 17.8113 4.79324 10.0956 10.7479 6.48424C16.6578 2.90071 24.4153 4.81992 27.997 10.7523C31.5888 16.7 29.6813 24.4145 23.7274 28.0186L23.7277 28.0192ZM22.4232 12.8961C22.4172 12.9502 22.411 13.0053 22.405 13.0594C22.312 13.1153 22.2189 13.1713 22.1252 13.2276C18.1208 15.6355 14.1164 18.0433 10.1119 20.4512C10.0157 20.5091 9.91842 20.565 9.82488 20.6272C9.48355 20.8539 9.33914 21.26 9.46656 21.6284C9.60797 22.0373 9.97631 22.3011 10.3916 22.2388C10.5865 22.2098 10.7801 22.1105 10.9524 22.0069C14.9993 19.5786 19.043 17.1463 23.0877 14.7143L23.3636 14.5483L23.4964 14.6097C23.4448 14.699 23.37 14.7824 23.3456 14.8784C22.79 17.0904 22.2401 19.3033 21.6892 21.5159C21.5017 22.2688 21.3145 23.0208 21.1264 23.7741C21.0381 24.1269 21.1474 24.4283 21.402 24.6638C21.6634 24.9063 21.987 24.9506 22.3176 24.8271C22.6677 24.6962 22.8106 24.4014 22.8957 24.0575C23.6626 20.9644 24.4346 17.8725 25.2019 14.7799C25.2487 14.59 25.2875 14.3955 25.3043 14.2014C25.4167 12.8482 24.5617 11.7009 23.171 11.3525C20.0615 10.574 16.9502 9.80259 13.8397 9.02812C13.7581 9.00782 13.6761 8.98525 13.5929 8.97791C13.2267 8.94391 12.9309 9.07126 12.7359 9.38884C12.5496 9.69257 12.5482 10.0007 12.7297 10.3152C12.8895 10.5923 13.146 10.6958 13.4361 10.7669C16.33 11.4843 19.2222 12.206 22.1161 12.9207C22.2104 12.9436 22.3197 12.9061 22.4216 12.8962L22.4232 12.8961Z'
                                    fill='#EA7F15'
                                 />
                                 <path
                                    d='M22.4229 12.8955C22.3206 12.9048 22.2111 12.9432 22.1174 12.9199C19.2235 12.2053 16.3309 11.4829 13.4374 10.7662C13.1475 10.694 12.8914 10.5913 12.731 10.3145C12.5495 9.99994 12.5509 9.69185 12.7371 9.38812C12.9322 9.07054 13.228 8.9432 13.5942 8.97719C13.6774 8.98453 13.7598 9.00773 13.841 9.0274C16.9511 9.80125 20.0624 10.5727 23.1723 11.3518C24.563 11.7002 25.418 12.8475 25.3056 14.2007C25.2898 14.3951 25.251 14.5896 25.2032 14.7792C24.4353 17.8721 23.6633 20.964 22.897 24.0568C22.8119 24.4007 22.669 24.6955 22.3189 24.8264C21.9877 24.9502 21.6647 24.9056 21.4033 24.6631C21.1493 24.4272 21.04 24.1258 21.1277 23.7734C21.3156 23.0211 21.503 22.2681 21.6905 21.5152C22.2414 19.3026 22.7913 17.0897 23.3469 14.8777C23.3713 14.7817 23.4461 14.6982 23.4977 14.609L23.3649 14.5476L23.0889 14.7135C19.0443 17.1456 15.0006 19.5779 10.9537 22.0062C10.7814 22.1098 10.5878 22.2091 10.3929 22.2381C9.9776 22.3004 9.60926 22.0366 9.46785 21.6277C9.34044 21.2593 9.48484 20.8532 9.82618 20.6265C9.91971 20.5643 10.017 20.5083 10.1132 20.4505C14.1177 18.0426 18.1221 15.6348 22.1265 13.2269C22.2196 13.1709 22.3126 13.115 22.4063 13.0587C22.4123 13.0046 22.4185 12.9495 22.4245 12.8954L22.4229 12.8955Z'
                                    fill='white'
                                 />
                              </g>
                              <defs>
                                 <clipPath id='clip0_203_84770'>
                                    <rect
                                       width='25.1243'
                                       height='25.1441'
                                       fill='white'
                                       transform='translate(0 12.947) rotate(-31.0185)'
                                    />
                                 </clipPath>
                              </defs>
                           </svg>
                        </span>
                     </button>
                  </div>
               </div>
            }
            boxoutlined={true}
            bottomzero={true}
         />
         <SectionBar>
            <SectionTitle title='ABOUT US' />
         </SectionBar>

         <SectionWrapper>
            <div className='relative sauna-container px-12  bg-[#FFFDF6]  z-2'>
               {/* Top grid */}
               <div className=''>
                 <Information/>
                 <WellnessTabs/>
               </div>
            </div>
         </SectionWrapper>

         <Footer />
      </div>
   );
}
