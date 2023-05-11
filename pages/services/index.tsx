import PageWrapper from "../../components/PageWrapper";
import TextWrapper from "../../components/TextWrapper";
import Head from "next/head";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
// import PageTitle from "../../components/PageTitle";

import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const drones = [
  {
    id: 1,
    videoSrc: "https://www.youtube.com/embed/cVE-l-yN3lw?start=23",
    nameEng: "5 inch drone with a GoPro",
    descriptionEng: "Quick and agile, max speed 180km/h, wateproof",
    namePL: "5-calowy dron z GoPro",
    descriptionPL: "Szybki i zwinny, maksymalna prędkość 180km/h, wodoodporny",
  },
  {
    id: 2,
    videoSrc: "https://www.youtube.com/embed/LKMJBZGqbAQ",
    nameEng: "Cinewhoop",
    descriptionEng:
      "Slow and steady, safe to fly close to objects and people, practically indestructible",
    namePL: "Cinewhoop",
    descriptionPL:
      "Do wolnych i precyzyjnych lotów, można nim bezpiecznie latać blisko obieków i ludzi, praktycznie niezniszczalny",
  },
  {
    id: 3,
    videoSrc: "https://www.youtube.com/embed/_YPhO6OzJAg",
    nameEng: "Cinelifter",
    descriptionEng:
      "Can carry heavy cinematic cameras like RED Komodo, fully protected",
    namePL: "Cinelifter",
    descriptionPL:
      "Może unieść kamery filmowe takie jak RED Komodo, w pełni osłonięty",
  },
  {
    id: 4,
    videoSrc: "https://www.youtube.com/embed/hnnfpxFlS2E",
    nameEng: "Live Broadcast",
    descriptionEng:
      "FPV Drones using the DJI O3 Air Unit and the classic DJI Air 2s drone can transmit 1080p video that can used for live broadcast",

    namePL: "Transmisja na żywo",
    descriptionPL:
      "Drony FPV wyposażone w O3 Air ?Unit od DJI oraz klasyczny dron DJI Air 2s mogą nadawać wideo w jakości 1080p, które może zostać wykorzystane w transmisjach na żywo",
  },
];

const Services = () => {
  const context = useContext(LanguageContext);
  const [activePanel, setActivePanel] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>{context.siteLanguage === "en" ? "Services" : "Usługi"}</title>
        <meta
          name="description"
          content={
            context.siteLanguage === "en"
              ? "Check the drones we offer and the services that we can provide. It includes regular dji drones, fpv drones, cinewhoops, cinelifters and live broadcasting"
              : "Sprawdź drony, które oferujemy oraz usługi, które możemy świadczyć. Zawierają one regularne drony DJI, drony fpv, cinewhoopy, cineliftery i transmisję na żywo."
          }
        />
      </Head>
      <PageWrapper>
        {/* <PageTitle>
        {context.siteLanguage === "en" ? "Services" : "Usługi"}
      </PageTitle> */}
        <TextWrapper>
          <h1 className="text-2xl mb-10">
            {context.siteLanguage === "en"
              ? "Check out the gear we have and the possibilities it gives"
              : "Sprawdź, jakie możliwości daje sprzęt, który posiadamy"}
          </h1>
          <p className="pb-20">
            {context.siteLanguage === "en"
              ? "We offer a range of drones that can help you fulfill your vision. We understand that different projects require different types of drones, and that's why we've got you covered with a variety of options to choose from."
              : "Oferujemy gamę dronów, które pomogą Ci zrealizować Twoją wizję. Rozumiemy, że różne projekty wymagają różnych typów dronów, dlatego mamy dla Ciebie wiele opcji do wyboru."}
          </p>
          <ul>
            {drones.map((drone) => (
              <li key={drone.id}>
                <Disclosure
                  as="div"
                  className="w-full"
                  // open={activePanel === drone.id}
                  onChange={() =>
                    setActivePanel(activePanel === drone.id ? null : drone.id)
                  }
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full py-5 mt-2 bg-gray-900 dark:bg-opacity-50 bg-opacity-5 shadow pl-5 flex justify-between">
                        <div></div>
                        <h1 className="text-xl text-center">
                          {context.siteLanguage === "en"
                            ? drone.nameEng
                            : drone.namePL}
                        </h1>
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 duration-200`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="p-5">
                        <p className="mb-5">
                          {context.siteLanguage === "en"
                            ? drone.descriptionEng
                            : drone.descriptionPL}
                        </p>

                        <iframe
                          className="m-auto aspect-video w-full h-auto"
                          width="560"
                          height="315"
                          src={drone.videoSrc}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </li>
            ))}
          </ul>
        </TextWrapper>
      </PageWrapper>
    </>
  );
};
export default Services;
