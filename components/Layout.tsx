import Footer from "./Footer";
import Navbar from "./NavbarDesktop";
import ThemedImage from "./ThemedImage";

const Layout = ({ children }: any) => {
  return (
    <>
      <ThemedImage />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
