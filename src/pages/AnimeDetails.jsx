import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { DataApi } from "../Apicall/Api"
import Header from "../Components/Header"
import VideoPlayer from "../Utilities/VideoPlayer"
import Rating from "../Utilities/Rating"

const AnimeDetails = () => {
const { id } = useParams()
const [details, setDetails] = useState(null)
const url = DataApi(`anime/${id}`)


useEffect(() => {
    const fetchData = async() => {
        try{
            const response = await fetch(url);
            const anime = await response.json();
            setDetails(anime)
        }catch(error){
            console.error("error details")
        }
    }

    fetchData()
}, [id])

const genre = details?.data?.genres.map(items => "  " + items.name)
console.log(details?.data?.trailer?.url)
    return(
        <div>
            {details && (
                <div key={details?.data?.mal_id}>
                    <div className="text-white flex flex-row w-full h-full">
                        <div className="w-[30%] flex items-center justify-center p-8">
                        <img src={details.data?.images.webp.image_url}
                             width={300}
                             height={300}
                             className="rounded-lg"
                        />
                        </div>
                        <div className="w-[70%] flex flex-col m-auto">
                            <h1 className="text-5xl font-bold overflow-hidden">{details.data?.title}</h1>
                            <Rating rate={details.data?.score}/>
                            <div className="w-[80%]">
                            <p className="text-md mt-8">{details.data?.synopsis}</p>
                            </div>
                        </div>
                    </div>
                    {/* Details */}
                    <div>
                        <Header title={"Information"}/>
                        <div className="text-white text-lg m-6 grid grid-cols-[150px_1fr] gap-2 h-[250px]">
                            <h2>Alternate title</h2>
                            <h2>: {details.data?.title_english}</h2>

                            <h2>Type</h2>
                            <h2>: {details.data?.type}</h2>

                            <h2>Episodes</h2>
                            <h2>: {details.data?.episodes}</h2>

                            <h2>Rating</h2>
                            <h2>: {details.data?.rating}</h2>

                            <h2>Season</h2>
                            <h2>: {details.data?.season}</h2>

                            <h2>Genres</h2>
                            <h2>: {genre}</h2>
                        </div>
                    </div>
                    <div>
                        <Header title={"Trailer"}/>
                        <VideoPlayer source={details.data?.trailer?.embed_url}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnimeDetails