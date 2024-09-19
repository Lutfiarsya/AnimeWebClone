import { useEffect, useState } from "react"

const GetTopAnime = ({ApiAnime, AnimeRecommendations, HomePage, Page}) => {

const[items, setItems] = useState(null)
const[loading, setLoading] = useState(true)
const[error, setError] = useState(null);



useEffect(() => {
    const fetchData = async() => {
        try{
            const response = await fetch(ApiAnime)
            const result = await response.json();
            setItems(result)
        }
        catch(error){
            console.error('Network error', error);

        }
    }
    fetchData()
},[Page])
 
const page = HomePage ?  items?.data?.slice(0,8) : items?.data

return(
    <div>
            {items && (
                <div className="grid grid-cols-4 gap-y-4 my-4 ">
                    {page?.map((anime, index) => {   
                        
                        const title = AnimeRecommendations ? anime.entry[0].title : anime.title
                        const Images = AnimeRecommendations ? anime.entry[0].images?.webp.image_url : anime.images?.webp.image_url

                        return(
                            <div key={anime.mal_id} className="mt-6 relative shadow-[2px_2px_3px_0px_black] rounded-xl bg-[--CardColor] py-3 w-72 h-[450px] m-auto flex flex-col">
                                <div className="overflow-y-hidden">
                                <img
                                    src={Images}
                                    alt="no image"
                                    width={250}
                                    height={250}
                                    className="m-auto object-cover rounded-xl "
                                />
                                </div>
                                <div className="relative top-2 left-4 overflow-y-hidden">
                                    <h1 className="text-xl font-['Exo_2'] font-bold text-white">{title}</h1> 
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}


export default GetTopAnime;