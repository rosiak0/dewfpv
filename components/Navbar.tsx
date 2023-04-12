import Link from "next/link";

import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const links = [
  { href: "/", text: "Dew" },
  { href: "/projects", text: "Projects" },
  { href: "/services", text: "Services" },
  { href: "/contact", text: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed w-full">
      <div className="w-full lg:w-3/5 lg:mx-auto mx-3">
        <ul className="flex justify-between">
          {links.map((link) => (
            <li className="hover:underline" key={link.href}>
              <div>
                <Link href={link.href}>{link.text}</Link>
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

export default Navbar;
