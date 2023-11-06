interface GenreProps {
  title: string;
  icon: string;
}
export default function GenerateGenre({ title, icon }: GenreProps) {
  return (
    <div className="w-32 m-2 hover:bg-light hover:text-dark2 text-white h-32 border-2 rounded border-light flex flex-col justify-center items-center">
      <img src={icon} alt="genre icon" className="w-20 h-20" />
      <p className="mt-1">{title}</p>
    </div>
  );
}
