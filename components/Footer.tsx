const Footer = () => {
  return (
    <footer className="z-30 fixed bottom-0 w-full duration-200">
      <h3 className="text-m text-center py-3 m-auto w-full dark:text-transparent dark:hover:text-gray-50  text-transparent hover:text-gray-900 duration-200">
        Copyright © {new Date().getFullYear()}
      </h3>
    </footer>
  );
};
export default Footer;
