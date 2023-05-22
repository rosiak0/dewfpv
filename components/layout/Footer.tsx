const Footer = () => {
  return (
    <footer className="z-30 fixed bottom-0 w-full duration-200 ">
      <h3 className="text-m text-center py-2 m-auto w-full dark:text-transparent dark:hover:text-gray-50 text-transparent hover:text-gray-900 duration-200 hover:bg-gray-50 hover:dark:bg-gray-900 dark:bg-opacity-70 bg-opacity-70 backdrop-filter-none hover:backdrop-blur-md ">
        Copyright © {new Date().getFullYear()}
      </h3>
    </footer>
  );
};
export default Footer;
