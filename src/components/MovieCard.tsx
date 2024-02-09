import React, { useEffect, useState } from "react";
import { getMovieVideos } from "../utils/services/apiCalls";

export const MovieCard: React.FC<{
  item: {
    data: {
      poster_path: string;
      title: string;
      id: number;
      overview: string;
      backdrop_path: string;
    };
  };
}> = ({ item }) => {
  const [infoshow, setInfoShow] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  useEffect(() => {
    getMovieVideos(item.data.id)
      .then((res) => {
        setVideoLink(
          `https://www.themoviedb.org/video/play?key=${res.data.results[0].key}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [item]);
  return (
    <div
      className="transition-all duration-1000 w-50 h-30 hover:scale-150 hover:border-y-2  rounded m-6 hover:m-12 hover:w-80 hover:bg-zinc-900"
      onMouseEnter={() => {
        setInterval(() => setInfoShow(true), 2000);
      }}
      onMouseLeave={() => setInfoShow(false)}
    >
      {infoshow ? (
        <iframe
          src={videoLink}
          className="rounded h-70 w-full aspect-video hover:aspect-square"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title={item.data.title}
          onMouseLeave={() => setInfoShow(false)}
        ></iframe>
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.data.poster_path}`}
          alt={item.data.title}
          className="rounded h-45 w-96"
        />
      )}
      {infoshow && (
        <div className="text-left text-wrap p-2 ">
          <a
            href={`https://www.themoviedb.org/movie/${item.data.id}-${item.data.title}/watch?locale=US`}
            target="_blank"
            rel="noreferrer"
            className="text-white text-sm text-left text-wrap"
            style={{ whiteSpace: "pre-wrap", fontSize: "12px" }}
          >
            {item.data.title}
            <span className="float-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            </span>
          </a>
          <p
            className="text-white text-left text-sm"
            style={{ whiteSpace: "pre-wrap", fontSize: "10px" }}
          >
            {item.data.overview}
          </p>
        </div>
      )}
    </div>
  );
};
