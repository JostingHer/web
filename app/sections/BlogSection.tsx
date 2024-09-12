import BlogCard from '@/components/BlogCard'
import React from 'react'
import { Post } from '../types'
import { useTranslations } from 'next-intl'

type PropsBlogSection = {
  data?: Post[]
  locale: string
}


function BlogSection({data, locale} : PropsBlogSection) {

  const t = useTranslations("Sections");

  return (
    <section id='Blog' className='px-6 my-10'>

    <h2 className="mt-5 mb-10 font-bold text-4xl  text-sky-600">{t("personalBlog")}</h2>

    <div className='grid gap-4 tall:grid-cols-3'>
        {data && data.length > 0 && <BlogCard post={data[0]} locale={locale} />}
        {data && data.length > 1 && <BlogCard post={data[1]} locale={locale} />}
        {data && data.length > 2 && <BlogCard post={data[2]} locale={locale} />}
      </div>

    </section>
  )
}

export default BlogSection