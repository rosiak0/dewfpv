import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const LanguageSwitch = () => {
  const context = useContext(LanguageContext);

  return (
    <button
      onClick={() =>
        context.setSiteLanguage(context.siteLanguage === "en" ? "pl" : "en")
      }
      className="transition-all text-gray-900 dark:text-gray-50 duration-200 lg:w-10 hover:font-bold"
    >
      {context.siteLanguage === "pl" ? "eng" : "pl"}
    </button>
  );
};
export default LanguageSwitch;
