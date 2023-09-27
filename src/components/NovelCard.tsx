import TextTitle from "./TextTitle";
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

interface NovelProps{
    genres: string[];
    title: string;
    subtitle: string;
    rating: number;
    cover: string;
  }
  export default function Novelcard({genres, title, subtitle, rating, cover}: NovelProps) {
    return (
      <div className='m-4  flex flex-col items-center justify-center w-72 h-96 p-4 text-center rounded' style={{
        backgroundImage:`url(${cover})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        maxWidth: 'none',
      }}>
        <TextTitle className="mb-6  text-white">{title}</TextTitle>
        <p className="text-light mb-6 text-sm">{subtitle}</p>

        <ul className="flex mb-6 text-pink">
          {genres.map((genre)=>(
           <li key={genre} className="outline-dashed outline-2 rounded text-xs mx-2 p-1">{genre}</li>     ))}
        </ul>
          
        <div className="flex text-white">
      {Array.from({ length: rating }).map((_, index) => (
        <span key={index}><AiFillStar/></span>
      ))}
      {Array.from({ length: 5-rating }).map((_, index) => (
        <span key={index}><AiOutlineStar/></span>
      ))}

    </div>

      </div>
    )
  }
  