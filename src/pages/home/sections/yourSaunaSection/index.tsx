import type { ReactNode } from "react";
import { Puzzle, Home, PhoneCall, ArrowRight } from "lucide-react";

import forestBg from "./../../../../assets/Mask group (9).png"
import whyChooseImg from "./../../../../assets/Group 97.png";   // bottom image
import { CalloutRow } from './CalloutRow';

type Callout = {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  href?: string;
};

const CALLOUTS: Callout[] = [
  {
    id: "scratch",
    icon: <Puzzle className="h-6 w-6 text-[#f48a1c]" />,
    title: "Building a sauna from scratch?",
    subtitle: "Get your customized kit quote →",
    href: "#custom-quote",
  },
  {
    id: "prefab",
    icon: <Home className="h-6 w-6 text-[#f48a1c]" />,
    title: "Looking for a prefab sauna?",
    subtitle: "Check out our indoor & outdoor models →",
    href: "#prefab-models",
  },
  {
    id: "call",
    icon: <PhoneCall className="h-6 w-6 text-[#f48a1c]" />,
    title: "Call us today",
    subtitle: "+1 (800) 387-7029 · Local: (905) 738-4017",
  },
];

type Benefit = {
  id: string;
  title: string;
  body: string;
};

const BENEFITS: Benefit[] = [
  {
    id: "materials",
    title: "Therapeutic Grade Materials",
    body: "We combine the finest cedar woods and components to create a product that feels as good as it looks.",
  },
  {
    id: "efficiency",
    title: "Energy Efficiency",
    body: "Thought-out heater options and construction details designed for low energy consumption.",
  },
  {
    id: "turnkey",
    title: "Turnkey Installation",
    body: "Professionally planned product-to-site process for a smooth, worry-free installation.",
  },
];

export default function YourSaunaSection() {
  return (
    <section className="relative w-full bg-[#403D39] py-12 sd:py-16">
      <div className="mx-auto w-full max-w-[1180px] px-4 space-y-10 sd:space-y-12">
        {/* TOP STRIP */}
        <div
          className="relative overflow-hidden rounded-[32px] bg-[#1d1915]"
          style={{
            backgroundImage: `url(${forestBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* dark gradient overlay to keep text readable */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.7)_40%,rgba(0,0,0,0.35)_100%)]" />

          <div className="relative z-10 flex flex-col sld:flex-row gap-10 px-8 py-10 sd:px-12 sd:py-12">
            {/* left column – callouts */}
            <div className="w-full sld:w-[48%] text-[#f5f1ea]">
              <div className="space-y-7">
                {CALLOUTS.map((item) => (
                  <CalloutRow key={item.id} item={item} />
                ))}
              </div>

              {/* CTA button */}
              <div className="mt-10">
                <button className="inline-flex items-center gap-3 rounded-full bg-[#151515] px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_28px_rgba(0,0,0,0.6)]">
                  <span>Contact us</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f48a1c]">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </span>
                </button>
              </div>
            </div>

            {/* right column – white info card */}
            <div className="w-full sld:w-[52%] flex justify-end">
              <div className="max-w-[480px] rounded-[24px] bg-[#fbf2e5] px-8 py-6 sd:px-9 sd:py-7 shadow-[0_22px_48px_rgba(0,0,0,0.65)]">
                <h3 className="mb-1 text-[16px] font-semibold uppercase tracking-[0.26em] text-[#2b241e]">
                  Your sauna, your way.
                </h3>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#7a6b5e]">
                  Your source for saunas and steam baths.
                </p>
                <div className="space-y-3 text-[12px] leading-relaxed text-[#5d5147]">
                  <p>
                    We’ve been supplying saunas to homes, cottages, and resorts across North
                    America for decades, combining Scandinavian tradition with modern
                    construction.
                  </p>
                  <p>
                    Choose from ready-to-install barrel saunas, prefab cabin models, or fully
                    customized layouts tailored to your space. Every project is guided by our
                    experienced team to make sure you get the performance and aesthetic you
                    expect.
                  </p>
                  <p>
                    From compact backyard retreats to spacious commercial installations, we help
                    you design a sauna that fits your lifestyle, budget, and local climate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM “WHY CHOOSE US” CARD */}
        <div className="rounded-[32px] bg-[#fbf2e5] px-6 py-8 sd:px-10 sd:py-10 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col sld:flex-row gap-8 sld:gap-10 items-center">
            {/* left image */}
            <div className="w-full sld:w-[40%]">
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={whyChooseImg}
                  alt="Sauna exterior surrounded by nature"
                  className="block w-full object-cover"
                />
              </div>
            </div>

            {/* right content */}
            <div className="w-full sld:w-[60%]">
              <h3 className="mb-3 text-[20px] font-semibold uppercase tracking-[0.24em] text-[#2b241e]">
                Why choose us ?
              </h3>
              <p className="mb-5 max-w-[540px] text-[13px] leading-relaxed text-[#5d5147]">
                We combine the timeless practice of heat bathing with modern, sustainable
                construction standards—creating saunas that are beautiful, efficient, and built
                to last.
              </p>

              <div className="space-y-4">
                {BENEFITS.map((benefit) => (
                  <BenefitRow key={benefit.id} benefit={benefit} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


type BenefitRowProps = {
  benefit: Benefit;
};

function BenefitRow({ benefit }: BenefitRowProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-[6px] inline-block h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[#f48a1c]" />
      <div>
        <p className="text-[13px] font-semibold text-[#2b241e]">
          {benefit.title}
        </p>
        <p className="text-[12px] leading-relaxed text-[#5d5147]">
          {benefit.body}
        </p>
      </div>
    </div>
  );
}
