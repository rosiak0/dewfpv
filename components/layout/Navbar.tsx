import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import Socials from "../Socials";
import LanguageSwitch from "../ui/LanguageSwitch";
import ThemeSwitch from "../ui/ThemeSwitch";

const links = [
  // { href: "/", textEng: "Dew Aerials", textPl: "Dew Aerials" },
  // { href: "/projects", textEng: "Projects", textPl: "Projekty" },

  { href: "/services", textEng: "Services", textPl: "Usługi" },
  { href: "/contact", textEng: "Contact", textPl: "Kontakt" },
  { href: "/about", textEng: "About", textPl: "O mnie" },
];

const Navbar = () => {
  const context = useContext(LanguageContext);
  const path = usePathname();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className="fixed z-30 w-full shadow-md bg-gray-50 dark:bg-gray-900 dark:bg-opacity-70 bg-opacity-70 backdrop-blur-md">
      <div className="max-w-full lg:w-3/5 lg:mx-auto mx-3 py-4 ">
        <div className="flex flex-wrap justify-between">
          <div className="inline-flex">
            <Link href="/">
              <p className="inline-flex items-center">
                <span className="text-xl text-gray-900 mr-5 dark:text-gray-50 font-bold uppercase tracking-wide transition-all duration-200 hover:scale-105">
                  DEW AERIALS
                </span>
              </p>
            </Link>
            <Socials />
          </div>
          <button
            className=" inline-flex hover:bg-opacity-50 hover:bg-gray-900 dark:hover:bg-gray-50 rounded lg:hidden text-gray-900 dark:text-gray-50 ml-auto hover:text-gray-50 dark:hover:text-gray-900 outline-none"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <ul className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-end  flex flex-col lg:h-auto">
              {links.map((link) => (
                <li
                  className="transition-all hover:scale-105 text-md lg:mx-4 my-2 lg:my-0 hover:duration-200 "
                  key={link.href}
                >
                  <div>
                    <Link
                      className={`${
                        link.href === path
                          ? "font-bold "
                          : "text-gray-900 dark:text-gray-50 "
                      } `}
                      href={link.href}
                    >
                      {context.siteLanguage === "en"
                        ? link.textEng
                        : link.textPl}
                    </Link>
                  </div>
                </li>
              ))}
              <LanguageSwitch />
              <ThemeSwitch />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
