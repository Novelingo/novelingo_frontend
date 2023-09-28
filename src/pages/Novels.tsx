import NovelCard from "../components/NovelCard";
import bookcover from "../assets/bookcover.png";
import Filter from "../components/Filter";
import { useGetNovelsQuery } from "../apis/novelApi";
import Pagination from '../components/Pagination';
import { useState } from 'react';
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';

import Sidebar from "../components/Sidebar";
import AppButton from "../components/AppButton";

export default function Novels() {

  
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/Novel');
  }

  const [currentPage, setCurrentPage] = useState(1);

  const { data: { data: novels, pageTotal } = { data: [], pageTotal: 0 } } = useGetNovelsQuery({
    page: currentPage,
    limit: 9,
});

  // const filters = Array.from({ length: 10 }).map((_, index) => ({
  //   title: `Filter ${index} `,
  //   options: [
  //     { id: "1", title: "French" },
  //     { id: "2", title: "English" },
  //     { id: "3", title: "Russian" },
  //   ],
  // }));

  let filters = [
    {title: 'Language',
    options: [{id: '1',title: 'French'}, 
    {id: '2', title: 'English'}, 
    {id: '3', title: 'Russian'}]
    },
    {title: 'Genre',
    options: [{id: '1',title: 'Adult'}, 
    {id: '2', title: 'Action'},
     {id: '3', title: 'Romance'}, 
     {id: '4', title: 'Horror'},]
    },
    {title: 'Size',
    options: [{id: '1',title: 'Small'}, 
    {id: '2', title: 'Medium'},
     {id: '3', title: 'Large'}, 
    ] },
    {title: 'Level',
    options: [{id: '1',title: 'A1'}, 
    {id: '2', title: 'A2'},
     {id: '3', title: 'B1'}, 
     {id: '4', title: 'B2'},
     {id: '5', title: 'C1'},
     {id: '6', title: 'C2'},
    
    ]
    },

  ]
  const [isSidebarOpen, setSidebarOpen] = useState(false);



  return (
    <div>
    <div className="mt-3 md:px-20 px-5 md:py-20 py-10 flex flex-col justify-center ">
      <div className="fixed top-16 left-1/2 w-full z-10 md:z-20 max-w-screen-xl transform -translate-x-1/2 px-16 2xl:p-0 pt-3 bg-gradient-to-r from-dark1 to-dark2 ">
        <div className="relative">
          <div className="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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

      <div className="mt-6  md:px-10 px-5 py-10 justify-center  flex">
        <div className="hidden md:inline-block">
          {filters.map((filter) => (
            <Filter
              key={filter.title}
              title={filter.title}
              options={filter.options}
            />
          ))}

        </div>
        <div className="flex flex-col">
      <div  className="pl-6 self-center md:hidden ">
        <AppButton
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="px-4 my-2 mt-8 text-xs py-2"
      > Apply Filter
      </AppButton>
    <div className="relative">
        {isSidebarOpen && <Sidebar filters={filters} onClose={() => setSidebarOpen(false)} />}
      </div>
      
      </div>
      
    

        <div className="flex flex-wrap md:justify-end justify-center">
          {novels.map((novel) => (
            <NovelCard
              onClick={handleClick}
              key={novel.id}
              title={novel.title}
              subtitle={novel.description}
              rating={novel.rating}
              tags={novel.tags}
              cover={bookcover}
            />
          ))}
          
        </div>
      </div>
      </div>
 
          <Pagination 
      totalPage ={pageTotal} 
      onPageChange={(page) => setCurrentPage(page)}
    />
     
    <Footer />
    </div>
    </div>
  );
}
