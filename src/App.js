import { Routes, Route } from "react-router-dom";
import TopAnime from "./pages/TopAnime";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Loading from "./Utilities/Loading";
import AnimeDetails from "./pages/AnimeDetails";
import NotFound from "./pages/Notfound";
import SearchPage from "./pages/SearchPage";
import Anime from "./pages/Anime";
import Home from "./pages/Home";
import About from "./pages/About";
import EpisodesById from "./pages/EpisodesById";
import GenrePage from "./pages/GenrePage";




function App() {
  const[loading, setLoading] = useState(false)
  

  return (
    <>
    {/* React Router */}
    <div>
    </div>
    <div className="App bg-[--MainColor]">
      <nav>
        <Navbar />
      </nav>
      <div>
        {loading ? <Loading/> : 
        <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Anime setLoading={setLoading}/>} />
            <Route path="/TopAnime" element={<TopAnime setLoading={setLoading}/>} />
            <Route path="/anime/:id" element={<AnimeDetails/>}></Route>
            <Route path="/*" element={<NotFound/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/anime" element={<SearchPage/>}></Route>
            <Route path="/anime/:id/episodes/:episodeId" element={<EpisodesById/>}></Route>
            <Route path="/genre" element={<GenrePage/>}/>
        </Routes>
        </div>
        }
      </div>
    </div>
    </>
  );
}

export default App;
