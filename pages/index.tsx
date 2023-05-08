"use client";

import PageWrapper from "../components/PageWrapper";
import TextWrapper from "../components/TextWrapper";
// import PageTitle from "../components/PageTitle";
import ShowReel from "../components/ShowReel";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";
import Link from "next/link";

const experience = new Date().getFullYear() - 2017;

export default function Home() {
  const context = useContext(LanguageContext);
  return (
    <PageWrapper>
      {/* <PageTitle>{context.siteLanguage === "en" ? "About" : "O nas"}</PageTitle> */}
      <TextWrapper>
        <div>
          {" "}
          <ShowReel />
          <p className="md:text-base text-sm my-10">
            {context.siteLanguage === "en"
              ? `Welcome to Dew Aerials, where we specialize in FPV drone videography. With ${experience} years of experience, we deliver stunning shots for commercial, real estate, and action sports videos. Our passion and cutting-edge techniques push the boundaries of what's possible. Choose Dew Aerials and take your vision to new heights.`
              : `Witaj w Dew Aerials, jesteśmy specjalistami w dziedzinie filmowania za pomocą dronów FPV. Posiadamy ${experience}-letnie doświadczenie w branży, dostarczając oszałamiające ujęcia dla filmów komercyjnych, nieruchomości oraz sportów ekstremalnych. Nasza pasja oraz innowacyjne techniki pozwalają nam przekraczać granice możliwości. Wybierz Dew Aerials i osiągnij nowe wysokości.`}
          </p>
          <div className="flex justify-around mb-10">
            <Link href="/services">
              <button className="w-56 h-10 border border-1 dark:border-gray-50 border-gray-900">
                Explore our options
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-56 h-10 border border-1 dark:border-gray-900 border-gray-50 bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900">
                Hire us
              </button>
            </Link>
          </div>
        </div>
      </TextWrapper>
    </PageWrapper>
  );
}
