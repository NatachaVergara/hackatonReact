import React, { createContext, useContext, useEffect, useState } from 'react'


const moviesContext = createContext([])

export const useMoviesContext = () => {
    return useContext(moviesContext)
}

//Seteo mi localStorage para que queden guardadas las peliculas
const getLocalMovies = () => {
    let movies = localStorage.getItem('localMovies')


    if (movies) {
        return JSON.parse(localStorage.getItem('localMovies'))
    } else {
        return []
    }
}


const MoviesContextProvider = ({ children }) => {
    const [moviesList, setMoviesList] = useState(getLocalMovies())


    //Funcion para agregar peliculas a mis favoritosContainer
    const addMovie = (movie) => {
        //Creo una variable que va a buscar en mi movieList si la pelicula está o no
        let inMoviesList = moviesList.find(m => m.id === movie.id);

        if (inMoviesList) {
            alert('Ya tiene está película en sus favoritos')
            setMoviesList([...moviesList])
        } else {
            setMoviesList([...moviesList, { ...movie }])
        }
    }; //Fin funcion para agregar una película a favoritos

    
    useEffect(() => {
        localStorage.setItem('localMovies', JSON.stringify(moviesList))
    }, [moviesList])

    const deleteAllFavoritos = () => {
        setMoviesList([])
    }

    const deleteMovie = (id) => {
        console.log(id)
        return setMoviesList(moviesList.filter((m) => m.id !== id))
        // return setMoviesList(moviesList.splice((m)=> m.id !== id))
    }



    return (
        <moviesContext.Provider
            value={{
                moviesList,
                setMoviesList,
                addMovie,
                deleteAllFavoritos,
                deleteMovie
            }}>

            {children}


        </moviesContext.Provider>
    )
}

export default MoviesContextProvider