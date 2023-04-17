const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full  lg:mx-auto py-4 dark:text-gray-900 dark:hover:text-gray-500  text-gray-50 hover:text-gray-500 duration-200">
      <h3 className="text-sm text-end lg:w-3/5 mx-auto">
        Copyright © {new Date().getFullYear()}
      </h3>
    </div>
  );
};
export default Footer;
