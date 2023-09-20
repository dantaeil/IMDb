import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Random from "./pages/random";
import MostPopular from "./pages/most-popular";

function App() {
  return (
    <div className="container pl-10 my-3">
      <p className="text-3xl text-sky-400 font-bold mb-5">
        Random Movie Picker
      </p>
      <Navbar />
      <div className="container mx-auto py-10 px-20">
        <Routes>
          <Route path="/random" element={<Random />} />
          <Route path="/most-popular" element={<MostPopular />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
