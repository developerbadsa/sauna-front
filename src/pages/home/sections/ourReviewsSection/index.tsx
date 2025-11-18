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
      <div className="mx-auto ">
        <div className="">
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
          <div className="relative z-10 h-[1000px]  px-6 sd:px-12 pt-12 pb-16 sauna-container bg-white relative rounded-t-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.75)] ">
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
          <div className="relative z-10 bg-[#F28A1F] pt-12 pb-7 sauna-your-sauna-gradient rounded-t-[32px]">
            {/* hero image + CTA */}
            <div className="relative mx-auto max-w-[980px]  h-[375px] rounded-[28px] overflow-hidden">
              <img
                src={forestBg}
                alt="Sauna in landscaped garden"
                className="block  sd:h-[260px] w-full object-cover"
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
                  <button className="inline-flex items-center gap-3 rounded-full bg-[#403D39]  px-6 sd:px-7 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#25211C] shadow-[0_12px_30px_rgba(0,0,0,0.55)]">
                    <span>Contact us</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F28A1F]">
                     <svg xmlns="http://www.w3.org/2000/svg" width="53" height="50" viewBox="0 0 53 50" fill="none">
<g clip-path="url(#clip0_1_42952)">
<path d="M35.856 40.4866C26.9518 45.6408 15.2307 42.8827 9.84603 34.3653C4.39018 25.7367 7.24314 14.5881 16.2416 9.36986C25.1723 4.19185 36.8951 6.96501 42.3076 15.5369C47.7352 24.131 44.8528 35.278 35.8555 40.4857L35.856 40.4866ZM33.8847 18.6346C33.8756 18.7128 33.8662 18.7924 33.8572 18.8706C33.7166 18.9514 33.576 19.0322 33.4344 19.1136C27.3831 22.5928 21.3318 26.0721 15.2805 29.5513C15.1351 29.6349 14.9881 29.7157 14.8467 29.8057C14.3309 30.1331 14.1127 30.7199 14.3052 31.2523C14.5189 31.8431 15.0755 32.2243 15.7032 32.1343C15.9976 32.0924 16.2902 31.9489 16.5505 31.7993C22.6661 28.2905 28.7767 24.776 34.8888 21.2618L35.3058 21.022L35.5065 21.1107C35.4285 21.2396 35.3155 21.3603 35.2785 21.499C34.439 24.6952 33.608 27.8926 32.7755 31.0897C32.4922 32.1777 32.2093 33.2642 31.925 34.3528C31.7915 34.8624 31.9568 35.298 32.3415 35.6383C32.7365 35.9887 33.2255 36.0526 33.7251 35.8742C34.2542 35.685 34.4701 35.2591 34.5987 34.7622C35.7576 30.2928 36.9242 25.8252 38.0838 21.3566C38.1544 21.0823 38.213 20.8012 38.2384 20.5207C38.4083 18.5654 37.1162 16.9077 35.0147 16.4043C30.3157 15.2794 25.6141 14.1647 20.9137 13.0456C20.7904 13.0163 20.6665 12.9837 20.5408 12.9731C19.9873 12.9239 19.5404 13.1079 19.2456 13.5668C18.9641 14.0057 18.9621 14.4509 19.2363 14.9054C19.4778 15.3058 19.8654 15.4553 20.3038 15.5581C24.6769 16.5946 29.0475 17.6374 33.4207 18.6701C33.5631 18.7032 33.7282 18.6491 33.8822 18.6348L33.8847 18.6346Z" fill="#EA7F15"/>
<path d="M33.8842 18.6336C33.7297 18.647 33.5641 18.7026 33.4227 18.6689C29.0494 17.6362 24.6783 16.5925 20.3058 15.5569C19.8677 15.4526 19.4807 15.3041 19.2383 14.9042C18.9641 14.4497 18.9661 14.0045 19.2476 13.5656C19.5424 13.1067 19.9893 12.9227 20.5428 12.9719C20.6684 12.9825 20.793 13.016 20.9156 13.0444C25.6155 14.1626 30.3172 15.2773 35.0167 16.4031C37.1182 16.9065 38.4103 18.5642 38.2404 20.5195C38.2165 20.8004 38.1579 21.0814 38.0857 21.3554C36.9253 25.8245 35.7587 30.2921 34.6007 34.761C34.4721 35.2579 34.2562 35.6838 33.7271 35.873C33.2266 36.052 32.7385 35.9875 32.3435 35.6371C31.9597 35.2962 31.7945 34.8607 31.927 34.3516C32.2109 33.2645 32.4942 32.1765 32.7775 31.0885C33.61 27.8914 34.441 24.694 35.2805 21.4978C35.3175 21.3591 35.4304 21.2384 35.5085 21.1095L35.3078 21.0208L34.8908 21.2606C28.7786 24.7748 22.668 28.2893 16.5525 31.7981C16.2922 31.9477 15.9996 32.0912 15.7052 32.1331C15.0775 32.2231 14.5209 31.8419 14.3072 31.2512C14.1147 30.7187 14.3329 30.1319 14.8487 29.8045C14.99 29.7145 15.1371 29.6337 15.2825 29.5501C21.3338 26.0709 27.3851 22.5917 33.4364 19.1124C33.577 19.0316 33.7176 18.9507 33.8592 18.8694C33.8682 18.7912 33.8776 18.7116 33.8867 18.6334L33.8842 18.6336Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_42952">
<rect width="37.5322" height="36.7813" fill="white" transform="matrix(0.866923 -0.498442 0.532343 0.846529 0 18.708)"/>
</clipPath>
</defs>
</svg>
                    </span>
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
