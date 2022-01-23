import React from "react"

const Loading = () => {

    return (
        <div className="flex justify-center items-center fixed w-full h-full z-50 bg-black bg-opacity-70">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">

            </div>
        </div>
    )
}

export default Loading