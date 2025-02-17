import initTranslations from "@/app/i18n";
import { auth } from "@/auth";
import { Container } from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import {
  AboutApp,
  Blogs,
  Calculate,
  Certifications,
  Faq,
  Hero,
  Numbers,
  Products,
  Tamwilk,
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
       <div className="mt-[96px] flex flex-col gap-[96px] px-5 xl:px-0">
      <AboutApp t={t}/>
      <CofeTrip t={t}/>
      {/*
      <Products t={t}/>
      <Calculate />
      <Faq/>
      <Numbers t={t}/>
      <Tamwilk t={t}/>
      <Certifications t={t}/>
       */}
      </div>
    </section>
  );
};

export default Home;
