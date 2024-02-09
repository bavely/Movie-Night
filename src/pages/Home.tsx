import { useEffect, useState } from "react";
import { Main } from "../components/Main";
import {
  getMoviesWithGenre,
  getMovieDetails,
  searchMovies,
} from "../utils/services/apiCalls";
import {
  useMoodGenres,
  useRander,
  searchCriteria,
} from "../utils/stateCntrole/globalState";
import { genres } from "../utils/interfaces/moodInterface";
import { render } from "../utils/interfaces/randerInterface";
import { search } from "../utils/interfaces/searchInterface";
import MoodSearch from "../components/MoodSearch";
import AdvSearch from "../components/AdvSearch";

const Home = () => {
  const randerFlag = useRander((state: render) => state);
  const MoodGenres = useMoodGenres((state: genres) => state);
  const searchPrams = searchCriteria((state: search) => state);
  const [dataArray, setDataArray] = useState<any[]>([]);
  const [advSearchData, setAdvSearchData] = useState<any[]>([]);
  const [counts, setCounts] = useState<{
    total_results: number;
    total_pages: number;
  }>({
    total_results: 0,
    total_pages: 0,
  });
  const [advSearchCounts, setAdvSearchCounts] = useState<{
    total_results: number;
    total_pages: number;
  }>({
    total_results: 0,
    total_pages: 0,
  });

  useEffect(() => {
    getMoviesWithGenre(MoodGenres.type, MoodGenres.page)
      .then((res) => {
        setCounts({
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
          setDataArray(res);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [MoodGenres]);

  useEffect(() => {
    if (searchPrams.keyword.trim() !== "") {
      searchMovies(searchPrams.keyword, searchPrams.page)
        .then((res) => {
          console.log(res);
          setAdvSearchCounts({
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
            setAdvSearchData(res);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchPrams]);
  return (
    <>
      {randerFlag.ms ? (
        <MoodSearch dataArray={dataArray} counts={counts} />
      ) : randerFlag.as ? (
        <AdvSearch dataArray={advSearchData} counts={advSearchCounts} />
      ) : (
        <Main />
      )}
    </>
  );
};

export default Home;
