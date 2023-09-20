import { Routes, Route } from "react-router-dom";
import Random from "./components/random";
import MostPopular from "./components/most-popular";
import MainLayout from "./components/layouts/main";
import PlayLayout from "./components/layouts/player";
import Movie from "./components/movie";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route
          path="/random"
          element={
            <MainLayout>
              <Random />
            </MainLayout>
          }
        />
        <Route
          path="/most-popular"
          element={
            <MainLayout>
              <MostPopular />
            </MainLayout>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <PlayLayout>
              <Movie />
            </PlayLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
