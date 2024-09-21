"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";



const Nav = ({ locale }: { locale: string }) => {
    const t = useTranslations("NavbarLinks");
    const menuRef = useRef<HTMLOListElement>(null);

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);

  

    let [open,setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-[20]'>
      <div className='md:flex items-center justify-around bg-white py-4 md:px-10 px-5'>
           <div className="flex justify-between">
              <Link href='/#HeroHome' className='font-bold text-xl cursor-pointer flex items-center gap-2
                text-gray-800'>
                    <WorldIcon />
                    Ruben Viñals
                </Link>

            
                
                <div onClick={()=>setOpen(!open)} className='text-3xl cursor-pointer md:hidden'>
                    {
                        open ? <CloseIcon/>:<MenuIcon/>
                    }
                </div>

            </div>

            <ol ref={menuRef} className={`flex flex-col justify-center pt-4  md:flex-row md:items-center md:pb-0 md:pt-0 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-14 max-h-fit' : 'top-[-490px]'}`}>
                    <li className='link md:ml-8 text-xl md:my-0 my-4 font-semibold'>
                        <Link href={`/${locale}/#Contact`}>{t("contact")}</Link>
                    </li>
                    <li className='link md:ml-8 text-xl md:my-0 my-4 font-semibold'>
                        <Link href={`/${locale}/#Experience`}>{t("experience")}</Link>
                    </li>
                    <li className='link md:ml-8 text-xl md:my-0 my-4 font-semibold'>
                        <Link href={`/${locale}/#Education`}>{t("education")}</Link>
                    </li>
                    {/* <li className='link md:ml-8 text-xl md:my-0 my-4 font-semibold'>
                        <Link href={`/${locale}/#Contact`}>{t("contact")}</Link>
                    </li> */}
                    <li className='link md:ml-8 md:mr-5 text-xl md:my-0 my-4 font-semibold'>
                        <Link href={`/${locale}/blog`}>{t("blog")}</Link>
                    </li >
                    <li className='md:ml-8 mt-2 md:my-0 flex justify-center gap-2'>
                        <SpainIcon locale={locale} />
                        <EnglandIcon locale={locale} />
                        <FranceIcon locale={locale} />
                    </li>
                </ol>
         
      </div>
    </div>
  )
}

export default Nav;






const CloseIcon = () => (
    <svg className="cursor-pointer" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
    </svg>
  );
  
const MenuIcon = () => (
  <svg className="cursor-pointer" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WorldIcon = () => (
  <svg width="30px" height="30px" viewBox="0 0 1024 1024" className="cursor-pointer icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M514.5 516.6m-484.5 0a484.5 484.5 0 1 0 969 0 484.5 484.5 0 1 0-969 0Z" fill="#44C0C6" /><path d="M514.5 1011c-66.7 0-131.5-13.1-192.5-38.9-58.9-24.9-111.8-60.6-157.2-106-45.4-45.4-81.1-98.3-106-157.2-25.8-61-38.9-125.7-38.9-192.5S33 384.9 58.8 323.9c24.9-58.9 60.6-111.8 106-157.2 45.4-45.4 98.3-81.1 157.2-106 61-25.8 125.7-38.9 192.5-38.9S646 35.2 707 61c58.9 24.9 111.8 60.6 157.2 106 45.4 45.4 81.1 98.3 106 157.2 25.8 61 38.9 125.7 38.9 192.5S996 648.2 970.2 709.2c-24.9 58.9-60.6 111.8-106 157.2-45.4 45.4-98.3 81.1-157.2 106-61 25.6-125.7 38.6-192.5 38.6z m0-968.9c-64.1 0-126.2 12.5-184.7 37.3-56.5 23.9-107.2 58.1-150.8 101.7-43.6 43.6-77.8 94.3-101.7 150.8C52.6 390.4 40 452.5 40 516.6s12.5 126.2 37.3 184.7c23.9 56.5 58.1 107.2 101.7 150.8 43.6 43.6 94.3 77.8 150.8 101.7 58.5 24.7 120.6 37.3 184.7 37.3s126.2-12.5 184.7-37.3c56.5-23.9 107.2-58.1 150.8-101.7s77.8-94.3 101.7-150.8c24.7-58.5 37.3-120.6 37.3-184.7s-12.5-126.2-37.3-184.7c-23.9-56.5-58.1-107.2-101.7-150.8-43.6-43.6-94.3-77.8-150.8-101.7-58.5-24.7-120.6-37.3-184.7-37.3z" fill="" /><path d="M528 32.8c-59.5 70.5-113.4 163.3 15.1 163.3 207.4 0 153.4 152.8-78.8 163.7-232.3 10.9-166.8 174.7-35.8 191 80.6 10.1 109.4 51.1 119.8 90.1v1.5c0 21.4 2.1 41.8 5.8 60.7v0.4c0 2.4 0.5 4.6 1.4 6.5 14.2 64.5 47.9 77.2 87.3 77.2 52.2 0 87.2-108.9 93.5-168.8 9.7-90.8 101.9-90.2 96.1-204.2-1.7-32.9 84.3-34.1 148.2-29C924.5 185.8 744 38.7 528 32.8z" fill="#60C13D" /><path d="M642.7 797.4c-36.4 0-80.2-9.6-96.9-84.1-1.1-2.8-1.7-5.9-1.8-9.1-3.8-20.2-5.8-40.9-5.8-61.7v-0.3c-13-47-49.4-73.7-111-81.4-34.9-4.4-67.4-18.9-91.4-40.9-23.8-21.8-36.8-49-35.8-74.7 0.7-18 8.4-43.8 41.4-64.6 28.4-17.9 69.6-28.2 122.4-30.7 76.5-3.6 124-21.9 150.4-36.7 30.6-17.1 48.6-38.6 48.1-57.4-0.5-22.9-32.1-49.6-119.2-49.6-45.4 0-73.7-11.6-84.3-34.4-8.3-17.9-5-41.9 9.9-71.2 11-21.6 28.4-46.6 51.7-74.2 2-2.3 4.9-3.6 7.9-3.5 54 1.5 106.9 11.6 157.2 30.1 48.7 17.9 94.1 43.4 135 75.7 40.5 32 75.6 69.9 104.4 112.7 29.2 43.5 51.2 91 65.3 141.3 0.9 3.1 0.2 6.5-1.9 9.1-2.1 2.5-5.3 3.9-8.5 3.6-69.5-5.6-121.1-0.8-134.8 12.5-2.5 2.4-2.7 4.4-2.7 6 3.4 67-26 98.2-52 125.7-20.6 21.9-40.1 42.5-44.1 80-3.7 34.9-15.7 78-30.5 110-20.5 44.4-45.7 67.8-73 67.8zM532.5 42.9c-46.2 55.5-65.9 98.2-55.6 120.4 8.8 18.8 40.8 22.8 66.2 22.8 43 0 77.2 6.3 101.6 18.7 23.7 12.1 37.1 30 37.5 50.5 0.6 26.8-20.6 54.3-58.3 75.3-28.3 15.8-78.8 35.4-159.2 39.2-89 4.2-143.1 32.6-144.8 76.1-0.8 19.8 9.9 41.4 29.3 59.2 21 19.3 49.6 32 80.4 35.8 70.2 8.8 113.4 41.6 128.2 97.5 0.2 0.8 0.3 1.7 0.3 2.6v1.5c0 19.8 1.9 39.6 5.6 58.8 0.1 0.6 0.2 1.3 0.2 1.9v0.4c0 0.9 0.2 1.7 0.5 2.4 0.3 0.6 0.5 1.3 0.7 2 12.6 57.5 40.2 69.3 77.6 69.3 25.1 0 45.2-35.2 54.9-56.1 16.9-36.6 26.1-78.8 28.7-103.7 4.7-44.2 27.5-68.3 49.4-91.6 25.5-27 49.6-52.6 46.6-111-0.4-8 2.6-15.4 8.7-21.3 11-10.6 32.2-17 65-19.4 24.1-1.8 50-1 70.8 0.2-13.6-43.2-33.2-84.1-58.6-121.9-27.6-41.1-61.3-77.5-100.2-108.2-39.2-31-82.8-55.4-129.6-72.6-46.7-17.2-95.8-26.9-145.9-28.8z" fill="" /></svg>

)

const SpainIcon = ({ locale }: { locale: string }) => {
  
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const newPath = `/${newLocale}${pathname.substring(locale.length + 1)}/`;
    router.push(newPath);
  };


  return (
    <svg 
    onClick={() => handleLanguageChange({ target: { value: 'es' } } as any)}
    width="30px"
    height="30px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="cursor-pointer hover:scale-110 iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#C60A1D" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path><path fill="#FFC400" d="M0 12h36v12H0z"></path><path fill="#EA596E" d="M9 17v3a3 3 0 1 0 6 0v-3H9z"></path><path fill="#F4A2B2" d="M12 16h3v3h-3z"></path><path fill="#DD2E44" d="M9 16h3v3H9z"></path><ellipse fill="#EA596E" cx="12" cy="14.5" rx="3" ry="1.5"></ellipse><ellipse fill="#FFAC33" cx="12" cy="13.75" rx="3" ry=".75"></ellipse><path fill="#99AAB5" d="M7 16h1v7H7zm9 0h1v7h-1z"></path><path fill="#66757F" d="M6 22h3v1H6zm9 0h3v1h-3zm-8-7h1v1H7zm9 0h1v1h-1z"></path>
  </svg>
  )
}

const EnglandIcon = ({ locale }: { locale: string }) => {

  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const newPath = `/${newLocale}${pathname.substring(locale.length + 1)}/`;
    router.push(newPath);
  };



  return (
    <svg
    className="cursor-pointer hover:scale-110"
    onClick={() => handleLanguageChange({ target: { value: 'en' } } as any)}
   width="30px" height="30px"  viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
   <g clip-path="url(#clip0_503_3486)">
   <rect width="28" height="20" rx="2" fill="white"/>
   <mask id="mask0_503_3486"  maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
   <rect width="28" height="20" rx="2" fill="white"/>
   </mask>
   <g mask="url(#mask0_503_3486)">
   <path fill-rule="evenodd" clip-rule="evenodd" d="M28 0H0V1.33333H28V0ZM28 2.66667H0V4H28V2.66667ZM0 5.33333H28V6.66667H0V5.33333ZM28 8H0V9.33333H28V8ZM0 10.6667H28V12H0V10.6667ZM28 13.3333H0V14.6667H28V13.3333ZM0 16H28V17.3333H0V16ZM28 18.6667H0V20H28V18.6667Z" fill="#D02F44"/>
   <rect width="12" height="9.33333" fill="#46467F"/>
   <g filter="url(#filter0_d_503_3486)">
   <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66665 1.99999C2.66665 2.36818 2.36817 2.66666 1.99998 2.66666C1.63179 2.66666 1.33331 2.36818 1.33331 1.99999C1.33331 1.63181 1.63179 1.33333 1.99998 1.33333C2.36817 1.33333 2.66665 1.63181 2.66665 1.99999ZM5.33331 1.99999C5.33331 2.36818 5.03484 2.66666 4.66665 2.66666C4.29846 2.66666 3.99998 2.36818 3.99998 1.99999C3.99998 1.63181 4.29846 1.33333 4.66665 1.33333C5.03484 1.33333 5.33331 1.63181 5.33331 1.99999ZM7.33331 2.66666C7.7015 2.66666 7.99998 2.36818 7.99998 1.99999C7.99998 1.63181 7.7015 1.33333 7.33331 1.33333C6.96512 1.33333 6.66665 1.63181 6.66665 1.99999C6.66665 2.36818 6.96512 2.66666 7.33331 2.66666ZM10.6666 1.99999C10.6666 2.36818 10.3682 2.66666 9.99998 2.66666C9.63179 2.66666 9.33331 2.36818 9.33331 1.99999C9.33331 1.63181 9.63179 1.33333 9.99998 1.33333C10.3682 1.33333 10.6666 1.63181 10.6666 1.99999ZM3.33331 3.99999C3.7015 3.99999 3.99998 3.70152 3.99998 3.33333C3.99998 2.96514 3.7015 2.66666 3.33331 2.66666C2.96512 2.66666 2.66665 2.96514 2.66665 3.33333C2.66665 3.70152 2.96512 3.99999 3.33331 3.99999ZM6.66665 3.33333C6.66665 3.70152 6.36817 3.99999 5.99998 3.99999C5.63179 3.99999 5.33331 3.70152 5.33331 3.33333C5.33331 2.96514 5.63179 2.66666 5.99998 2.66666C6.36817 2.66666 6.66665 2.96514 6.66665 3.33333ZM8.66665 3.99999C9.03484 3.99999 9.33331 3.70152 9.33331 3.33333C9.33331 2.96514 9.03484 2.66666 8.66665 2.66666C8.29846 2.66666 7.99998 2.96514 7.99998 3.33333C7.99998 3.70152 8.29846 3.99999 8.66665 3.99999ZM10.6666 4.66666C10.6666 5.03485 10.3682 5.33333 9.99998 5.33333C9.63179 5.33333 9.33331 5.03485 9.33331 4.66666C9.33331 4.29847 9.63179 3.99999 9.99998 3.99999C10.3682 3.99999 10.6666 4.29847 10.6666 4.66666ZM7.33331 5.33333C7.7015 5.33333 7.99998 5.03485 7.99998 4.66666C7.99998 4.29847 7.7015 3.99999 7.33331 3.99999C6.96512 3.99999 6.66665 4.29847 6.66665 4.66666C6.66665 5.03485 6.96512 5.33333 7.33331 5.33333ZM5.33331 4.66666C5.33331 5.03485 5.03484 5.33333 4.66665 5.33333C4.29846 5.33333 3.99998 5.03485 3.99998 4.66666C3.99998 4.29847 4.29846 3.99999 4.66665 3.99999C5.03484 3.99999 5.33331 4.29847 5.33331 4.66666ZM1.99998 5.33333C2.36817 5.33333 2.66665 5.03485 2.66665 4.66666C2.66665 4.29847 2.36817 3.99999 1.99998 3.99999C1.63179 3.99999 1.33331 4.29847 1.33331 4.66666C1.33331 5.03485 1.63179 5.33333 1.99998 5.33333ZM3.99998 5.99999C3.99998 6.36819 3.7015 6.66666 3.33331 6.66666C2.96512 6.66666 2.66665 6.36819 2.66665 5.99999C2.66665 5.6318 2.96512 5.33333 3.33331 5.33333C3.7015 5.33333 3.99998 5.6318 3.99998 5.99999ZM5.99998 6.66666C6.36817 6.66666 6.66665 6.36819 6.66665 5.99999C6.66665 5.6318 6.36817 5.33333 5.99998 5.33333C5.63179 5.33333 5.33331 5.6318 5.33331 5.99999C5.33331 6.36819 5.63179 6.66666 5.99998 6.66666ZM9.33331 5.99999C9.33331 6.36819 9.03484 6.66666 8.66665 6.66666C8.29846 6.66666 7.99998 6.36819 7.99998 5.99999C7.99998 5.6318 8.29846 5.33333 8.66665 5.33333C9.03484 5.33333 9.33331 5.6318 9.33331 5.99999ZM9.99998 8C10.3682 8 10.6666 7.70152 10.6666 7.33333C10.6666 6.96514 10.3682 6.66666 9.99998 6.66666C9.63179 6.66666 9.33331 6.96514 9.33331 7.33333C9.33331 7.70152 9.63179 8 9.99998 8ZM7.99998 7.33333C7.99998 7.70152 7.7015 8 7.33331 8C6.96512 8 6.66665 7.70152 6.66665 7.33333C6.66665 6.96514 6.96512 6.66666 7.33331 6.66666C7.7015 6.66666 7.99998 6.96514 7.99998 7.33333ZM4.66665 8C5.03484 8 5.33331 7.70152 5.33331 7.33333C5.33331 6.96514 5.03484 6.66666 4.66665 6.66666C4.29846 6.66666 3.99998 6.96514 3.99998 7.33333C3.99998 7.70152 4.29846 8 4.66665 8ZM2.66665 7.33333C2.66665 7.70152 2.36817 8 1.99998 8C1.63179 8 1.33331 7.70152 1.33331 7.33333C1.33331 6.96514 1.63179 6.66666 1.99998 6.66666C2.36817 6.66666 2.66665 6.96514 2.66665 7.33333Z" fill="url(#paint0_linear_503_3486)"/>
   </g>
   </g>
   </g>
   <defs>
   <filter id="filter0_d_503_3486" x="1.33331" y="1.33333" width="9.33331" height="7.66667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
   <feFlood flood-opacity="0" result="BackgroundImageFix"/>
   <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
   <feOffset dy="1"/>
   <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
   <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_503_3486"/>
   <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_503_3486" result="shape"/>
   </filter>
   <linearGradient id="paint0_linear_503_3486" x1="1.33331" y1="1.33333" x2="1.33331" y2="7.99999" gradientUnits="userSpaceOnUse">
   <stop stop-color="white"/>
   <stop offset="1" stop-color="#F0F0F0"/>
   </linearGradient>
   <clipPath id="clip0_503_3486">
   <rect width="28" height="20" rx="2" fill="white"/>
   </clipPath>
   </defs>
  </svg>
  )
}
const FranceIcon = ({ locale }: { locale: string }) => {

  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const newPath = `/${newLocale}${pathname.substring(locale.length + 1)}/`;
    router.push(newPath);
  };


  return (
    <svg
    onClick={() => handleLanguageChange({ target: { value: 'fr' } } as any)}
    width="30px" height="30px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" className="cursor-pointer hover:scale-110 iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"></path><path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path><path fill="#EEE" d="M12 5h12v26H12z"></path></svg>
  )
}