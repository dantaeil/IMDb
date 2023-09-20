import { useLocation } from "react-router-dom";
import { MovieData } from "../../data";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

const Movie = () => {
  const location = useLocation();

  const current = location.pathname.split("/")[2];

  const findMovie = (item, index, array) => {
    return item.id === current;
  };

  const { name, year, img, detail, url } = MovieData.find(findMovie);
  const trailerUrl = url;

  console.log(detail.tag);

  return (
    <>
      <div className="mb-1">
        <span className="text-3xl font-bold mr-5">{name}</span>
        <span className="text-3xl">{year}</span>
      </div>
      <div>
        <Video
          autoPlay
          loop
          muted
          controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
          poster={img}
          onCanPlayThrough={() => {
            // Do stuff
          }}
        >
          <source src={trailerUrl} type="video/webm" />
          <track
            label="English"
            kind="subtitles"
            srcLang="en"
            src="http://source.vtt"
            default
          />
        </Video>
      </div>
      <div className="flex flex-row my-10 items-center space-x-6">
        {detail.tag.map((item, index) => {
          return (
            <div
              key={index}
              className="flex-initial py-1 px-4 border text-1xl font-semibold"
            >
              {item}
            </div>
          );
        })}
        <div className="flex-initial font-semibold">{detail.description}</div>
      </div>
    </>
  );
};

export default Movie;
