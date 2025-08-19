import { allAnime } from "../Apicall/Api";
import { useState, useEffect } from "react";
import NotFound from "./Notfound";
const GenrePage = () => {
    const [genres, setGenres] = useState([])
    const [dataAnime, setDataAnime] = useState([])
    const url = allAnime('anime');
    const urlGenre = allAnime('genres/anime');



    useEffect(() => {
        const fetchGenres = async () => {
            const dataGenre = await fetch(urlGenre);
            const responseGenre = await dataGenre.json();
            setGenres(responseGenre);
        };
        fetchGenres();
    },[])
    console.log(genres)
    
    return(
        <div>
            <NotFound/>
        </div>

    )
}

export default GenrePage;