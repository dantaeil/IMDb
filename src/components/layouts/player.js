import { useNavigate } from "react-router-dom";

const PlayLayout = ({ children }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="container pl-10 my-3">
      <button
        className="text-2xl font-bold flex flex-row items-center"
        onClick={goBack}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 22 22"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <div className="flex-initial">BACK</div>
      </button>
      <div className="container mx-auto py-5 px-40">{children}</div>
    </div>
  );
};

export default PlayLayout;
