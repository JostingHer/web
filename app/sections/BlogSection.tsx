'use client'
import BlogCard from '@/components/BlogCard'
import React from 'react'
import { Post } from '../types'
import { useTranslations } from 'next-intl'
import { client } from '@/sanity/client'
import { Interview } from '../types/index';
import InterviewCard from '@/components/InterviewCard'

type PropsBlogSection = {
  data?: Post[]
  locale: string
}



async function getGenerals(){
  const query = `
          *[_type ==  "generals"][0]{
              interviewList
            }
    `
  const data = await client.fetch(query);
  return data.interviewList;
}


export default async function BlogSection({data, locale} : PropsBlogSection) {

  const t = useTranslations("Sections");

  const interviewList : Interview[]  = await getGenerals();

  console.log(interviewList)


  return (
    <section id='Blog' className='px-6 my-10'>

    <h2 className="mt-5 mb-10 font-bold text-4xl  text-sky-600">{t("personalBlog")}</h2>

    <div className='grid gap-4 tall:grid-cols-3'>
    {
          interviewList && interviewList.map((inter, index) => (<InterviewCard key={index} interview={inter} />))
        }
        {
          data && data.map((post, index) => (<BlogCard key={index} post={post} locale={locale} />))
        }
      </div>

    </section>
  )
}

