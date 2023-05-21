import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Socials from "./Socials";
import LanguageSwitch from "./LanguageSwitch";
import ThemeSwitch from "./ThemeSwitch";

const links = [
  // { href: "/", textEng: "Dew Aerials", textPl: "Dew Aerials" },
  // { href: "/projects", textEng: "Projects", textPl: "Projekty" },
  { href: "/services", textEng: "Services", textPl: "Usługi" },
  { href: "/contact", textEng: "Contact", textPl: "Kontakt" },
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
        <ul className="flex flex-wrap justify-between">
          <li>
            <div className="inline-flex">
              <Link href="/">
                <p className="inline-flex items-center">
                  <span className="text-xl text-gray-900 mr-5 dark:text-gray-50 font-bold uppercase tracking-wide">
                    DEW AERIALS
                  </span>
                </p>
              </Link>
              <Socials />
            </div>
          </li>
          <li>
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
          </li>
          {/*Note that in this div we will use p ternary operator to decide whether or not to display the content of the div  */}
          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            {/* <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"> */}
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-end  flex flex-col lg:h-auto">
              {links.map((link) => (
                <li
                  className="hover:font-bold text-md lg:mx-4 my-2 lg:my-0 "
                  key={link.href}
                >
                  <div>
                    <Link
                      className={`${
                        link.href === path
                          ? "font-bold "
                          : "text-gray-900 dark:text-gray-50 hover:duration-200"
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

              {/* <Link href="/">
                <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ">
                  Home
                </p>
              </Link>
              <Link href="/services">
                <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                  Services
                </p>
              </Link>
              <Link href="/about">
                <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                  About us
                </p>
              </Link>
              <Link href="/contact">
                <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                  Contact
                </p>
              </Link> */}
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
