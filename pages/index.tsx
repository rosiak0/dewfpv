import PageWrapper from "../components/PageWrapper";
import TextWrapper from "../components/TextWrapper";
import PageTitle from "../components/PageTitle";

export default function Home() {
  return (
    <PageWrapper>
      <TextWrapper>
        <PageTitle>About</PageTitle>
        <p className="md:text-2xl text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error sequi
          illum voluptatum asperiores sed nulla odit officiis dolor. Ipsam
          molestiae amet adipisci veritatis soluta possimus autem magnam
          repudiandae asperiores eaque.
        </p>
      </TextWrapper>
    </PageWrapper>
  );
}
