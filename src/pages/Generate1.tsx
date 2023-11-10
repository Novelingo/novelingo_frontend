import { motion } from "framer-motion";
import GenerateTemplate from "../components/GenerateTemplate";
import { useAppDispatch, useAppSelector } from "../store";
import { setTitle } from "../features/generateSlice";

export default function Generate1() {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.generate.title);
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
          value={title}
          onChange={(e) => {
            dispatch(setTitle(e.target.value));
          }}
          type="text"
          className="mt-20 mb-10 text-dark p-3 pl-6 md:pr-40 placeholder:text-purple md:text-base bg-light rounded shadow-sm focus:outline-none text-sm"
          placeholder="The Love of a Lifetime"
          required
        />
      </GenerateTemplate>
    </motion.div>
  );
}
