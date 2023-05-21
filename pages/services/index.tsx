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
    nameEng: "5 inch drone",
    descriptionEng: [
      <p>Quick and agile</p>,
      <p>Max speed 180km/h</p>,
      <p>GoPro Hero 11 footage<p/>,
 <p>Stabilization without any additional charge</p>,
    ],
    namePL: "5-calowy dron z GoPro",
    descriptionPL: [
      <p>Szybki i zwinny</p>,
      <p>Prędkość maksymalna 180km/h</p>,
      <p>Nagrania z GoPro Hero 11</p>,
 <p>Sablilizacja w cenie</p>,
    ],
  },
  {
    id: 2,
    videoSrc: "https://www.youtube.com/embed/LKMJBZGqbAQ?start=16",
    nameEng: "Cinewhoop",
    descriptionEng: [
      <p>Slow and steady</p>,
      <p>safe to fly close to objects and people</p>,
      <p>GoPro Hero 11 footage<p/>,
 <p>Stabilization without any additional charge</p>,
    ],
    namePL: "Cinewhoop",
    descriptionPL: [
      <p>Do wolnych i precyzyjnych lotów</p>,
      <p>Można nim bezpiecznie latać blisko obieków i ludzi</p>,
      <p>Nagrania z GoPro Hero 11</p>,
 <p>Sablilizacja w cenie</p>,
    ],
  },
  // {
  //   id: 3,
  //   videoSrc: "https://www.youtube.com/embed/_YPhO6OzJAg?start=6",
  //   nameEng: "Cinelifter",
  //   descriptionEng:
  //     "Can carry heavy cinematic cameras like RED Komodo, fully protected",
  //   namePL: "Cinelifter",
  //   descriptionPL:
  //     "Może unieść kamery filmowe takie jak RED Komodo, w pełni osłonięty",
  // },
  {
    id: 4,
    videoSrc: "https://www.youtube.com/embed/hnnfpxFlS2E?start=23",
    nameEng: "Live Broadcast",
    descriptionEng: [
      <p>FPV Drones using the DJI O3 Air Unit</p>,
      <p>Classic DJI Air 2s drone </p>,
      <p>Both can transmit 1080p video that can used for live broadcast</p>,
      <p>Add a unique perspective to your events and share it live!</p>,
    ],
    namePL: "Transmisja na żywo",
    descriptionPL: [
      <p>Drony FPV wyposażone w O3 Air Unit</p>,
      <p>Klasyczny dron DJI Air 2s </p>,
      <p>
        Oba mogą nadawać wideo w jakości 1080p, które może zostać wykorzystane w
        transmisjach na żywo
      </p>,
      <p>
        Pokaż swoje wydarzenie z nowej perspektywy i udostępniaj je na żywo!
      </p>,
    ],
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
          <p className="pb-10">
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
                      <Disclosure.Button className="w-full py-3 mt-2 shadow-md bg-gray-50 dark:bg-gray-900 dark:bg-opacity-70 bg-opacity-70  pl-5 flex justify-between backdrop-blur-sm">
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
                      <Disclosure.Panel className="pt-5 bg-gray-50 dark:bg-gray-900 dark:bg-opacity-40 bg-opacity-40 shadow-md backdrop-blur-sm">
                        <p className="mb-3">
                          {context.siteLanguage === "en"
                            ? drone.descriptionEng
                            : drone.descriptionPL}
                        </p>
                        <div className="w-full sm:w-3/5 m-auto">
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
                        </div>
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
