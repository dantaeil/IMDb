import PopularItem from "./popular-item";
import { MovieData } from "../../data";

const MostPopular = () => {
  return (
    <div className="divide-y divide-gray-400">
      {MovieData.map((item) => {
        return <PopularItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default MostPopular;
