import React from "react"
import { BiErrorCircle } from "react-icons/bi"

const Error = () => {

    return (
        <div class="flex items-center text-white text-sm font-normal px-4 py-3" role="alert">
            <BiErrorCircle size={48} className="text-red mr-3" />
            <p>Something went wrong...</p>
        </div>
    )
}

export default Error