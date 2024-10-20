import Search from "../Utilities/Search";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = ({keyword, setKeyword}) => {

    const Navigate = useNavigate()

    const handleClick = () => {
        Navigate('/')
    }

    return(
        <div className="flex flex-row w-full h-[70px] bg-[--SecondColor] justify-between items-center">
            <h1 className="ml-4 font-bold text-white text-2xl font-['lexend'] hover:cursor-pointer" onClick={handleClick}>MyAnimeList</h1>
            <div className="w-56 flex flex-row justify-between px-4">
                <a href="#" className="text-lg text-white">Anime list</a>
                <a href="#" className="text-lg text-white" >Genre list</a>
            </div>
            <Search keyword={keyword} setKeyword={setKeyword}/>
        </div>
    )
}

export default Navbar;