import BlogSection from "@/app/sections/BlogSection";
import HeroPost from "@/app/sections/HeroPost";
import StyledMarkdown from "@/components/MarkdownCustom";
import { client } from "@/sanity/client";
import Markdown from "markdown-to-jsx";

async function getArticle(slug: string, locale: string) {
  const query = `
    *[_type == "post_${locale}" && slug.current == "${slug}"][0]{
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

async function getPosts(locale: string) {
  const query = `
    *[_type == "post_${locale}"]{
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

  const data = await getArticle(post, locale);
  const posts = await getPosts(locale);


    
  
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
  

