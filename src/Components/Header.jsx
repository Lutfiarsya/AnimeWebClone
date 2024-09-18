const Header = ({title}) => {
    return(
        <div className="text-lg font-bold font-['Lexend'] text-white bg-[--ThirdColor] mt-14 w-full h-16 flex flex-row justify-between items-center px-4">
            <h1>{title}</h1>
            <a href="#">View More</a>
        </div>  
    )
}

export default Header;