import { motion } from "framer-motion";

export default function Generate1() {
  return (
    <motion.div
      className=" mt-20"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      Generate1
    </motion.div>
  );
}
