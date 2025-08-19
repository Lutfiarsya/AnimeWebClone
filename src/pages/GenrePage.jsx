import { allAnime } from "../Apicall/Api";
import { useState, useEffect } from "react";
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
            {genres.data?.map((items) => {
                return(
                    <div>
                        <h2>{items.name}</h2>
                    </div>
                )
            })}
        </div>

    )
}

export default GenrePage;