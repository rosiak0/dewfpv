import { motion, AnimatePresence } from "framer-motion";

const PageWrapper = ({ children }: any) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ delay: 0.25 }}
        className="max-w-full lg:w-3/5 lg:mx-auto mx-3 pt-20 pb-20"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
