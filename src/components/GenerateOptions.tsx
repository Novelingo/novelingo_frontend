interface OptionProps {
  title: string;
  icon: string;
  onClick: React.MouseEventHandler;
  selectedGenre?: string;
}
export default function GenerateOptions({
  title,
  icon,
  onClick,
  selectedGenre,
}: OptionProps) {
  const isSelected = selectedGenre?.includes(title);
  return (
    <div
      onClick={onClick}
      className={`${
        isSelected ? "bg-light text-dark2" : " text-white border-light"
      } w-32 m-2 hover:bg-light  hover:text-dark2 h-32 border-2 rounded  flex flex-col justify-center items-center`}
    >
      <img src={icon} alt="Option icon" className="w-20 h-20" />
      <p className="mt-1">{title}</p>
    </div>
  );
}
