
import React, { useEffect, useState } from 'react'
import getApi from '../../Api/getApi'
import { useParams } from 'react-router-dom'
import MovieDetail from './MovieDetail'
import Spinner from '../Spinner'

// const getLocalMovie = () => {
//   let movie = localStorage.getItem('localMovie')

//   if (movie) {
//     return JSON.parse(localStorage.getItem('localMovie')
//     )
//   } else {
//     return []
//   }
// }



const MovieContainer = () => {
 // const [movie, setMovie] = useState(getLocalMovie())
  const [movie, setMovie] = useState([])

  const { id } = useParams()
  // localStorage.setItem('localMovie', JSON.stringify(movie))


  useEffect(() => {
    getApi(setMovie, id)
  }, [id])




  return (
    <>
      {!movie ? <Spinner /> :
        <div className='container text-warning m-auto mb-5 d-flex justify-content-center align-items-center row'>
        <MovieDetail key={id} movie={movie} />
      </div>
      }

    </>


  )
}

export default MovieContainer