import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Header, Card, Sidebar, Loading, Error } from '../components/commons'

const HomePage = ({ }) => {
    const [visibleSidebar, setVisibleSidebar] = useState(false)
    const [movieList, setMovieList] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(true)
    
    const showFavorites = useSelector(state => state?.favorite?.show)
    const favorites = useSelector(state => state?.favorite?.favorites)
    const demarkeCore = useSelector(state => state?.demarkeCore?.value)
    const movieService = demarkeCore.movieService

    const handleMenu = () => {
        setVisibleSidebar(prev => !prev)
    }

    const handleOnSearch = async (value) => {
        try {
            setLoading(true)
            setError(false)
            let list = null
            if(value === "") {
                list = await movieService.getPopularMovies(value)
            }
            else {
                list = await movieService.searchMovie(value)
            }
            setMovieList(list)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    useEffect(() => {
        handleOnSearch("")
    }, []);

    useEffect(() => {
        if(showFavorites) {
            setMovieList(favorites)
        }
        else {
            setMovieList(null)
        }
    }, [showFavorites])

    return (
        <div className='bg-secondary w-full h-full min-h-screen relative'>
            <Error />
            {loading && <Loading />}
            <Header onSearch={handleOnSearch} onClickMenu={handleMenu} />
            <Sidebar isVisible={visibleSidebar} onClick={handleMenu} />
            <main className='min-h-full container mx-auto mt-5'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {movieList && movieList.map(movie => (
                        <Card key={movie.getId()} movie={movie} />
                    ))}
                </div>
            </main>
      </div>
    )
}

export default HomePage