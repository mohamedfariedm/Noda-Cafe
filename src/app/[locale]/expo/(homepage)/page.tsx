import initTranslations from "@/app/i18n";
import {
  AboutApp,
  Hero,
  OurStory,
  Products,
 Partners,
 Contact,
} from "./_components";

const Home = async ({ params: { locale } }: { params: { locale: string } }) => {

  const { t } = await initTranslations(locale, ["expo"]);

  return (
    <section className="bg-[#281708] ">
      <Hero t={t}  />
       <div className=" flex flex-col gap-[96px] px-5 xl:px-0">
      <AboutApp t={t}/>
      <OurStory t={t}/>
      <Products />
      <Partners t={t} />
      <Contact  t={t}/>
      </div>
    </section>
  );
};

export default Home;
