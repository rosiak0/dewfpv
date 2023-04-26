const TextWrapper = ({ children }: any) => {
  return (
    <div>
      <hr className="w-96 sm:w-3/5 mb-12 border border-gray-300"></hr>
      <main className="sm:w-3/5 w-96">{children}</main>
    </div>
  );
};

export default TextWrapper;
