import {useState} from 'react';
import type {FormEvent} from 'react';

const CONTACT_IMAGE = '/images/contact-wellness.jpg'; // TODO: replace with your real asset

export default function ContactSection() {
   const [submitting, setSubmitting] = useState(false);

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitting(true);
      // TODO: hook into your form handler / API
      // for now just simulate
      setTimeout(() => setSubmitting(false), 800);
   };

   return (
      <section className='py-0 relative '>
         <div className='pointer-events-none absolute inset-0 flex -top-28'>
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

            <div
               className='absolute  top-[4px] h-full w-full '
               //  style={{
               //     background:
               //        'radial-gradient(ellipse at 70% 0%, rgba(248,148,42,0.55) 0%, rgba(248,148,42,0.18) 35%, transparent 60%)',
               //     filter: 'blur(10px)',
               //  }}
            >
               {/* <img
                  src='https://i.ibb.co.com/n8YZVz3m/Rectangle-300.png'
                  alt=''
               /> */}

               <img
                  className='absolute w-full'
                  src='https://i.ibb.co.com/GvBrLQpJ/Group-1000006190.png'
                  alt=''
               />
            </div>
         </div>

         <div className='sauna-container px-5 sd:px-10'>
            <div className='relative overflow-hidden py-10  sd:py-14'>
               {/* main content */}
               <div className='relative z-10 flex flex-col items-stretch gap-10 sd:flex-row sd:items-center sd:gap-14'>
                  {/* LEFT – card with image + text */}
                  <div className='w-full sd:w-[62%] flex justify-center'>
                     <div className='relative w-full  overflow-hidden rounded-[32px] flex'>
                        <div
                           className=' inset-0 bg-cover bg-center h-[540px] w-[330px] rounded-[32px]'
                           style={{
                              backgroundImage: `url("https://i.ibb.co.com/DTSHvrq/Group-1000006041.png")`,
                           }}
                        />
                        {/* red tint overlay */}
                        {/* <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(190,0,0,0.85),_rgba(0,0,0,0.92))]' /> */}

                        <div className='relative z-10 flex h-full flex-col justify-between px-7 pb-8 pt-7 text-[#f6f1ea] w-[400px]'>
                           <div className='space-y-6'>
                              <span className='inline-flex items-center rounded bg-[#f48a1c] px-4 py-1 text-[16px] font-semibold uppercase tracking-[0.24em] text-black'>
                                 Contact us
                              </span>

                              <div>
                                 <h3 className='text-[22px] font-semibold leading-[1.35] tracking-[0.22em] uppercase'>
                                    Start your
                                    <br />
                                    wellness journey
                                 </h3>
                              </div>

                              <div className='space-y-3 text-[16px] leading-relaxed text-[#f4e6da]'>
                                 <p>
                        Rejuvenate your body and mind. Step into the sauna and let the warmth melt away stress, detoxify your skin, and awaken your inner calm.
                                 </p>
                                 <p>
                                   Begin your wellness journey with the healing power of warmth. A sauna session not only relaxes your muscles but also refreshes your spirit, leaving you lighter, clearer, and ready to embrace your healthiest self.
                                 </p>
                              </div>
                           </div>

                           <button
                              type='button'
                              className='mt-6 inline-flex items-center justify-between gap-3 rounded-full bg-[#f5f5f5] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#222]'>
                              <span>Send message</span>
                              <span className='flex h-6 w-6 items-center justify-center rounded-full bg-[#f48a1c] text-[16px] leading-none text-white'>
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='53'
                                    height='53'
                                    viewBox='0 0 53 53'
                                    fill='none'>
                                    <g clip-path='url(#clip0_1_42615)'>
                                       <path
                                          d='M35.9947 42.5052C27.056 47.9164 15.2896 45.0208 9.88411 36.0787C4.40716 27.0199 7.27115 15.3153 16.3044 9.83681C25.2696 4.40059 37.0378 7.31204 42.4712 16.3114C47.9199 25.334 45.0263 37.0369 35.9941 42.5043L35.9947 42.5052ZM34.0157 19.5635C34.0067 19.6456 33.9972 19.7292 33.9881 19.8113C33.847 19.8961 33.7058 19.981 33.5637 20.0665C27.489 23.7192 21.4143 27.3719 15.3396 31.0247C15.1937 31.1124 15.046 31.1973 14.9041 31.2917C14.3863 31.6355 14.1673 32.2515 14.3605 32.8105C14.5751 33.4307 15.1338 33.831 15.7639 33.7365C16.0595 33.6925 16.3532 33.5418 16.6145 33.3847C22.7537 29.701 28.888 26.0112 35.0237 22.3217L35.4424 22.07L35.6438 22.1631C35.5655 22.2985 35.4521 22.4251 35.415 22.5708C34.5722 25.9263 33.738 29.2832 32.9023 32.6397C32.6179 33.782 32.3339 34.9227 32.0485 36.0655C31.9145 36.6006 32.0804 37.0579 32.4666 37.4151C32.8631 37.7831 33.354 37.8502 33.8556 37.6628C34.3867 37.4642 34.6034 37.0171 34.7325 36.4954C35.8959 31.8031 37.067 27.1127 38.231 22.4213C38.302 22.1333 38.3608 21.8382 38.3863 21.5437C38.5569 19.4909 37.2598 17.7505 35.1501 17.222C30.433 16.041 25.7132 14.8707 20.9945 13.6959C20.8708 13.6651 20.7464 13.6308 20.6202 13.6197C20.0647 13.5681 19.616 13.7613 19.3201 14.2431C19.0375 14.7038 19.0355 15.1712 19.3107 15.6484C19.5531 16.0688 19.9422 16.2257 20.3824 16.3336C24.7723 17.4218 29.1598 18.5167 33.5499 19.6008C33.6929 19.6356 33.8587 19.5788 34.0133 19.5637L34.0157 19.5635Z'
                                          fill='#EA7F15'
                                       />
                                       <path
                                          d='M34.0152 19.563C33.86 19.5771 33.6939 19.6355 33.5519 19.6001C29.1617 18.516 24.7737 17.4202 20.3843 16.3329C19.9445 16.2234 19.556 16.0675 19.3127 15.6477C19.0374 15.1705 19.0394 14.7031 19.322 14.2424C19.6179 13.7606 20.0666 13.5674 20.6222 13.619C20.7483 13.6301 20.8733 13.6653 20.9965 13.6952C25.7146 14.8691 30.4344 16.0394 35.1521 17.2213C37.2617 17.7498 38.5588 19.4902 38.3882 21.543C38.3643 21.8379 38.3054 22.133 38.233 22.4206C37.068 27.1126 35.8969 31.803 34.7344 36.4947C34.6053 37.0164 34.3886 37.4635 33.8575 37.6621C33.355 37.85 32.865 37.7824 32.4685 37.4144C32.0833 37.0566 31.9174 36.5993 32.0504 36.0648C32.3354 34.9235 32.6198 33.7813 32.9042 32.639C33.7399 29.2825 34.5741 25.9256 35.4169 22.5701C35.454 22.4244 35.5674 22.2978 35.6457 22.1624L35.4443 22.0693L35.0256 22.321C28.8899 26.0105 22.7556 29.7003 16.6165 33.384C16.3552 33.5411 16.0614 33.6918 15.7658 33.7358C15.1358 33.8302 14.577 33.43 14.3625 32.8098C14.1692 32.2508 14.3883 31.6348 14.9061 31.291C15.048 31.1966 15.1956 31.1117 15.3415 31.024C21.4162 27.3712 27.4909 23.7185 33.5657 20.0657C33.7068 19.9809 33.8479 19.896 33.99 19.8106C33.9991 19.7285 34.0086 19.6449 34.0177 19.5628L34.0152 19.563Z'
                                          fill='white'
                                       />
                                    </g>
                                    <defs>
                                       <clipPath id='clip0_1_42615'>
                                          <rect
                                             width='38.1135'
                                             height='38.1436'
                                             fill='white'
                                             transform='translate(0 19.6406) rotate(-31.0185)'
                                          />
                                       </clipPath>
                                    </defs>
                                 </svg>
                              </span>
                           </button>
                        </div>
                     </div>
                  </div>

                  {/* RIGHT – form */}
                  <div className=''>
                     <h3 className='mb-5 text-[24px] sd:text-[22px] font-semibold uppercase tracking-[0.22em] text-[#f5f1ea]'>
                        We are here to help!
                     </h3>

                     <form
                        onSubmit={handleSubmit}
                        className='space-y-4 text-[12px] text-[#f5f1ea]'>
                        <div className='space-y-1'>
                           <label className='block text-[11px] font-semibold uppercase tracking-[0.18em]'>
                              Your Name*
                           </label>
                           <input
                              type='text'
                              required
                              className='h-8 w-full rounded-[2px] border border-[#ffffffcc] bg-[#f7f7f7] px-2 text-[11px] text-[#222] outline-none focus:border-[#f48a1c]'
                           />
                        </div>

                        <div className='space-y-1'>
                           <label className='block text-[11px] font-semibold uppercase tracking-[0.18em]'>
                              Your Email*
                           </label>
                           <input
                              type='email'
                              required
                              className='h-8 w-full rounded-[2px] border border-[#ffffffcc] bg-[#f7f7f7] px-2 text-[11px] text-[#222] outline-none focus:border-[#f48a1c]'
                           />
                        </div>

                        <div className='space-y-1'>
                           <label className='block text-[11px] font-semibold uppercase tracking-[0.18em]'>
                              Your Phone Number
                           </label>
                           <input
                              type='tel'
                              className='h-8 w-full rounded-[2px] border border-[#ffffffcc] bg-[#f7f7f7] px-2 text-[11px] text-[#222] outline-none focus:border-[#f48a1c]'
                           />
                        </div>

                        <div className='space-y-1'>
                           <label className='block text-[11px] font-semibold uppercase tracking-[0.18em]'>
                              Your Message
                           </label>
                           <textarea
                              rows={4}
                              className='w-full rounded-[2px] border border-[#ffffffcc] bg-[#f7f7f7] px-2 py-1 text-[11px] text-[#222] outline-none focus:border-[#f48a1c] resize-none'
                           />
                        </div>

                        <div className='flex flex-col gap-3 pt-2 sd:flex-row sd:items-center sd:justify-between'>
                           <p className='max-w-[320px] text-[10px] leading-relaxed text-[#e0dad1]'>
                             Support is for general guidance only. Terms and services may change without notice.
                           </p>

                           <input type="checkbox" className="bg-transparent" />

                           {/* <button
                              type='submit'
                              disabled={submitting}
                              className='inline-flex items-center justify-between gap-3 rounded-full bg-[#f48a1c] px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1c130b] disabled:opacity-60'>
                              <span>
                                 {submitting ? 'Sending…' : 'Send message'}
                              </span>
                              <span className='flex h-6 w-6 items-center justify-center rounded-full bg-[#1c130b] text-[16px] leading-none text-[#f48a1c]'>
                                 ↗
                              </span>
                           </button> */}
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
