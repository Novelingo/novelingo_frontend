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
  // console.log(isSelected, selectedGenre);

  return (
    <div
      onClick={onClick}
      className={`${
        isSelected ? "bg-light text-dark2" : " text-white border-light"
      } md:w-32 md:h-32 w-20 m-2 hover:bg-light  hover:text-dark2  border-2 rounded  flex flex-col justify-center items-center`}
    >
      <img src={icon} alt="Option icon" className="md:w-20 w-14 h-20" />
      <p className=" md:mt-2 mb-1 md:mb-0 md:text-base text-sm">{title}</p>
    </div>
  );
}
