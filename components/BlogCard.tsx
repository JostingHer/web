import { Post } from '@/app/types';
import { urlFor } from '@/sanity/client';
import React from 'react';

type PropsPostCard = {
  post: Post;
  locale: string;
};

function BlogCard({ post, locale }: PropsPostCard) {
  return (
    <a href={`/${locale}/blog/${post?.slug?.current}`} className="block">
      <div className="overflow-hidden shadow-lg w-full aspect-square group">
        {/* Imagen de portada con efecto de zoom */}
        <div className='w-full aspect-auto'>
          <img
            className="w-full aspect-auto object-cover transition-transform duration-300 hover:scale-105"
            src={urlFor(post?.primaryPhoto?.imagenPC?.asset).url()}
            alt={post.title}
          />
        </div>

        {/* Contenido del post */}
        <div className="px-6 py-4">
          {/* Título del post con truncamiento en dos líneas */}
          <div className="text-xl mb-2 truncate-2-lines group-hover:underline">
            {post?.title}
          </div>
          {/* Fecha de publicación */}
          <p className="text-gray-700 text-sm">
            {post.publishedAt && new Date(post?.publishedAt).toDateString()}
          </p>
        </div>
      </div>
    </a>
  );
}

export default BlogCard;


