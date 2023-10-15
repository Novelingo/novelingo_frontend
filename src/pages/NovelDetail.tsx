import { useParams } from "react-router-dom";
import { useGetNovelByIdQuery } from "../apis/novelApi";
import { Novel } from "../types/novel.type";
import TextTitle from "../components/TextTitle";
import AppSection from "../components/AppSection";
import background from "../assets/novelBck.png";
import Modal from "../components/Modal";
import { useState } from "react";

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
  const [showModal, setShowModal] = useState(false);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedDef, setSelectedDef] = useState<string | null>(null);

  return (
    <div className="mt-16">
      <AppSection
        className="sticky flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${background})`,
          height: "50vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "none",
        }}
      >
        <TextTitle className="text-white">{novel.title}</TextTitle>
        <p className="text-white mt-6 lg:px-24">{novel.description}</p>
      </AppSection>

      <AppSection className="bg-darkest">
        <div className="text-light flex flex-wrap">
          {novel.paragraphs.map((paragraph) => (
            <p key={paragraph.id} className="text-light flex flex-wrap mb-3">
              {paragraph.words.map((word) => {
                const wordValue = word.word.trim();
                return (
                  <span
                    onClick={() => {
                      setSelectedWord(wordValue);
                      setSelectedDef(word.definition);
                      setShowModal(true);
                    }}
                    key={word.id}
                    className={
                      "cursor-pointer hover:text-white " +
                      ([".", ",", "?", "!", "'"].includes(wordValue)
                        ? ""
                        : "pl-2")
                    }
                  >
                    {wordValue}
                  </span>
                );
              })}
            </p>
          ))}
        </div>
      </AppSection>

      <Modal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedWord(null);
          setSelectedDef(null); // Clearing the selected word when modal closes
        }}
        title={selectedWord || "Default Title"}
      >
        {selectedDef || "Default Definition"}
      </Modal>
    </div>
  );
}
