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
      <section className='py-24 relative'>
         <div className='pointer-events-none absolute inset-0 flex'>
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
                           <div className='space-y-4'>
                              <span className='inline-flex items-center rounded-full bg-[#f48a1c] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-black'>
                                 Contact us
                              </span>

                              <div>
                                 <h3 className='text-[22px] font-semibold leading-[1.35] tracking-[0.22em] uppercase'>
                                    Start your
                                    <br />
                                    wellness journey
                                 </h3>
                              </div>

                              <div className='space-y-3 text-[11px] leading-relaxed text-[#f4e6da]'>
                                 <p>
                                    Rejuvenate your body and mind. Step into the
                                    sauna and let the warmth melt away stress,
                                    dissolve tightness and awaken your inner
                                    calm.
                                 </p>
                                 <p>
                                    Begin your wellness journey with the healing
                                    power of warmth. A sauna session not only
                                    relaxes your muscles but also refreshes your
                                    spirit, leaving you lighter, clearer and
                                    ready to embrace your healthiest self.
                                 </p>
                              </div>
                           </div>

                           <button
                              type='button'
                              className='mt-6 inline-flex items-center justify-between gap-3 rounded-full bg-[#f5f5f5] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#222]'>
                              <span>Send message</span>
                              <span className='flex h-6 w-6 items-center justify-center rounded-full bg-[#f48a1c] text-[16px] leading-none text-white'>
                                 ↗
                              </span>
                           </button>
                        </div>
                     </div>
                  </div>

                  {/* RIGHT – form */}
                  <div className=''>
                     <h3 className='mb-5 text-[20px] sd:text-[22px] font-semibold uppercase tracking-[0.22em] text-[#f5f1ea]'>
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
                              Expect a reply for general queries within 1–2
                              business days. Terms and conditions may apply.
                           </p>

                           <button
                              type='submit'
                              disabled={submitting}
                              className='inline-flex items-center justify-between gap-3 rounded-full bg-[#f48a1c] px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1c130b] disabled:opacity-60'>
                              <span>
                                 {submitting ? 'Sending…' : 'Send message'}
                              </span>
                              <span className='flex h-6 w-6 items-center justify-center rounded-full bg-[#1c130b] text-[16px] leading-none text-[#f48a1c]'>
                                 ↗
                              </span>
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
