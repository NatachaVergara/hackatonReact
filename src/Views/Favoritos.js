import React from 'react'
import { useMoviesContext } from '../Context/MoviesContextProvider'
import FavoritosContainer from '../Components/FavoritosContainer/FavoritosContainer'
import NavBar from '../Components/Navbar/NavBar'
import { NavLink } from 'react-router-dom'

const Favoritos = () => {
    const { moviesList, deleteAllFavoritos } = useMoviesContext()

    return (
        <>
            <NavBar to='/' title='Favoritos' icono='delete' navLink='Inicio' />
            <main id='main-favoritos'>
                <section id='contenedor-favoritos' className='mt-5'>
                  
                    {moviesList.length === 0 ? 
                        <NavLink to='/' className='text-decoration-none text-dark'>
                            <i className='bi bi-house-door-fill '> Volver al home</i>
                           </NavLink> :
                        <i className="bi bi-trash3" onClick={() => deleteAllFavoritos()}> Eliminar todo</i>}
                    


                    <FavoritosContainer />
                </section>
            </main>
        </>
    )
}

export default Favoritos