import NovelCard from "../components/NovelCard"
import bookcover from '../assets/bookcover.png'
import Filter from "../components/Filter"
export default function Novels() {
  // let novels= [
  //   {title: 'The Love of a Lifetime',
  //   subtitle: "A heart-wrenching tale of love, loss, and second chances, set against the picturesque backdrop of a small English town.",
  //   rating: 4,
  //   genres: ['English', 'C2', 'Romance', 'Large'],
  //   cover: bookcover,
  // },
  // ]
  const novels = Array.from({ length: 10 }).map((_, index) => ({
    title: `The Love of a Lifetime ${index}`,
    subtitle:
      "A heart-wrenching tale of love, loss, and second chances, set against the picturesque backdrop of a small English town.",
    rating: 4,
    genres: ["English", "C2", "Romance", "Large"],
    cover: bookcover,
  }));

  const filters = Array.from({ length: 10 }).map((_, index) => (   {
    title: `Filter ${index} `, 
    options: [{id: '1',title: 'French'}, {id: '2', title: 'English'}, {id: '3', title: 'Russian'}]  
    } 
  ));

  // let filters = [
  //   {title: 'Language', 
  //   options: [{id: '1',title: 'French'}, {id: '2', title: 'English'}, {id: '3', title: 'Russian'}]  
  //   },
  //   {title: 'Genre', 
  //   options: [{id: '1',title: 'Adult'}, {id: '2', title: 'English'}, {id: '3', title: 'Russian'}]  
  //   }
  // ]


  return (
    <div className="mt-10 md:px-20 px-5 md:py-20 py-10 flex flex-col justify-center ">
       
       <div className="fixed top-16 left-1/2 w-full max-w-screen-xl transform -translate-x-1/2 px-2 pt-4 bg-gradient-to-r from-dark1 to-dark2 z-10">
      <div className="relative"> 
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-purple" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="search" id="default-search" className="w-full text-purple p-3 pl-10 placeholder:text-purple text-base bg-light rounded shadow-sm focus:outline-none sm:text-sm" placeholder="Search novels" required />
      </div>
    </div>

   



    <div className='mt-6 flex flex-wrap justify-center ' >
 
      <div className="sticky left-28">
          {
        filters.map((filter)=>(
          <Filter key={filter.title} title={filter.title} options={filter.options} />
        ))
      }
      </div>
    
      <div className="w-3/4 flex flex-wrap justify-end">
          {
        novels.map((novel)=>(
          <NovelCard key={novel.title}
            title={novel.title} 
            subtitle={novel.subtitle}
            rating={novel.rating}
            genres={novel.genres}
            cover={novel.cover}
          />
        ))
      }

      </div>

    
      </div>
    </div>
    
  )
}
