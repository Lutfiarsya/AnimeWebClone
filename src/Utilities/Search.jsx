import { MagnifyingGlass } from "phosphor-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Search = () => {
const [keyword, setKeyword] = useState('')
const navigate = useNavigate()

const handleClick = (event) => {
    if(event.key === "Enter"){
        if(keyword.trim()){
            navigate(`/anime?q=${keyword}`)
        }
    }
}

    return(
        <div className="mr-4 flex flex-row">
            <input 
            placeholder="Search Anime"

            className="w-72 text-md px-2 relative rounded-xl h-10 font-['Fira_Sans']"
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleClick}
            />
            <button onKeyDown={handleClick} >
            <MagnifyingGlass size={20} className="absolute right-7 top-6 hover:cursor-pointer"/>
            </button>
        </div>
    )
}

export default Search