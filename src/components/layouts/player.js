import { useNavigate } from "react-router-dom";

const PlayLayout = ({ children }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="container pl-10 my-3">
      <button className="text-2xl font-bold" onClick={goBack}>
        &lt;Back
      </button>
      <div className="container mx-auto py-5 px-40">{children}</div>
    </div>
  );
};

export default PlayLayout;
