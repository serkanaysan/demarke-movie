import { createSlice } from "@reduxjs/toolkit"
import Movie from "../demarke-core/src/movieService/models/movie"

const favorites = JSON.parse(localStorage.getItem('favorites'))?.map(favMovie => {
    return new Movie({
        id: favMovie.id,
        backdrop_path: favMovie.backdropPath,
        title: favMovie.title,
        overview: favMovie.overview
    })
}) || []

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorites: favorites,
        show: false
    },
    reducers: {
        addFavorite: (state, action) => {
            const favorites = state.favorites
            favorites?.push(action.payload)
            state.favorites = favorites
            localStorage.setItem('favorites', JSON.stringify(favorites))
        },
        removeFavoriteById: (state, action) => {
            const favorites = state.favorites
            state.favorites = favorites?.filter(favMovie => favMovie.getId() != action.payload)
            localStorage.setItem('favorites', JSON.stringify(state.favorites))
        },
        showFavorite: (state) => {
            state.show = true
        },
        hiddenFavorite: (state) => {
            state.show = false
        }

    }
})

export const { addFavorite, removeFavoriteById, showFavorite, hiddenFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer