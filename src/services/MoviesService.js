import axios from "axios";
const baseUrl = `https://api.themoviedb.org/3`;

class MoviesService {
  constructor() {
    this.instance = axios.create({
      baseURL: baseUrl,
      params: {
        api_key: process.env.REACT_APP_API_KEY,
      },
    });
  }

  getTopRated = (language) =>
    this.instance.get(`/movie/popular?language=${language}`);
  getBySearch = (query, language = 'en') =>
    this.instance.get(`/search/movie?query=${query}&language=${language}`);
  getByGenre = (genre, language = 'en') =>
    this.instance.get(
      `/discover/movie?with_genres=${genre}&language=${language}`
    );
  getById = (id, language) =>
    this.instance.get(`/movie/${id}?language=${language}`);
  getRecommendedFilms = (id, language) =>
    this.instance.get(`/movie/${id}/recommendations?language=${language}`);
}

const moviesService = new MoviesService();

export default moviesService;
