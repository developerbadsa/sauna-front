import type { ReactNode } from "react";


type Callout = {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  href?: string;
};
type CalloutRowProps = {
  item: Callout;
};

export function CalloutRow({ item }: CalloutRowProps) {
  const { icon, title, subtitle, href } = item;

  const Wrapper: React.ComponentType<{ children: ReactNode }> = href
    ? ({ children }) => (
        <a
          href={href}
          className="flex gap-4 text-left transition-transform duration-150 hover:-translate-y-[1px]"
        >
          {children}
        </a>
      )
    : ({ children }) => <div className="flex gap-4 text-left">{children}</div>;

  return (
    <Wrapper>
      <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(0,0,0,0.55)]">
        {icon}
      </div>
      <div className="space-y-1">
        <p className="text-[13px] font-semibold text-[#fdf7ec]">{title}</p>
        <p className="text-[11px] text-[#d3c4b2]">{subtitle}</p>
      </div>
    </Wrapper>
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