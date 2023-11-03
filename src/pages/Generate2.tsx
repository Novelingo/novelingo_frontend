import { motion } from "framer-motion";
import GenerateTemplate from "../components/GenerateTemplate";

export default function Generate2() {
  return (
    <motion.div
      className=" mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <GenerateTemplate subtitle="Write a description for your novel:">
        <textarea
          className="w-96 h-64 max-h-64 mt-6 text-dark p-3 pl-6 placeholder:text-purple md:text-base bg-light rounded shadow-sm focus:outline-none text-sm"
          placeholder="In a world ruled by fear and violence, one hero must fight against a corrupt empire to save the people he loves. With sword in hand and the shadows as his ally, he will stop at nothing to bring hope back to his people."
          required
        />
      </GenerateTemplate>
    </motion.div>
  );
}
