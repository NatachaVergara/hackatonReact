import React from 'react'
import { Link } from 'react-router-dom'

const MovieDetail = ({ movie }) => {
   
  return (
      <div className="card col-1 m-2 d-flex flex-row justify-content-center aligne-items-center mt-5" id={movie.id} style={{ width: "50rem" }}>
         
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="card-img-top p-1" alt={movie.original_title} />
          <div className="card-body bg-danger">
              <h5 className="card-title">{movie.original_title} </h5>
              <p className="card-text">{movie.overview} </p>
              <p className="card-date">{movie.release_date}</p>
              <a href={movie.homepage} className="btn btn-primary m-5">Homepage</a>
              <div className='d-flex flex-row'>
                  <span>Genero
              <ul class="list-group">
                  {movie.genres.map(li => (
                      <li class="list-group-item" key={li.id} >{li.name}  </li>
                  ))}
                      </ul>
                  </span>
              <p>Tagline: {movie.tagline}</p>
              <span>Production companies {
                  movie.production_companies.map(p => (
                      <ul className="list-group" id={p.id}>
                          <li className="list-group-item">
                              {p.name}
                          </li>
                  </ul>
                  ))} </span>
              </div>
            <Link to='/' className='btn'>Volver a inicio</Link>
          </div>
      </div>
  )
}

export default MovieDetail