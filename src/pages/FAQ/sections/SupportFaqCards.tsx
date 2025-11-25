import React from 'react';

type FaqItem = {
   id: string;
   question: string;
   answer: string;
};

type FaqGroup = {
   id: string;
   title: string;
   description: string;
   items: FaqItem[];
};

const FAQ_GROUPS: FaqGroup[] = [
   {
      id: 'general-report',
      title: 'GENERAL REPORT',
      description:
         'Lorem ipsum dolor sit amet consectetur. Vitae pulvinar at aliquam augue molestie duis feugiat. Vitae in egestas integer tortor. Vitae pellentesque scelerisque semper a dui sed eu. Enim bibendum odio donec in sed. Eget pretium sit risus tincidunt consequat adipiscing egestas amet nam.',
      items: [
         {
            id: 'order-history',
            question: 'Where can I find my order history?',
            answer:
               'Lorem ipsum dolor sit amet consectetur. Vitae pulvinar at aliquam augue molestie duis feugiat. Vitae in egestas integer tortor. Vitae pellentesque scelerisque semper.',
         },
         {
            id: 'short-long-term',
            question: 'Which is better short term or long term?',
            answer:
               'Lorem ipsum dolor sit amet consectetur. Integer at pulvinar urna. Viverra arcu interdum sed viverra eu sed.',
         },
         {
            id: 'delete-account',
            question: 'How do I delete my account?',
            answer:
               'You can request account deletion from your profile settings. After confirmation, all personal data will be removed within a reasonable processing time.',
         },
         {
            id: 'safe-investment',
            question: 'Which is safe investment?',
            answer:
               'Investment safety depends on your risk profile. Consider speaking with a qualified advisor to review diversified, lower-risk options.',
         },
      ],
   },
   {
      id: 'our-service',
      title: 'OUR SERVICE',
      description:
         'Lorem ipsum dolor sit amet consectetur. Vitae pulvinar at aliquam augue molestie duis feugiat. Vitae in egestas integer tortor. Vitae pellentesque scelerisque semper a dui sed eu. Enim bibendum odio donec in sed. Eget pretium sit risus tincidunt consequat adipiscing egestas amet nam.',
      items: [
         {
            id: 'service-feedback',
            question: 'How can I provide feedback on the services I received?',
            answer:
               'You can leave feedback directly from your dashboard after each completed service, or contact our support team with detailed comments.',
         },
         {
            id: 'additional-fees',
            question: 'Are there any additional fees for your services?',
            answer:
               'Most pricing is all-inclusive. Any extra charges (such as rush orders or special handling) are clearly shown before you confirm.',
         },
         {
            id: 'service-appointment',
            question: 'How can I request a service appointment?',
            answer:
               'Use the booking form in your account, choose a suitable date and time, and our team will confirm your appointment by email.',
         },
         {
            id: 'lorem-question',
            question: 'Lorem ipsum dolor sit amet?',
            answer:
               'Lorem ipsum dolor sit amet consectetur. Dictum consequat id facilisis ultrices lorem sed.',
         },
      ],
   },
   {
      id: 'support',
      title: 'SUPPORT',
      description:
         'Lorem ipsum dolor sit amet consectetur. Vitae pulvinar at aliquam augue molestie duis feugiat. Vitae in egestas integer tortor. Vitae pellentesque scelerisque semper a dui sed eu. Enim bibendum odio donec in sed. Eget pretium sit risus tincidunt consequat adipiscing egestas amet nam.',
      items: [
         {
            id: 'contact-support',
            question: 'How can I contact customer support?',
            answer:
               'You can reach us by email, in-app chat, or phone. Support hours and contact details are listed on the support page.',
         },
         {
            id: 'support-hours',
            question: 'What are your support hours?',
            answer:
               'Our standard support hours are Monday to Friday, 9:00–17:00 (local time). Premium plans may include extended coverage.',
         },
         {
            id: 'followup-case',
            question: 'How do I follow up on an existing support case?',
            answer:
               'Reply to the latest email from our team or open the case in your account to add a new comment or attachment.',
         },
         {
            id: 'cancel-appointment',
            question: 'How do I cancel or modify an appointment?',
            answer:
               'Appointments can be changed or cancelled from your bookings page. Please review our cancellation window to avoid fees.',
         },
      ],
   },
];

export default function SupportFaqCards() {
   const [openItem, setOpenItem] = React.useState<string | null>(
      'general-report-order-history'
   );

   const handleToggle = (groupId: string, itemId: string) => {
      const key = `${groupId}-${itemId}`;
      setOpenItem(prev => (prev === key ? null : key));
   };

   return (
      <section className='px-6 py-12 md:py-18'>
         <div className='space-y-8'>
            {FAQ_GROUPS.map(group => (
               <article
                  key={group.id}
                  className='flex flex-col gap-6 rounded-[40px] border border-[#e4dbcf] bg-[#fdfaf4] px-12 py-6 shadow-sm md:flex-row md:gap-10  md:py-8'>
                  {/* Left content */}
                  <div className='md:w-[34%]'>
                     <h2 className='text-[24px] font-bold uppercase tracking-[0.04em] text-[#545454]'>
                        {group.title}
                     </h2>
                     <p className='mt-3 max-w-xs text-[15px] leading-relaxed text-[#545454]'>
                        {group.description}
                     </p>
                  </div>

                  {/* Right FAQ panel */}
                  <div className='md:flex-1'>
                     <div className='  px-3 py-3 md:px-5 md:py-4'>
                        <div className='flex flex-col divide-y divide-[#e0d8cd] gap-[35px]'>
                           {group.items.map(item => {
                              const key = `${group.id}-${item.id}`;
                              const isOpen = openItem === key;

                              return (
                                 <button
                                    key={item.id}
                                    type='button'
                                    onClick={() =>
                                       handleToggle(group.id, item.id)
                                    }
                                    className='rounded-[30px] border group w-full text-left border-[#e0d8cd] bg-[#D9D9D9] px-5 py-1'>
                                    <div className='flex items-center justify-between gap-4 py-3 md:py-3.5'>
                                       <p className='text-[18px] font-bold text-[#403D39]'>
                                          {item.question}
                                       </p>
                                       <span className='flex h-7 w-7 items-center justify-center rounded-full'>
                                          <span
                                             className={`h-4 w-4 text-[#8d8479] transition-transform duration-200 ${
                                                isOpen ? 'rotate-180' : ''
                                             }`}>
                                             <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='14'
                                                height='8'
                                                viewBox='0 0 14 8'
                                                fill='none'>
                                                <path
                                                   d='M12.75 0.75005C12.75 0.75005 8.3311 6.75 6.75 6.75C5.1688 6.75 0.75 0.75 0.75 0.75'
                                                   stroke='#403D39'
                                                   stroke-width='1.5'
                                                   stroke-linecap='round'
                                                   stroke-linejoin='round'
                                                />
                                             </svg>
                                          </span>
                                       </span>
                                    </div>

                                    <div
                                       className={`overflow-hidden text-[12px] leading-relaxed text-[#545454] transition-all duration-200 my-2 px-2 ${
                                          isOpen ? 'max-h-40 pb-3' : 'max-h-0'
                                       }`}>
                                       <p className='pr-8'>{item.answer}</p>
                                    </div>
                                 </button>
                              );
                           })}
                        </div>
                     </div>
                  </div>
               </article>
            ))}
         </div>
      </section>
   );
}
