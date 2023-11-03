import { motion } from "framer-motion";
import GenerateTemplate from "../components/GenerateTemplate";
import GenerateGenre from "../components/GenerateGenre";
import english from "../assets/eng.svg";
import french from "../assets/french.svg";
import spanish from "../assets/spanish.svg";
import russian from "../assets/russia.svg";
import portugal from "../assets/portugal.svg";
import italy from "../assets/italy.svg";
import germany from "../assets/german.svg";

export default function Generate4() {
  let languages = [
    { icon: english, title: "English" },
    { icon: french, title: "French" },
    { icon: italy, title: "Italian" },
    { icon: russian, title: "Russian" },
    { icon: germany, title: "German" },
    { icon: spanish, title: "Spanish" },
    { icon: portugal, title: "Portugese" },
  ];
  return (
    <motion.div
      className=" mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <GenerateTemplate subtitle="Select the language you want to learn:">
        <div className="flex my-6 flex-wrap">
          {languages.map((language) => (
            <GenerateGenre
              key={language.title}
              title={language.title}
              icon={language.icon}
            />
          ))}
        </div>
      </GenerateTemplate>
    </motion.div>
  );
}
