import type { ReactNode } from "react";

export type Callout = {
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

  const content = (
    <>
      <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full ">
        <img src={icon} alt="" />
      </div>
      <div className="space-y-1">
        <p className="text-[18px] font-semibold text-[#fdf7ec]">{title}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex gap-4 text-left transition-transform duration-150 hover:-translate-y-[1px]"
      >
        {content}
      </a>
    );
  }

  return <div className="flex gap-4 text-left">{content}</div>;
}
