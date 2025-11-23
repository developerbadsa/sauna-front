import {motion} from 'framer-motion';
import {Mail, Phone, MapPin} from 'lucide-react';
import {useState} from 'react';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {
   Card,
   CardContent,
   CardHeader,
   CardTitle,
   CardDescription,
} from '@/components/ui/card';

import ContactForm from './Section/ContactForm';

export default function Contact() {
   const [inlineEmail, setInlineEmail] = useState('');

   return (
      <div className='min-h-screen bg-[#FFF7EC] py-16'>
         <div className='mx-auto w-full max-w-6xl px-4 lg:px-0'>
            {/* Top grid */}
            <section className='grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1.1fr)] lg:gap-12'>
               {/*  MAIN FORM */}
               <ContactForm />

               {/* SIDE INFO PANEL */}
               <motion.aside
                  initial={{opacity: 0, y: 16}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.45, ease: 'easeOut', delay: 0.12}}>
                  <Card className=' border-[#f0e4d7]  h-[500px] bg-transparent'>
                     <CardHeader className='space-y-3'>
                        <CardTitle className='text-[24px] uppercase font-bold text-[#545454] '>
                           Get in touch
                        </CardTitle>
                        <CardDescription className='space-y-3 text-sm text-slate-600'>
                           <p className="text-[15px]">
                              Lorem ipsum dolor sit amet consectetur. Vitae
                              pulvinar at aliquam augue molestie duis feugiat.
                              Vitae in egestas integer tortor. Vitae
                              pellentesque scelerisque semper a dui sed eu. Enim
                              bibendum odio donec in sed. Eget pretium sit risus
                              tincidunt consequat adipiscing egestas amet nam.
                              Ornare at pulvinar sit cum turpis nibh
                              suspendisse. Est adipiscing proin dignissim at.
                              Scelerisque vulputate diam tempus sodales odio
                              purus vehicula vestibulum dolor. Eu ultrices odio
                              nunc pretium fringilla massa malesuada. A tempor
                              varius nulla tempor fusce. Convallis morbi integer
                              vitae.
                           </p>

                           <div className='flex flex-col gap-3 rounded-full justify-center items-center mt-9'>
                              <div className='flex = items-center gap-2 w-[220px] rounded-full bg-[#D9D9D9] px-6'>
                                 <Input
                                    type='email'
                                    placeholder='Email'
                                    value={inlineEmail}
                                    onChange={e =>
                                       setInlineEmail(e.target.value)
                                    }
                                    className='h-9 border-none bg-[#D9D9D9] px-3 text-sm placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0'
                                 />
                              </div>
                              <Button
                                 type='button'
                                 className='h-9 rounded-full bg-[#f7931d] px-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#e57d00] w-[220px]'>
                                 Email
                              </Button>
                           </div>
                        </CardDescription>
                     </CardHeader>
                  </Card>
               </motion.aside>
            </section>

            {/* CONTACT INFO CARDS */}
            <section
               className='mt-10 grid gap-5 md:grid-cols-3'
               aria-label='Contact details'>
               <Card className='rounded-3xl border-[#f0e4d7] bg-white/90 shadow-sm'>
                  <CardContent className='flex h-full flex-col items-start gap-3 p-6'>
                     <div className='flex h-10 w-10 items-center justify-center rounded-full border border-[#f7931d]/40 bg-[#fff7ec]'>
                        <Phone className='h-4 w-4 text-[#f7931d]' />
                     </div>
                     <div>
                        <h3 className='text-sm font-semibold text-slate-900'>
                           Phone
                        </h3>
                        <p className='mt-1 text-xs text-slate-600'>
                           +1 (403) 000-0000
                           <br />
                           Monday – Friday, 09:00–17:00 (MT)
                        </p>
                     </div>
                  </CardContent>
               </Card>

               <Card className='rounded-3xl border-[#f0e4d7] bg-white/90 shadow-sm'>
                  <CardContent className='flex h-full flex-col items-start gap-3 p-6'>
                     <div className='flex h-10 w-10 items-center justify-center rounded-full border border-[#f7931d]/40 bg-[#fff7ec]'>
                        <Mail className='h-4 w-4 text-[#f7931d]' />
                     </div>
                     <div>
                        <h3 className='text-sm font-semibold text-slate-900'>
                           Email
                        </h3>
                        <p className='mt-1 text-xs text-slate-600'>
                           support@saunacanada.ca
                           <br />
                           We aim to reply within one business day.
                        </p>
                     </div>
                  </CardContent>
               </Card>

               <Card className='rounded-3xl border-[#f0e4d7] bg-white/90 shadow-sm'>
                  <CardContent className='flex h-full flex-col items-start gap-3 p-6'>
                     <div className='flex h-10 w-10 items-center justify-center rounded-full border border-[#f7931d]/40 bg-[#fff7ec]'>
                        <MapPin className='h-4 w-4 text-[#f7931d]' />
                     </div>
                     <div>
                        <h3 className='text-sm font-semibold text-slate-900'>
                           Location
                        </h3>
                        <p className='mt-1 text-xs text-slate-600'>
                           Calgary, Alberta, Canada
                           <br />
                           Projects nationwide.
                        </p>
                     </div>
                  </CardContent>
               </Card>
            </section>

            {/* MAP */}
            <section className='mt-10' aria-label='Sauna Canada location map'>
               <motion.div
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.5, ease: 'easeOut', delay: 0.15}}
                  className='overflow-hidden rounded-[32px] border border-[#f0e4d7] bg-white/90 shadow-[0_24px_46px_rgba(15,23,42,0.16)]'>
                  <div className='relative w-full pb-[55%] md:pb-[42%]'>
                     <iframe
                        title='Sauna Canada - Calgary'
                        src='https://www.google.com/maps?q=Calgary%2C%20AB%2C%20Canada&output=embed'
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                        className='absolute inset-0 h-full w-full border-0'
                     />
                  </div>
               </motion.div>
            </section>
         </div>
      </div>
   );
}
