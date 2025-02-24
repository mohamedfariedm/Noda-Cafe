import initTranslations from "@/app/i18n";
import { Container } from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import {
  AboutApp,
  Articles,
  Blogs,
  Calculate,
  Certifications,
  Faq,
  Hero,
  Numbers,
  OurStory,
  Products,
  BeCloser,
  Testimonials,
  Values,
} from "./_components";
import { Features } from "@/components/Shared";
import CofeTrip from "./_components/CofeTrip";

const Home = async ({ params: { locale } }: { params: { locale: string } }) => {

  const { t } = await initTranslations(locale, ["homepage"]);

  return (
    <section className="bg-[#281708] ">
      <Hero t={t}  />
       <div className="my-[96px] flex flex-col gap-[96px] px-5 xl:px-0">
      <AboutApp t={t}/>
      <Products />
      <CofeTrip t={t}/>
      <OurStory />
      <Testimonials t={t} />
      <Articles t={t}/>
      <BeCloser t={t}/>

      </div>
    </section>
  );
};

export default Home;
