type sectionProps = {
   title: string;
   style?: string;
};

export default function SectionTitle({title, style = ''}: sectionProps) {
   return (
      <h2
         className={`text-center text-[44px] leading-30 font-medium uppercase tracking-[20px] font-naville bg-linear-to-r from-[#D9D9D9]  to-[#999999] bg-clip-text text-transparent w-full ${style} leading-10`}>
         {title}
      </h2>
   );
}
