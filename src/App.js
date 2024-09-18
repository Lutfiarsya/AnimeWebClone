import { DataApi, GetRecommended } from "./Apicall/Api";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import ListAnime from "./MainPage/ListAnime";


function App() {
const listTopAnime = DataApi('top', 'anime')
const GetRecommendedAnime = DataApi('recommendations', 'anime')



  return (
    <div className="App bg-[--MainColor]">
      <nav>
        <Navbar />
      </nav>

        {/* Menampilkan Top Anime */}
      <div>
        <Header title={'Top Anime'}/>
        <ListAnime ApiAnime={listTopAnime}/>
      </div>
      
        {/* Menampilkan Anime Recomendations */}
      <div>
        <Header title={'Recomendations Anime'}/>
        <ListAnime ApiAnime={GetRecommendedAnime}/>
      </div>

    </div>
  );
}

export default App;
