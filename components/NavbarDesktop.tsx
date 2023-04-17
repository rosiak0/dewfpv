//regular navbar

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const links = [
  { href: "/", text: "Dew" },
  { href: "/projects", text: "Projects" },
  { href: "/services", text: "Services" },
  { href: "/contact", text: "Contact" },
];

const NavbarDesktop = () => {
  const context = useContext(LanguageContext);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const path = usePathname();

  return (
    <nav className="fixed w-full shadow-md">
      <div className=" w-full lg:w-3/5 lg:mx-auto mx-3 py-4 ">
        <ul className="flex justify-between">
          {links.map((link) => (
            <li className="hover:font-bold  w-40  mx-1" key={link.href}>
              <div>
                <Link
                  className={`${
                    link.href === path
                      ? "font-bold "
                      : "text-gray-500 hover:text-900 dark:hover:text-gray-50 hover:duration-200"
                  } `}
                  href={link.href}
                >
                  {link.text}
                </Link>
              </div>
            </li>
          ))}

          <li className="flex justify-between">
            <div className="w-10 my-auto">
              <Link href="https://www.youtube.com/@DewFPV" target="_blank">
                <BsYoutube />
              </Link>
            </div>
            <div className="w-10 my-auto">
              <Link href="https://www.instagram.com/dewfpv/" target="_blank">
                <BsInstagram />
              </Link>
            </div>
            <div className="w-10 my-auto">
              <Link href="https://www.facebook.com/dew.fpv" target="_blank">
                <BsFacebook />
              </Link>
            </div>
          </li>
          <div className="mx-3 flex">
            <button
              onClick={() =>
                theme == "dark" ? setTheme("light") : setTheme("dark")
              }
              className="mx-1 transition-all text-gray-800 dark:text-gray-50 duration-200"
            >
              {theme == "light" ? "dark" : "light"}
            </button>
            <button
              onClick={() =>
                context.setSiteLanguage(
                  context.siteLanguage === "en" ? "pl" : "en"
                )
              }
              className="mx-1 w-10"
            >
              {context.siteLanguage === "pl" ? "eng" : "pl"}
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
