import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopAnime from "./pages/TopAnime";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Loading from "./Utilities/Loading";
import AnimeDetails from "./pages/AnimeDetails";
import NotFound from "./pages/Notfound";




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
            <Route path="/" element={<Home setLoading={setLoading}/>} />
            <Route path="/TopAnime" element={<TopAnime setLoading={setLoading}/>} />
            <Route path="/Search/:keyword" element={<searchResult/>}/>
            <Route path="/anime/:id" element={<AnimeDetails/>}></Route>
            <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
        </div>
        }
      </div>
    </div>
    </>
  );
}

export default App;
