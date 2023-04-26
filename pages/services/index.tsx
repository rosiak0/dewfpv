"use client";

import PageWrapper from "../../components/PageWrapper";
import TextWrapper from "../../components/TextWrapper";
import PageTitle from "../../components/PageTitle";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import Image from "next/image";
import fiveInch from "../../public/5inch.webp";
import cinewhoop from "../../public/cinehwoop.webp";
import dji from "../../public/air 2s.jpg";
import cinelifter from "../../public/cinelifter.webp";

const drones = [
  {
    id: 1,
    image: {
      src: fiveInch,
      altEng: "5 inch drone",
      altPl: "5-calowy dron",
    },
    nameEng: "5 inch drone with a GoPro",
    descriptionEng: "Quick and agile, max speed 180km/h, wateproof",
    namePL: "5-calowy dron z GoPro",
    descriptionPL: "Szybki i zwinny, maksymalna prędkość 180km/h, wodoodporny",
  },
  {
    id: 2,
    image: {
      src: cinewhoop,
      altEng: "cinehwoop drone",
      altPl: "dron typu cinewhoop",
    },
    nameEng: "Cinewhoop",
    descriptionEng:
      "Slow and steady, can fly close to objects and people, indestructible",
    namePL: "Cinewhoop",
    descriptionPL:
      "Wolny i pewny, można nim latać blisko obieków i ludzi, niezniszczalny",
  },
  {
    id: 3,
    image: {
      src: cinelifter,
      altEng: "cinelifter drone",
      altPl: "dron typu cinelifter",
    },
    nameEng: "Cinelifter",
    descriptionEng:
      "Can carry heavy cinematic cameras like RED Komodo, fully protected",
    namePL: "Cinelifter",
    descriptionPL:
      "Może unieść kamery filmowe takie jak RED Komodo, w pełni osłonięty",
  },
  {
    id: 4,
    image: { src: dji, altEng: "dji drone", altPl: "dron komercyjny dji" },
    nameEng: "Live Broadcast",
    descriptionEng:
      "FPV Drones and DJI Air 2s can transmit 1080p video that can used for live broadcast",
    namePL: "Transmisja na żywo",
    descriptionPL:
      "Drony FPV oraz DJI Air 2s mogą nadawać wideo w jakości 1080p, która może zostać wykorzystana w transmisjach na żywo",
  },
];

const Services = () => {
  const context = useContext(LanguageContext);

  return (
    <PageWrapper>
      <PageTitle>
        {context.siteLanguage === "en" ? "Services" : "Usługi"}
      </PageTitle>
      <TextWrapper>
        <p className="pb-20">
          {context.siteLanguage === "en"
            ? "We offer a range of drones that can help you fulfill your vision. We understand that different projects require different types of drones, and that's why we've got you covered with a variety of options to choose from. Here are just a few of the types of drones that we offer"
            : "Oferujemy gamę dronów, które pomogą Ci zrealizować Twoją wizję. Rozumiemy, że różne projekty wymagają różnych typów dronów, dlatego mamy dla Ciebie wiele opcji do wyboru. Oto kilka typów dronów, które oferujemy."}
        </p>
        <ul>
          {drones.map((drone) => (
            <li className="pb-20" key={drone.id}>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-2xl">
                    {context.siteLanguage === "en"
                      ? drone.nameEng
                      : drone.namePL}
                  </h1>
                  <p>
                    {context.siteLanguage === "en"
                      ? drone.descriptionEng
                      : drone.descriptionPL}
                  </p>
                </div>
                <Image
                  className=""
                  src={drone.image.src}
                  width={150}
                  height={150}
                  alt={
                    context.siteLanguage === "en"
                      ? drone.image.altEng
                      : drone.image.altPl
                  }
                />
              </div>
            </li>
          ))}
        </ul>
      </TextWrapper>
    </PageWrapper>
  );
};
export default Services;
