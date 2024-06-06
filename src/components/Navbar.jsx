import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='py-4 mx-auto'>

            <ul class="hidden md:flex w-full bg-gray-400/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[400px] 
                        mx-auto justify-between items-center px-5 text-gray-400">
                <li className='p-2'><Link to="hero" spy={true} smooth={true} offset={50} duration={500} activeClassName="selected">Home</Link></li>
                <li className='p-2'><Link to="about" spy={true} smooth={true} offset={50} duration={500} activeClassName="selected">About</Link></li>
                <li className='p-2'><Link to="portfolio" spy={true} smooth={true} offset={50} duration={500} activeClassName="selected">Portfolio</Link></li>
                <li className='p-2'><Link to="contact" spy={true} smooth={true} offset={50} duration={500} activeClassName="selected">Contact</Link></li>
            </ul>

            <div onClick={handleNav} className='block md:hidden text-gray-300 fixed right-10 top-10 z-50'>
                {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
            </div>

            <div className={nav ? 'text-gray-300 z-40 fixed left-0 top-0 w-full bg-[#202121] ease-in-out duration-500' 
                                    : 'fixed left-[-100%]'}>
                <ul className='p-8 text-4xl ml-20 z-10'>
                    <li className='p-2'><Link to="hero" spy={true} smooth={true} offset={50} duration={500} activeClassName="selected">Home</Link></li>
                    <li className='p-2'><Link to="about" spy={true} smooth={true} offset={50} duration={500} activeClassName="selected">About</Link></li>
                    <li className='p-2'><Link to="portfolio" spy={true} smooth={true} offset={50} duration={500} activeClassName="selected">Portfolio</Link></li>
                    <li className='p-2'><Link to="contact" spy={true} smooth={true} offset={50} duration={500} activeClassName="selected">Contact</Link></li>
                </ul> 
            </div>  
            

    </div>
  )
}

export default Navbar