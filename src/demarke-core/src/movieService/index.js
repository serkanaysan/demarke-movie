import Movie from "./models/movie"

export default  class MovieService {
    constructor(axios) {
        this.url = 'https://api.themoviedb.org/3'
        this.axios = axios
    }

    /**
     * init movie service
     */
    async init() {

    }

    /**
     * popular movie
     * @returns {Array<Movie>}
     */
     async getPopularMovies() {
        const list = await this.axios(`${this.url}/movie/popular?api_key=8f0dbfdb234f04d207a676a5501167fb`)
        return list.data.results.filter(movie => movie.backdrop_path !== null).map(movie => (new Movie(movie)))
    }

    /**
     * search movie by query text
     * @param {String} query 
     * @returns {Array<Movie>}
     */
    async searchMovie(query) {
        const list = await this.axios(`${this.url}/search/movie?api_key=8f0dbfdb234f04d207a676a5501167fb&query=${query}`)
        return list.data.results.filter(movie => movie.backdrop_path !== null).map(movie => (new Movie(movie)))
    }
}