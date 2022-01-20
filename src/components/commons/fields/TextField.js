import React from "react"

const TextField = ({ Icon, ...props }) => {

    return (
        <div className="flex relative mr-3 md:mr-0">
            {Icon && (<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <Icon />
            </div>)}
            <input className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...props} />
        </div>
    )
}

export default TextField