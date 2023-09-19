import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Random from "./pages/random";
import MostPopular from "./pages/most-popular";

function App() {
  return (
    <div className="container mx-10 my-3">
      <p className="text-3xl text-sky-400 font-bold mb-5">
        Random Movie Picker
      </p>
      <Navbar />
      <Routes>
        <Route path="/random" element={<Random />} />
        <Route path="/most-popular" element={<MostPopular />} />
      </Routes>
    </div>
  );
}

export default App;
