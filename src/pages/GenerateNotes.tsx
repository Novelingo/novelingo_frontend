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
          className="w-80 md:w-2/4 h-64 max-h-64 mt-6 text-dark  p-6 placeholder:text-purple md:text-base bg-light rounded shadow-sm focus:outline-none text-sm"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus lectus urna, varius lacinia est laoreet quis. Morbi nec eleifend lorem, non fermentum mauris. In eros elit, mattis et lorem eu, fringilla auctor velit."
          required
        />
      </GenerateTemplate>
    </motion.div>
  );
}
