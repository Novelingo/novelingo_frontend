import { motion } from "framer-motion";
import GenerateTemplate from "../components/GenerateTemplate";
import { useAppSelector } from "../store";
import NovelCard from "../components/NovelCard";
import { useGetNovelPreviewQuery } from "../apis/novelApi";

export default function GeneratePreview() {
  const title = useAppSelector((state) => state.generate.title);
  const description = useAppSelector((state) => state.generate.description);
  const notes = useAppSelector((state) => state.generate.notes);

  // const genre = useAppSelector((state) => state.generate.genre);
  // const level = useAppSelector((state) => state.generate.level);
  // const language = useAppSelector((state) => state.generate.language);

  const level = "C1";
  const language = "en";
  const size = "LARGE";
  const genre = "fiction";
  const { data } = useGetNovelPreviewQuery({
    title,
    description,
    genre,
    level,
    language,
    size,
    notes,
  });

  // const data = [title, description, genre, level, language];
  console.log(data);

  return (
    <motion.div
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
          tags={[genre, level, language]}
          cover={data?.cover || ""}
        />
      </GenerateTemplate>
    </motion.div>
  );
}
