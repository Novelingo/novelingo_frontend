interface FilterProps {
  title?: string;
  options: { id: string; title: string }[];
  handleClick: (ids: string[]) => void;
  selectedIds: string[];
}

export default function Filter({
  title,
  options,
  selectedIds,
  handleClick,
}: FilterProps) {
  return (
    <div className="flex flex-col justify-center items-center mb-10 mt-4">
      <p className="text-light">{title}</p>
      <div className="flex flex-col ">
        {options.map((option) => {
          const isSelected = selectedIds.includes(option.id);
          return (
            <div
              key={option.id}
              onClick={() =>
                handleClick(
                  isSelected
                    ? selectedIds.filter((id) => id !== option.id)
                    : [...selectedIds, option.id]
                )
              }
              className={`${
                isSelected
                  ? "bg-light outline outline-2 text-purple"
                  : "bg-gradient-to-r from-pink to-purple text-white"
              } m-1 md:w-40 p-4 h-9 flex justify-center items-center rounded`}
            >
              <p>{option.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
