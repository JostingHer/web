
import { Generals } from '@/app/types'
import { useTranslations } from 'next-intl';
import React from 'react'


type Props = {
    dataGenerals?: Generals
  }
function BtnContact({dataGenerals} : Props) {
  const t = useTranslations("Buttons");

  return (

              <div className="compartir">
                <span>{t("importantLinks")}</span>

                <nav>
                <a target='_blank' href={`https://wa.me/${dataGenerals?.contact[0]?.info}?text=¡Hola Ruben Viñals, somos...!`} title='link'><i className="fab fa-whatsapp"></i></a>
                <a target='_blank' href={dataGenerals?.cvUrl} title='cv'><i className="fa-solid fa-file-pdf"></i></a>
                <a target='_blank' href={`mailto:${dataGenerals?.contact[1].info}`} title='link'><i className="fa-solid fa-envelope"></i></a>

                </nav>

            </div>
  
  )
}

export default BtnContact