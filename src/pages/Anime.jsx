import { DataApi } from '../Apicall/Api'
import ListAnime from '../MainPage/ListAnime';
import Header from '../Components/Header'
import Footer from '../Components/Footer';

const Anime = ({ setLoading, loading }) => {
  const listTopAnime = DataApi('top/anime')
  const GetRecommendedAnime = DataApi('recommendations/anime')

  return (
    <div className="flex flex-col min-h-screen bg-[--MainBg] text-white">
      {/* Section Top Anime */}
      <section className="px-2 sm:px-4 md:px-6 lg:px-12 py-6">
        <Header 
          title={'Top Anime'} 
          LinkTarget={'TopAnime'} 
          value={'View More'} 
        />
        <ListAnime 
          ApiAnime={listTopAnime} 
          HomePage 
          setLoading={setLoading} 
          loading={loading} 
        />
      </section>

      {/* Section Recommendations */}
      <section className="px-2 sm:px-4 md:px-6 lg:px-12 py-6">
        <Header title={'Recommendations Anime'} />
        <ListAnime 
          ApiAnime={GetRecommendedAnime} 
          AnimeRecommendations 
          HomePage 
        />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Anime;
