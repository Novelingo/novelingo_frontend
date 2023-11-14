import { motion } from "framer-motion";
import GenerateTemplate from "../components/GenerateTemplate";
import GenerateLang from "../components/GenerateOptions";
import english from "../assets/eng.svg";
import french from "../assets/french.svg";
import spanish from "../assets/spanish.svg";
import russian from "../assets/russia.svg";
import portugal from "../assets/portugal.svg";
import italy from "../assets/italy.svg";
import germany from "../assets/german.svg";
import { setLanguage } from "../features/generateSlice";
import { useAppDispatch, useAppSelector } from "../store";

export default function Generate4() {
  const languages = [
    { icon: english, title: "English" },
    { icon: french, title: "French" },
    { icon: italy, title: "Italian" },
    { icon: russian, title: "Russian" },
    { icon: germany, title: "German" },
    { icon: spanish, title: "Spanish" },
    { icon: portugal, title: "Portugese" },
  ];

  const lang = useAppSelector((state) => state.generate.language);
  // console.log(lang);
  const dispatch = useAppDispatch();
  return (
    <motion.div
      className=" mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <GenerateTemplate subtitle="*Select the language you want to learn:">
        <div className="flex my-6 flex-wrap justify-center items-center">
          {languages.map((language) => (
            <GenerateLang
              onClick={() => {
                dispatch(setLanguage(language.title));
              }}
              key={language.title}
              title={language.title}
              icon={language.icon}
              selectedGenre={lang}
            />
          ))}
        </div>
      </GenerateTemplate>
    </motion.div>
  );
}
