import { useState, useMemo } from 'react'
import SearchButton from './SearchButton'

const Search: React.FC = () => {
  const [currentOption, setCurrentOption] = useState<number>(0)

  const options = useMemo(
    () => [
      {
        title: 'Suvarnabhumi (BKK)',
        id: 0,
        active: currentOption === 0,
      },
      {
        title: 'Don Mueng (DMK)',
        id: 1,
        active: currentOption === 1,
      },
      {
        title: 'Phuket (PKT)',
        id: 2,
        active: currentOption === 2,
      },
    ],
    [currentOption]
  )

  return (
    <div className="h-[136px] w-[646px] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.16)] rounded-xl search-bg-gradient  flex flex-col overflow-hidden">
      <div className="relative flex h-11">
        <button className="flex-1 flex justify-center items-center gap-[10px] p-[10px] text-[#57FFAE] rounded-se-xl">
          <img src="/svg/Arrival.svg" alt="Arrival" />
          <span className="text-lg font-bold">Arrival</span>
        </button>
        <button className="flex-1 flex justify-center items-center gap-[10px] p-[10px] text-[#FCFCFC] bg-[#37444F] rounded-es-xl">
          <img src="/svg/Departure.svg" alt="Arrival" />
          <span className="text-lg">Departure</span>
        </button>
      </div>
      <div className="flex items-center flex-1 w-full px-6">
        {options?.map((option) => (
          <SearchButton
            key={option?.id}
            id={option?.id}
            title={option?.title}
            active={option?.active}
            setCurrentOption={setCurrentOption}
          />
        ))}
      </div>
    </div>
  )
}

export default Search
