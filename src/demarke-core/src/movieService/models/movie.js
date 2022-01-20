export default class Movie {
    constructor({ adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count }) {
        this.adult = adult
        this.backdropPath = backdrop_path
        this.genreIds = genre_ids
        this.id = id
        this.originalLanguage = original_language
        this.originalTitle = original_title
        this.overview = overview
        this.popularity = popularity
        this.posterPath = poster_path
        this.releaseDate = release_date
        this.title = title
        this.video = video
        this.voteAverage = vote_average
        this.voteCount = vote_count
    }
    

    /**
     * get adult
     * @returns {Boolean}
     */
    getAdult() {
        return this.adult
    }

    /**
     * get backgrop path
     * @returns {String}
     */
    getBackdropPath() {
        return this.backdropPath
    }

    /**
     * get genre ids
     * @returns {Array<Number>}
     */
    getGenreIds() {
        return this.genreIds
    }

    /**
     * get id
     * @returns {Number} 
     */
    getId() {
        return this.id
    }

    /**
     * get original language
     * @returns {String}
     */
    getOriginalLanguage() {
        return this.originalLanguage
    }

    /**
     * get original title
     * @returns {String}
     */
    getOriginalTitle() {
        return this.originalTitle
    }

    /**
     * get overview
     * @returns {String}
     */
    getOverview() {
        return this.overview
    }

    /**
     * get popularity
     * @returns {Double}
     */
    getPopularity() {
        return this.popularity
    }

    /**
     * get poster path
     * @returns {String}
     */
    getPosterPath() {
        return this.posterPath
    }
    
    /**
     * get release date
     * @returns {String}
     */
    getReleaseDate() {
        return this.releaseDate
    }

    /**
     * get title
     * @returns {String}
     */
    getTitle() {
        return this.title
    }

    /**
     * get video
     * @returns {String | Boolean}
     */
    getVideo() {
        return this.video
    }

    /**
     * get vote average
     * @returns {Double}
     */
    getVoteAverage() {
        return this.voteAverage
    }
    
    /**
     * get vote count
     * @returns {Number}
     */
    getVoteCount() {
        return this.voteCount
    }
}