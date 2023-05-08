"use client";

import PageWrapper from "../components/PageWrapper";
import TextWrapper from "../components/TextWrapper";
import PageTitle from "../components/PageTitle";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";

export default function Home() {
  const context = useContext(LanguageContext);
  return (
    <PageWrapper>
      <PageTitle>About</PageTitle>
      <TextWrapper>
        <p className="md:text-base text-sm">
          {context.siteLanguage === "en"
            ? "Welcome to Dew Aerials, where we specialize in FPV drone videography. With 6 years of experience, we deliver stunning shots for commercial, real estate, and action sports videos. Our passion and cutting-edge techniques push the boundaries of what's possible. Choose Dew Aerials and take your vision to new heights."
            : "Witaj w Dew Aerials, specjaliści w dziedzinie wideofilmowania za pomocą dronów FPV. Posiadamy 6-letnie doświadczenie w branży, dostarczając oszałamiające ujęcia dla filmów komercyjnych, nieruchomości oraz sportów ekstremalnych. Nasza pasja oraz innowacyjne techniki pozwalają nam przekraczać granice możliwości. Wybierz Dew Aerials i osiągnij nowe wysokości."}
        </p>
      </TextWrapper>
    </PageWrapper>
  );
}
