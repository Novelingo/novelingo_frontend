import AppButton from "./AppButton"

interface GenreProps{
  genre: string;
  title: string;
}
export default function Genre({genre, title}: GenreProps) {
  return (
    <div className=' flex flex-col items-center'>
    <img className='w-60' src={genre} alt={title} />
    <AppButton className='px-10 py-1 mt-4 self-center'>{title}</AppButton>

    </div>
  )
}
