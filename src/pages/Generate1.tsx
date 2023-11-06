import { motion } from "framer-motion";
import GenerateTemplate from "../components/GenerateTemplate";
export default function Generate1() {
  return (
    <motion.div
      className=" mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <GenerateTemplate subtitle="Write a title for your novel:">
        <input
          type="text"
          className="mt-20 mb-10 text-dark p-3 pl-6 placeholder:text-purple md:text-base bg-light rounded shadow-sm focus:outline-none text-sm"
          placeholder="The Love of a Lifetime"
          required
        />
      </GenerateTemplate>
    </motion.div>
  );
}
