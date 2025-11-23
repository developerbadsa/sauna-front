import React from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {motion} from 'framer-motion';
import {ArrowRight} from 'lucide-react';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';

const contactSchema = z.object({
   name: z.string().min(2, 'Please enter your name.'),
   email: z.string().email('Please enter a valid email.'),
   phone: z
      .string()
      .min(7, 'Please enter your phone number.')
      .regex(/^[0-9()+\-\s]+$/, 'Please enter a valid phone number.'),
   message: z.string().min(10, 'Message should be at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
   const [status, setStatus] = React.useState<FormStatus>('idle');

   const {
      register,
      handleSubmit,
      formState: {errors, isSubmitting},
      reset,
   } = useForm<ContactFormValues>({
      resolver: zodResolver(contactSchema),
      defaultValues: {
         name: '',
         email: '',
         phone: '',
         message: '',
      },
      mode: 'onBlur',
   });

   const messageMaxLength = 800;

   const onSubmit = async () => {
      setStatus('submitting');
      try {
         // TODO: replace with your real API call
         // await fetch("/api/contact", {
         //   method: "POST",
         //   headers: { "Content-Type": "application/json" },
         //   body: JSON.stringify(values),
         // });

         await new Promise(resolve => setTimeout(resolve, 1000));

         setStatus('success');
         reset();
      } catch (error) {
         console.error(error);
         setStatus('error');
      }
   };

   const showSuccess = status === 'success';
   const showError = status === 'error';

   return (
      <motion.div
         initial={{opacity: 0, y: 16}}
         animate={{opacity: 1, y: 0}}
         transition={{duration: 0.45, ease: 'easeOut', delay: 0.05}}>
         <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-label='Contact Sauna Canada'
            className='flex flex-col gap-4 bg-[#FFFDF6]'>
            {/* Name + Email */}
            <div className='grid gap-4 sm:grid-cols-2  m-0 p-0]'>
               <div className='  flex items-center'>
                  <label
                     htmlFor='name'
                     className='text-xs font-medium text-slate-800'>
                     <span className='text-red-500'>*</span>
                  </label>
                  <Input
                     id='name'
                     type='text'
                     placeholder='Name'
                     autoComplete='name'
                     {...register('name')}
                     aria-invalid={!!errors.name}
                     aria-describedby={errors.name ? 'name-error' : undefined}
                     className={`px-6 py-7 rounded-full border-[#e6d7c4] bg-white/95 text-sm placeholder:text-slate-400 focus-visible:ring-[#f7931d] ${
                        errors.name ? 'border-red-400' : ''
                     }`}
                  />
                  {errors.name && (
                     <p id='name-error' className='text-xs text-red-500'>
                        {errors.name.message}
                     </p>
                  )}
               </div>

               <div className='flex items-center'>
                  <label
                     htmlFor='email'
                     className='text-xs font-medium text-slate-800'>
                     <span className='text-red-500'>*</span>
                  </label>
                  <Input
                     id='email'
                     type='email'
                     placeholder='Email'
                     autoComplete='email'
                     {...register('email')}
                     aria-invalid={!!errors.email}
                     aria-describedby={errors.email ? 'email-error' : undefined}
                     className={`px-6 py-7 rounded-full border-[#e6d7c4] bg-white/95 text-sm placeholder:text-slate-400 focus-visible:ring-[#f7931d] ${
                        errors.email ? 'border-red-400' : ''
                     }`}
                  />
                  {errors.email && (
                     <p id='email-error' className='text-xs text-red-500'>
                        {errors.email.message}
                     </p>
                  )}
               </div>
            </div>

            {/* Phone */}
            <div className='flex items-center'>
               <label
                  htmlFor='phone'
                  className='text-xs font-medium text-slate-800'>
                  <span className='text-red-500'>*</span>
               </label>
               <Input
                  id='phone'
                  type='tel'
                  placeholder='Phone number'
                  autoComplete='tel'
                  {...register('phone')}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  className={`px-6 py-7 rounded-full border-[#e6d7c4] bg-white/95 text-sm placeholder:text-slate-400 focus-visible:ring-[#f7931d] ${
                     errors.phone ? 'border-red-400' : ''
                  }`}
               />
               {errors.phone && (
                  <p id='phone-error' className='text-xs text-red-500'>
                     {errors.phone.message}
                  </p>
               )}
            </div>

            {/* Message */}
            <div className='space-y-1.5'>
               <div className='relative'>
                  <Textarea
                     id='message'
                     maxLength={messageMaxLength}
                     placeholder='Message'
                     {...register('message')}
                     aria-invalid={!!errors.message}
                     aria-describedby={
                        errors.message ? 'message-error' : undefined
                     }
                     className='h-[250px] resize-none rounded-3xl border-[#e6d7c4] bg-white/95 p-4 pr-12 text-sm placeholder:text-slate-400 focus-visible:ring-[#f7931d]'
                  />

                  <Button
                     type='submit'
                     disabled={isSubmitting}
                     className='absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#f7931d] text-white shadow-md hover:bg-[#e57d00]'
                     size='icon'>
                     <ArrowRight className='h-4 w-4' />
                  </Button>
               </div>

               <div className='flex items-center justify-between pt-1'>
                  {errors.message && (
                     <p id='message-error' className='text-xs text-red-500'>
                        {errors.message.message}
                     </p>
                  )}
                  {/* <p className='ml-auto text-[11px] text-slate-500'>
                     {messageLength}/{messageMaxLength} characters
                  </p> */}
               </div>
            </div>

            {/* Bottom actions */}
            <div className='flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between'>
               <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='h-16 rounded-full bg-[#f7931d] px-20 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-md hover:bg-[#e57d00] mt-4'>
                  {isSubmitting ? 'Sending...' : 'Submit Buttom'}
               </Button>

               <div className='space-y-1 text-xs text-slate-500 sm:text-right'>
                  {showSuccess && (
                     <p className='font-medium text-emerald-600'>
                        Thank you for reaching out. We&apos;ll be in touch
                        shortly.
                     </p>
                  )}
                  {showError && (
                     <p className='font-medium text-red-500'>
                        Something went wrong. Please try again.
                     </p>
                  )}
               </div>
            </div>
         </form>
      </motion.div>
   );
}
