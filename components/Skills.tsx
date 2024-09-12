import { Skills as SkillsTypes} from '@/app/types'
import { urlFor } from '@/sanity/client'
import React from 'react'

type PropsSkillsSection = {
  data?: SkillsTypes[]
}

const Skills = ({data} : PropsSkillsSection) => {
  return (
    <div className='grid grid-cols-3 gap-5 mx-auto px-6 md:grid-cols-6 pt-20 pb-10'>
        {
          data?.map((skill, index) => (
            <div key={index}>
              <img className='max-w-10 mx-auto' src={urlFor(skill?.icon?.asset).url()} alt="skill" />
              <p className='font-semibold text-center'>{skill?.info}</p>
            </div>
          ))
        }
    </div>
  )
}

export default Skills;
 