import HeroBlog from "@/app/sections/HeroBlog";
import { Post, SectioData, WebsiteData } from "@/app/types";
import BlogCard from "@/components/BlogCard";
import { client } from "@/sanity/client";


async function getPostsFR() {
  const query = `
        *[_type ==  "post_fr"]{
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
async function getPostsEN() {
  const query = `
        *[_type ==  "post_en"]{
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

async function getPostsES() {
  const query = `
        *[_type ==  "post_es"]{
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

async function getBlogHeroFR() {

  const query = `
  *[_type == "website_fr"][0]{

      heroBlog
     
}
`

    const data = await client.fetch(query);

    return data;
}
async function getBlogHeroEN() {
  const query = `
  *[_type == "website_en"][0]{
    
      heroBlog,
     
}
`
    const data = await client.fetch(query);

    return data;
}

async function getBlogHeroES() {
  const query = `
        *[_type == "website_es"][0]{
          
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

  let data : SectioData | null = null;
  let posts : Post[] = [];

  if (locale === "en") {
    data = await getBlogHeroEN();
    posts = await getPostsEN();
  }
  if (locale === "fr") {
    data = await getBlogHeroFR();
    posts = await getPostsFR();
  }
  if (locale === "es") {
    data = await getBlogHeroES();
    posts = await getPostsES();
  }



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
