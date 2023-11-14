import { motion } from "framer-motion";
import GenerateTemplate from "../components/GenerateTemplate";
import Slider from "../components/Slider";
import { setLevel } from "../features/generateSlice";
import { useAppDispatch } from "../store";

export default function Generate5() {
  // const level = useAppSelector((state) => state.generate.level);
  const dispatch = useAppDispatch();
  const sections = [
    { label: "A1", value: 0 },
    { label: "A2", value: 1 },
    { label: "B1", value: 2 },
    { label: "B2", value: 3 },
    { label: "C1", value: 4 },
    { label: "C2", value: 5 },
  ];
  return (
    <motion.div
      className=" mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <GenerateTemplate subtitle="*Select the language level of your novel:">
        <Slider
          sections={sections}
          onChange={(_, label) => {
            dispatch(setLevel(label));
          }}
          defaultValue={0}
        />
      </GenerateTemplate>
    </motion.div>
  );
}
