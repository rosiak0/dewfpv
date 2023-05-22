import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { CircleFlag } from "react-circle-flags";

const flagUK = <CircleFlag countryCode="gb" className="h-4 flex text-center" />;
const flagPL = <CircleFlag countryCode="pl" className="h-4" />;

const LanguageSwitch = () => {
  const context = useContext(LanguageContext);

  return (
    <button
      onClick={() =>
        context.setSiteLanguage(context.siteLanguage === "en" ? "pl" : "en")
      }
      className="my-2 lg:my-0 text-lg transition-all lg:mx-2 text-gray-900 dark:text-gray-50 transform hover:scale-110 duration-200 lg:w-10 hover:font-bold lg:flex lg:justify-center"
    >
      {context.siteLanguage === "pl" ? flagUK : flagPL}
    </button>
  );
};
export default LanguageSwitch;
