import Footer from "./Footer";
import Navbar from "./NavbarDesktop";
import { useTheme } from "next-themes";
import Image from "next/image";
import darkbg from "../public/bg dark.png";
import lightbg from "../public/bg light.png";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const Layout = ({ children }: any) => {
  const context = useContext(LanguageContext);
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Image
        className="-z-10 absolute h-screen w-auto overflow-hidden opacity-70 object-cover"
        src={theme === "dark" ? darkbg : lightbg}
        width={3840}
        height={2160}
        alt={
          context.siteLanguage === "en"
            ? "Still from an FPV video"
            : "Ujęcie z filmu FPV"
        }
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
