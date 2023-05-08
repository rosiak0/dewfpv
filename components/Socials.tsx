import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Link from "next/link";

const Socials = () => {
  return (
    <li className="flex justify-center">
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
  );
};

export default Socials;
