import React from 'react';
import { ArrowRight, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

import forestBg from './../../../../assets/Mask group (9).png';
import bgPattern from './../../../../assets/Group 89.png';

type Review = {
  id: string;
  name: string;
  role: string;
  text: string;
  initials: string;
  featured?: boolean;
};

const REVIEWS: Review[] = [
  {
    id: 'jack',
    name: 'Jack Hamilton',
    role: 'Homeowner, Toronto',
    text: 'From the first consultation to the final installation, the team was professional, patient, and incredibly detail-oriented. Our sauna has become the favourite room in our home.',
    initials: 'JH',
  },
  {
    id: 'ann',
    name: 'Ann Martin',
    role: 'Interior Designer',
    text: 'They understood exactly what my client needed. Beautiful finishes, clean lines, and a truly relaxing experience. I recommend them on every spa project now.',
    initials: 'AM',
  },
  {
    id: 'john',
    name: 'John Doe',
    role: 'Cottage Owner',
    text: 'Installation was fast and seamless. The crew respected our space and left everything spotless. The cedar smells amazing and the heat is perfectly even.',
    initials: 'J',
    featured: true,
  },
  {
    id: 'diana',
    name: 'Diana Collins',
    role: 'Wellness Coach',
    text: 'My clients are obsessed with the new sauna. It quickly became the centerpiece of my studio and an essential part of our recovery routine.',
    initials: 'DC',
  },
  {
    id: 'lucas',
    name: 'Lucas Grande',
    role: 'Developer, Vancouver',
    text: 'I wanted a modern look that still felt warm and timeless. They delivered on every detail and stayed on budget the entire way.',
    initials: 'LG',
  },
];

type FooterLinkGroup = {
  title: string;
  links: { label: string; href: string }[];
};

const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: 'ABOUT',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Our Process', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'MY ACCOUNT',
    links: [
      { label: 'Dashboard', href: '#' },
      { label: 'Orders', href: '#' },
      { label: 'Wishlist', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
];

const PAYMENT_METHODS = ['Visa', 'MasterCard', 'Amex', 'PayPal'];

export default function OurReviewSection() {
  return (
    <section className="relative w-full bg-[#403D39] py-12 sd:py-16">
      <div className="mx-auto max-w-[1120px] px-4 sd:px-0">
        <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.75)] sauna-container">
          {/* subtle pattern bg over whole block */}
          <div
            className="pointer-events-none absolute inset-0 opacity-15"
            style={{
              backgroundImage: `url(${bgPattern})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* TOP: REVIEWS PANEL */}
          <div className="relative z-10 bg-white px-6 sd:px-12 pt-12 pb-16">
            <div className="text-center">
              <p className="text-[11px] sd:text-[12px] font-medium tracking-[0.42em] text-[#CAC1B8] uppercase">
                Our Reviews
              </p>

              <div className="relative mt-6 inline-block">
                {/* big faded quote mark */}
                <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 text-[90px] sd:text-[110px] leading-none text-[#F3EEE8] select-none">
                  “
                </span>

                {/* center label like mock */}
                <div className="relative z-10 flex items-center gap-4 bg-white px-5 py-2">
                  <span className="h-[1px] w-10 bg-[#E3DAD0]" />
                  <span className="text-[12px] sd:text-[13px] font-semibold tracking-[0.35em] uppercase text-[#F08B1E]">
                    What our clients say!
                  </span>
                  <span className="h-[1px] w-10 bg-[#E3DAD0]" />
                </div>

                {/* small orange line under text */}
                <div className="relative z-10 mx-auto mt-3 h-[2px] w-24 rounded-full bg-[#F08B1E]" />
              </div>
            </div>

            {/* review cards */}
            <div className="mt-10">
              <div className="relative -mx-4 sd:-mx-8">
                <div className="flex gap-5 sd:gap-6 overflow-x-auto pb-2 pl-4 pr-4 sd:pl-8 sd:pr-8 snap-x snap-mandatory">
                  {REVIEWS.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM: ORANGE HERO + DARK FOOTER */}
          <div className="relative z-10 bg-[#F28A1F] pt-12 pb-7 sauna-your-sauna-gradient">
            {/* hero image + CTA */}
            <div className="relative mx-auto max-w-[980px] rounded-[28px] overflow-hidden">
              <img
                src={forestBg}
                alt="Sauna in landscaped garden"
                className="block h-[240px] sd:h-[260px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/5" />

              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <p className="text-[12px] sd:text-[13px] font-semibold tracking-[0.35em] text-white/80 uppercase">
                  Want a sauna for your home?
                </p>
                <h3 className="mt-3 max-w-[520px] text-[22px] sd:text-[26px] font-bold uppercase tracking-[0.18em] text-white">
                  Contact us for a free consultation!
                </h3>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                  <button className="inline-flex items-center gap-3 rounded-full bg-[#F4F1EA] px-6 sd:px-7 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#25211C] shadow-[0_12px_30px_rgba(0,0,0,0.55)]">
                    <span>Contact us</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F28A1F]">
                      <ArrowRight className="h-3 w-3 text-white" />
                    </span>
                  </button>

                  <button className="inline-flex items-center gap-3 rounded-full border border-white/80 px-6 sd:px-7 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                    <span>Call now</span>
                  </button>
                </div>
              </div>
            </div>

            {/* dark footer panel */}
            <div className="relative mx-auto max-w-[980px] -mt-10 rounded-[24px] bg-[#3D3A37] px-6 sd:px-10 py-8 sd:py-9 shadow-[0_24px_60px_rgba(0,0,0,0.75)] border border-white/5">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                {/* brand + socials */}
                <div className="max-w-[260px]">
                  <div className="text-[22px] sd:text-[24px] font-extrabold tracking-[0.45em] uppercase text-white">
                    Sauna
                  </div>
                  <p className="mt-3 text-[12px] leading-relaxed text-[#E4DFD8]">
                    Bespoke indoor and outdoor saunas that blend Scandinavian
                    tradition with modern craftsmanship and technology.
                  </p>

                  <p className="mt-6 text-[11px] font-semibold tracking-[0.24em] text-[#F4EDE6] uppercase">
                    Follow us on social
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <SocialIcon label="Facebook">
                      <Facebook className="h-3.5 w-3.5" />
                    </SocialIcon>
                    <SocialIcon label="Instagram">
                      <Instagram className="h-3.5 w-3.5" />
                    </SocialIcon>
                    <SocialIcon label="YouTube">
                      <Youtube className="h-3.5 w-3.5" />
                    </SocialIcon>
                    <SocialIcon label="LinkedIn">
                      <Linkedin className="h-3.5 w-3.5" />
                    </SocialIcon>
                  </div>
                </div>

                {/* links + newsletter */}
                <div className="flex flex-1 flex-col gap-8 md:flex-row md:gap-10">
                  <div className="flex flex-1 gap-10">
                    {FOOTER_LINK_GROUPS.map((group) => (
                      <FooterLinks key={group.title} group={group} />
                    ))}
                  </div>

                  <div className="w-full md:max-w-[260px]">
                    <p className="text-[11px] font-semibold tracking-[0.24em] text-[#F4EDE6] uppercase">
                      Get update
                    </p>
                    <p className="mt-2 text-[12px] leading-relaxed text-[#E4DFD8]">
                      Be the first to know about new models, seasonal offers,
                      and sauna care tips.
                    </p>

                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="mt-4 flex items-center gap-2 rounded-full bg-[#45413E] px-3 py-1.5"
                    >
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-transparent text-[12px] text-[#F4EDE6] placeholder:text-[#A19992] outline-none border-none"
                      />
                      <button
                        type="submit"
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F28A1F] shadow-[0_8px_18px_rgba(0,0,0,0.6)]"
                      >
                        <ArrowRight className="h-3.5 w-3.5 text-white" />
                      </button>
                    </form>
                  </div>
                </div>

                {/* payments */}
                <div className="w-full lg:w-[220px]">
                  <p className="text-[11px] font-semibold tracking-[0.24em] text-[#F4EDE6] uppercase">
                    Accepted payment methods
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {PAYMENT_METHODS.map((method) => (
                      <div
                        key={method}
                        className="rounded-full bg-[#45413E] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F4EDE6]"
                      >
                        {method}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* copyright */}
            <p className="mt-7 text-center text-[10px] sd:text-[11px] font-medium tracking-[0.28em] uppercase text-white/85">
              © Copyright Reserved by Sauna.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const avatarBase =
    'absolute -top-7 left-1/2 -translate-x-1/2 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#F28A1F] text-[13px] font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.5)] border-[3px]';
  const avatarBorder = review.featured ? ' border-[#1C85FF]' : ' border-[#F4F1EA]';

  return (
    <article
      className={`relative snap-start flex-shrink-0 w-[230px] sd:w-[250px] rounded-[30px] bg-white px-6 pt-9 pb-7 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-[#F1EAE1] ${
        review.featured ? 'scale-[1.03] border-[#1C85FF]/75' : ''
      } transition-transform duration-200`}
    >
      <div className={`${avatarBase} ${avatarBorder}`}>{review.initials}</div>

      <div className="mt-2 text-center">
        <h4 className="mt-6 text-[13px] font-semibold text-[#3A332D]">
          {review.name}
        </h4>
        <p className="mt-1 text-[11px] text-[#9B9085]">{review.role}</p>
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-[#5D5147]">
        {review.text}
      </p>
    </article>
  );
}

function FooterLinks({ group }: { group: FooterLinkGroup }) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.24em] text-[#F4EDE6] uppercase">
        {group.title}
      </p>
      <ul className="mt-3 space-y-1.5">
        {group.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[12px] text-[#E4DFD8] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#45413E] text-white/90 shadow-[0_10px_24px_rgba(0,0,0,0.6)]"
    >
      {children}
    </button>
  );
}
