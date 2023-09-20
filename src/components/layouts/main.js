import Navbar from "../navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="container pl-10 my-3">
      <p className="text-3xl text-sky-400 font-bold mb-5">
        Random Movie Picker
      </p>
      <Navbar />
      <div className="container mx-auto py-10 px-20">{children}</div>
    </div>
  );
};

export default MainLayout;
