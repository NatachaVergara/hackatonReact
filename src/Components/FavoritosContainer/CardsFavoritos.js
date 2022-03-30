import React from 'react'
import { Link } from 'react-router-dom'
import Icons from '../Icons'
import { useMoviesContext } from '../../Context/MoviesContextProvider'

const CardsFavoritos = ({ id, title, resumen, movie, img, date }) => {
    const { deleteMovie} = useMoviesContext()

  return (
      <div className="card col-1 m-2" id={id} style={{ width: "15rem" }}>
          <img src={`https://image.tmdb.org/t/p/w200/${img}`} className="card-img-top p-1" alt={title} /> 
          <button className="btn btn-primary bg-danger" onClick={() => deleteMovie(id)}>
              <Icons iName='bi bi-trash' />             
          </button>
          <div className="card-body">
              <h5 className="card-title p-3">{title} </h5>
              <Link className="btn btn-danger card-date" to={`/${id}`} >Ver mas.. </Link>
          </div> 
      </div>
  )
}

export default CardsFavoritos