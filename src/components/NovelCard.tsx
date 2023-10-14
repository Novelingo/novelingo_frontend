import TextTitle from "./TextTitle";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import React from "react";

interface NovelProps {
  tags: string[];
  title: string;
  subtitle: string;
  rating: number;
  cover: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
export default function NovelCard({
  tags,
  title,
  subtitle,
  rating,
  cover,
  onClick,
}: NovelProps) {
  return (
    <div
      onClick={onClick}
      className="flex h-96 rounded cursor-pointer relative"
    >
      <img
        src={cover}
        alt="book cover"
        className="w-full h-full rounded absolute"
      />
      <div className="flex flex-col p-4 items-center justify-center text-center z-10">
        <TextTitle className="mb-6  text-white z-10">{title}</TextTitle>
        <p className="text-light mb-6 text-sm">{subtitle}</p>

        <ul className="flex mb-6 text-pink">
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
          <p className="pr-1">{rating}</p>
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
