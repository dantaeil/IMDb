const Random = () => {
  return (
    <div>
      <button className="bg-sky-500 text-white py-1 px-3 mb-5 shadow-xl">
        PICK A RANDOM MOVIE
      </button>
      <div>
        <div className="mb-5">
          <span className="text-3xl font-bold mr-5">JOKER</span>
          <span className="text-3xl">2019</span>
        </div>
        <div>
          <button>
            <img src="https://placehold.co/1300x500" alt="1300*500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Random;
