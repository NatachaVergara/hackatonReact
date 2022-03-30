import React from 'react'
import { Link } from 'react-router-dom'
import BtnAddCntx from '../BtnAddCntx'
const MovieDetail = ({ movie }) => {
   
  return (
      <div className="card col-1 m-2 d-flex flex-row justify-content-center aligne-items-center mt-5" id={movie.id} style={{ width: "60rem" }}>
         
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="card-img-top p-1" alt={movie.original_title} />
          <div className="card-body bg-danger">
              <h5 className="card-title">{movie.original_title} </h5>
              <p className="card-text">{movie.overview} </p>
              <p>Tagline: {movie.tagline}</p>
              <p className="card-date">Release date: {movie.release_date}</p>
              <a href={movie.homepage} target="_blank" rel="noopener noreferrer"className="btn btn-outline-warning m-2">Visit homepage</a>
              <div className='d-flex flex-column m-2'>
                  <div className='d-flex flex-column'>
                      <h5 >Gender</h5>    
                  <ul className="list-group list-unstyled">
                  {movie.genres.map(li => (
                      <li className="" key={li.id} >{li.name}  </li>
                  ))}
                      </ul>
                  </div>
              
                  <div className='d-flex flex-column'>
                      <h5>Production companies</h5>  
                      {
                  movie.production_companies.map(p => (
                      <ul className="list-group list-unstyled" id={p.id}>
                          <li className="">
                              {p.name}
                          </li>
                  </ul>
                  ))} </div>
              </div>
              <Link to='/' className='btn btn-success '>Volver a inicio</Link>
              <BtnAddCntx movie={movie}  />
          </div>
      </div>
  )
}

export default MovieDetail