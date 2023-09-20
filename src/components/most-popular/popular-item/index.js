import { Link } from "react-router-dom";

const PopularItem = () => {
  return (
    <div className="flex flex-row items-center pb-5 pt-5">
      <div className="flex-auto ">
        <Link to="/movie/JOKER">
          <img src="https://placehold.co/180x100" alt="180*100" />
        </Link>
      </div>
      <div className="flex-auto flex flex-col">
        <div className="text-3xl font-bold mb-5">JOKER</div>
        <div className="text-3xl">2019</div>
      </div>
      <div className="flex-auto flex flex-col">
        <div className="text-2xl ">IMDb RATING</div>

        <div className="flex flex-row items-center">
          <div className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              fill="#0EA5E9"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
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
