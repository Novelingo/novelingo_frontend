import { motion } from "framer-motion";
import GenerateTemplate from "../components/GenerateTemplate";
import Slider from "../components/Slider";
import RangeSlider from "../components/RangeSlider";
export default function Generate5() {
  return (
    <motion.div
      className=" mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <GenerateTemplate subtitle="Select the language level of  your novel:">
        {/* <Slider min={0} max={100} sections={5} /> */}
        {/* <ReactSlider
                    className="horizontal-slider"
                    marks={[5, 6, 7, 8, 9]}
                    markClassName="example-mark"
                    min={0}
                    max={9}
                    invert
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    renderThumb={(props, state) => (
                      <div {...props}>{state.valueNow}</div>
                    )}
                  /> */}
        {/* <RangeSlider /> */}
      </GenerateTemplate>
    </motion.div>
  );
}
