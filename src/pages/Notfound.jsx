import { Link } from "react-router-dom"
import icons from "../../src/assets/error.png"
const NotFound = () => {
    return(
        <div className="w-full h-[520px] m-auto flex flex-col items-center justify-center">
            <img
            width={200}
            height={200}
            src={icons}
            />
            <h1 className="text-4xl text-white font-bold overflow-hidden mt-6 p-2">Page Not Found</h1>
            <Link className="flex items-center justify-center font-bold text-white rounded-xl bg-[--SecondColor] w-52 h-8 mt-6" to="/">Go to home page</Link>
        </div>
    )
}

export default NotFound