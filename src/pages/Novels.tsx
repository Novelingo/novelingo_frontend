import NovelCard from "../components/NovelCard";
import bookcover from "../assets/bookcover.png";
import Filter from "../components/Filter";
import { useGetNovelsQuery } from "../apis/novelApi";
import Pagination from "../components/Pagination";
import { useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import AppButton from "../components/AppButton";

import Loading from "../components/Loading";

import { useQueryReducer } from "../hooks/query.hooks";

type IState = { [key: string]: string[] } & { page: number };

export default function Novels() {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`${id}`);
  };

  const [state, dispatch] = useQueryReducer<IState>({ page: 1 } as IState);
  const { page, ...filters } = state;

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const {
    data: { data: novels, filter, pageTotal } = {
      data: [],
      filter: { groups: [] },
      pageTotal: 0,
    },
    isLoading,
  } = useGetNovelsQuery({
    page,
    limit: 12,
    filters,
  });

  return (
    <div className="mt-3 md:px-20 px-5 md:py-20 py-10 flex flex-col justify-center">
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
            className="w-full text-purple p-3 pl-10 placeholder:text-purple md:text-base bg-light rounded shadow-sm focus:outline-none text-sm"
            placeholder="Search novels"
            required
          />
        </div>
      </div>

      <div className="mt-6 py-10 flex flex-row  justify-center relative overflow-hidden ">
        <div className="flex flex-row h-full relative w-full justify-center">
          <div className="hidden md:flex w-52 relative">
            <div className="flex flex-col absolute left-0 overflow-y-auto max-h-full no-scrollbar ">
              {filter.groups.map((group) => (
                <Filter
                  selectedIds={filters[group.key] || []}
                  key={group.key}
                  title={group.title}
                  options={group.options}
                  handleClick={(ids) => dispatch({ [group.key]: ids })}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col min-h-screen">
            <div className="pl-6 self-center md:hidden">
              <AppButton
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="px-4 my-2 mt-8 text-xs py-2"
              >
                Apply Filter
              </AppButton>
              <div className="relative">
                {isSidebarOpen && (
                  <Sidebar
                    filters={filter.groups}
                    onClose={() => setSidebarOpen(false)}
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1-100px lg:grid-cols-2-100px xl:grid-cols-3-100px gap-8">
              {novels.length === 0 && !isLoading && (
                <div className="col-span-full min-h-[500px] flex justify-center ">
                  <p className="mt-14 text-white">
                    No novels found. Please try another filter or search term.
                  </p>
                </div>
              )}
              {isLoading
                ? Array.from({ length: 9 }).map((_, idx) => (
                    <Loading key={idx} />
                  ))
                : novels.map((novel) => (
                    <span key={novel.id} className="cursor-pointer">
                      <NovelCard
                        onClick={() => handleClick(novel.id)}
                        key={novel.id}
                        title={novel.title}
                        subtitle={novel.description}
                        rating={novel.rating}
                        tags={novel.tags}
                        cover={bookcover}
                      />
                    </span>
                  ))}
            </div>
          </div>
        </div>
      </div>

      <Pagination
        currentPage={page}
        totalPage={pageTotal}
        onPageChange={(page) => dispatch({ page } as IState)}
      />

      <Footer />
    </div>
  );
}
