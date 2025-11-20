import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { ProductDetailSection } from '../product-types';

type Props = {
  sections: ProductDetailSection[];
};

export default function ProductDetailsAccordion({ sections }: Props) {
  const [openId, setOpenId] = useState<string | null>(sections[0]?.id ?? null);

  if (!sections.length) return null;

  return (
    <section className='rounded-3xl border border-neutral-200 bg-white/90 p-4 shadow-sm'>
      <div className='space-y-2'>
        {sections.map((section) => {
          const isOpen = section.id === openId;

          return (
            <div
              key={section.id}
              className='overflow-hidden rounded-2xl border border-transparent bg-white transition hover:border-neutral-200'
            >
              <button
                type='button'
                onClick={() =>
                  setOpenId((current) => (current === section.id ? null : section.id))
                }
                className='flex w-full items-center justify_between gap-3 px-4 py-3 text-left'
              >
                <span className='text-sm font-semibold uppercase tracking-[0.16em] text-neutral-800'>
                  {section.title}
                </span>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-neutral-400 transition-transform ${
                    isOpen ? 'rotate-180 text-neutral-700' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className='px-4 pb-4 text-sm leading-relaxed text-neutral-600'>
                  {section.items && section.items.length > 0 ? (
                    <ul className='ml-4 list-disc space-y-1'>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    section.body && <p>{section.body}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
