const TextWrapper = ({ children }: any) => {
  return (
    <div className="lg:w-3/5 lg:mx-auto mx-3 pt-20 pb-20 h-screen">
      <div className="mx-auto sm:mx-0 text-center">{children}</div>
    </div>
  );
};

export default TextWrapper;
