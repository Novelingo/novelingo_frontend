import { useParams } from "react-router-dom";
import { useGetNovelByIdQuery } from "../apis/novelApi";
import { Novel } from "../types/novel.type";

const defaultNovel: Novel = {
  id: "",
  title: "",
  description: "",
  rating: 0,
  tags: [],
  author: "",
  paragraphs: [],
};
export default function NovelDetail() {
  const { id } = useParams();

  const { data: { data: novel } = { data: defaultNovel } } =
    useGetNovelByIdQuery(id as string);

  return <div className="p-20 text-light flex flex-wrap">

    {novel.paragraphs.map((paragraph)=>(
      paragraph.words.map((word)=>(
        <span>{' '+ word.word }</span>
      ))
    ))}

  </div>;
}
