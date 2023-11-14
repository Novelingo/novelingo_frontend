import { motion } from "framer-motion";
import GenerateTemplate from "../components/GenerateTemplate";
import { useAppDispatch, useAppSelector } from "../store";
import { setNotes } from "../features/generateSlice";

export default function GenerateNotes() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(
    (state: { generate: { notes: any } }) => state.generate.notes
  );
  return (
    <motion.div
      className=" mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <GenerateTemplate subtitle="Additional notes for your novel:">
        <textarea
          value={notes}
          onChange={(e) => {
            dispatch(setNotes(e.target.value));
          }}
          className="md:w-5/12 w-80 h-64 max-h-64 mt-6 text-dark  p-6 placeholder:text-purple md:text-base bg-light rounded shadow-sm focus:outline-none text-sm"
          placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"
          required
        />
      </GenerateTemplate>
    </motion.div>
  );
}
