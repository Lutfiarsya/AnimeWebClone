
import { useLocation } from "react-router-dom";
import { DataApi } from "../Apicall/Api"
import ListAnime from '../MainPage/ListAnime';

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}
const SearchPage = () => {

    const query = useQuery()
    const searchQuery = query.get('q')
    const searchId = DataApi(`anime` , `${searchQuery}`)
    console.log(searchId)
    return(
        <div>
            <ListAnime ApiAnime={searchId} searchQuery={searchQuery}/>
        </div>
    )
}

export default SearchPage;