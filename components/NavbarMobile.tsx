import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube, BsList } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="fixed w-full">
      <div className="w-3/5 m-auto">
        <BsList />
        <ul className="flex justify-between">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li className="">
            <Link href="https://www.youtube.com/@DewFPV">
              <BsYoutube />
            </Link>
            <Link href="https://www.instagram.com/dewfpv/">
              <BsInstagram />
            </Link>
            <Link href="https://www.facebook.com/dew.fpv">
              <BsFacebook />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
