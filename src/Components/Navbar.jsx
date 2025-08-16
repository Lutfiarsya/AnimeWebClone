import { useState } from "react"
import Search from "../Utilities/Search"
import { NavLink, useNavigate } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = ({ keyword, setKeyword }) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    navigate("/")
    setIsOpen(false) 
  }

  const navLinkClass = ({ isActive }) =>
    `relative block text-sm sm:text-base lg:text-lg text-white px-2 sm:px-3 lg:px-4 py-2 transition-colors duration-300 
     ${isActive ? "font-semibold" : ""}
     after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
     after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 
     after:origin-center hover:after:w-full`

  const mobileNavLinkClass = ({ isActive }) =>
    `block text-lg text-white px-6 py-4 transition-all duration-300 hover:bg-white/15  hover:pl-8
     ${isActive ? "font-semibold bg-white/10 border-r-4 border-white" : ""}
     transform hover:translate-x-1 border-b border-white/5 last:border-b-0`

  return (
    <>
      <div className="fixed top-0 left-0 flex w-full h-[60px] sm:h-[70px] bg-[--SecondColor] z-20 justify-between items-center px-3 sm:px-4 lg:px-6">
        <h1
          className="font-bold text-white text-lg sm:text-xl lg:text-2xl font-['lexend'] hover:cursor-pointer transition-all duration-200 hover:scale-105"
          onClick={handleClick}
        >
          <span className="hidden sm:inline">MyAnimeList</span>
          <span className="sm:hidden">MAL</span>
        </h1>

        <div className="hidden lg:flex w-auto xl:w-[40%] flex-row justify-center xl:justify-between gap-2 xl:gap-0 px-4">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/explore" className={navLinkClass}>
            Explore
          </NavLink>
          <NavLink to="/genreList" className={navLinkClass}>
            Genre List
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </div>

        <div className="hidden lg:block">
          <Search keyword={keyword} setKeyword={setKeyword} />
        </div>

        <div className="hidden md:flex lg:hidden flex-row gap-1 z-10">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/explore" className={navLinkClass}>
            Explore
          </NavLink>
          <NavLink to="/genreList" className={navLinkClass}>
            <span className="hidden xl:inline">Genre List</span>
            <span className="xl:hidden">Genres</span>
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </div>
        {/* Burger Menu */}
        <div className="lg:hidden ">
          {!isOpen ? 
            <Menu 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300 
                         transform hover:scale-110 active:scale-95"
              size={40}
            /> : 
            <X 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300 
                         transform hover:scale-110 active:scale-95"
              size={40}
            />
          }
        </div>
      </div>

      <div className={`fixed top-[60px] sm:top-[70px] left-0 w-full bg-[--SecondColor] 
                      lg:hidden shadow-xl border-t border-white/10
                      transform transition-all duration-300 ease-in-out backdrop-blur-sm
                      ${isOpen 
                        ? 'translate-y-0 opacity-100 visible' 
                        : '-translate-y-full opacity-0 invisible'
                      } z-10`}>
        <div className="flex flex-col bg-gradient-to-b from-[--SecondColor] to-[--SecondColor]/95">
          <NavLink 
            to="/" 
            className={mobileNavLinkClass} 
            onClick={() => setIsOpen(false)}
          >
            <span className="flex items-center gap-3">
               Home
            </span>
          </NavLink>
          <NavLink 
            to="/explore" 
            className={mobileNavLinkClass} 
            onClick={() => setIsOpen(false)}
          >
            <span className="flex items-center gap-3">
               Explore
            </span>
          </NavLink>
          <NavLink 
            to="/genreList" 
            className={mobileNavLinkClass} 
            onClick={() => setIsOpen(false)}
          >
            <span className="flex items-center gap-3">
               Genre List
            </span>
          </NavLink>
          <NavLink 
            to="/about" 
            className={mobileNavLinkClass} 
            onClick={() => setIsOpen(false)}
          >
            <span className="flex items-center gap-3">
              About
            </span>
          </NavLink>

          <div className="w-full px-6 py-6 border-t border-white/20 bg-white/5 backdrop-blur-sm">
            <div className="mb-2 text-white/70 text-sm font-medium">Search Anime</div>
            <Search keyword={keyword} setKeyword={setKeyword} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-0 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar
