import { useEffect, useState } from "react"

const TopAnime = ({ApiAnime}) => {

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
},[])
 


return(
    <div>
            {items && (
                <div className="grid grid-cols-4 gap-y-4 my-4">
                    {items?.data?.slice(0,8).map((anime, index) => {   
                        return(
                            <div key={anime.mal_id} className="mt-6relative shadow-[2px_2px_3px_0px_black] rounded-xl bg-[--CardColor] py-3 w-72 h-[450px] m-auto flex flex-col">
                                <div>
                                <img
                                    src={anime.images?.webp.image_url}
                                    alt="no image"
                                    width={250}
                                    height={250}
                                    className="m-auto object-cover rounded-xl"
                                />
                                </div>
                                <div className="relative top-2 left-4">
                                    <h1 className="text-xl font-['Exo_2'] font-bold text-white">{anime.title}</h1> 
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}


export default TopAnime