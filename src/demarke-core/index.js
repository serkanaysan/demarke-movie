import MovieService from "./src/movieService"


class DemarkeCore {
    constructor() {
        this.initApi = (axios) => {
            this.movieService = new MovieService(axios)
        }
    }


    /**
     * init DemarkeCore
     */
    async init(axios) {
        this.initApi(axios)
        await this.movieService.init()
    }
}

const demarkeCore = new DemarkeCore()
export default demarkeCore