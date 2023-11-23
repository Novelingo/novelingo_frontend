import { setSearchValue } from "../features/searchSlice";
import { useAppDispatch, useAppSelector } from "../store";
type SearchBar = {
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
};
const SearchBar: React.FC<SearchBar> = ({ onSubmit, onKeyDown }) => {
  const dispatchValue = useAppDispatch();
  const searchValue = useAppSelector((state) => state.search.searchValue);

  return (
    <div
      className=" w-full z-20 fixed bg-dark1"
      style={{
        height: "120px",
      }}
    >
      <div className="xl:px-28 2xl:px-2 px-14 fixed top-16 pt-1 left-1/2 w-full z-20 md:z-30 max-w-screen-xl transform -translate-x-1/2  ">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-light"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            onKeyDown={onKeyDown}
            value={searchValue}
            onChange={(e) => {
              dispatchValue(setSearchValue(e.target.value));
            }}
            id="default-search"
            className="block w-full border border-dark2 text-white focus:ring-light focus:border-light p-3 pl-10 placeholder:text-light md:text-base bg-dark2 rounded-lg shadow-sm focus:outline-none text-sm"
            placeholder="Search novels.."
            required
          />
          <button
            onClick={onSubmit}
            className="text-dark2 hover:text-white absolute bottom-1.5 end-2 md:bottom-2 bg-light hover:bg-purple rounded text-sm px-3 py-1.5 "
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
