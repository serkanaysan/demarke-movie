import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import demarkeCoreReducer from '../stores/DemarkeCore'
import favoriteReducer from '../stores/Favorite'

const store = configureStore({
    reducer: {
        demarkeCore: demarkeCoreReducer,
        favorite: favoriteReducer
    },
    middleware: [
        ...getDefaultMiddleware({
            serializableCheck: false
        })
    ],
})

export default store