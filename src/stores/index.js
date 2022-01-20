import { configureStore } from '@reduxjs/toolkit'

import demarkeCoreReducer from '../stores/DemarkeCore'
import favoriteReducer from '../stores/Favorite'

export default configureStore({
    reducer: {
        demarkeCore: demarkeCoreReducer,
        favorite: favoriteReducer
    }
})