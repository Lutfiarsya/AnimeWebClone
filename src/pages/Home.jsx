import { DataApi } from '../Apicall/Api'
import ListAnime from '../MainPage/ListAnime';
import Header from '../Components/Header'
import { useState } from 'react';



const Home = ({setLoading, loading}) => {
const listTopAnime = DataApi('top/anime')
const GetRecommendedAnime = DataApi('recommendations/anime')




return(
    <div>
        <div> 
        <div>
            <Header title={'Top Anime'} LinkTarget={'TopAnime'} value={'View More'}/>
            <ListAnime ApiAnime={listTopAnime} HomePage setLoading={setLoading} loading={loading}/>
        </div>
      
        {/* Menampilkan Anime Recomendations */}
        <div>
            <Header title={'Recomendations Anime'}/>
            <ListAnime ApiAnime={GetRecommendedAnime} AnimeRecommendations HomePage />
        </div>
        </div>
    </div>
    )
}

export default Home;