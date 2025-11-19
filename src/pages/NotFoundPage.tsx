export default function NotFoundPage() {
   return (
      <div className='flex min-h-[70vh] items-center justify-center px-4'>
         <div className='max-w-md text-center'>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500'>
               404 · Page Not Found
            </p>
            <h1 className='mt-4 text-3xl font-semibold tracking-tight text-[#f7f2e8]'>
               The heat you&apos;re looking for isn&apos;t here.
            </h1>
            <p className='mt-4 text-sm text-zinc-400'>
               The page may have moved or no longer exists. Return to the collection and discover your
               perfect sauna.
            </p>
            <div className='mt-8 flex justify-center gap-3'>
               <a
                  href='/'
                  className='rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#f7f2e8] hover:bg-white/10 transition-colors'
               >
                  Back to home
               </a>
               <a
                  href='/saunas'
                  className='rounded-full border border-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0b0a09] bg-[#f7f2e8] hover:bg-white transition-colors'
               >
                  Browse saunas
               </a>
            </div>
         </div>
      </div>
   );
}