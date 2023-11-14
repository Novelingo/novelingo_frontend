import { motion } from "framer-motion";
import GenerateTemplate from "../components/GenerateTemplate";
import { useAppDispatch, useAppSelector } from "../store";
import { setDescription } from "../features/generateSlice";

export default function Generate2() {
  const dispatch = useAppDispatch();
  const description = useAppSelector(
    (state: { generate: { description: any } }) => state.generate.description
  );
  return (
    <motion.div
      className=" mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <GenerateTemplate subtitle="Write a description for your novel:">
        <div className="mb-10 ">
          <textarea
            value={description}
            onChange={(e) => {
              dispatch(setDescription(e.target.value));
            }}
            className="w-96 h-64 max-h-64 mt-6 text-dark  p-6 placeholder:text-purple md:text-base bg-light rounded shadow-sm focus:outline-none text-sm"
            placeholder="In a world ruled by fear and violence, one hero must fight against a corrupt empire to save the people he loves. With sword in hand and the shadows as his ally, he will stop at nothing to bring hope back to his people."
            required
          />
          <p className="text-light text-sm ">Leave blank to auto-generate</p>
        </div>
      </GenerateTemplate>
    </motion.div>
  );
}
