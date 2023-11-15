import { motion } from "framer-motion";
import GenerateTemplate from "../components/GenerateTemplate";
import GenerateG from "../components/GenerateOptions";
import romance from "../assets/romance.svg";
import horror from "../assets/horror.svg";
import action from "../assets/action.svg";
import adult from "../assets/adult.svg";
import { useAppDispatch, useAppSelector } from "../store";
import { setGenreID, setGenreDisplay } from "../features/generateSlice";

export default function GenerateGenre() {
  const dispatch = useAppDispatch();

  // const genreID = useAppSelector((state) => state.generate.genreID) || "horror";

  const genreDisplay =
    useAppSelector((state) => state.generate.genreDisplay) || "Horror";
  // console.log(genreID, genreDisplay);

  const genres = [
    { icon: horror, title: "Horror", id: "horror" },
    { icon: action, title: "Action", id: "action" },
    { icon: romance, title: "Romance", id: "romance" },
    { icon: adult, title: "Adult", id: "adult" },
  ];
  return (
    <motion.div
      className=" mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <GenerateTemplate subtitle="*Select the genre of your novel:">
        <div className="flex my-6 flex-wrap justify-center items-center">
          {genres.map((genre) => (
            <GenerateG
              onClick={() => {
                dispatch(setGenreID(genre.id));
                dispatch(setGenreDisplay(genre.title));
              }}
              key={genre.id}
              title={genre.title}
              icon={genre.icon}
              selectedGenre={genreDisplay}
            />
          ))}
        </div>
      </GenerateTemplate>
    </motion.div>
  );
}
