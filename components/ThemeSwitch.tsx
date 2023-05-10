import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const clickHandler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
    console.log("theme switched to:", theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={clickHandler}
      className="lg:w-10 mx-1 my-2 lg:my-0 lg:mb-0 text-lg transition-all text-gray-900 dark:text-gray-50 duration-200 hover:font-bold"
    >
      {theme === "light" ? "dark" : "light"}
    </button>
  );
};

export default ThemeSwitch;
