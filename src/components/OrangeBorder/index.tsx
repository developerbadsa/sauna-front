export default function OrangeBorder({style = ''}: {style?: string}) {
   return (
      <div
         className={`relative z-10 border-custom mx-auto h-[2px] w-[87%] -mt-[6px] bg-[#E57B15] ${style}`}
      />
   );
}
