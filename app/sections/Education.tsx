import React from 'react';
import { Education as EducationTypes } from '../types';
import { urlFor } from '@/sanity/client';
import { useTranslations } from "next-intl";
import StyledMarkdown from '@/components/MarkdownCustom';



type PropsEducationSection = {
  data?: EducationTypes[]
}

const Education = ({data} : PropsEducationSection) => {
  
  const t = useTranslations("Sections");

  

  return (
   <section id='Education' className="px-4 py-20 border-solid border-b-2">
        <h2 className="mt-5 mb-10 font-bold text-4xl text-sky-600">{t("educationStudies")}</h2>

        <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="w-full max-w-3xl mx-auto">
                <div className="-my-6 grid md:grid-cols-2 gap-2">
                    {data?.map((edu, index) => (
                        <div key={index} className="relative py-6 pl-8">
                           <div>
                            
                               <img className="my-5 max-w-64 tall:w-32 h-full" src={urlFor(edu?.image?.asset).width(200).url()} alt="imagen" />
              
                                <div> 
                                        <h3 className="mb-1 text-2xl font-bold sm:mb-0">{edu?.degree}</h3>
                                            <div className="flex flex-col items-start mb-1
                                                        group-last:before:hidden before:absolute 
                                                        before:left-2 sm:before:left-0 before:h-4/5
                                                        before:px-px before:bg-slate-400 before:top-5
                                                        before:self-start before:-translate-x-1/2 
                                                        before:translate-y-3 after:absolute after:left-2 
                                                        after:top-12
                                                        sm:after:left-0 after:w-2 after:h-2 after:bg-sky-600 
                                                        after:border-4 after:box-content after:border-slate-50 
                                                        after:rounded-full  after:-translate-x-1/2 
                                                        after:translate-y-1">
                                                              <span className="my-2 translate-y-0.5  items-center justify-center text-xs font-semibold uppercase w-fit p-2 text-sky-600 bg-sky-100 rounded-full">{edu?.date}</span>
                                               
                                                <div className="text-xl font-bold text-gray-400">{edu?.institution}</div>
                                            </div>
                                </div>

                               

                           </div>
                            <div className="text-slate-400">
                                <StyledMarkdown className="text-gray-400 my-0 text-base/6">{edu?.description}</StyledMarkdown>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
   </section>
  );
};

export default Education;