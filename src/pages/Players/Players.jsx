import { useEffect, useState } from "react";
import "./Players.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const Players = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTRmZGIwMDkxNTVhNjE4M2M2ZDIwNDM0M2IxY2U3YiIsIm5iZiI6MTczNzY1NjkyNS43MDQsInN1YiI6IjY3OTI4YTVkNjJhNTAzN2NmMTg5OTcwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.14qxvH_nkblFJq8RJJtEJiAs_TxdfP_EStarTWIKLUs",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <FaArrowAltCircleLeft
        className="back-icon"
        onClick={() => navigate(-2)}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Players;
