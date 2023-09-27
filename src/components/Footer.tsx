import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import {MdOutlineMail} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import {CiInstagram} from 'react-icons/ci'
import {CiLinkedin} from 'react-icons/ci'
import {CiFacebook} from 'react-icons/ci'
import {MdOutlineLocationOn} from 'react-icons/md'

export default function Footer() {
    let Links =[
        {name:"Discover our novels",link:"/novels"},
        {name:"Generate a novel",link:"/generate"},
        {name:"Contact",link:"/"},
      ];
  return (
    <footer className='flex justify-around items-center md:px-20 px-5 md:py-20 py-10 flex-wrap'>
        <div className='p-4'>
        <img className='w-36' src={logo} alt='logo' />
        <h3 className='text-center w-36 text-3xl mt-4 text-white'>Novelingo</h3>
        <p className='w-36 text-center text-light mt-4'>Where Novels Shape Language Mastery!</p>
        </div>
        
        <div className='text-center underline underline-offset-2 flex flex-col p-4 text-white'>
        {
          Links.map((link)=>(
              <Link key={link.name} to={link.link} className='mt-4'>{link.name}</Link>
          ))
        }
        </div>

        <div  className='p-4'>

        <div className='text-light flex flex-col'>
            <span className='flex justify-cneter items-center'>
                <MdOutlineMail/> <p className='ml-2'>novelingo@gmail.com</p>
            </span>
            <span className='flex justify-cneter items-center'>
                <FiPhoneCall/> <p className='ml-2'>+994708782013</p>
            </span>
            <span className='flex justify-cneter items-center'>
                <MdOutlineLocationOn size={20} /> <p className='ml-2'>Baku, Azerbaijan</p>
            </span>
        </div>

        <div className='text-white text-3xl flex ' >
            <Link className='mr-1 mt-2' to={'/'}>
                <CiFacebook/> 
            </Link >

            <Link className='mr-1 mt-2' to={'/'}>
                <CiInstagram/> 
            </Link> 
            <Link className='mr-1 mt-2' to={'/'}>
                <CiLinkedin/> 
            </Link>
            
        </div>

        </div>
    </footer>
  )
}
