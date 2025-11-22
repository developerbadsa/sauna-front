type heading = {
   heading: string;
   style?: string;
};

export default function Heading({heading, style = ''}: heading) {
   return (
      <h2
         className={`text-[30px] font-bold md:tracking-[0.02em] text-[#403D39] uppercase ${style}`}>
         {heading}
      </h2>
   );
}
