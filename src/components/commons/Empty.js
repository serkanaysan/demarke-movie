import React from "react"
import { AiOutlineSearch } from "react-icons/ai"

const Empty = () => {

    return (
        <div class="flex items-center text-white text-sm font-normal px-4 py-3" role="alert">
            <AiOutlineSearch size={48} className="text-primary mr-3" />
            <p>No movies found matching your search criteria.</p>
        </div>
    )
}

export default Empty