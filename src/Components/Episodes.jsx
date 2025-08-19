import { useParams, useNavigate } from "react-router-dom";
import { DataApi } from "../Apicall/Api";
import { useEffect, useState } from "react";




const Episodes = () => {
const urlId = useParams();
const urlApi = DataApi(`anime/${urlId.id}/episodes`);
const [episodes, setEpisodes] = useState([]);


const navigate = useNavigate();


const handleEpisodes = (eps) => {
    navigate(`/anime/${urlId.id}/episodes/${eps}`)
}

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(urlApi);
    const data = await response.json();
    setEpisodes(data);
  };
  fetchData();
}, [urlApi]);



  return (
    <div className="w-full h-full grid grid-cols-12 gap-4 p-4 items-center">
        {episodes.data?.map((items) => {
            return(
                <button onClick={() => handleEpisodes(items.mal_id)} className="text-white hover:bg-[--SecondColor] hover:bg-border-[--ThirdColor] transition-all transition duration-500 rounded-md border border-[1.5px] border-white bg-transparent w-20 h-10 flex items-center justify-center text-center">
                    <h2>{items.mal_id}</h2>
                </button>
            )
        })}
    </div>
  );
};

export default Episodes;
