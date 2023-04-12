import PageWrapper from "../components/PageWrapper";
import TextWrapper from "../components/TextWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <TextWrapper>
        <h1 className="text-8xl mb-12">About</h1>
        <p className="text-2xl ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error sequi
          illum voluptatum asperiores sed nulla odit officiis dolor. Ipsam
          molestiae amet adipisci veritatis soluta possimus autem magnam
          repudiandae asperiores eaque.
        </p>
      </TextWrapper>
    </PageWrapper>
  );
}
