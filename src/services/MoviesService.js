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

  getTopRated = () => this.instance.get("/movie/top_rated");
  getBySearch = (query) => this.instance.get(`/search/movie?query=${query}`);
  getByGenre = (genre) =>
    this.instance.get(`/discover/movie?with_genres=${genre}`);
  getById = (id) => this.instance.get(`/movie/${id}`);
  getRecommendedFilms = (id) =>
    this.instance.get(`/movie/${id}/recommendations`);
}

const moviesService = new MoviesService();

export default moviesService;
