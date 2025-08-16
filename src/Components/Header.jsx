import { Link } from "react-router-dom";
const Header = ({title, LinkTarget, value}) => {


    return(
        <>
        <div className="text-lg font-bold font-['Lexend'] text-white bg-[--ThirdColor] mt-28 w-full h-16 flex flex-row justify-between items-center px-4">
            <h1>{title}</h1>
            <Link to={`/${LinkTarget}`}>{value}</Link>
        </div>  
        </>
    )
}

export default Header;