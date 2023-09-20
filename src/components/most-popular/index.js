import PopularItem from "./popular-item";
import Joker from "../../assets/joker.png";
import Panther from "../../assets/panther.png";
import Spiderman from "../../assets/spiderman.png";
import Thor from "../../assets/thor.png";

const data = [
  {
    id: "joker",
    name: "JOKER",
    year: 2019,
    rating: 10,
    rank: 1,
    img: Joker,
  },
  {
    id: "spiderman",
    name: "SPIDER-MAN: NO WAY HOME",
    year: 2019,
    rating: 9.7,
    rank: 2,
    img: Spiderman,
  },
  {
    id: "thor",
    name: "THOR: RAGNAROK",
    year: 2019,
    rating: 9.4,
    rank: 3,
    img: Thor,
  },
  {
    id: "panther",
    name: "BLACK PANTHER",
    year: 2019,
    rating: 8.4,
    rank: 4,
    img: Panther,
  },
];

const MostPopular = () => {
  return (
    <div className="divide-y divide-gray-400">
      {data.map((item) => {
        return <PopularItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default MostPopular;
