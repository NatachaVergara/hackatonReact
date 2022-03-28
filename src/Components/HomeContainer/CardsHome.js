import React from 'react'
import { useMoviesContext } from '../../Context/MoviesContextProvider'



const CardsHome = ({ id, title, resumen, movie, img, date }) => {
   
    const { addMovie } = useMoviesContext()
    
  


    return (
        <div className="card col-4 m-2" id={id} style={{ width: "15rem" }}>
            <img src={`https://image.tmdb.org/t/p/w200/${img}`} className="card-img-top p-1" alt={title} />
            <button className="btn btn-primary bg-danger" onClick={() => addMovie(movie) }  >
                <i className="bi bi-heart"></i>
            </button>
            <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{resumen} </p>
                <p className="card-date">{date} </p>               
            </div>
          
        </div>
    )
}

export default CardsHome