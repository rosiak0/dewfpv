import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeSwitch from "./ThemeSwitch";

const Footer = () => {
  const context = useContext(LanguageContext);

  // const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <footer className="z-30 fixed bottom-0 w-full hover:bg-gray-900 hover:bg-opacity-50 duration-200">
      <h3 className="text-m text-center py-3 lg:w-3/5 m-auto  dark:text-transparent dark:hover:text-gray-50  text-transparent hover:text-gray-900 duration-200">
        Copyright © {new Date().getFullYear()}
      </h3>
    </footer>
  );
};
export default Footer;
