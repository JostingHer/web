import Button from "@/components/Button";
import { Generals, SectioData } from "../types";

import { urlFor } from "@/sanity/client";
import StyledMarkdown from "@/components/MarkdownCustom";
import { useTranslations } from "next-intl";


type PropsAboutSection = {
  data: SectioData
  dataGenerals?: Generals
}

const AboutMe = ({data, dataGenerals} : PropsAboutSection) => {
  const t = useTranslations("Buttons");

 
    return (
         <>
           <section id="Contact" className="py-20 border-solid border-b-2">
              
               <div className="flex flex-col gap-4 tall:flex-row ">
                <img className="m-auto max-w-40 rounded-xl" src={urlFor(data?.photo?.asset).width(200).url()} alt="ruben"/>
                  <div className="p-6 m-auto">

                <StyledMarkdown className="text-gray-400 ">
                  {data.text}
                </StyledMarkdown>
                
               
                <div className="grid md:grid-cols-2 mb-2">
             
                  <Button isExternal as="a" href={`https://wa.me/${dataGenerals?.contact[0]?.info}?text=¡Hola Ruben Viñals, somos...!`} iconPosition="left" label={dataGenerals?.contact[0]?.info + " "} type="light">
                        <img  className="w-7" src={urlFor(dataGenerals?.contact[0].icon?.asset).url()}  alt="icon" />
                  </Button>
                  <Button isExternal as="a" href={`mailto:${dataGenerals?.contact[1].info}`} iconPosition="left" label="Gmail" type="light">
                        <img  className="w-7" src={urlFor(dataGenerals?.contact[1].icon?.asset).url()}  alt="icon" />
                  </Button>
                 
                </div>
                <Button isExternal as="a" href={dataGenerals?.cvUrl} iconPosition="left" label={t("cv")} type="dark">
                  <svg fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 43.916 43.916"
                      className="h-6 w-6"
                    >
                    <g>
                      <path d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5
                        C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304
                        c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709
                        c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855
                        L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z
                        M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416
                        h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"/>
                    </g>
                    </svg>
                  </Button>

             
                  
                  </div>
               </div>
           </section>
         </>
    );
}

export default AboutMe; 