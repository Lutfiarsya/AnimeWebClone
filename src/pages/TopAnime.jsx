import { useEffect, useState } from "react";
import { DataApi } from "../Apicall/Api";
import ListAnime from "../MainPage/ListAnime"
import Pagination from "../Utilities/Pagination";

const TopAnime = () => {
const[page, setPage] = useState(1)
const[topAnime, setTopAnime] = useState([])
const Api = DataApi('top/anime', `page=${page}`)

    return(
        <div>
            <ListAnime ApiAnime={Api} Page={page}/>
            <Pagination Page={page} TotalPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
        </div>
    )
}

export default TopAnime;