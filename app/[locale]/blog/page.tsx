import HeroBlog from "@/app/sections/HeroBlog";
import { Post, SectioData } from "@/app/types";
import BlogCard from "@/components/BlogCard";
import { client } from "@/sanity/client";


async function getPosts(locale: string) {
  const query = `
        *[_type ==  "post_${locale}"]{
           slug,
          title,
          publishedAt,
          excerpt,
          bodyMD,
          ...
        }
    `
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

async function getBlogHero(locale: string) {
  const query = `
  *[_type == "website_${locale}"][0]{
      heroBlog
  }
  `
  const data = await client.fetch(query);
  return data;
}

type PropsBlogPage = {
  params: {
      locale: string;
  }
}

const Blog = async ({params}: PropsBlogPage) => {
  const { locale } = params;

  const data: SectioData | null = await getBlogHero(locale);
  const posts: Post[] = await getPosts(locale);


    return (
      <> 
   
        <HeroBlog  data={data}/>
        

       <div className="max-w-screen-md m-auto">
        <h2 className="mt-10 mb-10 font-bold text-4xl  text-sky-600">Blog</h2>

          <div className='px-6 grid gap-4 tall:grid-cols-3 pb-20 pt-5'>

          {
                posts.map((post, index) => (
                  <BlogCard key={index} post={post} locale={locale} />
                ))
              }


          </div>
          </div>

      </>
    );
  };

  export default Blog;
