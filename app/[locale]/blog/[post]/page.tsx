import BlogSection from "@/app/sections/BlogSection";
import HeroPost from "@/app/sections/HeroPost";
import StyledMarkdown from "@/components/MarkdownCustom";
import { client } from "@/sanity/client";
import Markdown from "markdown-to-jsx";


async function getArticleFR(slug: string) {
  const query = `
        *[_type ==  "post_fr" && slug.current == "${slug}"][0]{
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
async function  getArticleEN(slug: string) {
  const query = `
        *[_type ==  "post_en" && slug.current == "${slug}"][0]{
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

async function  getArticleES(slug: string) {
  const query = `
        *[_type ==  "post_es" && slug.current == "${slug}"][0]{
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


type PropsPostPage = {
  params: {
      locale: string;
      post: string;
  }
}
const Post = async ({params}: PropsPostPage) => {

  
    const { locale, post } = params;

    let data;
    if (locale === "en") {
      data = await getArticleEN(post);
    }
    if (locale === "fr") {
      data = await getArticleFR(post);
    }
    if (locale === "es") {
      data = await getArticleES(post);
    }
    console.log(post)
    console.log(data)

    let posts = [];
    if (locale === "en") {
      posts = await getPostsEN();
    }
    if (locale === "fr") {
      posts = await getPostsFR();
  
    }
    if (locale === "es") {
      
      posts = await getPostsES();
  
    }
   


    
  
    return (
      <>

      <HeroPost data={data}/>

      
      
     <div className="max-w-screen-md m-auto py-20 px-4">
            <div>
                <h1 className="text-4xl font-bold uppercase">{data.title}</h1>
                <p className="text-gray-500 text-sm mb-10">{data.publishedAt && new Date(data.publishedAt).toDateString()}</p>
              </div>

              <div className="mb-20 pb-10 border-b-4 border-blue-700">
                  <Markdown>
                  {data.excerpt}
                </Markdown>

              </div>
           
           <StyledMarkdown>{data.bodyMD}</StyledMarkdown>

         
      </div>
      <div className="max-w-screen-md m-auto pb-10 px-4">
           <BlogSection data={posts} locale={locale} />
      </div>
      
    </>
    );
  };
  
  export default Post;
  

