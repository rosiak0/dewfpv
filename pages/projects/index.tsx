import TextWrapper from "../../components/layout/TextWrapper";
import Head from "next/head";
// import PageTitle from "../../components/PageTitle";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Projects = () => {
  const context = useContext(LanguageContext);

  return <TextWrapper>Projects</TextWrapper>;
};
export default Projects;
