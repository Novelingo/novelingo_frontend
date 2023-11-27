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
  cover: "",
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
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${novel.cover || background})`,
          height: "50vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "none",
          backgroundColor: "rgb(20 22 57 / 0.6)",
        }}
      >
        <div className="absolute inset-0 bg-dark1 bg-opacity-40"></div>
        <div className="relative p-4 text-white">
          <TextTitle>{novel.title}</TextTitle>
          <p
            className={`${
              window.innerHeight < 668 ? " text-sm" : "text-lg"
            }" mt-2 md:mt-6 lg:px-24"`}
          >
            {novel.description}
          </p>
        </div>
      </AppSection>

      {/* <div className=" bg-dark1/60 z-0 w-full h-full rounded-xl top-0 absolute"></div> */}

      <AppSection className="bg-darkest">
        <div className="text-light flex flex-wrap">
          {novel.paragraphs.map((paragraph) => (
            <>
              <p
                key={paragraph.id}
                className={`${
                  window.innerHeight < 668 ? " text-sm" : "text-base"
                } "text-light mb-3"`}
              >
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
                      className={"cursor-pointer hover:text-white "}
                    >
                      {([".", ",", "?", "!", "'"].includes(wordValue)
                        ? ""
                        : " ") + wordValue}
                    </span>
                  );
                })}
              </p>
              <br />
            </>
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
