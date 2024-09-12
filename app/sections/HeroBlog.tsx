import Button from "@/components/Button";
import { HeroBlogData, SectioData, WebsiteData } from "../types";
import Markdown from "markdown-to-jsx";
import { Lato } from "next/font/google";
import { useTranslations } from "next-intl";
import { urlFor } from "@/sanity/client";


const lato = Lato({
  style: "normal",
  subsets: ['latin'],
  weight: '900'
})



type PropsHeroSection = {
  data: SectioData | HeroBlogData |any 
}
const HeroBlog = ({data} : PropsHeroSection) => {

  console.log("desde hero blog")
  console.log(data)

  const dataHero : HeroBlogData = data;


  const t = useTranslations("Buttons");
  return (
  <>
          <div className='w-full h-screen'>
          <img
              className='top-0 left-0 w-full h-screen object-cover'
              src={urlFor(dataHero?.heroBlog.background?.imagenPC?.asset).url()}
              alt="hola"
            />

     
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className={`${lato.className} md:left-[10%] max-w-[500px] m-auto absolute p-4`}>
           
           {
            data &&  <Markdown
                  className="text-white text-lg my-4"
                  options={{
                    overrides: {
                      h1: {
                        props: {
                          className: 'font-bold text-5xl md:text-7xl drop-shadow-2xl',
                        },
                      },
                    },
                  }}
              >
              
                  {
                  dataHero?.heroBlog?.text + 'jolalakan'
                }
        </Markdown>
           }
         
        </div>
      </div>
  </div>
  </>
  );
}

export default HeroBlog; 