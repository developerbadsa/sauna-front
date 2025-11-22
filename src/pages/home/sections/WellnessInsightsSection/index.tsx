import {useState} from 'react';
import SectionTitle from '@/components/shared/SectionTitle';
import cardImg1 from './../../../../assets/Mask group (11).png';
import cardImg2 from './../../../../assets/Mask group (12).png';
import cardImg3 from './../../../../assets/Mask group (13).png';

type Article = {
   id: string;
   date: string;
   title: string;
   excerpt: string;
   imageUrl: string;
};

const ARTICLES: Article[] = [
   {
      id: 'ancient-roots',
      date: 'FEB 20, 2025',
      title: 'The Ancient Roots of Sauna Culture',
      excerpt:
         'Rejuvenate your body and mind. Step into the sauna and let the warmth melt away stress, detoxify your skin, and awaken your inner calm.',
      imageUrl: cardImg1,
   },
   {
      id: 'boost-immunity',
      date: 'FEB 20, 2020',
      title: '5 Ways to Boost Immunity This Winter',
      excerpt:
         'Strengthen your immune system with regular sauna sessions, mindful breathing, and restorative rituals that keep you balanced all season long.',
      imageUrl: cardImg2,
   },
   {
      id: 'home-spa-oasis',
      date: 'SEP 15, 2018',
      title: 'Designing Your Home Spa Oasis',
      excerpt:
         'Transform your space into a sanctuary with calming lighting, natural textures, and a sauna that anchors your personal wellness retreat.',
      imageUrl: cardImg3,
   },
   {
      id: 'rituals',
      date: 'JAN 10, 2019',
      title: 'Evening Rituals for Deeper Sleep',
      excerpt:
         'Combine gentle heat, hydration, and cooling routines after your sauna session to calm the nervous system and support deep, restorative sleep.',
      imageUrl: cardImg2,
   },
   {
      id: 'social-sauna',
      date: 'JUN 05, 2021',
      title: 'The Social Side of Sauna Sessions',
      excerpt:
         'Learn how shared sauna moments can strengthen relationships, create space for conversation, and foster a sense of community.',
      imageUrl: cardImg1,
   },
];

export default function WellnessInsightsSection() {
   const [startIndex, setStartIndex] = useState(0);

   const canPrev = startIndex > 0;
   const canNext = startIndex < ARTICLES.length - 3;

   const visibleArticles = ARTICLES.slice(startIndex, startIndex + 3);

   const goPrev = () => {
      if (!canPrev) return;
      setStartIndex(prev => Math.max(0, prev - 1));
   };

   const goNext = () => {
      if (!canNext) return;
      setStartIndex(prev => Math.min(ARTICLES.length - 3, prev + 1));
   };

   return (
      <section className=' py-24 relative'>
         <div className='pointer-events-none absolute inset-0 flex top-18'>
            <div
               className='absolute left-[-14%] bottom-[73%] h-[180px] '
               //  style={{
               //     background:
               //        'radial-gradient(ellipse at 70% 0%, rgba(248,148,42,0.9) 0%, rgba(248,148,42,0.45) 25%, rgba(248,148,42,0.15) 40%, transparent 65%)',
               //     filter: 'blur(2px)',
               //  }}
            >
               <img
                  src='https://i.ibb.co.com/8gnk7fkh/Rectangle-301.png'
                  alt=''
               />
            </div>

            <div className='absolute  top-[4px] h-full w-full'>
               <img
                  className='absolute w-[]  w-[70%]'
                  src='https://i.ibb.co.com/GvBrLQpJ/Group-1000006190.png'
                  alt=''
               />
            </div>
         </div>
         <div className='sauna-container px-5 sd:px-10'>
            <SectionTitle title='WELLNESS INSIGHTS' />

            <div className='relative mt-12 mb-80  group'>
               {/* orange curve / glow behind cards */}
               <div className='pointer-events-none absolute inset-0'>
                  <div
                     className='absolute left-[-28%] top-[18%] h-[280px] w-[80%]'
                     style={{
                        background: `url('https://i.ibb.co.com/GvBrLQpJ/Group-1000006190.png')`,
                        filter: 'blur(8px)',
                     }}
                  />
               </div>

               {/* card track */}
               <div className='absolute z-10 flex gap-7 overflow-visible justify-between w-full'>
                  {visibleArticles.map(article => (
                     <article
                        key={article.id}
                        className='flex w-full max-w-[360px] flex-col rounded-[32px] border border-[#f48a1c] bg-[radial-gradient(circle_at_top,_#3a352f,_#26221e_55%,_#191614_100%)] px-5 pb-6 pt-5 text-[#f5f1ea] shadow-[0_24px_60px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:-translate-y-1'>
                        {/* image */}
                        <div className='mb-4 overflow-hidden rounded-[22px] bg-black/30 h-[260px] w-full'>
                           <img
                              src={article.imageUrl}
                              alt={article.title}
                              className=' object-cover w-full'
                           />
                        </div>

                        {/* date pill */}
                        <span className='mb-4 w-[130px] inline-flex items-center rounded bg-[#f48a1c] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-black'>
                           {article.date}
                        </span>

                        {/* title */}
                        <h3 className='mb-3 text-[16px] font-semibold uppercase leading-[1.5] tracking-[0.18em]'>
                           {article.title}
                        </h3>

                        {/* excerpt */}
                        <p className='mb-5 text-[12px] leading-relaxed text-[#f1e7dd]'>
                           {article.excerpt}
                        </p>

                        {/* footer */}
                        <div className='mt-auto flex items-center justify-between pt-2'>
                           <button
                              type='button'
                              className='inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f5f1ea]'>
                              <span className='flex h-5 w-5 items-center justify-center rounded-full border border-[#f48a1c] text-[10px]'>
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='23'
                                    height='23'
                                    viewBox='0 0 23 23'
                                    fill='none'>
                                    <g clip-path='url(#clip0_1_42705)'>
                                       <path
                                          d='M11.3322 22.6723C5.12141 22.6908 0.0145856 17.6117 3.43206e-05 11.401C-0.0151784 5.10889 5.02881 0.0238898 11.3083 7.86897e-05C17.5402 -0.023071 22.6431 5.06458 22.6544 11.313C22.6663 17.578 17.6077 22.6531 11.3322 22.6716V22.6723ZM17.3511 10.3798C17.3213 10.4188 17.2909 10.4585 17.2611 10.4975C17.1632 10.4975 17.0653 10.4975 16.9668 10.4975C12.7535 10.4975 8.5403 10.4975 4.32705 10.4975C4.22585 10.4975 4.12465 10.4955 4.02346 10.5001C3.65438 10.5167 3.3541 10.7634 3.28134 11.1073C3.20065 11.489 3.3627 11.864 3.71259 12.0088C3.87662 12.077 4.0724 12.0902 4.25363 12.0902C8.50921 12.0942 12.7641 12.0935 17.0197 12.0935H17.3101L17.3841 12.2026C17.3028 12.2476 17.2062 12.2774 17.1427 12.3402C15.6856 13.7914 14.2325 15.2458 12.7787 16.6996C12.2839 17.1944 11.7899 17.6884 11.2945 18.1832C11.0623 18.4147 11.0067 18.6984 11.094 18.9987C11.1833 19.3076 11.4128 19.4921 11.7257 19.5503C12.0571 19.6119 12.3044 19.4505 12.53 19.2243C14.5599 17.1904 16.5931 15.1598 18.623 13.1266C18.7473 13.0016 18.8677 12.8693 18.9709 12.7271C19.6866 11.7337 19.5589 10.4499 18.6461 9.53446C16.605 7.48802 14.5592 5.44622 12.5154 3.40243C12.4619 3.34885 12.4089 3.29329 12.3481 3.24898C12.0809 3.05253 11.7932 3.01351 11.4949 3.16828C11.2098 3.31644 11.0656 3.55389 11.0596 3.88129C11.0544 4.16967 11.2045 4.36876 11.3956 4.55859C13.2986 6.45753 15.1982 8.35911 17.1024 10.2561C17.1646 10.3176 17.2664 10.3394 17.3498 10.3791L17.3511 10.3798Z'
                                          fill='#EA7F15'
                                       />
                                       <path
                                          d='M17.3511 10.3792C17.2677 10.3389 17.1652 10.3177 17.1037 10.2562C15.1995 8.35923 13.2999 6.45699 11.397 4.55871C11.2065 4.36822 11.0563 4.1698 11.061 3.88142C11.0669 3.55401 11.2111 3.31656 11.4962 3.1684C11.7945 3.01363 12.0822 3.05266 12.3494 3.2491C12.4102 3.29341 12.4632 3.34963 12.5167 3.40255C14.5605 5.44568 16.6063 7.48748 18.6474 9.53458C19.5602 10.45 19.6879 11.7338 18.9722 12.7273C18.8697 12.8701 18.7493 13.0024 18.6243 13.1268C16.5937 15.16 14.5605 17.1905 12.5313 19.2244C12.3057 19.4506 12.0584 19.612 11.727 19.5505C11.4135 19.4923 11.1846 19.3077 11.0953 18.9988C11.0087 18.6986 11.0643 18.4148 11.2958 18.1833C11.7905 17.6892 12.2852 17.1945 12.78 16.6997C14.2338 15.2459 15.6869 13.7915 17.144 12.3403C17.2075 12.2775 17.3041 12.2477 17.3855 12.2027L17.3114 12.0936H17.021C12.7654 12.0936 8.51051 12.0943 4.25493 12.0903C4.07371 12.0903 3.87792 12.0771 3.71389 12.009C3.364 11.8641 3.20195 11.4891 3.28265 11.1074C3.3554 10.7635 3.65569 10.5168 4.02476 10.5003C4.12596 10.4956 4.22715 10.4976 4.32835 10.4976C8.5416 10.4976 12.7549 10.4976 16.9681 10.4976C17.066 10.4976 17.1639 10.4976 17.2624 10.4976C17.2922 10.4586 17.3226 10.4189 17.3524 10.3799L17.3511 10.3792Z'
                                          fill='white'
                                       />
                                    </g>
                                    <defs>
                                       <clipPath id='clip0_1_42705'>
                                          <rect
                                             width='22.6543'
                                             height='22.6722'
                                             fill='white'
                                          />
                                       </clipPath>
                                    </defs>
                                 </svg>
                              </span>
                              <span>Read article</span>
                           </button>
                        </div>
                     </article>
                  ))}
               </div>

               {/* LEFT arrow – overlaps first card bottom-left */}
               <button
                  type='button'
                  onClick={goPrev}
                  disabled={!canPrev}
                  className='absolute bottom-[18px] left-[-18px] flex h-10 w-10 items-center justify-center rounded-full border border-[#f48a1c] bg-[#f5f1ea] text-[#f48a1c] shadow-[0_10px_30px_rgba(0,0,0,0.7)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 disabled:opacity-0'>
                  <span className='translate-x-[1px] text-sm'>‹</span>
               </button>

               {/* RIGHT arrow – square button mid-right */}
               <button
                  type='button'
                  onClick={goNext}
                  disabled={!canNext}
                  className='absolute right-[-18px] top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md bg-[#e3e3e3] text-[#555] shadow-[0_10px_30px_rgba(0,0,0,0.7)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 disabled:opacity-0'>
                  <span className='translate-x-[1px] text-sm'>›</span>
               </button>
            </div>
         </div>
      </section>
   );
}
