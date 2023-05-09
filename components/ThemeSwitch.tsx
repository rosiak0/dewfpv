import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

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
      className="mx-1 transition-all text-gray-900 dark:text-gray-50 duration-200"
    >
      {theme === "light" ? "dark" : "light"}
    </button>
  );
};

export default ThemeSwitch;
