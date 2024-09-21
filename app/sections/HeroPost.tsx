import React from "react";
import { HeroBlogData, SectioData } from "../types";
import { urlFor } from "@/sanity/client";

type PropsHeroSection = {
    data: SectioData | HeroBlogData | any 
  }
export default function HeroPost({data} : PropsHeroSection) {
    console.log("argilve page", data)

    return (
        <div className='w-full h-96'>
         <img
              className='top-0 left-0 w-full h-full object-cover'
              src={urlFor(data?.primaryPhoto?.imagenPC?.asset).url()}
              alt="hola"
            />
      
    </div>
    );
} 