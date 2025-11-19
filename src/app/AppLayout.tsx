import {Outlet, useLocation} from 'react-router-dom';
import {useEffect} from 'react';

function ScrollToTop() {
   const {pathname} = useLocation();

   useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
   }, [pathname]);

   return null;
}

// function SiteHeader() {
//    return (
//       <header className='sticky top-0 z-30 border-b border-white/10 bg-[#050404]/80 backdrop-blur'>
//          <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4'>
//             <div className='text-xs font-semibold tracking-[0.28em] text-zinc-300 uppercase'>
//                AURORA SAUNA CO.
//             </div>
//             <nav className='hidden gap-8 text-sm text-zinc-300 md:flex'>
//                <a href='/' className='hover:text-white transition-colors'>
//                   Home
//                </a>
//                <a href='/saunas' className='hover:text-white transition-colors'>
//                   Saunas
//                </a>
//                <a href='/learn' className='hover:text-white transition-colors'>
//                   Learn
//                </a>
//                <a href='/consultation' className='hover:text-white transition-colors'>
//                   Consultation
//                </a>
//             </nav>
//          </div>
//       </header>
//    );
// }

// function SiteFooter() {
//    return (
//       <footer className='border-t border-white/10 bg-[#050404]'>
//          <div className='mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between'>
//             <p>© {new Date().getFullYear()} Aurora Sauna Co. All rights reserved.</p>
//             <div className='flex gap-6 text-xs uppercase tracking-[0.16em]'>
//                <a href='/legal/privacy' className='hover:text-zinc-200 transition-colors'>
//                   Privacy Policy
//                </a>
//                <a href='/legal/terms' className='hover:text-zinc-200 transition-colors'>
//                   Terms
//                </a>
//             </div>
//          </div>
//       </footer>
//    );
// }

export default function AppLayout() {
   return (
      <div className='min-h-screen bg-[#090806] text-[#f7f2e8]'>
         <ScrollToTop />
         {/* <SiteHeader /> */}
         <main className='min-h-[70vh]'>
            <Outlet />
         </main>
         {/* <SiteFooter /> */}
      </div>
   );
}
