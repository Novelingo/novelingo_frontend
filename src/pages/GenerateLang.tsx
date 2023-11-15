import { motion } from "framer-motion";
import GenerateTemplate from "../components/GenerateTemplate";
import GenerateLang from "../components/GenerateOptions";

import { setLanguageID, setLanguageDisplay } from "../features/generateSlice";
import { useAppDispatch, useAppSelector } from "../store";
import { useGetSupportedLanguagesQuery } from "../apis/novelApi";

export default function Generate4() {
  // const langID = useAppSelector((state) => state.generate.languageID);
  const langDisplay = useAppSelector((state) => state.generate.languageDisplay);
  // console.log(langID, langDisplay);

  const { data: { data: languages } = { data: [] } } =
    useGetSupportedLanguagesQuery();

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
                dispatch(setLanguageID(language.id));
                dispatch(setLanguageDisplay(language.title));
              }}
              key={language.id}
              title={language.title}
              icon={language.icon}
              selectedGenre={langDisplay || "English"}
            />
          ))}
        </div>
      </GenerateTemplate>
    </motion.div>
  );
}
