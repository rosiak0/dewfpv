import { AnimatePresence, motion } from "framer-motion";

const TextWrapper = ({ children }: any) => {
  return (
    <div className="lg:w-3/5 lg:mx-auto mx-3 pt-20 pb-20 min-h-screen m-auto">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          // className="lg:w-full lg:mx-auto mx-3 pt-20 pb-20 h-screen "
        >
          <div className="mx-auto sm:mx-0 text-center w-full">{children}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextWrapper;
