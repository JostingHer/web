import { Interview } from '@/app/types'; // Asegúrate de que el tipo Interview esté definido en tu archivo de tipos
import { urlFor } from '@/sanity/client';
import React from 'react';

type PropsInterviewCard = {
  interview: Interview;
};

function InterviewCard({ interview }: PropsInterviewCard) {
  return (
    <a
      href={`${interview.link}`}
      className="block"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="overflow-hidden shadow-lg h-64 group">
        {/* Imagen de portada con efecto de zoom */}
        <img
          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
          src={urlFor(interview?.image?.asset).url()}
          alt={interview.title}
        />

        <h3 className='p-2 px-4 text-xl font-medium mt-1 mb-4 text-sky-600'>
        {interview?.title}
        </h3>
      </div>
    </a>
  );
}

export default InterviewCard;
