import { client } from "@/sanity/client";
import HeroHome from '../sections/HeroHome';
import AboutMe from "../sections/AboutMe";
import Education from "../sections/Education";
import BlogSection from "../sections/BlogSection";
import Experience from '../sections/Experience';
import Skills from "@/components/Skills";
import { Generals } from "../types";
import BtnContact from "@/components/BtnContact";

// OJO
export const revalidate = 60;

async function getPage(locale: string) {
  const query = `
  *[_type == "website_${locale}"][0]{
      heroHome,
      about,
      experience[] {
        ... 
      },
      education[] {
        ... 
      },
      skills[] {
        ... 
      },
      contact[] {
        ... 
      }
}
`
  const data = await client.fetch(query);
  return data;
}

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

async function getGenerals() {
  const query = `
          *[_type ==  "generals"][0]{
            ...,
          "cvUrl": cv.asset->url
            }
    `
  const data = await client.fetch(query);
  return data;
}

type PropsHomePage = {
  params: {
      locale: string;
  }
}

export default async function Home({params}: PropsHomePage) {
 
  const { locale } = params;

  const data = await getPage(locale);
  const posts = await getPosts(locale);

  const generals: Generals  = await getGenerals();
  // console.log("Fetched Data CV:", generals.cv.asset)
  // console.log("generals:", generals)
  
   // Depuración de datos
   // console.log("Fetched Data:", data);

   let aboutSection = data?.about;
   // console.log("About Section:", aboutSection);

   let experienceSection = data?.experience;
   // console.log("experience Section:", experienceSection);

   let educationSection = data?.education;
    // console.log("education Section:", educationSection);

    let contactSection = data?.contact;
    // console.log("contact Section:", contactSection);

    let skillsSection = data?.skills;
    // console.log("skills Section:", skillsSection);

    let heroHomeSection = data?.heroHome;
    // console.log("heroHome Section:", heroHomeSection);





   

  return (
    <div>
          <HeroHome data={heroHomeSection} dataGenerals={generals} locale={locale}></HeroHome>
   

          <div className="max-w-screen-md m-auto">
                <AboutMe data={aboutSection} dataGenerals={generals} />
                <Experience data={experienceSection} />
                <Education data={educationSection} />
                <Skills data={generals.skills} />
                <BlogSection data={posts} locale={locale} />
          </div>


          <BtnContact dataGenerals={generals}/>
        
         
    </div>
  );
}


