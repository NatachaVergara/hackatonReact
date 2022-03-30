import React from 'react'
import { useMoviesContext } from '../Context/MoviesContextProvider'
import FavoritosContainer from '../Components/FavoritosContainer/FavoritosContainer'
import NavBar from '../Components/Navbar/NavBar'
import { NavLink } from 'react-router-dom'
import Icons from '../Components/Icons'

const Favoritos = () => {
    const { moviesList, deleteAllFavoritos } = useMoviesContext()

    return (
        <>
            <NavBar to='/'
                title='Favoritos'
                navLink='Inicio' />
            <main id='main-favoritos'>
                <section id='contenedor-favoritos' className='mt-5'>
                    {moviesList.length === 0 ?
                        <NavLink to='/' className='text-decoration-none text-dark'>
                            <h1 className='mb-5 pb-5'>No tiene ningún favorito guardado ahora</h1>
                            <Icons iName='bi-house-door-fill' Ititle='Volver al home' />                            
                        </NavLink> :
                        <span onClick={() => deleteAllFavoritos()} >
                            <Icons iName='bi-trash3' Ititle='Eliminar todo' />
                        </span>
                        }
                    <FavoritosContainer />
                </section>
            </main>
        </>
    )
}

export default Favoritos