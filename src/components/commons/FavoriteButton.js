import React, { useEffect } from "react"
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux"
import { addFavorite, removeFavoriteById } from '../../stores/Favorite'
    

const FavoriteButton = ({ movie }) => {

    const favorites = useSelector(state => state.favorite.favorites)
    const dispatch = useDispatch()

    console.log('favorites',favorites)

    const active = favorites?.find(favMovie => favMovie.getId() === movie.getId())
    const handleFavorite = () => {
        if(active) {
            dispatch(removeFavoriteById(movie.getId()))
        }
        else {
            dispatch(addFavorite(movie))
        }
    }

    return (
        <button className="bg-transparent text-white font-bold rounded" onClick={handleFavorite}>
            {active ? <MdOutlineFavorite size={24} className='text-primary' />
            :<MdOutlineFavoriteBorder size={24} className='text-white'/>}
        </button>
    )
}

export default FavoriteButton