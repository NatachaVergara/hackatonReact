import React from 'react'
import { NavLink } from 'react-router-dom'
import { useMoviesContext } from '../../Context/MoviesContextProvider'
import Icons from '../Icons'

const NavBar = ({ to, title, navLink, tv }) => {
    const { moviesList } = useMoviesContext()



    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <div className="container">
                    <span className="navbar-brand " to={to}> {title} </span>
                    <span className="navbar-brand "> {tv} </span>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ms-xs-0">
                            <li className="nav-item ">
                                {navLink === 'Favoritos' ?
                                    <NavLink className="navbar-brand" to={to} >
                                        {moviesList.length === 0 ?
                                            <>  <span className='text-dark'> {moviesList.length} </span>
                                                <Icons iName='bi bi-heart text-dark' />
                                            </> :
                                            <>
                                                <span className='text-warning'> {moviesList.length} </span>
                                                <Icons iName='bi bi-heart text-warning' />
                                            </>}
                                    </NavLink>
                                    :
                                    <NavLink className="navbar-brand text-success" to={to} >
                                        <Icons iName='bi bi-house-door-fill' />
                                    </NavLink>
                                }
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default NavBar