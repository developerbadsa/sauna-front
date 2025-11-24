import React from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {motion} from 'framer-motion';
import {UploadCloud} from 'lucide-react';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';

const supportSchema = z.object({
  firstName: z.string().min(2, 'Please enter your first name.'),
  lastName: z.string().min(2, 'Please enter your last name.'),
  phone: z
    .string()
    .min(7, 'Please enter your phone number.')
    .regex(/^[0-9()+\-\s]+$/, 'Please enter a valid phone number.'),
  email: z.string().email('Please enter a valid email.'),
  orderReference: z
    .string()
    .min(2, 'Please add your order number or full name on the order.'),
  subject: z.string().min(4, 'Please enter a subject.'),
  description: z
    .string()
    .min(10, 'Description should be at least 10 characters.'),
  attachments: z.any().optional(),
  privacyConsent: z.literal(true, {
    errorMap: () => ({
      message:
        'You must agree that we can use your information to process this support request.',
    }),
  }),
});

type SupportFormValues = z.infer<typeof supportSchema>;
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function SupportForm() {
  const [status, setStatus] = React.useState<FormStatus>('idle');

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<SupportFormValues>({
    resolver: zodResolver(supportSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      orderReference: '',
      subject: '',
      description: '',
      attachments: undefined,
      privacyConsent: false,
    },
    mode: 'onBlur',
  });

  const descriptionMaxLength = 1000;
  const showSuccess = status === 'success';
  const showError = status === 'error';

  const onSubmit = async (_values: SupportFormValues) => {
    setStatus('submitting');

    try {
      // TODO: replace with real API call (FormData + POST)
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatus('success');
      reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className='sauna-container'>
      <motion.div
        initial={{opacity: 0, y: 16}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.4, ease: 'easeOut', delay: 0.05}}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          encType='multipart/form-data'
          aria-label='Sauna Support Request'
          className='flex flex-col gap-6 bg-[#FFFDF6] py-12'
        >
          {/* First + Last name */}
          <div className='space-y-2'>
            <p className='text-xs font-medium text-slate-800'>
              First and Last Name <span className='text-red-500'>*</span>
            </p>

            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='space-y-1'>
                <Input
                  id='firstName'
                  type='text'
                  placeholder='Name*'
                  autoComplete='given-name'
                  {...register('firstName')}
                  aria-invalid={!!errors.firstName}
                  aria-describedby={
                    errors.firstName ? 'firstName-error' : undefined
                  }
                  className={`w-full rounded-full border-[#e6d7c4] bg-white/95 px-6 py-5 text-sm placeholder:text-slate-400 focus-visible:ring-[#f7931d] ${
                    errors.firstName ? 'border-red-400' : ''
                  }`}
                />
                <div className='flex justify-between'>
                  <span className='text-[11px] text-slate-500'>First name</span>
                  {errors.firstName && (
                    <p
                      id='firstName-error'
                      className='text-[11px] text-red-500'
                    >
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='space-y-1'>
                <Input
                  id='lastName'
                  type='text'
                  placeholder='Name*'
                  autoComplete='family-name'
                  {...register('lastName')}
                  aria-invalid={!!errors.lastName}
                  aria-describedby={
                    errors.lastName ? 'lastName-error' : undefined
                  }
                  className={`w-full rounded-full border-[#e6d7c4] bg-white/95 px-6 py-5 text-sm placeholder:text-slate-400 focus-visible:ring-[#f7931d] ${
                    errors.lastName ? 'border-red-400' : ''
                  }`}
                />
                <div className='flex justify-between'>
                  <span className='text-[11px] text-slate-500'>Last name</span>
                  {errors.lastName && (
                    <p
                      id='lastName-error'
                      className='text-[11px] text-red-500'
                    >
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Phone number */}
          <div className='space-y-1'>
            <label
              htmlFor='phone'
              className='text-xs font-medium text-slate-800'
            >
              Phone number <span className='text-red-500'>*</span>
            </label>
            <Input
              id='phone'
              type='tel'
              placeholder='Name*'
              autoComplete='tel'
              {...register('phone')}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={`w-full rounded-full border-[#e6d7c4] bg-white/95 px-6 py-5 text-sm placeholder:text-slate-400 focus-visible:ring-[#f7931d] ${
                errors.phone ? 'border-red-400' : ''
              }`}
            />
            {errors.phone && (
              <p id='phone-error' className='text-[11px] text-red-500'>
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className='space-y-1'>
            <label
              htmlFor='email'
              className='text-xs font-medium text-slate-800'
            >
              E-mail <span className='text-red-500'>*</span>
            </label>
            <Input
              id='email'
              type='email'
              placeholder='Name*'
              autoComplete='email'
              {...register('email')}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full rounded-full border-[#e6d7c4] bg-white/95 px-6 py-5 text-sm placeholder:text-slate-400 focus-visible:ring-[#f7931d] ${
                errors.email ? 'border-red-400' : ''
              }`}
            />
            {errors.email && (
              <p id='email-error' className='text-[11px] text-red-500'>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Order number / Full name on order */}
          <div className='space-y-1'>
            <label
              htmlFor='orderReference'
              className='text-xs font-medium text-slate-800'
            >
              Order number (if you have it) | Full name on the order{' '}
              <span className='text-red-500'>*</span>
            </label>
            <Input
              id='orderReference'
              type='text'
              placeholder='Name*'
              {...register('orderReference')}
              aria-invalid={!!errors.orderReference}
              aria-describedby={
                errors.orderReference ? 'orderReference-error' : undefined
              }
              className={`w-full rounded-full border-[#e6d7c4] bg-white/95 px-6 py-5 text-sm placeholder:text-slate-400 focus-visible:ring-[#f7931d] ${
                errors.orderReference ? 'border-red-400' : ''
              }`}
            />
            {errors.orderReference && (
              <p
                id='orderReference-error'
                className='text-[11px] text-red-500'
              >
                {errors.orderReference.message}
              </p>
            )}
          </div>

          {/* Subject */}
          <div className='space-y-1'>
            <label
              htmlFor='subject'
              className='text-xs font-medium text-slate-800'
            >
              Subject of your request <span className='text-red-500'>*</span>
            </label>
            <Input
              id='subject'
              type='text'
              placeholder='Name*'
              {...register('subject')}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              className={`w-full rounded-full border-[#e6d7c4] bg-white/95 px-6 py-5 text-sm placeholder:text-slate-400 focus-visible:ring-[#f7931d] ${
                errors.subject ? 'border-red-400' : ''
              }`}
            />
            {errors.subject && (
              <p id='subject-error' className='text-[11px] text-red-500'>
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div className='space-y-2'>
            <label
              htmlFor='description'
              className='text-xs font-medium text-slate-800'
            >
              Describe your request <span className='text-red-500'>*</span>
            </label>
            <Textarea
              id='description'
              maxLength={descriptionMaxLength}
              placeholder='Describe your issue or question'
              {...register('description')}
              aria-invalid={!!errors.description}
              aria-describedby={
                errors.description ? 'description-error' : undefined
              }
              className='h-[130px] w-full resize-none rounded-4xl border-[#e6d7c4] bg-white/95 p-4 text-sm placeholder:text-slate-400 focus-visible:ring-[#f7931d]'
            />
            {errors.description && (
              <p id='description-error' className='text-[11px] text-red-500'>
                {errors.description.message}
              </p>
            )}

            <p className='text-[11px] leading-snug text-slate-500'>
              Please provide a detailed description of the issue or question.
              The more details you share, the faster we&apos;ll be able to
              assist you.
            </p>
          </div>

          {/* Attachments */}
          <div className='space-y-2'>
            <p className='text-xs font-medium text-slate-800'>
              Upload as many photos as possible that demonstrate the issue
            </p>

            <label
              htmlFor='attachments'
              className='flex cursor-pointer items-center justify-between rounded-4xl border-2 border-dashed border-[#e6d7c4] bg-white/95 px-5 py-5 text-xs text-slate-500'
            >
              <span>Choose file(s)</span>
              <UploadCloud className='h-4 w-4' />
            </label>

            <input
              id='attachments'
              type='file'
              multiple
              {...register('attachments')}
              className='hidden'
            />
          </div>

          {/* Privacy consent */}
          <div className='space-y-1'>
            <div className='flex items-start gap-2'>
              <input
                id='privacyConsent'
                type='checkbox'
                {...register('privacyConsent')}
                className='mt-[2px] h-4 w-4 rounded border-[#e6d7c4] text-[#f7931d] focus-visible:ring-[#f7931d]'
              />
              <label
                htmlFor='privacyConsent'
                className='text-[11px] leading-snug text-slate-600'
              >
                I agree that my information may be used for the purpose of
                processing this support request, in accordance with the privacy
                policy. <span className='text-red-500'>*</span>
              </label>
            </div>
            {errors.privacyConsent && (
              <p
                id='privacyConsent-error'
                className='pl-6 text-[11px] text-red-500'
              >
                {errors.privacyConsent.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className='flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:justify-between'>
            <div className='space-y-1 text-xs text-slate-500'>
              {showSuccess && (
                <p className='font-medium text-emerald-600'>
                  Thank you for your message. We&apos;ll review your request and
                  get back to you shortly.
                </p>
              )}
              {showError && (
                <p className='font-medium text-red-500'>
                  Something went wrong. Please try again.
                </p>
              )}
            </div>

            {/* <Button
              type='submit'
              disabled={isSubmitting}
              className='mt-2 inline-flex h-14 items-center justify-center rounded-full bg-[#f7931d] px-12 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-md hover:bg-[#e57d00] sm:mt-0'
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Submit support request
                  <ArrowRight className='ml-2 h-4 w-4' />
                </>
              )}
            </Button> */}
          </div>
        </form>
      </motion.div>
    </div>
  );
}
