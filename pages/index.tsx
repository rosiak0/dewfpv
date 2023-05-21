import PageWrapper from "../components/PageWrapper";
import TextWrapper from "../components/TextWrapper";
// import PageTitle from "../components/PageTitle";
import ShowReel from "../components/ShowReel";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import Link from "next/link";
import Head from "next/head";

const experience = new Date().getFullYear() - 2017;

export default function Home() {
  const context = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>Dew Aerials</title>
        <meta
          name="description"
          content={
            context.siteLanguage === "en"
              ? "Experienced fpv drone pilot from Warsaw, Poland. Check out my offer"
              : "Doświadczony pilot FPV z Warszawy. Sprawdź moją ofertę"
          }
        />
      </Head>
      <PageWrapper>
        {/* <PageTitle>{context.siteLanguage === "en" ? "About" : "O nas"}</PageTitle> */}
        <TextWrapper>
          <div>
            <ShowReel />
            <p className="md:text-base text-sm my-10">
              {context.siteLanguage === "en"
                ? `Welcome to Dew Aerials, where we specialize in FPV drone videography. With ${experience} years of experience, we deliver stunning shots for commercial, real estate, and action sports videos. Our passion and cutting-edge techniques push the boundaries of what's possible. Choose Dew Aerials and take your vision to new heights.`
                : `Witaj w Dew Aerials, jesteśmy specjalistami w dziedzinie filmowania za pomocą dronów FPV. Posiadamy ${experience}-letnie doświadczenie w branży, dostarczając oszałamiające ujęcia dla filmów komercyjnych, nieruchomości oraz sportów ekstremalnych. Nasza pasja oraz innowacyjne techniki pozwalają nam przekraczać granice możliwości. Wybierz Dew Aerials i osiągnij nowe wysokości.`}
            </p>
            <div className="flex justify-around mb-10 ">
              <Link href="/services">
                <button className="w-56 h-10 border border-1 dark:border-gray-50 border-gray-900 active:bg-gray-900 dark:active:bg-gray-50 dark:active:text-gray-900 active:text-gray-50 duration-200">
                  {context.siteLanguage === "en"
                    ? "Explore our offer"
                    : "Sprawdź naszą ofertę"}
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-56 h-10 border-3 border border-gray-900 dark:border-gray-50 py-2 shadow-sm  text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50 disabled:opacity-30 dark:active:bg-opacity-0 dark:active:text-gray-50 dark:active:border dark:active:border-gray-50 active:bg-opacity-0 active:text-gray-900 active:border active:border-gray-900 duration-200">
                  {context.siteLanguage === "en" ? "Hire us" : "Zatrudnij nas"}
                </button>
              </Link>
            </div>
          </div>
        </TextWrapper>
      </PageWrapper>
    </>
  );
}
