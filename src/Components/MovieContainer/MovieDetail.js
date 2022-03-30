import React from 'react'
import { Link } from 'react-router-dom'
import { useMoviesContext } from '../../Context/MoviesContextProvider'
import BtnAddCntx from '../BtnAddCntx'
const MovieDetail = ({ movie }) => {
    const { moviesList } = useMoviesContext()


    return (
        <div className="card col-1 m-2 d-flex flex-md-row justify-content-center aligne-items-center mt-5" id={movie.id} style={{ width: "60rem" }}>

            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="card-img-top p-1" alt={movie.original_title} />
            <div className="card-body bg-danger">
                <div className='d-flex justify-content-center align-items-center'>
                    <h5 className="card-title ms-5 me-5">{movie.original_title} </h5>
                    <span className='btn btn-warning'><BtnAddCntx movie={movie} /></span>
                </div>
                <p className="card-text">{movie.overview} </p>
                <p>Tagline: {movie.tagline}</p>
                <p className="card-date">Release date: {movie.release_date}</p>
                <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning m-2">Visit homepage</a>
                {/* <div className='d-flex flex-column m-2'>
                    <div className='d-flex flex-column'>
                        <h5>Gender</h5>
                        <ul className="list-group list-unstyled mb-2">
                            {movie.genres.map(genre => (
                                <li key={genre.id}>{genre.name}  </li>
                            ))}
                        </ul>
                    </div>

                    <div className='d-flex flex-column'>
                        <h5>Production companies</h5>
                        <ul className="list-group list-unstyled mb-2">
                            {   movie.production_companies.map(pc => (
                               
                                    <li key={pc.id}>
                                        {pc.name}
                                    </li>
                                
                            ))}
                        </ul>
                    </div>
                </div> */}
                <div className="btnLink mt-5">
                <Link to='/' className='btn btn-success me-md-5'>Volver a inicio</Link>
                <Link to='/favoritos' className='btn btn-warning ms-0 ms-md-2'>
                    Ver en favoritos <span className='ms-1'> {moviesList.length}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail