const Footer = () => {
  // const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <footer className="z-30 fixed bottom-0 w-full dark:hover:bg-gray-900 hover:bg-gray-50 hover:bg-opacity-50 hover:bg-backdrop-blur-md dark:hover:bg-backdrop-blur-md duration-200">
      <h3 className="text-m text-center py-3 m-auto w-full dark:text-transparent dark:hover:text-gray-50  text-transparent hover:text-gray-900 duration-200">
        Copyright © {new Date().getFullYear()}
      </h3>
    </footer>
  );
};
export default Footer;
