
import React from 'react';

export type WellnessTabId = 'who-we-are' | 'our-products' | 'wellness';

type TabConfig = {
  id: WellnessTabId;
  label: string;
};

const MAIN_TABS: TabConfig[] = [
  {id: 'who-we-are', label: 'WHO WE ARE'},
  {id: 'our-products', label: 'OUR PRODUCTS'},
  {id: 'wellness', label: 'WELLNESS'},
];

const TAB_CONTENT: Record<
  WellnessTabId,
  {
    heading: string;
    body: string;
  }
> = {
  'who-we-are': {
    heading:
      'SPECIALIZING IN CUSTOM BUILT FINNISH SAUNA INTERIOR AND SAUNA EXTERIOR. IDEA, PASSION, CONCEPTION AND SATISFACTION.',
    body: `Our journey began when we saw a need for high-quality, accessible wellness solutions for our fellow Calgarians. We understand the unique climate and lifestyle of our city and how the restorative power of a sauna session or the invigoration of a cold plunge can be a game-changer for mind and body. What started as a passion for authentic wellness traditions has grown into [Your Business Name] – Calgary's trusted source for premium indoor saunas, rugged outdoor saunas, innovative infrared technology, soothing hot tubs, and energizing cold plunges.`,
  },
  'our-products': {
    heading:
      'CURATED, PREMIUM WELLNESS PRODUCTS CHOSEN FOR PERFORMANCE, LONGEVITY AND EVERYDAY USE.',
    body: `From traditional Finnish barrel saunas to sleek infrared cabins, cold plunges, hot tubs and outdoor wellness zones, every product we offer is carefully selected for quality, safety and design. We focus on Canada-ready builds, efficient heating, durable materials, and intuitive controls so that your wellness investment performs beautifully in real life, season after season.`,
  },
  wellness: {
    heading:
      'DESIGNED TO SUPPORT DAILY RITUALS OF HEAT, COLD AND REST—RIGHT WHERE YOU LIVE.',
    body: `We see wellness as a lifestyle, not a luxury. Our team helps you imagine and build spaces that invite you to slow down, recover and reconnect—whether that’s a backyard sanctuary, a dedicated home spa, or a compact city balcony setup. We provide guidance on routines, installation and maintenance so you can focus on showing up for yourself, one session at a time.`,
  },
};

type WellnessTabsProps = {
  initialTab?: WellnessTabId;
};

export  function WellnessTabs({initialTab = 'who-we-are'}: WellnessTabsProps) {
  const [mainTab, setMainTab] = React.useState<WellnessTabId>(initialTab);

  const activeContent = TAB_CONTENT[mainTab];

  return (
    <div className='mt-16 md:mt-20'>
      {/* line + tabs */}
      <div className='relative mb-8'>
        {/* full gradient line behind tabs */}
        <div className='pointer-events-none absolute left-[5%] right-[5%] top-[40px] -z-10 h-px bg-gradient-to-r from-[#f48a1c] via-[#f5e3c8] to-[#000000]' />

        <div className='flex justify-center'>
          <div className='mb-2'>
            <div className='flex flex-wrap items-center justify-center gap-0 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#403D39]'>
              {MAIN_TABS.map((tab, idx) => {
                const isFirst = idx === 0;
                const isLast = idx === MAIN_TABS.length - 1;
                const active = tab.id === mainTab;

                return (
                  <button
                    key={tab.id}
                    type='button'
                    onClick={() => setMainTab(tab.id)}
                    className={`
                      relative px-6 pb-1 border-b-2 text-[11px] md:text-[12px] font-light leading-[3.75rem] transition-colors duration-150
                      ${
                        active
                          ? 'border-[#D47318] text-[#f48a1c]'
                          : 'border-[#ffffff] text-[#403D39] hover:text-black'
                      }

                      ${
                        isFirst
                          ? `before:absolute before:left-2.5 before:top-[64.3px] before:h-[8px] before:w-[6px]
                             before:-translate-x-3 before:-translate-y-1/2 before:rounded-full ${
                               active ? 'before:bg-[#D47318]' : 'before:bg-[#f48a1c]'
                             }`
                          : ''
                      }

                      ${
                        isLast
                          ? `after:absolute after:right-2.5 after:top-[64.3px] after:h-[8px] after:w-[6px]
                             after:translate-x-3 after:-translate-y-1/2 after:rounded-full ${
                               active ? 'after:bg-[#000000]' : 'after:bg-[#000000]'
                             }`
                          : ''
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* dynamic content */}
      <div className='text-center'>
        <p className='text-[10px] uppercase tracking-[0.24em]'>
          {activeContent.heading}
        </p>

        <p className='mx-auto mt-6 max-w-3xl text-[10px] leading-[1.9] text-[#6b6257]'>
          {activeContent.body}
        </p>
      </div>

      {/* thin bottom divider */}
      <div className='mt-10 h-px w-full bg-[#d7c9b7]' />
    </div>
  );
}
