const PageTitle = ({ children }: any) => {
  return (
    <>
      <h1 className="md:text-8xl mb-4 text-6xl">{children}</h1>
      <hr className="w-screen mb-12 border border-gray-300"></hr>
    </>
  );
};

export default PageTitle;
