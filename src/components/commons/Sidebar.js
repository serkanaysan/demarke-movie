import React from "react"
import { MdOutlineFavorite } from 'react-icons/md'
import { useDispatch } from "react-redux"
import { showFavorite } from '../../stores/Favorite'

const Sidebar = ({ isVisible, onClick }) => {

    const dispatch = useDispatch()
    
    const handleMenuClick = () => {
        dispatch(showFavorite())  
        onClick && onClick()
    }

    return (
        <div className={`top-14 w-full sm:w-72 bg-secondary fixed h-full z-40 ease-in-out duration-300 shadow-lg ${isVisible ? "left-0" : "-left-full sm:-left-72"}`}>
            <ul className="list-none">
                <li onClick={handleMenuClick} className="flex items-center p-4 text-base text-white font-medium text-opacity-90 cursor-pointer"> 
                    <span className="mr-2">
                        <MdOutlineFavorite size={28} className="text-primary"/>
                    </span>
                    My Favorites
                </li>
            </ul>
        </div>
    )

}

export default Sidebar