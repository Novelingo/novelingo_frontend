import { Link } from 'react-router-dom';
import { useState } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { TiThMenu } from 'react-icons/ti';
import logo  from '../assets/logo.svg'


const Navbar = () => {


  let Links =[
    {name:"Home",link:"/"},
    {name:"Novels",link:"/novels"},
    {name:"Generate",link:"/generate"},
  ];
  const [open, setOpen] = useState(false);

  return (
    
<nav  className={`bg-gradient-to-r from-dark1 to-dark2 font-body z-10000 w-full fixed top-0 left-0 text-white px-20 max-xl:px-5  `}>
<div className='flex md:flex items-center justify-between py-4 md:px-10 px-7'>

        <Link to="/" className='text-2xl cursor-pointer flex items-center'>
        <img src={logo} alt="logo" />
         <p className='ml-2'>Novelingo</p>
        </Link>

        <div onClick={()=>setOpen(!open)} className='text-3xl cursor-pointer md:hidden'>
          
        <span className="self-center"> {open ? <AiOutlineCloseCircle /> : <TiThMenu />}</span>
      </div>

      <ul className={`${open ? 'top-10 pl-12 bg-gradient-to-r from-dark1 to-dark2':'top-[-490px]'} md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in `}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7'>
              <Link to={link.link} className='duration-500'>{link.name}</Link>
            </li>
          ))
        }
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
