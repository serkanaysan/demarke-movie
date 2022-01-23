import React from "react"
import { FavoriteButton } from "."

const Card = ({ movie }) => {

    const overview = movie.getOverview()
    const newOverview = overview.length > 80 ? `${overview.substring(0, 80)}...` : overview

    return (
        <div className="overflow-hidden">
            <img src={`https://image.tmdb.org/t/p/w500${movie.getBackdropPath()}`} alt={movie.getTitle()} className="w-full h-32 sm:h-48 object-cover" />
            <div className="flex items-center justify-end -mt-9 mr-3">
                <FavoriteButton movie={movie} /> 
            </div>
            <div className="m-4">
                <span className="text-white font-bold">{movie.getTitle()}</span>
                <span className="text-white block text-opacity-50 text-sm">{newOverview}</span>
            </div>
        </div>
    )
}

export default Card