import { AnimatePresence, motion as m } from "framer-motion";

const TextWrapper = ({ children }: any) => {
  return (
    <AnimatePresence>
      <m.div
        initial={{ opacity: 0.5, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        className="lg:w-3/5 lg:mx-auto mx-3 pt-20 pb-20 h-screen "
      >
        <div className="mx-auto sm:mx-0 text-center">{children}</div>
      </m.div>
    </AnimatePresence>
  );
};

export default TextWrapper;
