import { MagnifyingGlass } from "phosphor-react"
const Search = () => {
    return(
        <div className="mr-4 flex flex-row">
            <input 
            placeholder="Search Anime"
            className="w-72 text-md px-2 relative rounded-xl h-10 font-['Fira_Sans']"
            />
            <MagnifyingGlass size={20} className="absolute right-7 top-6 hover:cursor-pointer"/>
        </div>
    )
}

export default Search