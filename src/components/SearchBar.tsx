export default function SearchBar() {
  return (
    <div className=" fixed top-16 left-1/2 w-full z-20 md:z-30 max-w-screen-xl transform -translate-x-1/2 px-16 2xl:p-0 pt-3 bg-gradient-to-r from-dark1 to-dark2 ">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-purple"
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
          type="search"
          id="default-search"
          className="w-full text-purple p-3 pl-10 placeholder:text-purple md:text-base bg-light rounded-3xl shadow-sm focus:outline-none text-sm"
          placeholder="Search novels"
          required
        />
      </div>{" "}
    </div>
  );
}
