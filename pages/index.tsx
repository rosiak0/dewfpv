"use client";

import PageWrapper from "../components/PageWrapper";
import TextWrapper from "../components/TextWrapper";
import PageTitle from "../components/PageTitle";
import ShowReel from "../components/ShowReel";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";

const experience = new Date().getFullYear() - 2017;

export default function Home() {
  const context = useContext(LanguageContext);
  return (
    <PageWrapper>
      <PageTitle>{context.siteLanguage === "en" ? "About" : "O nas"}</PageTitle>
      <TextWrapper>
        <p className="md:text-base text-sm mb-10">
          {context.siteLanguage === "en"
            ? `Welcome to Dew Aerials, where we specialize in FPV drone videography. With ${experience} years of experience, we deliver stunning shots for commercial, real estate, and action sports videos. Our passion and cutting-edge techniques push the boundaries of what's possible. Choose Dew Aerials and take your vision to new heights.`
            : `Witaj w Dew Aerials, specjaliści w dziedzinie wideofilmowania za pomocą dronów FPV. Posiadamy ${experience}-letnie doświadczenie w branży, dostarczając oszałamiające ujęcia dla filmów komercyjnych, nieruchomości oraz sportów ekstremalnych. Nasza pasja oraz innowacyjne techniki pozwalają nam przekraczać granice możliwości. Wybierz Dew Aerials i osiągnij nowe wysokości.`}
        </p>
        <ShowReel />
      </TextWrapper>
    </PageWrapper>
  );
}
