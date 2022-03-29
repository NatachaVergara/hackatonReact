import React from 'react'
import { NavLink } from 'react-router-dom'
import { useMoviesContext } from '../../Context/MoviesContextProvider'

const NavBar = ({ to, title, icono, navLink, tv }) => {
    const {moviesList} = useMoviesContext()



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
                             {   navLink === 'Favoritos' ?
                                <NavLink className="navbar-brand" to={to} >
                                        <span> {moviesList.length} </span>
                                    <i className="bi bi-heart"></i>
                                    </NavLink>
                                    :
                                    <NavLink className="navbar-brand" to={to} >
                                        <i className="bi bi-house-door-fill"></i>
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