import background from '../assets/home.png'
import AppButton from '../components/AppButton'
import romance from '../assets/romance.svg'
import horror from '../assets/horror.svg'
import action from '../assets/action.svg'
import adult from '../assets/adult.svg'
import Genre from '../components/Genre'
import TextTitle from '../components/TextTitle'
import AppSection from '../components/AppSection'
import background2 from '../assets/section3.png'
import levels from '../assets/section3.svg'
import Footer from '../components/Footer'
export default function Home() {
  let genres = [
    {genre: horror, title: 'Horror'},
    {genre: action, title: 'Action'},
    {genre: romance, title: 'Romance'},
    {genre: adult, title: 'Adult'},


  ]
  return (
    <div className='mt-10'>
    <AppSection 
          className=' flex items-center' 
          style={{
            backgroundImage:`url(${background})`,
            height:'98vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            maxWidth: 'none',
          }}> 

          <div className='max-xl:text-center flex flex-col mx-6 xl:w-1/3'>
          <TextTitle className=' text-white'>Novels Beyond Borders: Expand Your Linguistic Horizons</TextTitle>
          <p className='text-xl	text-light mt-6'>Dive into AI Generated Enchanting Stories and Emerge with a Richer Vocabulary and Deeper Language Proficiency</p>
          <AppButton className='w-40 max-xl:self-center text-lg p-4	mt-6'>Start reading  </AppButton>
        </div>
    </AppSection>

    <AppSection className="bg-light">
    <TextTitle className=' py-12 text-center text-dark1'>Enhance Your Lexicon by Exploring Our Diverse Collection of Novels with Various Genres!</TextTitle>
    <div className='flex justify-center flex-wrap'>
       {genres.map((genre)=>(
        <Genre key={genre.title} genre={genre.genre} title={genre.title}/>
    ))}
    </div>
    </AppSection>
    <AppSection className='flex flex-col justify-center items-center'  style={{
            backgroundImage:`url(${background2})`,
            height:'98vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            maxWidth: 'none',
          }}> 
          
    <TextTitle className='text-center py-12 text-white ' >Choose your language level and start reading!</TextTitle>
    <img className='lg:px-20 md:px-10 px-5 w-full py-6' src={levels} alt='levels' />
    <div className='text-white text-center lg:text-xl flex flex-wrap justify-center'>
       <p className='lg:p-14 md:p-8 p-3'>Beginner</p>
    <p  className='lg:p-14 md:p-8 p-3'>Elementary</p>
    <p  className='lg:p-14 md:p-8 p-3'>Intermediate</p>
    <p  className='lg:p-14 md:p-8 p-3'>Competent</p>
    <p  className='lg:p-14 md:p-8 p-3'>Advanced</p>
    <p  className='lg:p-14 md:p-8 p-3'>Fluent</p>
    </div>
        
    </AppSection>
    <AppSection className='lg:m-20 m-6 rounded-lg bg-light flex flex-wrap content-center justify-around h-auto'>
   
        <TextTitle className='text-dark1 self-center text-4xl text-center w-1/2'>Subscribe to get information about our latest features!</TextTitle>
        <div className=" flex items-center mt-3 ">

        <label >
        <input className="text-purple lg:p-2.5 pr-5 lg:pr-14 p-1.5 pl-3 placeholder:text-purple placeholder:opacity-50 text-base  bg-white rounded-l-lg shadow-sm focus:outline-none focus:border-gradient2 focus:ring-gradient2 focus:ring-1 sm:text-sm" name="myInput" placeholder="Your email address" />
        </label>
        <AppButton className='flex items-center lg:p-2 p-1.5 rounded-r-lg rounded-l-none'>
            Subscribe
        </AppButton>   
                

    </div>
    </AppSection>
    <Footer />

    
    
    </div>
  )
}
