import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchPage from "./components/SearchPage";
import HomePage from "./pages/HomePage";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:word" element={<SearchPage />} />
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
