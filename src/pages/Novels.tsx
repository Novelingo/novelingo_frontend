import NovelCard from "../components/NovelCard"
import bookcover from '../assets/bookcover.png'
import Filter from "../components/Filter"
import {AiOutlineSearch} from 'react-icons/ai'
export default function Novels() {
  let novels= [
    {title: 'The Love of a Lifetime',
    subtitle: "A heart-wrenching tale of love, loss, and second chances, set against the picturesque backdrop of a small English town.",
    rating: 4,
    genres: ['English', 'C2', 'Romance', 'Large'],
    cover: bookcover,
  },
  {title: 'The Love of ca Lifetime',
  subtitle: "A heart-wrenching tale of love, loss, and second chances, set against the picturesque backdrop of a small English town.",
  rating: 4,
  genres: ['English', 'C2', 'Romance', 'Large'],
  cover: bookcover,
},
{title: 'The Love of ac Lifetime',
subtitle: "A heart-wrenching tale of love, loss, and second chances, set against the picturesque backdrop of a small English town.",
rating: 4,
genres: ['English', 'C2', 'Romance', 'Large'],
cover: bookcover,
},
{title: 'The Love of acb Lifetime',
subtitle: "A heart-wrenching tale of love, loss, and second chances, set against the picturesque backdrop of a small English town.",
rating: 4,
genres: ['English', 'C2', 'Romance', 'Large'],
cover: bookcover,
},

  ]

  let filters = [
    {title: 'Language', 
    options: [{id: '1',title: 'French'}, {id: '2', title: 'English'}, {id: '3', title: 'Russian'}]  
    },
    {title: 'Language', 
    options: [{id: '1',title: 'French'}, {id: '2', title: 'English'}, {id: '3', title: 'Russian'}]  
    }
  ]
  return (
    <div className="mt-10 md:px-20 px-5 md:py-20 py-10">
       <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <div className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true">
              <AiOutlineSearch />

            </div>
        </div>
        <input type="search" id="default-search" className="w-4/5 self-center text-purple lg:p-2.5 pr-5 lg:pr-14 p-1.5 pl-3 placeholder:text-purple text-base  bg-light rounded shadow-sm focus:outline-none sm:text-sm" placeholder="Search novels" required />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>

      <div>
        <span>
          <span >
          </span>
            <input className="w-4/5 self-center text-purple lg:p-2.5 pr-5 lg:pr-14 p-1.5 pl-3 placeholder:text-purple text-base  bg-light rounded shadow-sm focus:outline-none sm:text-sm" name="myInput" placeholder="Your email address" />

        </span>

      </div>

    <div className=' flex flex-wrap justify-center ' >
 
      <div className=" w-1/5 ">
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
