import { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
// import cards_data from "../../assets/cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setDataApi] = useState([]);

  const cardRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTRmZGIwMDkxNTVhNjE4M2M2ZDIwNDM0M2IxY2U3YiIsIm5iZiI6MTczNzY1NjkyNS43MDQsInN1YiI6IjY3OTI4YTVkNjJhNTAzN2NmMTg5OTcwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.14qxvH_nkblFJq8RJJtEJiAs_TxdfP_EStarTWIKLUs",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    cardRef.current.addEventListener("wheel", handleWheel);

    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setDataApi(res.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map(({ id, backdrop_path, original_title }, index) => {
          return (
            <Link to={`./player/${id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + backdrop_path}
                alt="card"
              />
              <p>{original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
