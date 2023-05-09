import PageWrapper from "../../components/PageWrapper";
import TextWrapper from "../../components/TextWrapper";
// import PageTitle from "../../components/PageTitle";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

const Projects = () => {
  const context = useContext(LanguageContext);
  return (
    <PageWrapper>
      {/* <PageTitle>
        {context.siteLanguage === "en" ? "Projects" : "Projekty"}
      </PageTitle> */}
      <TextWrapper>Projects</TextWrapper>
    </PageWrapper>
  );
};
export default Projects;
