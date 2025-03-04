import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import React from "react";

interface NovelProps {
  tags: string[];
  title: string;
  subtitle: string;
  rating?: number;
  cover: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export default function NovelCard({
  tags,
  title = "Title of your novel",
  subtitle = "Description of your novel",
  rating = 0,
  cover,
  onClick,
}: NovelProps) {
  return (
    <div
      onClick={onClick}
      className="flex rounded-xl relative w-72"
      style={{ height: window.innerHeight < 668 ? "21rem" : "23rem" }}
    >
      <img
        src={cover}
        alt="book cover"
        className=" w-full h-full rounded-xl absolute"
      />
      <div className=" bg-dark1/60  w-full h-full rounded-xl  absolute"></div>
      <div className="flex flex-col p-4 items-center justify-center text-center z-10">
        <h3 className="mb-6 cursor-default text-center text-2xl md:text-3xl text-white z-10  font-display">
          {title}
        </h3>
        {subtitle.length < 150 ? (
          <p className="text-light cursor-default mb-6 text-sm">{subtitle}</p>
        ) : (
          <p className="text-light cursor-default mb-6 text-sm">
            {subtitle.substring(0, 150) + "..."}
          </p>
        )}

        <ul className="flex mb-6 cursor-default text-pink">
          {tags.map((tag) => (
            <li
              key={tag}
              className="outline-dashed outline-2 rounded text-xs mx-2 p-1"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex items-center text-white">
          <p className="pr-1 cursor-default">{rating}</p>
          {Array.from({ length: rating }).map((_, index) => (
            <span key={index}>
              <AiFillStar />
            </span>
          ))}
          {Array.from({ length: 5 - rating }).map((_, index) => (
            <span key={index}>
              <AiOutlineStar />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
