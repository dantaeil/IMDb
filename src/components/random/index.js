import { useState } from "react";
import { Link } from "react-router-dom";

import { MovieData } from "../../data";

const Random = () => {
  const [current, setCurrent] = useState("joker");

  const onRandomMovie = () => {
    let next = current;
    while (next === current) {
      next = MovieData[Math.floor(Math.random() * 4)].id;
    }
    setCurrent(next);
  };

  const findMovie = (item, index, array) => {
    return item.id === current;
  };

  const { name, year, jpg } = MovieData.find(findMovie);

  return (
    <>
      <button
        className="bg-sky-500 text-white py-1 px-3 mb-5 shadow-xl"
        onClick={onRandomMovie}
      >
        PICK A RANDOM MOVIE
      </button>
      <div>
        <div className="mb-5">
          <span className="text-3xl font-bold mr-5">{name}</span>
          <span className="text-3xl">{year}</span>
        </div>
        <div>
          <Link to={`/movie/${current}`}>
            <img src={jpg} alt="1300*500" width={1300} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Random;
