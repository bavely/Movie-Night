import axios from "axios";
// require('dotenv').config();
const apikey = process.env.REACT_APP_TMDB_API_KEY;
export const getMoviesWithGenre = async (grenr: string, page: number) => {

const options = {
  method: 'GET',
  url: `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${grenr}&with_original_language=en`,
  headers: {
    accept: 'application/json',
    Authorization: apikey
  }
};

return axios.request(options)
  
}

export const getMovieDetails = async (movieId: number) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {headers: {
        'Content-Type': 'application/json',
        'Authorization': apikey }});
    return response;

}

export const getMovieProviders = async ( movieId: number) => {
  const response = await axios.get(`'https://api.themoviedb.org/3/movie/${movieId}/watch/providers'`, {headers: {
    'Content-Type': 'application/json',
    'Authorization': apikey }})

  return response;
}

export const getMovieVideos = async ( movieId: number) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, {headers: {
    'Content-Type': 'application/json',
    'Authorization': apikey }})

  return response;
}

export const searchMovies =async (keyword: string , page: number) => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=true&language=en-US&page=${page}`, {headers: {
    'Content-Type': 'application/json',
    'Authorization': apikey }})

  return response;
}

export const trends = async () => {
  const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US`, {headers: {
    'Content-Type': 'application/json',
    'Authorization': apikey }})

  return response;
}