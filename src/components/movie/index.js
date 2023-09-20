const Movie = () => {
  return (
    <>
      <div className="mb-1">
        <span className="text-3xl font-bold mr-5">JOKER</span>
        <span className="text-3xl">2019</span>
      </div>
      <div>
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        <img src="https://placehold.co/1200x600" alt="1200*600" />
      </div>
      <div className="flex flex-row my-10 items-center space-x-6">
        <div className="flex-initial py-1 px-4 border text-1xl font-semibold">
          CRIME
        </div>
        <div className="flex-initial py-1 px-4 border text-1xl font-semibold">
          DRAMA
        </div>
        <div className="flex-initial py-1 px-4 border text-1xl font-semibold">
          THRILLER
        </div>
        <div className="flex-initial font-semibold">
          A mentally troubled stand-up comedian embarks on a downward spiral
          that leads to the creation of an iconic villain
        </div>
      </div>
    </>
  );
};

export default Movie;
