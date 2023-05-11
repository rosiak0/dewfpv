import { createContext, useEffect, useState } from "react";

type Language = "en" | "pl";

const LanguageContext = createContext<{
  siteLanguage: Language;
  setSiteLanguage: React.Dispatch<React.SetStateAction<Language>>;
}>({
  siteLanguage: "en",
  setSiteLanguage: () => {},
});

type LanguageProviderProps = {
  children: React.ReactNode;
};

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [siteLanguage, setSiteLanguage] = useState<Language>("en");

  useEffect(() => {
    const userLanguage = navigator.language.toLowerCase();
    const language = userLanguage === "pl" ? "pl" : "en";
    setSiteLanguage(language);
  }, []);

  return (
    <LanguageContext.Provider value={{ siteLanguage, setSiteLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
