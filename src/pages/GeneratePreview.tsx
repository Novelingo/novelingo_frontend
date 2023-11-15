import { motion } from "framer-motion";
import GenerateTemplate from "../components/GenerateTemplate";
import { useAppSelector } from "../store";
import NovelCard from "../components/NovelCard";
import { useGetNovelPreviewQuery } from "../apis/novelApi";

export default function GeneratePreview() {
  const title = useAppSelector((state) => state.generate.title);
  const description = useAppSelector((state) => state.generate.description);
  const notes = useAppSelector((state) => state.generate.notes);
  const level = useAppSelector((state) => state.generate.level);
  const language = useAppSelector((state) => state.generate.languageID);
  const genre = useAppSelector((state) => state.generate.genreID);

  const langDisplay = useAppSelector((state) => state.generate.languageDisplay);
  const genreDisplay = useAppSelector((state) => state.generate.genreDisplay);

  const size = "LARGE";

  const { data } = useGetNovelPreviewQuery({
    title,
    description,
    genre,
    level,
    language,
    size,
    notes,
  });

  return (
    <motion.div
      key={genre}
      className=" mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <GenerateTemplate subtitle="Preview your novel:">
        <NovelCard
          title={data?.title || title}
          subtitle={data?.description || description}
          tags={[
            data?.genre_display || genreDisplay,
            level,
            data?.language_display || langDisplay,
          ]}
          cover={data?.cover || ""}
        />
      </GenerateTemplate>
    </motion.div>
  );
}
