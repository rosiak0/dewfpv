import Footer from "./Footer";
import NavbarDesktop from "./NavbarDesktop";
import ThemedImage from "./ThemedImage";

const Layout = ({ children }: any) => {
  return (
    <>
      <ThemedImage />
      <NavbarDesktop />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
