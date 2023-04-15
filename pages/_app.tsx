import "../styles/globals.css";
import { useState } from "react";
import Layout from "../components/Layout";
import LanguageContext from "../context/LanguageContext";
import type { AppProps } from "next/app";
import Language from "../types/Language";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  const [mobileNav, setMoblieNav] = useState(false);

  const [language, setLanguage] = useState<Language>("en");

  return (
    // <LanguageContext.Provider value={{ language, setLanguage }}>
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    // </LanguageContext.Provider>
  );
}
