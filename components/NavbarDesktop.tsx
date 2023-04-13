import Link from "next/link";

import { usePathname } from "next/navigation";

import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const links = [
  { href: "/", text: "Dew" },
  { href: "/projects", text: "Projects" },
  { href: "/services", text: "Services" },
  { href: "/contact", text: "Contact" },
];

const NavbarDesktop = () => {
  const path = usePathname();

  return (
    <nav className="fixed w-full shadow-lg">
      <div className="w-full lg:w-3/5 lg:mx-auto mx-3 py-4 ">
        <ul className="flex justify-between">
          {links.map((link) => (
            <li
              className="hover:font-bold hover:duration-100 w-40 mx-1"
              key={link.href}
            >
              <div>
                <Link
                  className={`${link.href === path ? "font-bold" : ""} `}
                  href={link.href}
                >
                  {link.text}
                </Link>
              </div>
            </li>
          ))}

          <li className="flex justify-between">
            <div className="w-10 my-auto">
              <Link href="https://www.youtube.com/@DewFPV">
                <BsYoutube />
              </Link>
            </div>
            <div className="w-10 my-auto">
              <Link href="https://www.instagram.com/dewfpv/">
                <BsInstagram />
              </Link>
            </div>
            <div className="w-10 my-auto">
              <Link href="https://www.facebook.com/dew.fpv">
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
