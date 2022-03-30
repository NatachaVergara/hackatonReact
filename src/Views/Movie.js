import React from 'react'
import MovieContainer from '../Components/MovieContainer/MovieContainer'
import NavBar from '../Components/Navbar/NavBar'
const Movie = () => {
    return (
        <>
            <NavBar to='/'
                title='Encuentra tu Película'
                navLink='Inicio'
                
            />
            <main id='main-movieDetail'>
                <section id='contenedor-movieDetail'>
                    <MovieContainer />
                </section>
            </main>

        </>
    )
}

export default Movie