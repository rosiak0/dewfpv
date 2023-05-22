import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import type { AppProps } from "next/app";

import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
