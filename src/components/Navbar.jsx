import {useState} from 'react'
import {close,logo,menu} from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {
  const [Toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]'></img>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index)=>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[15px] ${index===navLinks.length-1?'mr-0':'mr-10'} text-amber-50  `}>
            <a href={`#{nav.id}`}> {nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={Toggle?close:menu} alt='menu' className='w-[28px] h-[28px] object-contain'
            onClick={()=>setToggle((prev)=>!prev)}></img>
        <div className={`${Toggle? 'flex' :'hidden'}  bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none sm:flex p-3 flex-col justify-end items-center flex-1'>
            {navLinks.map((nav,index)=>(
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[15px]  ${index===navLinks.length-1?'mr-0':'mb-5'} text-amber-50  `}>
              <a href={`#{nav.id}`}> {nav.title}</a>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar