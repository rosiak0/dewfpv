const TextWrapper = ({ children }: any) => {
  return (
    <div className="">
      {/* <hr className="w-96 sm:w-3/5 mb-12 border border-gray-300 mx-auto sm:mx-0"></hr>
      <main className="sm:w-3/5 w-96 mx-auto sm:mx-0">{children}</main> */}
      <hr className="mb-12 border border-gray-300 mx-auto sm:mx-0"></hr>
      <main className="mx-auto sm:mx-0 text-center">{children}</main>
    </div>
  );
};

export default TextWrapper;
