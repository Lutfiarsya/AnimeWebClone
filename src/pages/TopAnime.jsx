import { useState } from "react";
import { DataApi } from "../Apicall/Api";
import ListAnime from "../MainPage/ListAnime"
import Pagination from "../Utilities/Pagination";

const TopAnime = ({setLoading}) => {
const[page, setPage] = useState(1)
const[topAnime, setTopAnime] = useState([])
const Api = DataApi('top/anime', `page=${page}`)
    return(
        <div className="w-full">
            <div className="flex mt-8 ">
            <h1 className="text-white font-bold text-4xl m-auto overflow-hidden">TOP ANIME</h1>
            </div>
            <ListAnime ApiAnime={Api} Page={page} setLoading={setLoading}/>
            <Pagination Page={page} TotalPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
        </div>
    )
}

export default TopAnime;