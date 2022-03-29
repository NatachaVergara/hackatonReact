import React from 'react'
import { Link } from 'react-router-dom'
import { useMoviesContext } from '../../Context/MoviesContextProvider'



const CardsHome = ({ id, title, movie, img }) => {
   
    const { addMovie } = useMoviesContext()
    
  


    return (
        <div className="card col-4 m-2" id={id} style={{ width: "15rem" }}>
            <img src={`https://image.tmdb.org/t/p/w200/${img}`} className="card-img-top p-1" alt={title} />
            <button className="btn btn-primary bg-danger" onClick={() => addMovie(movie) }  >
                <i className="bi bi-heart"></i>
            </button>
            <div className="card-body">
                <h5 className="card-title p-3">{title} </h5>
            <Link className="btn btn-danger card-date"  to={`/${id}`}>Ver mas.. </Link>               
            </div>          
        </div>
    )
}

export default CardsHome