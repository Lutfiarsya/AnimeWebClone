import Search from "../Utilities/Search";

const Navbar = () => {
    return(
        <div className="flex flex-row w-full h-[70px] bg-[--SecondColor] justify-between items-center">
            <h1 className="ml-4 font-bold text-white text-2xl font-['lexend']">MyAnimeList</h1>
            <div className="w-56 flex flex-row justify-between px-4">
                <a href="#" className="text-lg text-white">Anime list</a>
                <a href="#" className="text-lg text-white" >Genre list</a>
            </div>
            <Search />
        </div>
    )
}

export default Navbar;