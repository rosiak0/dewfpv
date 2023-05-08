import "../styles/globals.css";
import { useState } from "react";
import Layout from "../components/Layout";
import LanguageContext from "../context/LanguageContext";
import Language from "../types/Language";

import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  // const [mobileNav, setMoblieNav] = useState(false);
  const [siteLanguage, setSiteLanguage] = useState<Language>("en");

  return (
    <ThemeProvider attribute="class">
      <LanguageContext.Provider value={{ siteLanguage, setSiteLanguage }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageContext.Provider>
    </ThemeProvider>
    // </LanguageContext.Provider>
  );
}
