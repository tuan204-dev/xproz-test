import Navbar from './Navbar'

const Header: React.FC = () => {
  return (
    <header className="aspect-[5/2] bg-[url('/images/bg-header.jpg')] bg-center bg-no-repeat bg-cover flex flex-col">
      <Navbar />
        <div className='w-[1024px] mx-auto flex flex-col flex-1 px-5 pt-10'>
          <h2 className='text-[#00326D] text-5xl font-bold tracking-[2.4px]'>SAWASDEE Pass</h2>
          <span className='text-[#37444F] text-lg font-medium leading-8 tracking-[0.36px]'>Smooth and comfortable airport journey.</span>
        </div>
    </header>
  )
}

export default Header
