import React, { useEffect, useState } from 'react';
import { DataApi } from '../Apicall/Api';
import { useParams } from 'react-router-dom';
import { Video } from 'lucide-react';
import VideoPlayer from '../Utilities/VideoPlayer';
import Header from '../Components/Header';

const EpisodesById = () => {
    const [episodesAnime, setEpisodesAnime] = useState([]);
    const urlId = useParams();
    const ApiEpisodes = DataApi(`anime/${urlId.id}/episodes/${urlId.episodeId}`);



    useEffect(() => {
        const fetchEpisodes = async () => {
            const response = await fetch(ApiEpisodes);
            const data = await response.json();
            setEpisodesAnime(data);
        };
        fetchEpisodes();
    }, []);
console.log(episodesAnime.data?.url);
  return (
    <div>
      <Header title={`Episode ${urlId.episodeId}`}/>
      <VideoPlayer source={episodesAnime.data?.url}/>
    </div>
  );
};

export default EpisodesById;
