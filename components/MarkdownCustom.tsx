// components/StyledMarkdown.tsx
import React from 'react';
import Markdown from 'markdown-to-jsx';

const StyledMarkdown = ({ children, className }: { children: string | any, className?: string }) => {
  return (
    <Markdown
      className={`text-black text-lg my-4 ${className}`}
      options={{
        overrides: {
          h1: {
            props: {
              className: 'font-bold text-4xl drop-shadow-2xl mb-4 break-words',
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
          a: {
            props: {
              className: 'text-blue-500 font-bold underline hover:text-blue-700',
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
          img: {
            props: {
              className: 'w-full h-auto my-4', // Ancho completo y altura automática
            },
          },
          ul: {
            props: {
              className: 'list-disc pl-5 mb-4', // Estilo de lista y espaciado
            },
          },
          ol: {
            props: {
              className: 'list-decimal pl-5 mb-4', // Estilo de lista ordenada y espaciado
            },
          },
          li: {
            props: {
              className: 'mb-2', // Espaciado entre ítems de la lista
            },
          },
        },
      }}
    >
      {children}
    </Markdown>
  );
};

export default StyledMarkdown;
