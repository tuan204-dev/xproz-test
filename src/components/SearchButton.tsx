interface SearchButtonProps {
  title: string
  active: boolean
  id: number
  setCurrentOption: React.Dispatch<React.SetStateAction<number>>
}

const SearchButton: React.FC<SearchButtonProps> = ({
  title,
  active,
  setCurrentOption,
  id,
}) => {
  return (
    <button
      onClick={() => setCurrentOption(id)}
      className={`flex-1 rounded-lg h-11 px-4 py-2 transition duration-75 ${
        active ? 'bg-[#57FFAE] text-[#04304B] font-bold' : 'text-[#9BA2AE]'
      }`}
    >
      {title}
    </button>
  )
}

export default SearchButton
