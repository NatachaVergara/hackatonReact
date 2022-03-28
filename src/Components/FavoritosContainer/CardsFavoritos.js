import React from 'react'
import { useMoviesContext } from '../../Context/MoviesContextProvider'

const CardsFavoritos = ({ id, title, resumen, movie, img, date }) => {
    const { deleteMovie} = useMoviesContext()

  return (
      <div className="card col-1 m-2" id={id} style={{ width: "18rem" }}>
          <img src={`https://image.tmdb.org/t/p/w200/${img}`} className="card-img-top" alt={title} />
          <button className="btn btn-primary bg-danger" onClick={() => deleteMovie(id)}>
              <i className="bi bi-trash "></i>
          </button>
          <div className="card-body">
              <h5 className="card-title">{title} </h5>
              <p className="card-text">{resumen} </p>
              <p className="card-date">{ date}</p>
              
          </div>
      </div>
  )
}

export default CardsFavoritos