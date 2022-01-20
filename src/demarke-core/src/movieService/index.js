export default  class MovieService {
    constructor(axios) {
        this.axios = axios
    }

    /**
     * init movie service
     */
    async init() {

    }

    async getTitle() {
        const list = await this.axios("https://api.themoviedb.org/3/search/movie?api_key=8f0dbfdb234f04d207a676a5501167fb&query=spider")
        console.log('list', list.data.results)
        return "Joker19"
    }
}