
import {
  YoutubeBrandIcon,
  PinterestBrandIcon,
  InstagramBrandIcon,
  FacebookBrandIcon,
  XBrandIcon,
} from "@/components/ui/icons/social-brand-icons";

const SOCIAL_ITEMS = [
  {
    id: "youtube",
    label: "YouTube",
    Icon: YoutubeBrandIcon,
    className: "bg-[#DE7513]", // primary highlight
  },
  {
    id: "pinterest",
    label: "Pinterest",
    Icon: PinterestBrandIcon,
    className: "",
  },
  {
    id: "instagram",
    label: "Instagram",
    Icon: InstagramBrandIcon,
    className: "",
  },
  {
    id: "facebook",
    label: "Facebook",
    Icon: FacebookBrandIcon,
    className: "",
  },
  {
    id: "x",
    label: "X (Twitter)",
    Icon: XBrandIcon,
    className: "",
  },
];

export function FooterSocialSection() {
  return (
    <div>
      <p className="mt-6 text-[22px] font-semibold tracking-[0.24em] text-white uppercase">
        Follow us on social
      </p>

      <div className="mt-3 flex items-center gap-3">
        {SOCIAL_ITEMS.map(({ Icon }) => (
         <Icon className="" />
        ))}
      </div>
    </div>
  );
}
