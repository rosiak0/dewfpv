//regular navbar

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const links = [
  { href: "/", textEng: "Dew Drones", textPl: "Dew Drones" },
  // { href: "/projects", textEng: "Projects", textPl: "Projekty" },
  { href: "/services", textEng: "Services", textPl: "Usługi" },
  { href: "/contact", textEng: "Contact", textPl: "Kontakt" },
];

const NavbarDesktop = () => {
  const context = useContext(LanguageContext);
  const path = usePathname();

  return (
    <nav className="z-30 fixed w-full shadow-md  bg-gray-50 dark:bg-gray-900">
      <div className="max-w-full lg:w-3/5 lg:mx-auto mx-3 py-4">
        <ul className="flex justify-between">
          {links.map((link) => (
            <li className="hover:font-bold w-40 mx-1" key={link.href}>
              <div>
                <Link
                  className={`${
                    link.href === path
                      ? "font-bold "
                      : "text-gray-900 dark:text-gray-50 hover:duration-200"
                  } `}
                  href={link.href}
                >
                  {context.siteLanguage === "en" ? link.textEng : link.textPl}
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
        </ul>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
