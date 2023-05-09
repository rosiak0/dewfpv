import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeSwitch from "./ThemeSwitch";

const Footer = () => {
  const context = useContext(LanguageContext);

  // const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <footer className="fixed bottom-0 w-full bg-gray-50 dark:bg-gray-900 ">
      <div className="z-30 flex justify-between max-w-full lg:w-3/5 lg:mx-auto py-4 mx-3 dark:text-gray-900 dark:hover:text-gray-500  text-gray-50 hover:text-gray-500 duration-200">
        <div className="flex">
          <ThemeSwitch />
          {/* <button
            onClick={()=>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
            className="mx-1 transition-all text-gray-900 dark:text-gray-50 duration-200"
          >
            {theme == "light" ? "dark" : "light"}
          </button> */}
          <button
            onClick={() =>
              context.setSiteLanguage(
                context.siteLanguage === "en" ? "pl" : "en"
              )
            }
            className="mx-1 transition-all text-gray-900 dark:text-gray-50 duration-200 w-10"
          >
            {context.siteLanguage === "pl" ? "eng" : "pl"}
          </button>
        </div>
        <h3 className="text-sm text-end lg:w-3/5 mx-3 ">
          Copyright © {new Date().getFullYear()}
        </h3>
      </div>
    </footer>
  );
};
export default Footer;
