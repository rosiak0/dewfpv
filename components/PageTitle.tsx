const PageTitle = ({ children }: any) => {
  return (
    <>
      <h1 className="md:text-8xl mb-4 text-6xl text-center sm:text-start">
        {children}
      </h1>
    </>
  );
};

export default PageTitle;
