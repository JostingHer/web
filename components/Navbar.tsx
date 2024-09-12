"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const newPath = `/${newLocale}${pathname.substring(locale.length + 1)}/`;
    router.push(newPath);
  };

  return (
    <div className="w-full flex justify-between border-b py-4 fixed">
      <div className="flex gap-4 items-center text-lg">
        {/* Enlace a la home */}
        <Link href={`/${locale}/`}>Home</Link>

        {/* Enlaces a las secciones en la misma página (scroll) */}
        <Link href={`/${locale}/#About`}>{t("about")}</Link>
        <Link href={`/${locale}/#Experience`}>{t("experience")}</Link>
        <Link href={`/${locale}/#Education`}>{t("education")}</Link>
        <Link href={`/${locale}/#Contact`}>{t("contact")}</Link>

        {/* Enlace al blog, que es una página separada */}
        <Link href={`/${locale}/blog`}>{t("blog")}</Link>
      </div>
      <li  className='md:ml-8 text-xl md:my-0 my-7'><Link href={`/${locale}/`} className='text-gray-800 hover:text-gray-400 duration-500'>Home</Link></li>
      <li  className='md:ml-8 text-xl md:my-0 my-7' > <Link href={`/${locale}/#About`} className='text-gray-800 hover:text-gray-400 duration-500'>{t("about")}</Link></li>
      <li  className='md:ml-8 text-xl md:my-0 my-7' ><Link href={`/${locale}/#Experience`} className='text-gray-800 hover:text-gray-400 duration-500'>{t("experience")}</Link></li>
      <li  className='md:ml-8 text-xl md:my-0 my-7' ><Link href={`/${locale}/#Education`} className='text-gray-800 hover:text-gray-400 duration-500'>{t("education")}</Link></li>
      <li className='md:ml-8 text-xl md:my-0 my-7'><Link href={`/${locale}/#Contact`} className='text-gray-800 hover:text-gray-400 duration-500'>{t("contact")}</Link></li>
      <li className='md:ml-8 text-xl md:my-0 my-7'><Link href={`/${locale}/blog`} className='text-gray-800 hover:text-gray-400 duration-500'>{t("blog")}</Link></li>

      {/* Selector de idioma */}
      <select
        title="options lang"
        value={locale}
        onChange={handleLanguageChange}
        className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
};

export default Navbar;
