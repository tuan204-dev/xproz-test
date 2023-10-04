import { BsChevronDown } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'

const Navbar: React.FC = () => {
  return (
    <nav className="h-[72px] nav-gradient flex justify-center items-center">
      <div className="w-[70%] h-8 flex justify-between">
        <div className="w-36 h-full rounded bg-[#D7FFEC]"></div>
        <div className='flex items-center text-[#FCFCFC] gap-6'>
          <div className='flex items-center gap-2 py-1 text-sm'>
            EN
            <span>
              <BsChevronDown />
            </span>
          </div>
          <div className="w-[1px] h-7 bg-[#FCFCFC] rounded"></div>
          <div>
            <span  className='text-2xl'>
              <BiUserCircle />
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
