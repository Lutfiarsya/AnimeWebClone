import { MagnifyingGlass } from "phosphor-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Search = () => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

const handleClick = (event) => {
    if(event.key === "Enter"){
        if(keyword.trim()){
            navigate(`/anime?q=${keyword}`)
        }
    }
}

  return (
    <div className="relative flex items-center w-full max-w-xs sm:max-w-sm lg:max-w-md">
      <input 
        placeholder="Search Anime"
        className="w-full text-sm sm:text-base px-3 py-2 pr-10 
                   rounded-lg border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   font-['Fira_Sans'] placeholder-gray-500
                   transition-all duration-200"
        onChange={(e) => setKeyword && setKeyword(e.target.value)}
        onKeyDown={handleClick}
      />
      <button 
        onKeyDown={handleClick}
        className="absolute right-2 p-1 hover:bg-gray-100 rounded-md 
        transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search"
      >
        <MagnifyingGlass 
          size={18} 
          className="text-gray-600 hover:text-blue-600 transition-colors duration-200" 
        />
      </button>
    </div>
  )
}

export default Search