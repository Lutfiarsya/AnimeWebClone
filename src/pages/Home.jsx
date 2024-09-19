import { DataApi } from '../Apicall/Api'
import ListAnime from '../MainPage/ListAnime';
import Header from '../Components/Header'

const Home = () => {

const listTopAnime = DataApi('top/anime')
const GetRecommendedAnime = DataApi('recommendations/anime')

return(
    <div>
        <div>
            <Header title={'Top Anime'} LinkTarget={'TopAnime'} value={'View More'}/>
            <ListAnime ApiAnime={listTopAnime} HomePage/>
        </div>
      
        {/* Menampilkan Anime Recomendations */}
        <div>
            <Header title={'Recomendations Anime'}/>
            <ListAnime ApiAnime={GetRecommendedAnime} AnimeRecommendations HomePage />
        </div>
    </div>
    )
}

export default Home;