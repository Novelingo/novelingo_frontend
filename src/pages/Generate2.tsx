import { motion } from "framer-motion";

export default function Generate2() {
  return (
    <motion.div
      className=" mt-20"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      Generate2
    </motion.div>
  );
}
