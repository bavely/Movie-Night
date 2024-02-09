import png from "../utils/imgs/image-from-rawpixel-id-6772650-original.png";
import "../utils/styles/moodsearch.css";
import western from "../utils/imgs/1.jpg";
import war from "../utils/imgs/2.jpg";
import triller from "../utils/imgs/3.jpg";
import sport from "../utils/imgs/4.jpg";
import scifi from "../utils/imgs/5.jpg";
import romance from "../utils/imgs/6.jpg";
import mystery from "../utils/imgs/7.jpg";
import musical from "../utils/imgs/8.jpg";
import horror from "../utils/imgs/9.jpg";
import history from "../utils/imgs/10.jpg";
import fantacy from "../utils/imgs/11.jpg";
import family from "../utils/imgs/12.jpg";
import drama from "../utils/imgs/13.jpg";
import documentry from "../utils/imgs/14.jpg";
import crime from "../utils/imgs/15.jpg";
import comedy from "../utils/imgs/16.jpg";
import biography from "../utils/imgs/17.jpg";
import animation from "../utils/imgs/18.jpg";
import advanture from "../utils/imgs/19.jpg";
import action from "../utils/imgs/20.jpg";
import { motion } from "framer-motion";
import { useMoodGenres, useRander } from "../utils/stateCntrole/globalState";
import { Props } from "../utils/interfaces/propsInterface";
import { genres } from "../utils/interfaces/moodInterface";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
const MoodSearch: React.FC<Props> = ({ dataArray, counts }) => {
  const MoodGenres = useMoodGenres((state: genres) => state);
  const [moviesList, setMoviesList] = useState<any[]>(dataArray);
  useEffect(() => {
    setMoviesList(dataArray);
  }, [dataArray]);
  let images = [
    {
      image: western,
      name: "Western",
      id: 37,
    },
    {
      image: war,
      name: "War",
      id: 10752,
    },
    {
      image: triller,
      name: "Triller",
      id: 53,
    },
    {
      image: sport,
      name: "Sport",
      id: 10770,
    },
    {
      image: scifi,
      name: "Scifi",
      id: 878,
    },
    {
      image: romance,
      name: "Romance",
      id: 10749,
    },
    {
      image: mystery,
      name: "Mystery",
      id: 9648,
    },
    {
      image: musical,
      name: "Musical",
      id: 10402,
    },
    {
      image: horror,
      name: "Horror",
      id: 27,
    },
    {
      image: history,
      name: "History",
      id: 36,
    },
    {
      image: fantacy,
      name: "Fantacy",
      id: 14,
    },
    {
      image: family,
      name: "Family",
      id: 10751,
    },
    {
      image: drama,
      name: "Drama",
      id: 18,
    },
    {
      image: documentry,
      name: "Documentary",
      id: 99,
    },
    {
      image: crime,
      name: "Crime",
      id: 80,
    },
    {
      image: comedy,
      name: "Comedy",
      id: 35,
    },
    {
      image: biography,
      name: "Biography",
      id: 10771,
    },
    {
      image: animation,
      name: "Animation",
      id: 16,
    },
    {
      image: advanture,
      name: "Adventure",
      id: 12,
    },
    {
      image: action,
      name: "Action",
      id: 28,
    },
  ];

  const handleSearch = (name: string) => {
    useMoodGenres.setState({
      type: name,
      page: 1,
    });
  };
  const handleNext = () => {
    setMoviesList([...dataArray, ...moviesList]);
    setTimeout(() => {
      useMoodGenres.setState({
        type: MoodGenres.type,
        page: MoodGenres.page + 1,
      });
    }, 2000);
  };

  return (
    <div className=" flex flex-col flex-wrap ">
      <button
        type="button"
        onClick={() => useRander.setState({ as: false, ms: false, ma: true })}
        className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
      >
        <div className="flex flex-row align-middle">
          <svg
            className="w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p className="ml-2">Back</p>
        </div>
      </button>
      <div className="flex flex-row flex-wrap h-96">
        <div className="h-40 md:w-1/4 lg:w-1/4 sm:w-0 pt-9">
          <div className=" h-32 max-w-32 w-32 self-left rounded-full border-4  shadow-white/50 shadow-xl  mt-12 ml-12  flex justify-center heading">
            <svg
              className=" self-center "
              width="400"
              height="400"
              viewBox="75 50 350 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text style={{ fill: "white", fontSize: "20px" }}>
                <tspan x="64%" y="45%" className=" self-center ">
                  IT'S
                </tspan>
              </text>
              <text style={{ fill: "white" }}>
                <tspan x="30%" y="60%" className="heading self-center ">
                  MOVIE NIGHT
                </tspan>
              </text>

              <image href={png} height="150" width="150" x={"50%"} y={"60%"} />

              <defs>
                <path
                  d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                  id="a"
                />
              </defs>
              <g>
                <text>
                  <textPath
                    xlinkHref="#a"
                    style={{ fill: "white", fontSize: "30px" }}
                  >
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; BUCKLE UP
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
        </div>
        <div className="h-40 md:w-3/4 lg:w-3/4 sm:w-96 grid grid-rows-2 pr-0 pl-0 ">
          <div className=" pt-12">
            <h3 className="text-yellow-600/100">What are you up to?</h3>
          </div>

          <div className="flex flex-row  gap-3 h-auto flex-wrap ">
            {images.map((image, index) => (
              <motion.div
                onClick={() => handleSearch(image.id.toString())}
                className="grenimg "
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.4 }}
                key={image.id}
              >
                <img
                  className=" rounded-lg grenimg "
                  src={image.image}
                  alt={image.name}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="   grid grid-cols-6 gap-3 p-5 m-5   "> */}
      <p className="text-white self-center">
        {images.find((item) => item.id.toString() === MoodGenres.type)?.name}{" "}
        Movies
      </p>
      <InfiniteScroll
        className="   grid grid-cols-3 gap-3 p-12 m-12  min-h-screen"
        pageStart={0}
        loadMore={handleNext}
        hasMore={moviesList.length < counts.total_results}
        loader={
          <>
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto max-h-96">
              <div className="animate-pulse flex flex-col space-x-4 ">
                <div className="square-full bg-slate-200 h-48 w-full align-middle mb-4 self-center"></div>
                <div
                  className=" space-y-6 py-1 mr-4 justify-center ml-0"
                  style={{ marginLeft: 0 }}
                >
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto max-h-96">
              <div className="animate-pulse flex flex-col space-x-4 ">
                <div className="square-full bg-slate-200 h-48 w-full align-middle mb-4 self-center"></div>
                <div
                  className=" space-y-6 py-1 mr-4 justify-center ml-0"
                  style={{ marginLeft: 0 }}
                >
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto max-h-96">
              <div className="animate-pulse flex flex-col space-x-4 ">
                <div className="square-full bg-slate-200 h-48 w-full align-middle mb-4 self-center"></div>
                <div
                  className=" space-y-6 py-1 mr-4 justify-center ml-0"
                  style={{ marginLeft: 0 }}
                >
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto max-h-96">
              <div className="animate-pulse flex flex-col space-x-4 ">
                <div className="square-full bg-slate-200 h-48 w-full align-middle mb-4 self-center"></div>
                <div
                  className=" space-y-6 py-1 mr-4 justify-center ml-0"
                  style={{ marginLeft: 0 }}
                >
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto max-h-96">
              <div className="animate-pulse flex flex-col space-x-4 ">
                <div className="square-full bg-slate-200 h-48 w-full align-middle mb-4 self-center"></div>
                <div
                  className=" space-y-6 py-1 mr-4 justify-center ml-0"
                  style={{ marginLeft: 0 }}
                >
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto max-h-96">
              <div className="animate-pulse flex flex-col space-x-4 ">
                <div className="square-full bg-slate-200 h-48 w-full align-middle mb-4 self-center"></div>
                <div
                  className=" space-y-6 py-1 mr-4 justify-center ml-0"
                  style={{ marginLeft: 0 }}
                >
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
        useWindow={true}
      >
        {moviesList.map((item) => (
          <div key={item.id}>
            <MovieCard item={item} />
          </div>
        ))}
        {/* </> : <p className="text-red-600">Loading...</p>} */}
      </InfiniteScroll>
      {/* </div> */}
    </div>
  );
};

export default MoodSearch;
