import Button from "@/components/Button";
import { Lato } from "next/font/google"
import { HeroBlogData, SectioData } from "../types";
import Markdown from "markdown-to-jsx";
import { useTranslations } from "next-intl";
import { urlFor } from "@/sanity/client";
import { Generals } from '../types/index';
import BtnContact from "@/components/BtnContact";
import Link from "next/link";

const lato = Lato({
  style: "normal",
  subsets: ['latin'],
  weight: '900'
})




type PropsHeroSection = {
  data: SectioData | HeroBlogData |any 
  dataGenerals?: Generals
  locale: string
}
const HeroHome = ({data, dataGenerals, locale} : PropsHeroSection) => {


  
  const dataHero : SectioData = data;
  console.log("hola",dataHero)
  
    const t = useTranslations("Buttons");

    console.log("aqui estamoa", data?.background?.asset)
    return (
      <div id="HeroHome" className='w-full h-screen'>
         <img
              className='top-0 left-0 w-full h-screen object-cover'
              src={urlFor(dataHero?.background?.imagenPC?.asset).url()}
              alt="hola"
            />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
          <div className={`${lato.className} md:left-[10%] max-w-[500px] m-auto absolute p-4`}>
              <Markdown
                  className="text-white text-lg my-4"
                   options={{
                    overrides: {
                      h1: {
                        props: {
                          className: 'font-bold text-5xl md:text-7xl drop-shadow-2xl',
                        },
                      },
                      h2: {
                        props: {
                          className: 'font-bold text-3xl drop-shadow-md mb-3 break-words',
                        },
                      },
                      h3: {
                        props: {
                          className: 'font-bold text-2xl drop-shadow-sm mb-2 break-words',
                        },
                      },
                      p: {
                        props: {
                          className: 'mb-4 break-words', // Ajusta el texto en párrafos largos
                        },
                      },
                                },
                              }}
              >
                  {
                  data.text 
                    
                }
              </Markdown>

                <div className="flex gap-2 md:flex-row flex-col">
                  <Button isExternal as="a" href={dataGenerals?.cvUrl} iconPosition="left" label={t("cv")} type="light">
                  <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"

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
                  <Link className="font-semibold border-solid border-2 py-2 px-10 flex items-center justify-center duration-500 bg-white text-xl border-white text-black hover:bg-gray-300 hover:border-gray-300" href={`/${locale}/#Contact`}>{t("contact")}</Link>
                  </div>
           

          </div>
        </div>
    </div>
    );
}

export default HeroHome; 