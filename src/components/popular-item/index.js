import { StarIcon } from "@heroicons/react/24/solid";

const PopularItem = () => {
  return (
    <div className="flex flex-row items-center pb-5 pt-5">
      <div className="flex-auto ">
        <button>
          <img src="https://placehold.co/180x100" alt="180*100" />
        </button>
      </div>
      <div className="flex-auto flex flex-col">
        <div className="text-3xl font-bold mb-5">JOKER</div>
        <div className="text-3xl">2019</div>
      </div>
      <div className="flex-auto flex flex-col">
        <div className="text-2xl ">IMDb RATING</div>

        <div className="flex flex-row items-center">
          <div className="mr-3">
            <StarIcon className="w-10 h-10 text-sky-500" />
          </div>
          <div className="text-3xl font-bold">10 / 10</div>
        </div>
      </div>
      <div className="flex-auto">
        <div className="text-2xl ">Rank</div>
        <div className="text-3xl font-bold">1</div>
      </div>
    </div>
  );
};

export default PopularItem;
