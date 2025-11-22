import {useState, useRef, useEffect} from 'react';
import type {KeyboardEvent as ReactKeyboardEvent} from 'react';
import type {Variants} from 'framer-motion';
import {motion, AnimatePresence} from 'framer-motion';
import SectionTitle from '@/components/shared/SectionTitle';

type Step = {
   id: string;
   number: number;
   label: string;
   title: string;
   subtitle: string;
   body: string[];
};

const STEPS: Step[] = [
   {
      id: 'initial',
      number: 1,
      label: 'INITIAL INQUIRY',
      title: 'Work With Sauna',
      subtitle: 'Your custom sauna journey',
      body: [
         'Everything starts with a focused conversation about your ideas, space and budget. We clarify how you plan to use the sauna and what overall experience you want to create.',
         'During this stage we review inspiration images, discuss indoor vs. outdoor options, and outline timelines so you know exactly what comes next.',
      ],
   },
   {
      id: 'site-visit',
      number: 2,
      label: 'SITE VISIT & ASSESSMENT',
      title: 'Work With Sauna',
      subtitle: 'Site visit & assessment',
      body: [
         'A dedicated specialist visits your property to measure the space, review access and evaluate electrical, ventilation and foundation requirements.',
         'We identify the optimal sauna model, heater type and layout for your location, then capture all technical details needed for a smooth installation.',
         'The result is a clear, realistic proposal that balances performance, aesthetics and long-term reliability.',
      ],
   },
   {
      id: 'design',
      number: 3,
      label: 'DESIGN & QUOTATION',
      title: 'Work With Sauna',
      subtitle: 'Design & quotation',
      body: [
         'Based on the site assessment, we prepare a detailed design including materials, finishes, glazing options and accessories.',
         'You receive a transparent quotation outlining all components, installation steps and timelines, so you can move forward with confidence.',
      ],
   },
   {
      id: 'customization-options',
      number: 4,
      label: 'CUSTOMIZATION & OPTIONS',
      title: 'Work With Sauna',
      subtitle: 'Tailoring the details',
      body: [
         'Together we refine bench layouts, lighting concepts, window placement and exterior finishes to match your aesthetic.',
         'We confirm accessories such as headrests, audio systems and aromatherapy so every detail supports your preferred sauna experience.',
      ],
   },
   {
      id: 'approval-agreement',
      number: 5,
      label: 'APPROVAL & AGREEMENT',
      title: 'Work With Sauna',
      subtitle: 'Finalizing the plan',
      body: [
         'Once you are satisfied with the design and quotation, we confirm the order details and schedule.',
         'A clear agreement outlines scope, inclusions and responsibilities, giving you full transparency before work begins.',
      ],
   },
   {
      id: 'pre-install-prep',
      number: 6,
      label: 'PRE-INSTALL PREPARATION',
      title: 'Work With Sauna',
      subtitle: 'Preparing the site',
      body: [
         'Our team coordinates with your contractor or trades to confirm framing, drainage and ventilation requirements.',
         'We share precise rough-in information so electrical and structural work is ready when the sauna arrives.',
      ],
   },
   {
      id: 'foundation-structure',
      number: 7,
      label: 'FOUNDATION & STRUCTURE',
      title: 'Work With Sauna',
      subtitle: 'Building the base',
      body: [
         'The base or platform for the sauna is prepared to support weight, drainage and long-term stability.',
         'We verify slopes, clearances and access paths, ensuring that the structure is ready for safe assembly.',
      ],
   },
   {
      id: 'electrical-mech',
      number: 8,
      label: 'ELECTRICAL & MECHANICAL',
      title: 'Work With Sauna',
      subtitle: 'Power and services',
      body: [
         'Electricians complete the dedicated sauna circuit and any required control wiring based on our specifications.',
         'We coordinate locations for junction boxes, control panels and heaters to keep everything safe and accessible.',
      ],
   },
   {
      id: 'delivery-scheduling',
      number: 9,
      label: 'DELIVERY SCHEDULING',
      title: 'Work With Sauna',
      subtitle: 'Planning the arrival',
      body: [
         'We confirm delivery dates, access routes and any special handling requirements for your property.',
         'Packaging, timing and crew coordination are planned carefully to minimize disruption to your home or site.',
      ],
   },
   {
      id: 'delivery-staging',
      number: 10,
      label: 'DELIVERY & STAGING',
      title: 'Work With Sauna',
      subtitle: 'Bringing everything on site',
      body: [
         'Sauna components are delivered and staged near the installation area in an organized way.',
         'All parts are checked against the packing list so the build can proceed efficiently.',
      ],
   },
   {
      id: 'assembly-structure',
      number: 11,
      label: 'ASSEMBLY & STRUCTURE',
      title: 'Work With Sauna',
      subtitle: 'Building the shell',
      body: [
         'Our installers assemble wall and roof panels, secure the structure and verify alignment and squareness.',
         'We ensure door swings, clearances and framing details match the approved design.',
      ],
   },
   {
      id: 'interior-finishing',
      number: 12,
      label: 'INTERIOR FINISHING',
      title: 'Work With Sauna',
      subtitle: 'Crafting the interior',
      body: [
         'Benches, backrests and trims are installed with careful attention to comfort, spacing and drainage.',
         'We sand and detail surfaces as required so the interior feels seamless and premium.',
      ],
   },
   {
      id: 'heater-controls',
      number: 13,
      label: 'HEATER & CONTROLS',
      title: 'Work With Sauna',
      subtitle: 'Heat system installation',
      body: [
         'The heater, guard rails and stone tray are installed according to safety clearances and manufacturer guidelines.',
         'Controls and sensors are positioned for accurate temperature regulation and intuitive use.',
      ],
   },
   {
      id: 'lighting-atmosphere',
      number: 14,
      label: 'LIGHTING & ATMOSPHERE',
      title: 'Work With Sauna',
      subtitle: 'Creating the mood',
      body: [
         'We install lighting, accents and any decorative features to support a relaxing sauna atmosphere.',
         'Dimmers, color options and indirect lighting are tuned so the space feels warm and inviting.',
      ],
   },
   {
      id: 'testing-commissioning',
      number: 15,
      label: 'TESTING & COMMISSIONING',
      title: 'Work With Sauna',
      subtitle: 'Verifying performance',
      body: [
         'The system is powered up and run through a complete heating cycle to confirm proper operation.',
         'We check temperatures, safety features and ventilation so the sauna performs exactly as intended.',
      ],
   },
   {
      id: 'client-walkthrough',
      number: 16,
      label: 'CLIENT WALK-THROUGH',
      title: 'Work With Sauna',
      subtitle: 'Guided orientation',
      body: [
         'We walk you through operating the heater, controls, ventilation and accessories step by step.',
         'Any questions about usage, warm-up times or safety are addressed on site with clear demonstrations.',
      ],
   },
   {
      id: 'maintenance-guidance',
      number: 17,
      label: 'MAINTENANCE GUIDANCE',
      title: 'Work With Sauna',
      subtitle: 'Caring for your sauna',
      body: [
         'You receive maintenance tips for wood care, ventilation and cleaning routines to keep the sauna looking new.',
         'We explain simple checks you can perform to maintain long-term performance and safety.',
      ],
   },
   {
      id: 'handover-docs',
      number: 18,
      label: 'HANDOVER & DOCUMENTS',
      title: 'Work With Sauna',
      subtitle: 'Formal handover',
      body: [
         'Warranty details, manuals and as-built information are provided in a clear, organized package.',
         'You know exactly who to contact for any future questions, adjustments or upgrades.',
      ],
   },
   {
      id: 'after-sales-support',
      number: 19,
      label: 'AFTER-SALES & SUPPORT',
      title: 'Work With Sauna',
      subtitle: 'Here when you need us',
      body: [
         'Our team remains available for troubleshooting, replacement parts and accessory upgrades.',
         'We track your project history so any future service is quick and well-informed.',
      ],
   },
   {
      id: 'seasonal-checkup',
      number: 20,
      label: 'SEASONAL CHECK-UP',
      title: 'Work With Sauna',
      subtitle: 'Long-term health',
      body: [
         'On request, we provide seasonal inspections to review heater performance and structural condition.',
         'Minor adjustments and recommendations help keep your sauna performing like new year after year.',
      ],
   },
];

type Direction = 1 | -1;

const itemVariants = {
   enter: (direction: number) => ({
      opacity: 0,
      y: direction === 1 ? 40 : -40,
   }),
   center: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {type: 'spring', stiffness: 480, damping: 32},
   },
   top: {
      opacity: 0.4,
      // scale: 0.9,
      y: -40,
      transition: {type: 'spring', stiffness: 480, damping: 32},
   },
   bottom: {
      opacity: 0.4,
      // scale: 0.9,
      y: 40,
      transition: {type: 'spring', stiffness: 480, damping: 32},
   },
   exit: (direction: number) => ({
      opacity: 0,
      y: direction === 1 ? -40 : 40,
      transition: {duration: 0.22, ease: 'easeInOut'},
   }),
} satisfies Variants;

export default function WorkProcessesSection() {
   const [activeIndex, setActiveIndex] = useState<number>(1); // step 2 by default
   const [scrollDirection, setScrollDirection] = useState<Direction>(1);

   const sectionRef = useRef<HTMLDivElement | null>(null);
   const wheelLockedRef = useRef(false);
   const wheelTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

   const stepBy = (direction: Direction) => {
      setActiveIndex(prev => {
         const next = prev + direction;
         if (next < 0 || next >= STEPS.length) {
            return prev;
         }
         setScrollDirection(direction);
         return next;
      });
   };

   const goToIndex = (targetIndex: number) => {
      setActiveIndex(prev => {
         if (
            targetIndex < 0 ||
            targetIndex >= STEPS.length ||
            targetIndex === prev
         ) {
            return prev;
         }
         setScrollDirection(targetIndex > prev ? 1 : -1);
         return targetIndex;
      });
   };

   // native wheel listener for precise, smooth behavior
   useEffect(() => {
      const el = sectionRef.current;
      if (!el) return;

      const handleWheelNative = (event: WheelEvent) => {
         event.preventDefault(); // stop page scroll while over this block

         if (wheelLockedRef.current) return;

         const delta = event.deltaY;
         const direction: Direction | 0 = delta > 10 ? 1 : delta < -10 ? -1 : 0;
         if (!direction) return;

         wheelLockedRef.current = true;
         stepBy(direction);

         if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
         wheelTimerRef.current = setTimeout(() => {
            wheelLockedRef.current = false;
         }, 420);
      };

      el.addEventListener('wheel', handleWheelNative, {passive: false});

      return () => {
         el.removeEventListener('wheel', handleWheelNative);
         if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
      };
   }, []);

   const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
         event.preventDefault();
         stepBy(1);
      }
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
         event.preventDefault();
         stepBy(-1);
      }
   };

   const activeStep = STEPS[activeIndex];

   type VisibleStep = {step: Step; index: number; offset: -1 | 0 | 1};

   const visibleSteps: VisibleStep[] = [-1, 0, 1]
      .map(offset => {
         const index = activeIndex + offset;
         const step = STEPS[index];
         if (!step) return null;
         return {step, index, offset: offset as -1 | 0 | 1};
      })
      .filter(Boolean) as VisibleStep[];

   return (
      <section className='bg-[#403D39] py-24'>
         <div className='mx-auto w-full px-5 sd:px-10'>
            <SectionTitle title='WORK PROCESSES' />

            <div className='relative mt-12 rounded-[32px] bg-[#26221e] overflow-hidden'>
               {/* Orange side rails */}
               {/* <div className='hidden sld:block absolute inset-y-0 left-0 w-[190px] bg-[#f48a1c]'>
                  <div className='flex h-full items-center justify-center'>
                     <p className='font-naville text-[120px] tracking-[0.35em] text-white/5 -rotate-90'>
                        SAUNA
                     </p>
                  </div>
               </div>
               <div className='hidden sld:block absolute inset-y-0 right-0 w-[190px] bg-[#f48a1c]'>
                  <div className='flex h-full items-center justify-center'>
                     <p className='font-naville text-[120px] tracking-[0.35em] text-white/5 rotate-90'>
                        SAUNA
                     </p>
                  </div>
               </div> */}

               <div

                  className='bg-[#f48a1c] '>
                  {/* Center hero block */}
                  <div
                     className='relative mx-0 h-[585px] flex  sauna-container'
                  style={{
                     backgroundImage: `url(${'https://i.ibb.co.com/WNg9xJvT/Mask-group-10.png'})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                  }}
                     
                     >


                     {/* dark overlay */}
                     <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.9)_30%,rgba(0,0,0,0.75)_65%,rgba(0,0,0,0.92)_100%)] ' />

                     {/* content */}
                     <div
                        ref={sectionRef}
                        className='relative z-10 flex flex-col items-stretch gap-2 px-8 py-10 sd:px-12 sd:py-14 sld:flex-row sld:items-center '
                        tabIndex={0}
                        aria-label='Work processes steps'
                        onKeyDown={handleKeyDown}
                        style={{overscrollBehaviorY: 'contain'}}>
                        {/* LEFT: vertical tab carousel */}
                        <div className='w-[350px] flex justify-between'>
                           <div className='relative  w-full pt-6 pb-6 '>
                              {/* vertical dotted line */}
                              <div
                                 className='pointer-events-none absolute right-[63px] top-0 bottom-0'
                                 style={{
                                    width: '2px',

                                    // 1) dashed pattern
                                    backgroundImage:
                                       'repeating-linear-gradient(to bottom, #f48a1c 0 6px, transparent 6px 12px)',

                                    // 2) orange glow sideways
                                    filter:
                                       'drop-shadow(0 0 6px rgba(244,138,28,0.85))',

                                    // 3) fade out top & bottom
                                    WebkitMaskImage:
                                       'linear-gradient(to bottom, transparent 0%, black 10%, black 30%, transparent 100%)',
                                    maskImage:
                                       'linear-gradient(to bottom, transparent 0%, black 40%, black 30%, transparent 100%)',
                                 }}
                              />

                              <div className='relative h-[290px] w-full overflow-hidden flex flex-col justify-center items-center'>
                                 <AnimatePresence
                                    initial={false}
                                    custom={scrollDirection}>
                                    {visibleSteps.map(
                                       ({step, index, offset}) => {
                                          const isActive = offset === 0;
                                          const positionKey =
                                             offset === 0
                                                ? 'center'
                                                : offset === -1
                                                ? 'top'
                                                : 'bottom';

                                          return (
                                             <motion.button
                                                key={step.id}
                                                type='button'
                                                custom={scrollDirection}
                                                variants={itemVariants}
                                                initial='enter'
                                                animate={positionKey}
                                                exit='exit'
                                                onClick={() => goToIndex(index)}
                                                className=' flex h-[72px] items-center  gap-4 pr-5 text-right focus:outline-none '>
                                                {/* labels */}
                                                <div className='flex flex-col  w-[220px]'>
                                                   <span
                                                      className={[
                                                         'uppercase tracking-[0.0em] transition-colors duration-200 ',

                                                         isActive
                                                            ? 'text-white text-xl'
                                                            : 'text-[#f5f1ea]/60 group-hover:text-[#f5f1ea] text-lg',
                                                      ]
                                                         .filter(Boolean)
                                                         .join(' ')}>
                                                      {step.label}
                                                   </span>
                                                </div>

                                                {/* number circle */}
                                                <span
                                                   className={[
                                                      'flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#f48a1c] text-[11px] font-semibold transition-colors duration-200 text-[#f5f1ea] bg-[#f48a1c] ',
                                                      isActive
                                                         ? 'scale-[1.4] '
                                                         : ' ',
                                                   ]
                                                      .filter(Boolean)
                                                      .join(' ')}>
                                                   {step.number}
                                                </span>
                                             </motion.button>
                                          );
                                       }
                                    )}
                                 </AnimatePresence>
                              </div>
                           </div>
                        </div>

                        {/* RIGHT: content for active step */}
                        <div className='w-full sld:w-[60%] sld:ml-auto max-w-[640px] text-[#f5f1ea]'>
                           <h3 className='mb-3 text-[30px] sd:text-[36px] font-semibold uppercase tracking-[0.26em]'>
                              {activeStep.title}
                           </h3>
                           <p className='mb-5 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#f1e7dc]'>
                              {activeStep.subtitle}
                           </p>
                           <div className='space-y-3 text-[13px] leading-relaxed text-[#f1e7dc]'>
                              {activeStep.body.map((para, idx) => (
                                 <p key={idx}>{para}</p>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
