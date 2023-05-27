import TextWrapper from "../../components/layout/TextWrapper";
import { Context, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import Head from "next/head";

const descriptionPL = [
  <p className="mb-4">
    Dzięki mojemu doświadczeniu w wyścigach dronów FPV i udokumentowanym
    sukcesom, przynoszę świeże spojrzenie na świat filmowego FPV. Potrafię
    doskonale funkcjonować w sytuacjach z dużą presją, mając za sobą
    doświadczenie i odniesione sukcesy na torze. Dla mnie tworzenie filmowych
    ujęć FPV to kolejne ekscytujące wyzwanie, które przyjmuję z entuzjazmem.
  </p>,
  <p className="mb-4">
    To, co wyróżnia mnie spośród innych pilotów, to nie tylko moje doświadczenie
    w wyścigach, ale również głęboka pasja do przemysłu filmowego i
    kinematografii. Przez całe życie zanurzałem się w świecie festiwali
    filmowych, podziwiając twórczość wizjonerskich twórców, którzy nieustannie
    poszerzają granice postępu. Rozumiem znaczenie opowiadania historii i
    ważność wyboru odpowiednich kadrów. Wierzę, że to, co stoi za ujęciem, jest
    tym, co naprawdę ma znaczenie.
  </p>,
  <p className="mb-4">
    Kiedy zdecydujesz się na moje usługi, nie dostajesz tylko wykwalifikowanego
    pilota. Nawiązujesz współpracę z osobą, która łączy w sobie techniczną
    wiedzę, spokojne podejście oraz prawdziwą miłość do sztuki filmowej. Razem
    stworzymy niezwykłe wizualizacje, które uchwycają istotę Twojego projektu i
    pozostawiają trwałe wrażenie na widzach.
  </p>,
];
const descriptionENG = [
  <p className="mb-4">
    With a background in FPV drone racing and a track record of successes, I
    bring a unique perspective to the world of cinematic fpv. I thrive in
    high-pressure situations, having experienced and conquered the most
    stressful moments on the race track. For me, cinematic filming is another
    exciting challenge that I eagerly embrace.
  </p>,
  <p className="mb-4">
    What sets me apart is not just my racing background, but also my deep
    passion for the film industry and cinematography. Throughout my life, I have
    immersed myself in film festivals, admiring the work of visionary creators
    who constantly push the boundaries of progress. I understand the importance
    of storytelling and the significance of every angle chosen. I believe that
    the story behind the shot is what truly matters.
  </p>,
  <p className="mb-4">
    When you hire me, you're not just getting a skilled pilot; you're partnering
    with someone who brings a combination of technical expertise, a calm
    demeanor, and a genuine love for the art of filmmaking. Let's collaborate to
    create extraordinary visuals that capture the essence of your project and
    leave a lasting impact on your audience.
  </p>,
];
const About = () => {
  const context = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content={
            context.siteLanguage === "en"
              ? "What distinguishes me from other fpv pilots on the market"
              : "Co wyróżnia mnie na tle innych pilotów fpv"
          }
        />
      </Head>
      <TextWrapper>
        <div className="">
          <h1 className="text-2xl mb-6">
            {context.siteLanguage === "en" ? "My story" : "Moja historia"}
          </h1>
          <p>
            {context.siteLanguage === "en" ? descriptionENG : descriptionPL}
          </p>
        </div>
      </TextWrapper>
    </>
  );
};

export default About;
