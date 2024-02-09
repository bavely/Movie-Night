import png from "../utils/imgs/image-from-rawpixel-id-6772650-original.png";
import { useEffect, useState } from "react";
import { useRander, searchCriteria } from "../utils/stateCntrole/globalState";
import { Props } from "../utils/interfaces/propsInterface";
import { search } from "../utils/interfaces/searchInterface";
import {
  getMoviesWithGenre,
  getMovieDetails,
} from "../utils/services/apiCalls";
import InfiniteScroll from "react-infinite-scroller";
import { MovieCard } from "./MovieCard";
const AdvSearch: React.FC<Props> = ({ dataArray, counts }) => {
  const [keywordInput, setKeywordInput] = useState<string>("");
  const [inputsizectr, setInputsizectr] = useState<string>("1/4");
  const [moviesList, setMoviesList] = useState<any[]>([]);
  const [localcounts, setLocalCounts] = useState<{
    total_results: number;
    total_pages: number;
  }>({
    total_results: 0,
    total_pages: 0,
  });
  const searchPrams = searchCriteria((state: search) => state);

  useEffect(() => {
      setMoviesList(dataArray);
      
  }, [dataArray]);

  useEffect(() => {
    setLocalCounts(counts);
  }, [counts]);

  useEffect(() => {
    getRecentMovies();
  }, []);

  useEffect(() => {
    if (keywordInput.length > 0) {
      setInputsizectr("1/2");
    } else {
      setInputsizectr("1/4");
      getRecentMovies();
    }
  }, [keywordInput]);


  
  const getRecentMovies = () => {
    getMoviesWithGenre("", 1)
      .then((res) => {

        setLocalCounts({
          total_results: res.data.total_results,
          total_pages: res.data.total_pages,
        });
        let allData: [] = res.data.results
          .map((item: { id: number }) => {
            return getMovieDetails(item.id)
              .then((r) => {
                return r;
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .filter((item: { id: number }) => item !== undefined);
        Promise.all(allData).then((res) => {
          setMoviesList(res);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeywordInput(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    if(keywordInput === "") return
    // setMoviesList([])
    // setLocalCounts({
    //   total_results: 0,
    //   total_pages: 0,
    // });
    searchCriteria.setState({ keyword: keywordInput, page: 1 });
  };

  const handleNext = () => {
    setMoviesList([...dataArray, ...moviesList]);
    setTimeout(() => {
    if (keywordInput !== "") {
      searchCriteria.setState({
        keyword: keywordInput,
        page: searchPrams.page + 1,
      });
    }
  }, 2000);



  };

  return (
    <div className=" flex flex-col  ">
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
      <div className="flex flex-row ">
        <div className="h-auto w-1/4 pt-12">
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
        <div className="h-auto w-3/4 grid grid-rows-2 pr-2">
          <div className="h-12 pt-12">
            <h3 className="text-yellow-600/100">What are you up to?</h3>
          </div>

          <div
            className={`flex flex-row  bg-white h-fit w-${inputsizectr}  rounded-lg transition-all duration-700`}
          >
            {/* <div className=" w-full "> */}
              <input
                onChange={handleChange}
                value={keywordInput}
                className="placeholder:italic h-9 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-l-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-neutral-100 focus:ring-yellow-100 focus:ring-1 sm:text-sm"
                placeholder="Search..."
                type="text"
                name="search"
              />
            {/* </div> */}
            <div
              onClick={handleSubmit}
              className="w-1/8 h-9 bg-white px-3 pt-1.5 rounded-r-md hover:cursor-pointer   hover:bg-zinc-200 text-gray-800 font-semibold  border-gray-400 rounded shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.7"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-64 self-center  max-w-64 w-64 mt-12  flex justify-center formContainer "> */}
        <InfiniteScroll
          className="   grid grid-cols-3 gap-3 p-12 m-12  min-h-screen"
          pageStart={1}
          loadMore={handleNext}
          hasMore={moviesList.length < localcounts.total_results}
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

export default AdvSearch;
