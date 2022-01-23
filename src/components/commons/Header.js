import React from "react"
import Logo from '../../assets/images/png/logo.png'
import { AiOutlineMenu } from 'react-icons/ai'
import { useDispatch } from "react-redux"
import { hiddenFavorite } from '../../stores/Favorite'


const Header = ({ onSearch, onClickMenu }) => {
    const dispatch = useDispatch()

    const handleOnSearch = (e) => {    
        dispatch(hiddenFavorite())
        const text = e.target.value
        onSearch && onSearch(text)
    }

    const handleMenu = () => {
        onClickMenu && onClickMenu()
    }
 
    return (
        <div className="bg-secondary sticky top-0">
            <div className="container mx-auto h-14 flex items-center">
                <div className="mr-3">
                    <span className="cursor-pointer">
                        <AiOutlineMenu onClick={handleMenu} size={24} className="text-white" />
                    </span>
                </div>
                <a href="/">
                    <img className="h-10 w-auto mr-6" src={Logo} alt='DeMarke Labs' />
                </a>
                <div className="flex-1">
                    <input autoFocus onChange={handleOnSearch} type={'search'} placeholder="Search" className="w-full h-10 rounded-sm text-white px-2 bg-secondary border-borderColor border"  />
                </div>
            </div>
        </div>
    )
}

export default Header

/**
 

 <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-primary">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <button data-collapse-toggle="mobile-menu-3" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <a href="#" className="flex">
                    <img className="mr-3 h-10" src={Logo} alt='Logo' />
                </a>
                <div className="flex md:order-2">
                    <TextField type={'search'} />
                    
                </div>  
               
            </div>
        </nav>

 */