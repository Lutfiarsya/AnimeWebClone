import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopAnime from "./pages/TopAnime";
import Navbar from "./Components/Navbar";


function App() {

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
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/TopAnime" element={<TopAnime/>} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
