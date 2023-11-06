import { motion } from "framer-motion";
import GenerateTemplate from "../components/GenerateTemplate";
import GenerateGenre from "../components/GenerateGenre";
import romance from "../assets/romance.svg";
import horror from "../assets/horror.svg";
import action from "../assets/action.svg";
import adult from "../assets/adult.svg";

export default function Generate3() {
  let genres = [
    { icon: horror, title: "Horror" },
    { icon: action, title: "Action" },
    { icon: romance, title: "Romance" },
    { icon: adult, title: "Adult" },
  ];
  return (
    <motion.div
      className=" mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <GenerateTemplate subtitle="Select the genre of your novel:">
        <div className="flex my-6 flex-wrap">
          {genres.map((genre) => (
            <GenerateGenre
              key={genre.title}
              title={genre.title}
              icon={genre.icon}
            />
          ))}
        </div>
      </GenerateTemplate>
    </motion.div>
  );
}
