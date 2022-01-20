import { configureStore } from '@reduxjs/toolkit'

import favoriteReducer from '../stores/Favorite'

export default configureStore({
    reducer: {
        favorite: favoriteReducer
    }
})