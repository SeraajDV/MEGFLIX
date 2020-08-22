import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import requests from "../api/requests";
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import '../css/Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(""); 

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrigianls);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || "")
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((error) => console.log(error));
    }
  };
  
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                   "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
               )`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner__buttons">
          <button onClick={() => handleClick(movie)} className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

    <h2 className="banner__description">{truncate(movie?.overview, 150)}</h2>
      </div>
      
      <div className="vid">
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
