import { createContext } from "react";
import Language from "../types/Language";

const LanguageContext = createContext<{
  siteLanguage: Language;
  setSiteLanguage: React.Dispatch<React.SetStateAction<Language>>;
}>({
  siteLanguage: "en",
  setSiteLanguage: () => {},
});

export default LanguageContext;
